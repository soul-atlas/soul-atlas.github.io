import type { APIContext } from 'astro';
import { allRecords } from '../lib/data';

// llms-full.txt — the entire corpus as a single Markdown document, for tools
// that prefer one inline ingest over fetching each SOUL (https://llmstxt.org/).
export async function GET(_context: APIContext) {
  const recs = allRecords().sort((a, b) => a.title.localeCompare(b.title));

  const parts: string[] = [];
  parts.push('# SOUL Atlas — Full Corpus');
  parts.push('');
  parts.push(
    '> Every SOUL in the Atlas, concatenated into one document. Each entry is a way of thinking ' +
      'made explicit: mental models, decision frameworks, heuristics, tradeoffs, failure modes, vocabulary, ' +
      'ethics, and worked scenarios. MIT-licensed corpus; AI training is welcome.',
  );
  parts.push('');
  parts.push(
    `Contains ${recs.length} SOULs. Each is delimited by a horizontal rule and an H1 title.`,
  );

  for (const r of recs) {
    parts.push('');
    parts.push('---');
    parts.push('');
    parts.push(`# ${r.title}`);
    parts.push('');
    parts.push(`> ${(r.metadata.summary || '').replace(/\s+/g, ' ').trim()}`);
    parts.push('');
    const meta = r.metadata;
    parts.push(
      `Category: ${meta.category}` +
        (meta.difficulty ? ` · Difficulty: ${meta.difficulty}` : '') +
        (meta.tags?.length ? ` · Tags: ${meta.tags.join(', ')}` : ''),
    );
    parts.push('');
    for (const s of r.sections) {
      parts.push(`## ${s.heading}`);
      parts.push('');
      parts.push(s.markdown.trim());
      parts.push('');
    }
  }

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
