#!/usr/bin/env node
// Federation adapter for souls.directory (https://souls.directory) — a directory
// of MIT-licensed SOUL.md *agent personas* for OpenClaw agents.
//
// We FEDERATE, we don't absorb: each persona is mirrored into
// mirrored/souls-directory/<slug>/ as a first-class `kind: agent-persona` SOUL
// with a `source` block (origin, link-back, license, attribution, fetch date).
// The corpus loader reads the mirrored/ root; the site badges these as external,
// keeps them out of authored stats and the knowledge graph, and links back to the
// canonical entry. Content is the upstream author's, under their MIT license.
//
// Source is the live API (the souls live in a database, not the GitHub repo):
//   - enumerate/curate via GET /api/souls/search?category=&limit=
//   - fetch raw markdown via GET /api/souls/{handle}/{slug}.md
//
// Usage:
//   node scripts/ingest-souls-directory.mjs [--limit N] [--per-category N]
//
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { MIRRORED_DIR } from './lib/paths.mjs';
import { slugify } from './lib/markdown.mjs';

const ORIGIN = 'souls.directory';
const BASE = 'https://souls.directory';
const REPO = 'https://github.com/thedaviddias/souls-directory';
const LICENSE = 'MIT';
const OUT_DIR = path.join(MIRRORED_DIR, 'souls-directory');

const arg = (name, dflt) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : dflt;
};
const LIMIT = Number(arg('limit', '12'));
const PER_CATEGORY = Number(arg('per-category', '2'));
const today = new Date().toISOString().slice(0, 10);

// A curated spread of the categories that sit closest to "a way of thinking",
// skipping the low-signal dumps (e.g. art-decc0). Their category → our 21-domain
// enum. Personas aren't occupations, so these are rough homes, not claims.
const CATEGORIES = [
  ['professional', 'Business'],
  ['educational', 'Education'],
  ['research', 'Science'],
  ['productivity', 'Business'],
  ['technical', 'Technology'],
  ['coding', 'Technology'],
  ['creative', 'Creative'],
  ['wellness', 'Healthcare'],
  ['communication', 'Business'],
  ['support', 'Public Service'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DELAY_MS = Number(arg('delay', '900')); // be a polite guest; avoids HTTP 429

const fetchText = async (url, attempt = 1) => {
  const res = await fetch(url, { headers: { 'user-agent': 'soul-atlas-federation/1.0' } });
  if (res.status === 429 && attempt <= 3) {
    await sleep(DELAY_MS * 2 * attempt);
    return fetchText(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
};
const fetchJSON = async (url) => JSON.parse(await fetchText(url));

// Parse the {handle} out of a soul's installCommand (…/api/souls/{handle}/{slug}.md).
const handleFromInstall = (cmd, slug) => {
  const m = /\/api\/souls\/([^/]+)\/([^/.]+)\.md/.exec(cmd || '');
  return m ? m[1] : null;
};

// Skip generic placeholder personas ("SOUL", "SOUL.md") that carry no real signal.
const isGeneric = (name) => /^soul(\.md)?$/i.test((name || '').trim());

function buildSoulMarkdown(title, raw) {
  let c = raw.replace(/^﻿/, '');
  // Drop any leading YAML frontmatter and leading H1 — we supply our own title.
  c = c.replace(/^---\n[\s\S]*?\n---\s*/, '');
  c = c.replace(/^#\s+.*\r?\n+/, '');
  c = c.trim();
  // Preserve the upstream's own H2 structure; otherwise nest their prose under one
  // section so it renders (the engine splits the body on H2s).
  const body = /^##\s/m.test(c) && /^##\s/.test(c) ? c : `## Persona\n\n${c}`;
  return `# ${title}\n\n${body}\n`;
}

function summaryFor(name, tagline, ourCategory) {
  const t = (tagline || '').trim();
  if (t.length >= 20 && t.length <= 320) return t;
  const fallback = `${name} — an AI agent persona mirrored from ${ORIGIN} (${ourCategory.toLowerCase()} category).`;
  return fallback.slice(0, 320);
}

async function curate() {
  const picked = [];
  const seen = new Set();
  for (const [theirCat, ourCat] of CATEGORIES) {
    if (picked.length >= LIMIT) break;
    let souls = [];
    try {
      await sleep(DELAY_MS);
      const data = await fetchJSON(
        `${BASE}/api/souls/search?category=${encodeURIComponent(theirCat)}&limit=10`,
      );
      souls = data.souls || [];
    } catch (e) {
      console.warn(`  ! search failed for ${theirCat}: ${e.message}`);
      continue;
    }
    let takenForCat = 0;
    for (const s of souls) {
      if (picked.length >= LIMIT || takenForCat >= PER_CATEGORY) break;
      const handle = handleFromInstall(s.installCommand, s.slug);
      if (!handle || isGeneric(s.name)) continue;
      const key = `${handle}/${s.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      picked.push({ handle, slug: s.slug, name: s.name, tagline: s.tagline, ourCat, theirCat });
      takenForCat += 1;
    }
  }
  return picked;
}

async function main() {
  console.log(`• Curating from ${ORIGIN} (limit ${LIMIT}, ≤${PER_CATEGORY}/category)…`);
  const picks = await curate();
  if (picks.length === 0) {
    console.error('✗ No personas selected — aborting without touching the corpus.');
    process.exit(1);
  }

  // Fresh mirror each run, so removals upstream don't leave stale local copies.
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let written = 0;
  for (const p of picks) {
    // slugify keeps underscores (\w); the slug schema forbids them.
    const slug = slugify(`${p.handle}-${p.slug}`).replace(/_/g, '-').replace(/-+/g, '-');
    if (!slug) continue;
    let raw;
    try {
      await sleep(DELAY_MS);
      raw = await fetchText(`${BASE}/api/souls/${p.handle}/${p.slug}.md`);
    } catch (e) {
      console.warn(`  ! skip ${p.handle}/${p.slug}: ${e.message}`);
      continue;
    }
    const title = (p.name || p.slug).trim().slice(0, 80);
    const dir = path.join(OUT_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });

    const metadata = {
      title,
      slug,
      kind: 'agent-persona',
      category: p.ourCat,
      tags: [slugify(p.theirCat)],
      summary: summaryFor(title, p.tagline, p.ourCat),
      provenance: 'human',
      source: {
        origin: ORIGIN,
        url: `${BASE}/souls/${p.handle}/${p.slug}`,
        repo: REPO,
        license: LICENSE,
        attribution: p.handle,
        fetched: today,
      },
      last_reviewed: null,
      reviewers: [],
      created: today,
      updated: today,
      status: 'draft',
    };
    fs.writeFileSync(path.join(dir, 'metadata.yaml'), yaml.dump(metadata, { lineWidth: 100 }));
    fs.writeFileSync(path.join(dir, 'SOUL.md'), buildSoulMarkdown(title, raw));
    written += 1;
    console.log(`  ✓ ${slug}  ←  ${p.handle}/${p.slug} (${p.theirCat} → ${p.ourCat})`);
  }

  console.log(`\n✓ Mirrored ${written} persona(s) into mirrored/souls-directory/`);
  console.log(`  Next:  npm run validate   then   npm run dev`);
}

main().catch((e) => {
  console.error(`✗ ${e.message}`);
  process.exit(1);
});
