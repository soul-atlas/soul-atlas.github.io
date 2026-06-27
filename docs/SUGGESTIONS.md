# Suggestions without a GitHub account

The people best placed to fix a SOUL — practitioners who do the work — often don't
have a GitHub account or the time to learn the contribution workflow. SOUL Atlas
gives them a one-click path: a **"Suggest a change"** button on every SOUL page and
a standalone [`/suggest`](https://soul-atlas.github.io/suggest) form. Every
submission becomes a reviewable pull request.

## The flow

```text
┌─────────────┐   POST JSON    ┌──────────────────┐   GitHub API   ┌──────────────┐
│  Website    │ ─────────────▶ │  Cloudflare      │ ─────────────▶ │  branch +    │
│  form/modal │                │  Worker          │                │  record file │
│             │ ◀───── PR url ─┤  (one token)     │ ◀──── PR ──────┤  + pull req  │
└─────────────┘                └──────────────────┘                └──────────────┘
        │
        └─ no endpoint configured?  →  falls back to a prefilled GitHub issue
```

1. The visitor describes the change (or verifies the SOUL from experience),
   optionally leaving a name to be credited. They never need an account.
2. The [worker](../workers/suggest/) validates the input (honeypot, optional
   Turnstile, length caps, optional rate limit), then uses a single token it holds
   as a secret to open a PR.
3. The PR **adds a record** under `suggestions/<slug>/` — it does not touch
   `SOUL.md`. A maintainer reads it, applies the wording, credits a reviewer if the
   submitter is a practitioner, deletes the record, and merges. See
   [`suggestions/README.md`](../suggestions/README.md).

## Why a record file, not a direct edit

Letting an anonymous endpoint rewrite corpus content is a vandalism and
prompt-injection risk. Adding a record under `suggestions/` keeps every submission
visible and reviewable as a normal PR, while making it impossible to silently
change a SOUL. Maintainer review is the gate; merging is never automatic.

## Graceful degradation

If `PUBLIC_SUGGEST_ENDPOINT` is not set at build time, the form still renders and
submitting simply opens a **prefilled GitHub issue** carrying the user's text. The
site is fully functional with zero backend — the worker is an upgrade, not a
dependency.

## Setup

See [`workers/suggest/README.md`](../workers/suggest/README.md) for deploying the
worker and wiring `PUBLIC_SUGGEST_ENDPOINT` / `PUBLIC_TURNSTILE_SITE_KEY`.

## Privacy

- Name and email are optional. Blank name → the PR records "an anonymous
  contributor."
- Email, if given, is only used to follow up and is never published.
- Submissions are licensed under the project's MIT License, like all contributions.
