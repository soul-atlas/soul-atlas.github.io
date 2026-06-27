#!/usr/bin/env node
// Deterministic review of suggestion record files. Prints a markdown verdict
// (used as a PR comment) and reports overall pass/fail via GITHUB_OUTPUT so the
// workflow can label the PR. "pass" = safe to auto-apply on /lgtm.
//
//   node scripts/review-suggestion.mjs suggestions/<slug>/<id>.md [more…]
//   (no args → reviews every record under suggestions/)
import fs from 'node:fs';
import { parseRecord, reviewRecord, findRecordFiles } from './lib/suggestions.mjs';

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const files = args.length ? args : findRecordFiles().map((f) => f);

if (files.length === 0) {
  output('pass', 'false');
  writeComment('No suggestion record found in this PR. Nothing to review.');
  console.log('No records to review.');
  process.exit(0);
}

let allPass = true;
const blocks = [];
for (const file of files) {
  let record;
  try {
    record = parseRecord(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    allPass = false;
    blocks.push(`### \`${file}\`\n\n❌ Could not parse record: ${e.message}`);
    continue;
  }
  const v = reviewRecord(record);
  if (!v.pass) allPass = false;

  const lines = [
    `### Suggestion for \`${record.slug}\` — section **${record.section || '(none)'}**`,
  ];
  lines.push('');
  lines.push(v.pass ? '✅ **Automated review passed.**' : '🚫 **Automated review failed.**');
  if (v.errors.length) {
    lines.push('', '**Blocking:**', ...v.errors.map((e) => `- ${e}`));
  }
  if (v.warnings.length) {
    lines.push('', '**Warnings (non-blocking):**', ...v.warnings.map((w) => `- ${w}`));
  }
  if (v.pass) {
    lines.push(
      '',
      `On \`/lgtm\` from a maintainer, this will **replace the entire \`## ${record.section}\` section** with:`,
      '',
      '<details><summary>Suggested wording</summary>',
      '',
      record.wording,
      '',
      '</details>',
    );
  }
  blocks.push(lines.join('\n'));
}

const header =
  '## 🤖 Suggestion review\n\n' +
  (allPass
    ? 'All checks passed. A maintainer can comment `/lgtm` to apply and merge automatically.'
    : 'This suggestion needs a human. See the blocking items below; `/lgtm` will not auto-apply.') +
  '\n\n';
const comment = header + blocks.join('\n\n---\n\n');

writeComment(comment);
output('pass', String(allPass));
console.log(comment);
process.exit(0);

function output(key, value) {
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
}
function writeComment(body) {
  const out = process.env.COMMENT_FILE || '';
  if (out) fs.writeFileSync(out, body);
}
