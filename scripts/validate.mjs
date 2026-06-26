#!/usr/bin/env node
// Validates every SOUL against the metadata schema and the section spec.
// Exit code 1 on any error so CI fails loudly. Warnings never fail the build.
import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { SCHEMA_DIR } from './lib/paths.mjs';
import { listSlugs, loadSoul, loadSectionSpec, buildCorpus } from './lib/corpus.mjs';

const ANSI = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  dim: '\x1b[2m',
  reset: '\x1b[0m',
};
const c = (color, s) => `${ANSI[color]}${s}${ANSI.reset}`;

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const metaSchema = JSON.parse(
  fs.readFileSync(path.join(SCHEMA_DIR, 'metadata.schema.json'), 'utf8'),
);
const validateMeta = ajv.compile(metaSchema);

const errors = [];
const warnings = [];
const err = (slug, msg) => errors.push(`${c('red', '✗')} ${c('dim', slug)}  ${msg}`);
const warn = (slug, msg) => warnings.push(`${c('yellow', '⚠')} ${c('dim', slug)}  ${msg}`);

const spec = loadSectionSpec();
const requiredSections = spec.filter((s) => s.required);
const slugs = listSlugs();

if (slugs.length === 0) {
  console.log(c('yellow', 'No occupations found in occupations/. Nothing to validate.'));
  process.exit(0);
}

const known = new Set(slugs);

for (const slug of slugs) {
  let soul;
  try {
    soul = loadSoul(slug);
  } catch (e) {
    err(slug, e.message);
    continue;
  }
  const m = soul.metadata;

  if (!validateMeta(m)) {
    for (const e of validateMeta.errors) {
      err(slug, `metadata${e.instancePath} ${e.message}`);
    }
  }
  if (m.slug && m.slug !== slug) {
    err(slug, `metadata.slug "${m.slug}" does not match directory name "${slug}"`);
  }

  // Section presence + minimum substance.
  const present = new Map(soul.sections.map((s) => [s.heading, s]));
  for (const def of requiredSections) {
    const sec = present.get(def.heading);
    if (!sec) {
      err(slug, `missing required section "## ${def.heading}"`);
    } else if (sec.wordCount < (def.minWords || 0)) {
      warn(slug, `section "${def.heading}" is thin (${sec.wordCount}/${def.minWords} words)`);
    }
  }
  // Unknown headings: allowed, but flagged so the schema stays the contract.
  const knownHeadings = new Set(spec.map((s) => s.heading));
  for (const sec of soul.sections) {
    if (!knownHeadings.has(sec.heading)) warn(slug, `non-canonical section "## ${sec.heading}"`);
  }

  // Relationship integrity.
  for (const rel of m.related || []) {
    if (rel.slug === slug) err(slug, `self-reference in related[]`);
    if (!known.has(rel.slug)) warn(slug, `related "${rel.slug}" (${rel.type}) does not exist yet`);
  }

  if ((m.summary || '').length > 320) err(slug, `summary exceeds 320 characters`);
  if (m.status === 'stable' && soul.computed.completeness < 1) {
    warn(
      slug,
      `status is "stable" but completeness is ${Math.round(soul.computed.completeness * 100)}%`,
    );
  }
}

// Cross-corpus sanity (duplicate titles/aliases).
const corpus = buildCorpus();
const titleSeen = new Map();
for (const s of corpus.souls) {
  const key = s.title.toLowerCase();
  if (titleSeen.has(key)) warn(s.slug, `duplicate title with "${titleSeen.get(key)}"`);
  else titleSeen.set(key, s.slug);
}

console.log('');
for (const w of warnings) console.log(w);
for (const e of errors) console.log(e);
console.log('');
console.log(
  `${slugs.length} occupations · ${c(errors.length ? 'red' : 'green', errors.length + ' errors')} · ${c('yellow', warnings.length + ' warnings')}`,
);

process.exit(errors.length ? 1 : 0);
