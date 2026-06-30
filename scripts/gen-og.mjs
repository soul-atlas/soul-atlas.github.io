#!/usr/bin/env node
// Generates per-SOUL Open Graph cards into public/og/<slug>.png (plus a site
// default.png), which `astro build` then copies into dist/. Reads the summary
// list the engine already emits (public/api/souls.json), so it stays decoupled
// from the corpus loader. Run after `npm run generate`, before `astro build`.
//
// Each card costs a few hundred ms (resvg builds a font DB per render), so the
// work is sharded across worker threads — ~25s for the whole corpus instead of
// minutes. This file is both the main orchestrator and the worker body.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { renderOgPng, assertFonts } from './lib/og.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');

function eyebrow(s) {
  const parts = [s.category];
  if (s.kind && s.kind !== 'occupation') parts.push(s.kind.replace(/-/g, ' '));
  return parts.filter(Boolean).join(' · ');
}
function status(s) {
  if (s.verified) return { text: 'Practitioner-reviewed', tone: 'accent' };
  if (s.unverifiedAiDraft || s.provenance === 'ai-generated')
    return { text: 'AI-drafted · unverified', tone: 'amber' };
  return { text: s.status ? String(s.status) : 'Draft', tone: 'faint' };
}

// ---- Worker: render an assigned shard of cards to disk. ----
if (!isMainThread) {
  let bytes = 0;
  for (const t of workerData.tasks) {
    const png = renderOgPng(t.opts);
    fs.writeFileSync(path.join(workerData.outDir, `${t.slug}.png`), png);
    bytes += png.length;
  }
  parentPort.postMessage({ count: workerData.tasks.length, bytes });
} else {
  // ---- Main: build the task list, shard it, fan out to workers. ----
  assertFonts();
  const SOULS_JSON = path.join(ROOT, 'public', 'api', 'souls.json');
  if (!fs.existsSync(SOULS_JSON)) {
    console.error(
      `✗ ${path.relative(ROOT, SOULS_JSON)} not found — run \`npm run generate\` first.`,
    );
    process.exit(1);
  }
  const souls = JSON.parse(fs.readFileSync(SOULS_JSON, 'utf8'));
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const tasks = souls.map((s) => ({
    slug: s.slug,
    opts: {
      title: s.title,
      eyebrow: eyebrow(s),
      summary: s.summary || '',
      status: status(s),
      seed: s.slug,
    },
  }));
  tasks.push({
    slug: 'default',
    opts: {
      title: 'One SOUL for every way humans think',
      eyebrow: 'A map of how the world thinks',
      summary:
        'An open, community-built collection of SOUL.md files — structured portraits of how experts actually think, decide, and work.',
      status: {
        text: `${souls.length.toLocaleString('en-US')} SOULs · open · MIT`,
        tone: 'accent',
      },
      seed: 'soul-atlas-home',
    },
  });

  const workers = Math.max(1, Math.min(tasks.length, (os.cpus()?.length || 4) - 1));
  const shards = Array.from({ length: workers }, () => []);
  tasks.forEach((t, i) => shards[i % workers].push(t));

  const results = await Promise.all(
    shards.map(
      (shardTasks) =>
        new Promise((resolve, reject) => {
          const w = new Worker(new URL(import.meta.url), {
            workerData: { tasks: shardTasks, outDir: OUT_DIR },
          });
          w.once('message', (m) => resolve(m));
          w.once('error', reject);
          w.once('exit', (code) => {
            if (code !== 0) reject(new Error(`OG worker exited with code ${code}`));
          });
        }),
    ),
  );

  const count = results.reduce((n, r) => n + r.count, 0);
  const bytes = results.reduce((n, r) => n + r.bytes, 0);
  console.log(
    `✓ wrote ${count} OG cards to ${path.relative(ROOT, OUT_DIR)} across ${workers} workers — ${(bytes / 1048576).toFixed(1)} MB total`,
  );
}
