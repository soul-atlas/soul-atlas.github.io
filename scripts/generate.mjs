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
  GENERATED_DIR,
  SOULS_OUT_DIR,
  PUBLIC_API_DIR,
  PUBLIC_API_SOULS_DIR,
  GITHUB_URL,
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
  summary: s.metadata.summary,
  wordCount: s.computed.wordCount,
  readingTimeMinutes: s.computed.readingTimeMinutes,
  completeness: s.computed.completeness,
  backlinks: s.computed.backlinks,
  related: s.metadata.related,
  created: gitBySlug[s.slug]?.created || s.metadata.created,
  updated: gitBySlug[s.slug]?.updated || s.metadata.updated,
}));

// ---- Full records (with rendered HTML + git history) ----
function fullRecord(s) {
  return { ...s, git: gitBySlug[s.slug] };
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
  schema: 'https://soul-atlas.github.io/schema/soul.schema.json',
  endpoints: {
    occupations: '/api/occupations.json',
    categories: '/api/categories.json',
    tags: '/api/tags.json',
    graph: '/api/graph.json',
    stats: '/api/stats.json',
    occupation: '/api/occupations/{slug}.json',
  },
  count: corpus.souls.length,
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
  writeText(path.join(PUBLIC_API_SOULS_DIR, `${s.slug}.yaml`), yaml.dump({ ...s.metadata, sections: s.sections.map((x) => ({ heading: x.heading, markdown: x.markdown })) }));
}

console.log(`✓ Generated ${corpus.souls.length} occupations in ${Date.now() - t0}ms`);
if (corpus.danglers.length) {
  console.log(`  ⚠ ${corpus.danglers.length} dangling references (see /api/stats.json → quality.danglingReferences)`);
}
