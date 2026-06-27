// The corpus loader: the single source of truth that turns the occupations/
// directory into structured, computed records. Everything downstream (APIs,
// graph, stats, website, search) is derived from what this returns.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { OCCUPATIONS_DIR, SCHEMA_DIR, RELATIONSHIP_TYPES } from './paths.mjs';
import { renderWithToc, countWords, readingTime } from './markdown.mjs';

let _sections = null;
/** The canonical section definitions (heading, required, minWords, prompt). */
export function loadSectionSpec() {
  if (_sections) return _sections;
  const raw = JSON.parse(fs.readFileSync(path.join(SCHEMA_DIR, 'sections.json'), 'utf8'));
  _sections = raw.sections;
  return _sections;
}

/** Split a SOUL markdown body into H2 sections, preserving document order. */
export function splitSections(body) {
  const lines = body.split('\n');
  const sections = [];
  let current = null;
  let title = null;
  for (const line of lines) {
    const h1 = /^#\s+(.+?)\s*$/.exec(line);
    const h2 = /^##\s+(.+?)\s*$/.exec(line);
    if (h1 && !title) {
      title = h1[1].trim();
      continue;
    }
    if (h2) {
      if (current) sections.push(current);
      current = { heading: h2[1].trim(), lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);
  return {
    title,
    sections: sections.map((s) => ({
      heading: s.heading,
      markdown: s.lines.join('\n').trim(),
    })),
  };
}

function parseMetadata(slug, dir) {
  const metaPath = path.join(dir, 'metadata.yaml');
  if (!fs.existsSync(metaPath)) {
    throw new Error(`Missing metadata.yaml for "${slug}"`);
  }
  const meta = yaml.load(fs.readFileSync(metaPath, 'utf8')) || {};
  // Normalise optional arrays so downstream code never guards for null.
  meta.aliases ??= [];
  meta.tags ??= [];
  meta.contributors ??= [];
  meta.related ??= [];
  meta.specializations ??= [];
  meta.country_variants ??= [];
  meta.sources ??= [];
  meta.reviewers ??= [];
  return meta;
}

/** Read and fully process a single occupation directory. */
export function loadSoul(slug) {
  const dir = path.join(OCCUPATIONS_DIR, slug);
  const soulPath = path.join(dir, 'SOUL.md');
  if (!fs.existsSync(soulPath)) throw new Error(`Missing SOUL.md for "${slug}"`);

  const metadata = parseMetadata(slug, dir);
  const file = matter(fs.readFileSync(soulPath, 'utf8'));
  const { title: docTitle, sections: rawSections } = splitSections(file.content);

  const spec = loadSectionSpec();
  const requiredHeadings = spec.filter((s) => s.required).map((s) => s.heading);

  const sections = rawSections.map((s) => {
    const { html, toc } = renderWithToc(`## ${s.heading}\n\n${s.markdown}`);
    const wordCount = countWords(s.markdown);
    return {
      heading: s.heading,
      id: (toc[0] && toc[0].id) || s.heading.toLowerCase().replace(/\s+/g, '-'),
      markdown: s.markdown,
      html,
      wordCount,
    };
  });

  const totalWords = sections.reduce((n, s) => n + s.wordCount, 0);
  const presentHeadings = new Set(sections.map((s) => s.heading));

  // Completeness: fraction of required sections present AND meeting min words.
  let satisfied = 0;
  for (const def of spec) {
    if (!def.required) continue;
    const sec = sections.find((s) => s.heading === def.heading);
    if (sec && sec.wordCount >= (def.minWords || 0)) satisfied += 1;
  }
  const completeness = requiredHeadings.length ? satisfied / requiredHeadings.length : 1;

  // The single definition of "has a human stood behind this?". An AI-drafted
  // SOUL with no reviewer and no review date is explicitly unverified, and we
  // say so everywhere rather than letting status: stable imply authority.
  const reviewers = metadata.reviewers || [];
  const verified = reviewers.length > 0 || Boolean(metadata.last_reviewed);
  const aiDrafted = metadata.provenance === 'ai-generated' || metadata.provenance === 'ai-assisted';

  return {
    slug,
    title: metadata.title || docTitle || slug,
    metadata,
    sections,
    computed: {
      wordCount: totalWords,
      readingTimeMinutes: readingTime(totalWords),
      completeness: Math.round(completeness * 1000) / 1000,
      backlinks: [], // filled in by buildCorpus once all souls are known
      verified,
      aiDrafted,
      unverifiedAiDraft: aiDrafted && !verified,
    },
  };
}

/** List every occupation slug present on disk. */
export function listSlugs() {
  if (!fs.existsSync(OCCUPATIONS_DIR)) return [];
  return fs
    .readdirSync(OCCUPATIONS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .filter((slug) => fs.existsSync(path.join(OCCUPATIONS_DIR, slug, 'SOUL.md')))
    .sort();
}

/**
 * Load the whole corpus and wire up cross-references: typed edges, backlinks,
 * and a normalised graph. This is the object the rest of the engine consumes.
 */
export function buildCorpus() {
  const slugs = listSlugs();
  const souls = slugs.map(loadSoul);
  const bySlug = new Map(souls.map((s) => [s.slug, s]));

  // Build typed edges from metadata.related, deduplicating and dropping
  // references to occupations that don't exist yet (tracked as danglers).
  const edges = [];
  const danglers = [];
  const seenEdge = new Set();
  for (const soul of souls) {
    for (const rel of soul.metadata.related) {
      if (!RELATIONSHIP_TYPES.includes(rel.type)) continue;
      if (!bySlug.has(rel.slug)) {
        danglers.push({ from: soul.slug, to: rel.slug, type: rel.type });
        continue;
      }
      const key = `${soul.slug}->${rel.slug}:${rel.type}`;
      if (seenEdge.has(key)) continue;
      seenEdge.add(key);
      edges.push({ source: soul.slug, target: rel.slug, type: rel.type, note: rel.note });
    }
  }

  // Backlinks: who points at me, by any relationship type.
  for (const edge of edges) {
    const target = bySlug.get(edge.target);
    if (target && !target.computed.backlinks.includes(edge.source)) {
      target.computed.backlinks.push(edge.source);
    }
  }
  for (const soul of souls) soul.computed.backlinks.sort();

  const nodes = souls.map((s) => ({
    id: s.slug,
    title: s.title,
    category: s.metadata.category,
    difficulty: s.metadata.difficulty || null,
    status: s.metadata.status,
    verified: s.computed.verified,
    tags: s.metadata.tags,
    wordCount: s.computed.wordCount,
    degree: 0,
  }));
  const degreeBySlug = new Map(nodes.map((n) => [n.id, 0]));
  for (const e of edges) {
    degreeBySlug.set(e.source, (degreeBySlug.get(e.source) || 0) + 1);
    degreeBySlug.set(e.target, (degreeBySlug.get(e.target) || 0) + 1);
  }
  for (const n of nodes) n.degree = degreeBySlug.get(n.id) || 0;

  return {
    souls,
    bySlug,
    graph: { nodes, edges },
    danglers,
  };
}
