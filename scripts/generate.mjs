#!/usr/bin/env node
// The build engine. Turns occupations/ into every derived artifact the site
// and the public API consume. Idempotent: safe to run repeatedly.
//
//   src/generated/   -> consumed by the Astro build (gitignored)
//   public/api/      -> the static, machine-readable API (gitignored)
//
// Run with --stats-only to print a quick summary without writing files.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { buildCorpus, loadSectionSpec } from './lib/corpus.mjs';
import { soulHistory, repoActivity } from './lib/git.mjs';
import { computeStats } from './lib/stats.mjs';
import {
  SCHEMA_DIR,
  GENERATED_DIR,
  SOULS_OUT_DIR,
  PUBLIC_API_DIR,
  PUBLIC_API_SOULS_DIR,
  GITHUB_URL,
  SITE_URL,
} from './lib/paths.mjs';

const statsOnly = process.argv.includes('--stats-only');
const t0 = Date.now();

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
function writeJSON(file, data) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(data, null, statsOnly ? 0 : 0));
}
function writeText(file, text) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, text);
}

// A stable, reproducible citation for a single SOUL, in three common formats.
// Authorship combines declared contributors with anyone in the git history.
function buildCitation(s, git) {
  const title = s.title;
  const slug = s.slug;
  const authors = Array.from(
    new Set([...(s.metadata.contributors || []), ...(git?.authors || []).map((a) => a.name)]),
  );
  if (authors.length === 0) authors.push('SOUL Atlas');
  const authorText = authors.join(', ');
  const authorBibtex = authors.join(' and ');
  const version = git?.updated || s.metadata.updated || git?.created || s.metadata.created || '';
  const year = (version || `${new Date().getFullYear()}`).slice(0, 4);
  const recordUrl = `${SITE_URL}/occupations/${slug}`;
  return {
    apa: `${authorText} (${year}). ${title} [SOUL]. SOUL Atlas. ${recordUrl}`,
    bibtex:
      `@misc{soulatlas-${slug},\n` +
      `  title        = {${title}},\n` +
      `  author       = {${authorBibtex}},\n` +
      `  year         = {${year}},\n` +
      `  howpublished = {SOUL Atlas},\n` +
      `  note         = {SOUL.md${version ? `, version ${version}` : ''}},\n` +
      `  url          = {${recordUrl}}\n` +
      `}`,
    text: `${authorText}. "${title}." SOUL Atlas, ${year}. ${recordUrl}.`,
  };
}

// A minimal OpenAPI 3.1 description of the static JSON API. The corpus itself is
// described by the JSON Schemas under /api/schema; this documents the endpoints.
function openApiDoc(count) {
  const okJson = { description: 'Success', content: { 'application/json': {} } };
  return {
    openapi: '3.1.0',
    info: {
      title: 'SOUL Atlas API',
      version: '1.0.0',
      description:
        'A static, read-only JSON API over the SOUL Atlas corpus. Every endpoint is a ' +
        'pre-rendered file served over HTTPS — no authentication, no rate limits. ' +
        'The corpus is released under the MIT License; AI training is explicitly welcome.',
      license: { name: 'MIT', url: `${GITHUB_URL}/blob/main/LICENSE` },
      contact: { name: 'SOUL Atlas', url: SITE_URL },
    },
    servers: [{ url: `${SITE_URL}/api`, description: 'Production' }],
    'x-corpus': { occupations: count },
    paths: {
      '/index.json': {
        get: { summary: 'API root and endpoint map', responses: { 200: okJson } },
      },
      '/occupations.json': {
        get: {
          summary: 'Every SOUL as a summary record',
          responses: { 200: okJson },
        },
      },
      '/categories.json': {
        get: { summary: 'Categories with counts', responses: { 200: okJson } },
      },
      '/tags.json': { get: { summary: 'Tags with counts', responses: { 200: okJson } } },
      '/graph.json': {
        get: { summary: 'Knowledge graph: nodes and typed edges', responses: { 200: okJson } },
      },
      '/stats.json': {
        get: { summary: 'All computed analytics', responses: { 200: okJson } },
      },
      '/occupations/{slug}.json': {
        get: {
          summary: 'Full record: sections, rendered HTML, git history, citation',
          parameters: [
            {
              name: 'slug',
              in: 'path',
              required: true,
              schema: { type: 'string' },
              example: 'software-engineer',
            },
          ],
          responses: { 200: okJson, 404: { description: 'No such occupation' } },
        },
      },
      '/occupations/{slug}.md': {
        get: {
          summary: 'The SOUL as Markdown (with YAML front matter)',
          parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success', content: { 'text/markdown': {} } } },
        },
      },
      '/occupations/{slug}.yaml': {
        get: {
          summary: 'The SOUL as YAML (metadata + sections)',
          parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success', content: { 'application/yaml': {} } } },
        },
      },
    },
    components: {
      schemas: {
        Metadata: { $ref: `${SITE_URL}/api/schema/metadata.schema.json` },
        Soul: { $ref: `${SITE_URL}/api/schema/soul.schema.json` },
      },
    },
  };
}

