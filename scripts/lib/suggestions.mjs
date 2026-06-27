// Shared logic for the suggestion bot: parse a suggestion record, review it with
// deterministic checks, and apply it to a SOUL.md. Used by both the review and
// apply workflows (and runnable locally) so there is exactly one implementation.
//
// A suggestion "record" is the markdown file the suggestion worker drops under
// suggestions/<slug>/<id>.md. Its YAML front matter carries slug + section; its
// "## Suggested wording" block (if present) is what gets applied.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { OCCUPATIONS_DIR } from './paths.mjs';
import { loadSectionSpec, listSlugs } from './corpus.mjs';

// Markdown/HTML that should never be auto-applied from anonymous input.
const UNSAFE = [
  /<\s*script/i,
  /<\s*\/\s*script/i,
  /<\s*iframe/i,
  /<\s*object/i,
  /<\s*embed/i,
  /javascript:/i,
  /\son\w+\s*=/i, // inline event handlers: onerror=, onclick=, …
  /data:text\/html/i,
];

// Banned filler from STYLE_GUIDE.md — flagged, not fatal.
const STYLE_BANNED = [
  /\bdelve\b/i,
  /\btapestry\b/i,
  /navigat\w* the complex/i,
  /it'?s not just .* it'?s/i,
  /\bin conclusion\b/i,
  /\bever-(evolving|changing)\b/i,
  /\btestament to\b/i,
  /\brealm\b/i,
  /\bgame-?changer\b/i,
  /in today'?s .* world/i,
  /at the end of the day/i,
  /plays? an? (crucial|key|vital|important|pivotal) role/i,
];

/** Pull the body of a `## Heading` section out of a markdown string. */
export function extractSection(md, heading) {
  const re = new RegExp(
    `(?:^|\\n)##\\s+${escapeRe(heading)}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`,
    'i',
  );
  const m = re.exec(md);
  return m ? m[1].trim() : null;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Parse a suggestion record file into structured fields. */
export function parseRecord(recordText) {
  const { data, content } = matter(recordText);
  const slug = String(data.slug || '').trim();
  const section = String(data.section || '').trim();
  const kind = data.kind === 'review' ? 'review' : 'suggestion';
  const wording = extractSection(content, 'Suggested wording');
  const problem = extractSection(content, 'What to change') || '';
  return { slug, section, kind, wording: wording || '', problem, name: String(data.name || '') };
}

/**
 * Deterministic review. Returns a verdict the workflow turns into a PR comment
 * and a pass/fail label. "pass" means it is safe to auto-apply on /lgtm.
 */
export function reviewRecord(record) {
  const errors = [];
  const warnings = [];
  const spec = loadSectionSpec();
  const canonical = new Set(spec.map((s) => s.heading));
  const slugs = new Set(listSlugs());

  if (!record.slug || !slugs.has(record.slug)) {
    errors.push(`Unknown SOUL slug \`${record.slug || '(missing)'}\` — no matching occupation.`);
  }
  if (!record.section) {
    errors.push('No target section named — cannot auto-apply.');
  } else if (!canonical.has(record.section)) {
    errors.push(
      `Section \`${record.section}\` is not a canonical SOUL section, so it can't be auto-applied. ` +
        `A maintainer should handle this one by hand.`,
    );
  }
  if (!record.wording || record.wording.length < 15) {
    errors.push(
      'No concrete "Suggested wording" to apply — this is a description only. ' +
        'A maintainer should write and apply the change manually.',
    );
  }

  const text = record.wording || '';
  for (const re of UNSAFE) {
    if (re.test(text)) {
      errors.push('Suggested wording contains HTML/script-like content; refusing to auto-apply.');
      break;
    }
  }
  for (const re of STYLE_BANNED) {
    if (re.test(text))
      warnings.push(`Contains a Style Guide banned phrase (matched \`${re.source}\`).`);
  }
  if (record.section && record.wording) {
    const soul = readSoul(record.slug);
    if (soul && !extractSection(soul, record.section)) {
      errors.push(
        `Section \`## ${record.section}\` not found in the current SOUL — heading may have changed.`,
      );
    }
  }

  return { pass: errors.length === 0, errors, warnings };
}

function soulPath(slug) {
  return path.join(OCCUPATIONS_DIR, slug, 'SOUL.md');
}
function readSoul(slug) {
  const p = soulPath(slug);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

/**
 * Apply a record to its SOUL.md on disk: replace the whole target section body
 * with the suggested wording. Returns { applied, message }. Idempotent-ish: if
 * the section already equals the wording, it reports no change.
 */
export function applyRecord(record) {
  const review = reviewRecord(record);
  if (!review.pass) {
    return { applied: false, message: `Review failed: ${review.errors.join(' ')}` };
  }
  const p = soulPath(record.slug);
  const soul = fs.readFileSync(p, 'utf8');
  const wording = record.wording.trim();
  const re = new RegExp(
    `((?:^|\\n)##\\s+${escapeRe(record.section)}\\s*\\n)([\\s\\S]*?)(?=\\n##\\s|$)`,
    'i',
  );
  if (!re.test(soul)) {
    return { applied: false, message: `Section "## ${record.section}" not found.` };
  }
  // Collapse any run of 3+ newlines so we never introduce MD012 violations.
  const next = soul.replace(re, `$1\n${wording}\n`).replace(/\n{3,}/g, '\n\n');
  if (next === soul) {
    return { applied: false, message: 'No change — section already matches the suggestion.' };
  }
  fs.writeFileSync(p, next);
  return { applied: true, message: `Replaced "## ${record.section}" in ${record.slug}/SOUL.md.` };
}

/** List suggestion record files (absolute paths), optionally limited to a set. */
export function findRecordFiles(limitTo = null) {
  const root = path.resolve('suggestions');
  if (!fs.existsSync(root)) return [];
  const out = [];
  for (const slug of fs.readdirSync(root)) {
    const dir = path.join(root, slug);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const abs = path.join(dir, f);
      if (!limitTo || limitTo.includes(path.relative(process.cwd(), abs))) out.push(abs);
    }
  }
  return out;
}
