// Build-time git history extraction. Each SOUL page exposes its real version
// history; we read it once at generate-time and cache it into the corpus.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { ROOT } from './paths.mjs';

function git(args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
}

let _available = null;
function gitAvailable() {
  if (_available !== null) return _available;
  try {
    git(['rev-parse', '--is-inside-work-tree']);
    _available = true;
  } catch {
    _available = false;
  }
  return _available;
}

/**
 * Return commit history for a single file (relative to repo root):
 * creation date, last update, revision count, per-author commit counts, and a
 * compact timeline. Returns nulls gracefully when git or history is absent.
 */
export function fileHistory(relPath) {
  const empty = { created: null, updated: null, revisions: 0, authors: [], timeline: [] };
  if (!gitAvailable()) return empty;
  let out;
  try {
    // ISO date<TAB>author name, one line per commit, oldest last.
    out = git(['log', '--follow', '--format=%aI%x09%an', '--', relPath]);
  } catch {
    return empty;
  }
  const rows = out
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [iso, name] = l.split('\t');
      return { date: iso, name: name || 'Unknown' };
    });
  if (rows.length === 0) return empty;

  const authorCounts = new Map();
  for (const r of rows) authorCounts.set(r.name, (authorCounts.get(r.name) || 0) + 1);
  const authors = [...authorCounts.entries()]
    .map(([name, commits]) => ({ name, commits }))
    .sort((a, b) => b.commits - a.commits);

  const newest = rows[0].date;
  const oldest = rows[rows.length - 1].date;
  const timeline = rows
    .slice(0, 30)
    .map((r) => ({ date: r.date.slice(0, 10), author: r.name }))
    .reverse();

  return {
    created: oldest.slice(0, 10),
    updated: newest.slice(0, 10),
    revisions: rows.length,
    authors,
    timeline,
  };
}

/** Repository-wide activity: commits per day over the trailing window. */
export function repoActivity(days = 365) {
  if (!gitAvailable()) return [];
  let out;
  try {
    // Both paths: 'occupations' is the pre-rename history, 'souls' the current
    // corpus. Federated/ is intentionally excluded — authored activity only.
    out = git(['log', `--since=${days} days ago`, '--format=%aI', '--', 'souls', 'occupations']);
  } catch {
    return [];
  }
  const counts = new Map();
  for (const line of out.split('\n')) {
    const d = line.trim().slice(0, 10);
    if (d) counts.set(d, (counts.get(d) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function soulHistory(slug) {
  // --follow (in fileHistory) traverses the occupations/ → souls/ rename.
  return fileHistory(path.join('souls', slug, 'SOUL.md'));
}
