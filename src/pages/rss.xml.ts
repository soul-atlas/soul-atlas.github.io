import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { souls } from '../lib/data';
import { soulUrl } from '../lib/site';

// Recent changes feed: most-recently-updated SOULs first.
export async function GET(context: APIContext) {
  const items = [...souls]
    .filter((s) => s.updated)
    .sort((a, b) => (b.updated || '').localeCompare(a.updated || ''))
    .slice(0, 50)
    .map((s) => ({
      title: s.title,
      description: s.summary,
      link: soulUrl(s.slug),
      pubDate: new Date(s.updated || s.created || '2026-01-01'),
      categories: [s.category, ...(s.tags || [])],
    }));

  return rss({
    title: 'SOUL Atlas — recent changes',
    description: 'The most recently updated SOULs in the Atlas.',
    site: context.site ?? 'https://soul-atlas.github.io',
    items,
  });
}
