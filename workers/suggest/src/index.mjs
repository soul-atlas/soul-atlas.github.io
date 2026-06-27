// SOUL Atlas — anonymous suggestion → pull request worker.
//
// Why this exists: the Atlas is a static site, but the people most able to fix a
// SOUL (practitioners who do the work) often don't have — or don't want to learn —
// a GitHub account. This Worker is the one small piece of server that lets anyone
// submit a correction from the website and have it land as a reviewable PR.
//
// It authenticates with a SINGLE token it holds as a secret; submitters stay
// anonymous (or named, their choice). Every submission becomes a branch + a
// suggestion record file + a pull request labelled for triage. The worker never
// edits SOUL.md directly — it adds a record under suggestions/<slug>/ — so a
// hostile submission can't silently corrupt content; a maintainer applies the
// actual wording after review.
//
// Configuration (wrangler.toml [vars] + `wrangler secret put`):
//   GITHUB_TOKEN      secret  fine-grained PAT or GitHub App installation token,
//                             scoped to this repo with Contents: read/write and
//                             Pull requests: read/write.
//   GITHUB_REPO       var     "owner/name" (e.g. soul-atlas/soul-atlas.github.io)
//   BASE_BRANCH       var     default "main"
//   ALLOWED_ORIGIN    var     site origin allowed to call this, or "*"
//   TURNSTILE_SECRET  secret  optional; if set, the Cloudflare Turnstile token is verified
//   RL                KV      optional namespace for best-effort per-IP rate limiting

const GH_API = 'https://api.github.com';
const MAX = { problem: 5000, suggestion: 8000, basis: 500, name: 120, email: 200, field: 200 };

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, cors);
    }

    // Honeypot: a hidden field only bots fill. Pretend nothing happened.
    if (body.website) return json({ ok: true }, 200, cors);

    const slug = String(body.slug || '').trim();
    const problem = String(body.problem || '').trim();
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return json({ error: 'Invalid slug' }, 400, cors);
    if (problem.length < 10) return json({ error: 'Please describe the change.' }, 400, cors);

    // Optional bot check.
    if (env.TURNSTILE_SECRET) {
      const ok = await verifyTurnstile(
        env.TURNSTILE_SECRET,
        body.turnstileToken,
        clientIp(request),
      );
      if (!ok) return json({ error: 'Verification failed. Please try again.' }, 403, cors);
    }

    // Best-effort rate limit: 5 / 10 min / IP when a KV namespace is bound.
    if (env.RL) {
      const key = `rl:${clientIp(request)}`;
      const n = Number((await env.RL.get(key)) || '0');
      if (n >= 5) return json({ error: 'Too many suggestions. Try again later.' }, 429, cors);
      await env.RL.put(key, String(n + 1), { expirationTtl: 600 });
    }

    const kind = body.kind === 'review' ? 'review' : 'suggestion';
    const repo = env.GITHUB_REPO;
    const base = env.BASE_BRANCH || 'main';
    const id = crypto.randomUUID().slice(0, 8);
    const branch = `${kind === 'review' ? 'review' : 'suggestion'}/${slug}-${id}`;
    const date = new Date().toISOString().slice(0, 10);
    const filePath = `suggestions/${slug}/${date}-${id}.md`;

    const safe = (v, k) => String(v || '').slice(0, MAX[k] || MAX.field);
    const record = buildRecord({
      kind,
      slug,
      section: safe(body.section, 'field'),
      problem: safe(problem, 'problem'),
      suggestion: safe(body.suggestion, 'suggestion'),
      basis: safe(body.basis, 'basis'),
      name: safe(body.name, 'name'),
      creditOk: Boolean(body.credit_ok),
      source: safe(body.source, 'field'),
      date,
    });

    try {
      const gh = ghClient(env.GITHUB_TOKEN, repo);

      const baseRef = await gh(`/git/ref/heads/${base}`);
      const baseSha = baseRef.object.sha;
      await gh('/git/refs', {
        method: 'POST',
        body: { ref: `refs/heads/${branch}`, sha: baseSha },
      });
      await gh(`/contents/${encodeURIComponent(filePath).replace(/%2F/g, '/')}`, {
        method: 'PUT',
        body: {
          message: `${kind === 'review' ? 'Review' : 'Suggestion'}: ${slug}${
            body.section ? ` (${safe(body.section, 'field')})` : ''
          }`,
          content: toBase64(record),
          branch,
        },
      });
      const pr = await gh('/pulls', {
        method: 'POST',
        body: {
          title: `[${kind}] ${slug}${body.section ? ` — ${safe(body.section, 'field')}` : ''}`,
          head: branch,
          base,
          body: prBody({ kind, slug, section: safe(body.section, 'field'), record, filePath }),
          maintainer_can_modify: true,
        },
      });

      // Labels are best-effort; don't fail the request if they don't exist yet.
      const labels =
        kind === 'review'
          ? ['community-review', 'content', 'needs-triage']
          : ['community-suggestion', 'content', 'needs-triage'];
      try {
        await gh(`/issues/${pr.number}/labels`, { method: 'POST', body: { labels } });
      } catch {
        /* labels optional */
      }

      return json({ ok: true, url: pr.html_url, number: pr.number }, 200, cors);
    } catch (err) {
      return json({ error: `Could not open a pull request: ${err.message}` }, 502, cors);
    }
  },
};

