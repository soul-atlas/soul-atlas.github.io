import type { APIContext } from 'astro';
import { souls, categories, tags } from '../lib/data';
import { url, soulUrl, categoryUrl, tagUrl } from '../lib/site';

// Custom sitemap: deterministic, base-path aware, and covers every generated route.
export async function GET(context: APIContext) {
  const origin = (context.site?.origin ?? 'https://soul-atlas.github.io').replace(/\/$/, '');
  const abs = (path: string) => `${origin}${path}`;

  const staticPages = ['/', '/occupations', '/graph', '/dashboard', '/compare', '/about', '/search'];
  const urls: { loc: string; lastmod?: string }[] = [];

  for (const p of staticPages) urls.push({ loc: abs(url(p)) });
  for (const s of souls) urls.push({ loc: abs(soulUrl(s.slug)), lastmod: s.updated || undefined });
  for (const c of categories) urls.push({ loc: abs(categoryUrl(c.name)) });
  for (const t of tags) urls.push({ loc: abs(tagUrl(t.tag)) });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
