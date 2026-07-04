// A per-SOUL sigil as a standalone static SVG, one file per SOUL at build time
// (mirrors the per-SOUL OG images). It reuses the same deterministic generator
// as the in-page emblem, so the file, the card, and the hero always match. It
// is consumed as the Pagefind result thumbnail on the full-text search page.
import type { APIRoute } from 'astro';
import { allRecords, getRecord } from '../../lib/data';
import { soulSigilSvg, sigilInputFromRecord } from '../../lib/star';

export function getStaticPaths() {
  return allRecords().map((rec) => ({ params: { slug: rec.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const rec = getRecord(params.slug!);
  if (!rec) return new Response('Not found', { status: 404 });
  const svg = soulSigilSvg(sigilInputFromRecord(rec), { size: 120 });
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
