# Suggestion → PR worker

A tiny [Cloudflare Worker](https://workers.cloudflare.com/) that lets anyone
suggest a change to a SOUL **from the website, without a GitHub account**, and
turns each submission into a reviewable pull request.

It is the only server-side piece of SOUL Atlas. Everything else is static. The
site works fine without it — the suggestion box falls back to opening a prefilled
GitHub issue — but deploying this gives non-technical practitioners a one-click
path in.

## How it works

```
Website form  ──POST JSON──▶  Worker  ──GitHub API──▶  branch + record file + PR
                               │
                               ├─ honeypot + (optional) Turnstile bot check
                               ├─ length/shape validation + optional KV rate limit
                               └─ holds ONE token; submitters stay anonymous
```

The worker never edits `SOUL.md` directly. It adds a record under
`suggestions/<slug>/` and opens a PR with a maintainer checklist. A maintainer
folds the wording into the SOUL, optionally credits a practitioner reviewer, and
deletes the record file before merging. This keeps hostile input from silently
corrupting content while still guaranteeing every suggestion becomes a PR.

## One-time setup

1. **Create a token** with the minimum scope. Either:
   - A **fine-grained PAT** on the repo with **Contents: read/write** and
     **Pull requests: read/write**, or
   - A **GitHub App** installation token with the same permissions (preferred for
     orgs — it shows up as the app, not a person).
2. **Configure & deploy:**
   ```bash
   cd workers/suggest
   npm i -g wrangler            # or use npx
   wrangler secret put GITHUB_TOKEN
   wrangler secret put TURNSTILE_SECRET   # optional, recommended
   wrangler deploy
   ```
   Edit `wrangler.toml` to set `GITHUB_REPO` and `ALLOWED_ORIGIN` for your fork.
3. **Point the site at it.** Set the build-time env var so the form posts here:
   ```
   PUBLIC_SUGGEST_ENDPOINT=https://soul-atlas-suggest.<you>.workers.dev
   PUBLIC_TURNSTILE_SITE_KEY=<your-turnstile-site-key>   # optional
   ```
   (See [`.env.example`](../../.env.example).) Rebuild and deploy the site.

## Abuse controls

- **Honeypot** field that bots fill and humans never see.
- **Cloudflare Turnstile** (optional) — set `TURNSTILE_SECRET` + the site key.
- **Rate limiting** (optional) — bind a KV namespace as `RL` for 5 / 10 min / IP.
- **No direct content writes** — PRs only add a record file; nothing merges
  automatically. Maintainer review is the final gate.

## Local development

```bash
cd workers/suggest
wrangler dev
```

`wrangler dev` proxies to your secrets; use a throwaway test repo for `GITHUB_REPO`
while iterating.
