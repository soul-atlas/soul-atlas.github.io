import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { souls } from '../../lib/data';
import { soulUrl } from '../../lib/site';

// Newest SOULs feed: most-recently-created SOULs first.
export async function GET(context: APIContext) {
  const items = [...souls]
    .filter((s) => s.created)
    .sort((a, b) => (b.created || '').localeCompare(a.created || ''))
    .slice(0, 50)
    .map((s) => ({
      title: s.title,
      description: s.summary,
      link: soulUrl(s.slug),
      pubDate: new Date(s.created || '2026-01-01'),
      categories: [s.category],
    }));

  return rss({
    title: 'SOUL Atlas — newest SOULs',
    description: 'Newly added SOULs in the Atlas.',
    site: context.site ?? 'https://soul-atlas.github.io',
    items,
  });
}
