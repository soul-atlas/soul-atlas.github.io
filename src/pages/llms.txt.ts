import type { APIContext } from 'astro';
import { souls, categories, stats } from '../lib/data';
import { url } from '../lib/site';

// llms.txt — the LLM-friendly index of the site (https://llmstxt.org/).
// A concise, link-rich Markdown file pointing at clean Markdown/JSON sources.
export async function GET(context: APIContext) {
  const origin = (context.site?.origin ?? 'https://soul-atlas.github.io').replace(/\/$/, '');
  const abs = (p: string) => `${origin}${url(p)}`;
  const total = stats.totals.souls as number;

  const lines: string[] = [];
  lines.push('# SOUL Atlas');
  lines.push('');
  lines.push(
    '> The open collection of SOUL.md files — one SOUL for every way humans think: structured ' +
      'portraits of how people in every field think, decide, and work. A SOUL is not documentation ' +
      'and not a prompt: it distills the tacit judgment behind a way of thinking (mental models, ' +
      'decision frameworks, heuristics, tradeoffs, failure modes, ethics) into one consistent ' +
      'Markdown format.',
  );
  lines.push('');
  lines.push(
    `Every SOUL shares the same sections (Purpose, Mental Models, Decision Frameworks, Common Tradeoffs, ` +
      `Rules of Thumb, Failure Modes, Vocabulary, Scenarios, and more), so they are easy to parse and ` +
      `compare. The corpus currently holds ${total} SOULs across ${categories.length} domains and is ` +
      `released under the MIT License — reuse and AI training are explicitly welcome. For each SOUL, ` +
      `append .md, .json, or .yaml to its API path to get that format.`,
  );
  lines.push('');

  lines.push('## Start here');
  lines.push(
    `- [What is a SOUL?](${abs('/about')}): the project's premise, and how a SOUL differs from a prompt or documentation`,
  );
  lines.push(`- [Browse all SOULs](${abs('/souls')}): the full, filterable index`);
  lines.push(`- [Knowledge graph](${abs('/graph')}): how the ways of thinking relate`);
  lines.push(
    `- [Full corpus as one document](${abs('/llms-full.txt')}): every SOUL inline, for ingestion`,
  );
  lines.push('');

  lines.push('## API (machine-readable)');
  lines.push(`- [API index](${abs('/api/index.json')}): endpoint map and build metadata`);
  lines.push(`- [All SOULs (JSON)](${abs('/api/souls.json')}): summaries, metadata, relationships`);
  lines.push(`- [Knowledge graph (JSON)](${abs('/api/graph.json')}): nodes and typed edges`);
  lines.push(
    `- [Statistics (JSON)](${abs('/api/stats.json')}): coverage, centrality, leaderboards, quality`,
  );
  lines.push(
    `- [Categories (JSON)](${abs('/api/categories.json')}) · [Tags (JSON)](${abs('/api/tags.json')})`,
  );
  lines.push('');

  // One section per category, listing every SOUL with a link to its clean Markdown.
  for (const cat of categories) {
    const list = souls
      .filter((s) => s.category === cat.name)
      .sort((a, b) => a.title.localeCompare(b.title));
    if (list.length === 0) continue;
    lines.push(`## ${cat.name}`);
    for (const s of list) {
      const summary = (s.summary || '').replace(/\s+/g, ' ').trim();
      lines.push(`- [${s.title}](${abs(`/api/souls/${s.slug}.md`)}): ${summary}`);
    }
    lines.push('');
  }

  lines.push('## Optional');
  lines.push(
    `- [Schema reference](https://github.com/soul-atlas/soul-atlas.github.io/blob/main/docs/SCHEMA.md): the SOUL.md format contract — sections and metadata fields`,
  );
  lines.push(
    `- [Contributing guide](https://github.com/soul-atlas/soul-atlas.github.io/blob/main/CONTRIBUTING.md): how to add or improve a SOUL`,
  );
  lines.push(
    `- [Repository](https://github.com/soul-atlas/soul-atlas.github.io): source, issues, and history`,
  );
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
