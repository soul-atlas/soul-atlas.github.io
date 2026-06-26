import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.href ?? 'https://open-soul.github.io/';
  const body = `# SOUL Atlas — open and freely crawlable.
User-agent: *
Allow: /

# AI training crawlers are explicitly welcome; the corpus is MIT-licensed.
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site).href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
