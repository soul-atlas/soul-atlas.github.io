#!/usr/bin/env node
// Apply suggestion record files to their SOULs and remove the records. Used by
// the apply workflow after a maintainer's /lgtm. Exits non-zero if anything
// fails, so the workflow aborts before merging.
//
//   node scripts/apply-suggestion.mjs suggestions/<slug>/<id>.md [more…]
//   (no args → applies every record under suggestions/)
import fs from 'node:fs';
import path from 'node:path';
import { parseRecord, applyRecord, findRecordFiles } from './lib/suggestions.mjs';

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const files = args.length ? args : findRecordFiles();

if (files.length === 0) {
  console.error('No suggestion records to apply.');
  process.exit(1);
}

let failed = false;
const summary = [];
for (const file of files) {
  let record;
  try {
    record = parseRecord(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    failed = true;
    summary.push(`❌ ${file}: parse error: ${e.message}`);
    continue;
  }
  const res = applyRecord(record);
  if (!res.applied) {
    failed = true;
    summary.push(`❌ ${file}: ${res.message}`);
    continue;
  }
  // Remove the inbox record; clean up the slug dir if now empty.
  fs.rmSync(file);
  const dir = path.dirname(file);
  try {
    if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  } catch {
    /* dir not empty or already gone */
  }
  summary.push(`✅ ${res.message}`);
}

console.log(summary.join('\n'));
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `applied=${!failed}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `summary<<EOF\n${summary.join('\n')}\nEOF\n`);
}
process.exit(failed ? 1 : 0);