console.log('• Loading corpus…');
const corpus = buildCorpus();

console.log('• Reading git history…');
const gitBySlug = {};
for (const s of corpus.souls) gitBySlug[s.slug] = soulHistory(s.slug);
const activity = repoActivity(365);

console.log('• Computing statistics…');
const stats = computeStats(corpus, gitBySlug);

if (statsOnly) {
  const t = stats.totals;
  console.log('');
  console.log(`  Occupations  ${t.occupations}`);
  console.log(`  Edges        ${t.edges}`);
  console.log(`  Categories   ${t.categories}`);
  console.log(`  Total words  ${t.words.toLocaleString('en-US')}`);
  console.log(`  Avg words    ${t.avgWords}`);
  console.log(`  Contributors ${t.contributors}`);
  console.log(`  Orphans      ${stats.quality.orphanPages.length}`);
  console.log(`  Incomplete   ${stats.quality.incomplete.length}`);
  console.log('');
  process.exit(0);
}

const spec = loadSectionSpec();
const buildMeta = {
  generatedAt: new Date().toISOString(),
  counts: { occupations: corpus.souls.length, edges: corpus.graph.edges.length },
};

// ---- Light list (titles, metadata, computed summary) for listings/search ----
const lightList = corpus.souls.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.metadata.category,
  tags: s.metadata.tags,
  aliases: s.metadata.aliases,
  difficulty: s.metadata.difficulty || null,
  status: s.metadata.status,
  provenance: s.metadata.provenance || null,
  verified: s.computed.verified,
  unverifiedAiDraft: s.computed.unverifiedAiDraft,
  reviewers: s.metadata.reviewers || [],
  lastReviewed: s.metadata.last_reviewed || null,
  summary: s.metadata.summary,
  wordCount: s.computed.wordCount,
  readingTimeMinutes: s.computed.readingTimeMinutes,
  completeness: s.computed.completeness,
  backlinks: s.computed.backlinks,
  related: s.metadata.related,
  created: gitBySlug[s.slug]?.created || s.metadata.created,
  updated: gitBySlug[s.slug]?.updated || s.metadata.updated,
}));

// ---- Full records (with rendered HTML + git history + citation) ----
function fullRecord(s) {
  const git = gitBySlug[s.slug];
  return { ...s, git, citation: buildCitation(s, git) };
}

// ---- Search documents (headings + summary; body indexed by Pagefind) ----
const searchDocs = corpus.souls.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.metadata.category,
  aliases: s.metadata.aliases,
  tags: s.metadata.tags,
  summary: s.metadata.summary,
  headings: s.sections.map((sec) => sec.heading),
}));

const categories = Object.entries(stats.byCategory).map(([name, count]) => ({ name, count }));
const tags = stats.tags;