// --- helpers ---------------------------------------------------------------

function ghClient(token, repo) {
  return async function gh(path, init = {}) {
    const res = await fetch(`${GH_API}/repos/${repo}${path}`, {
      method: init.method || 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'soul-atlas-suggest-worker',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: init.body ? JSON.stringify(init.body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || `GitHub ${res.status}`);
    return data;
  };
}

function buildRecord(r) {
  const lines = [
    '---',
    `kind: ${r.kind}`,
    `slug: ${r.slug}`,
    `section: ${yamlStr(r.section)}`,
    `submitted: ${r.date}`,
    `name: ${yamlStr(r.name)}`,
    `credit_ok: ${r.creditOk}`,
    `source: ${yamlStr(r.source)}`,
    '---',
    '',
    `# ${r.kind === 'review' ? 'Practitioner review' : 'Suggested change'}: ${r.slug}`,
    '',
    r.section ? `**Section:** ${r.section}` : '**Section:** (whole SOUL)',
    '',
    '## What to change',
    '',
    r.problem,
    '',
  ];
  if (r.suggestion) lines.push('## Suggested wording', '', r.suggestion, '');
  if (r.basis) lines.push('## How they know', '', r.basis, '');
  lines.push(
    '---',
    '',
    '_Submitted via the website by ' +
      (r.name ? r.name : 'an anonymous contributor') +
      '. A maintainer will fold this into the SOUL and close this PR._',
    '',
  );
  return lines.join('\n');
}

function prBody({ kind, slug, section, filePath }) {
  return [
    `Community ${kind} for [\`${slug}\`](../../tree/main/occupations/${slug}/SOUL.md)` +
      (section ? ` — section **${section}**` : '') +
      '.',
    '',
    'Submitted through the website by someone without a GitHub account.',
    '',
    `The details are in [\`${filePath}\`](../../blob/${kind}/${slug}/${filePath}).`,
    '',
    '**Maintainer checklist**',
    '',
    '- [ ] Sanity-check the suggestion against the Style Guide and real practice',
    '- [ ] Apply the wording to `occupations/' + slug + "/SOUL.md` (don't just merge the record)",
    '- [ ] If a practitioner verified it, add them to `reviewers` and set `last_reviewed`',
    '- [ ] Delete the `suggestions/` record file before merging',
    '- [ ] `npm run validate` passes',
  ].join('\n');
}

async function verifyTurnstile(secret, token, ip) {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const data = await res.json().catch(() => ({ success: false }));
  return Boolean(data.success);
}

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = env.ALLOWED_ORIGIN || '*';
  const allow = allowed === '*' ? '*' : origin === allowed ? origin : allowed;
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function clientIp(request) {
  return request.headers.get('CF-Connecting-IP') || '';
}

function yamlStr(s) {
  return JSON.stringify(String(s || ''));
}

function toBase64(str) {
  // UTF-8 safe base64 for the GitHub contents API.
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