console.log('• Writing src/generated …');
// Clean generated dirs to avoid stale slugs lingering between builds.
fs.rmSync(SOULS_OUT_DIR, { recursive: true, force: true });
fs.rmSync(PUBLIC_API_SOULS_DIR, { recursive: true, force: true });

writeJSON(path.join(GENERATED_DIR, 'manifest.json'), {
  build: buildMeta,
  sections: spec,
  categories,
  tags,
  githubUrl: GITHUB_URL,
});
writeJSON(path.join(GENERATED_DIR, 'index.json'), lightList);
writeJSON(path.join(GENERATED_DIR, 'graph.json'), corpus.graph);
writeJSON(path.join(GENERATED_DIR, 'stats.json'), stats);
writeJSON(path.join(GENERATED_DIR, 'activity.json'), activity);
writeJSON(path.join(GENERATED_DIR, 'search.json'), searchDocs);
for (const s of corpus.souls) {
  writeJSON(path.join(SOULS_OUT_DIR, `${s.slug}.json`), fullRecord(s));
}

console.log('• Writing public/api …');
writeJSON(path.join(PUBLIC_API_DIR, 'index.json'), {
  ...buildMeta,
  endpoints: {
    occupations: '/api/occupations.json',
    categories: '/api/categories.json',
    tags: '/api/tags.json',
    graph: '/api/graph.json',
    stats: '/api/stats.json',
    occupation: '/api/occupations/{slug}.json',
    openapi: '/api/openapi.json',
  },
  schema: {
    soul: '/api/schema/soul.schema.json',
    metadata: '/api/schema/metadata.schema.json',
  },
  count: corpus.souls.length,
});

// OpenAPI description of this API + the JSON Schemas it references, served so the
// contract is discoverable and the `$ref`s in openapi.json actually resolve.
writeJSON(path.join(PUBLIC_API_DIR, 'openapi.json'), openApiDoc(corpus.souls.length));
for (const file of fs.readdirSync(SCHEMA_DIR)) {
  if (file.endsWith('.json')) {
    writeText(
      path.join(PUBLIC_API_DIR, 'schema', file),
      fs.readFileSync(path.join(SCHEMA_DIR, file), 'utf8'),
    );
  }
}
writeJSON(path.join(PUBLIC_API_DIR, 'badge.json'), {
  schemaVersion: 1,
  label: 'SOULs',
  message: String(corpus.souls.length),
  color: 'blue',
});
writeJSON(path.join(PUBLIC_API_DIR, 'occupations.json'), lightList);
writeJSON(path.join(PUBLIC_API_DIR, 'categories.json'), categories);
writeJSON(path.join(PUBLIC_API_DIR, 'tags.json'), tags);
writeJSON(path.join(PUBLIC_API_DIR, 'graph.json'), corpus.graph);
writeJSON(path.join(PUBLIC_API_DIR, 'stats.json'), stats);

// Per-occupation machine formats: JSON, Markdown, YAML.
for (const s of corpus.souls) {
  const rec = fullRecord(s);
  writeJSON(path.join(PUBLIC_API_SOULS_DIR, `${s.slug}.json`), rec);
  const fm = `---\n${yaml.dump(s.metadata).trim()}\n---\n\n`;
  const bodyMd = `# ${s.title}\n\n${s.sections.map((sec) => `## ${sec.heading}\n\n${sec.markdown}`).join('\n\n')}\n`;
  writeText(path.join(PUBLIC_API_SOULS_DIR, `${s.slug}.md`), fm + bodyMd);
  writeText(
    path.join(PUBLIC_API_SOULS_DIR, `${s.slug}.yaml`),
    yaml.dump({
      ...s.metadata,
      sections: s.sections.map((x) => ({ heading: x.heading, markdown: x.markdown })),
    }),
  );
}

console.log(`✓ Generated ${corpus.souls.length} occupations in ${Date.now() - t0}ms`);
if (corpus.danglers.length) {
  console.log(
    `  ⚠ ${corpus.danglers.length} dangling references (see /api/stats.json → quality.danglingReferences)`,
  );
}
