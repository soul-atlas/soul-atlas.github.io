# Federation

The Atlas is mostly **authored** — SOULs written and verified here. But some ways of
thinking already live in other open collections. Rather than re-author or ignore them,
the Atlas can **federate** them: mirror the upstream file, attribute it, link back, and
keep it clearly separate from the work we stand behind.

> **Federate, don't absorb.** A federated SOUL is a guest. It's browsable and searchable,
> but it never claims to be ours and never counts toward our authored quality signals.

## How it works

Federated SOULs live under a separate root, one subdirectory per upstream origin:

```text
mirrored/
└── souls-directory/
    └── <handle>-<slug>/
        ├── SOUL.md         # the upstream content, lightly normalized
        └── metadata.yaml   # kind: agent-persona + a `source` block
```

The corpus loader reads **both** `souls/` (authored) and `mirrored/<origin>/<slug>/`
(federated). What makes an entry federated is its [`source`](SCHEMA.md) block, not its
location — `federated: true` is derived from `source.origin`.

Federated entries are treated differently throughout:

- **Schema, yes; sections, no.** Their `metadata.yaml` is fully validated, but they're
  exempt from the authored section spec (their shape is the upstream's, e.g. values /
  tone / vibe), so `npm run validate` doesn't fail them.
- **Out of authored signal.** They're excluded from the knowledge graph, the repository
  activity heatmap, and the headline quality shares (verified / stable / incomplete /
  orphan). They still appear in the `kind` and category breakdowns.
- **Badged as external.** Each page shows an "External · `<origin>`" badge, a "Mirrored
  from" notice, and a **Source** card (license, fetch date, link-back) instead of the
  verification + suggest-a-change UI.

## souls.directory adapter

[souls.directory](https://souls.directory) is an MIT-licensed directory of `SOUL.md`
**agent personas** for OpenClaw agents. They're not "how an expert thinks" — so they're
federated as `kind: agent-persona`, deliberately fenced off from the authored core.

The souls live in a live API (not the GitHub repo), so the adapter sources them there:

```bash
npm run ingest:souls-directory                      # a small curated sample (default)
npm run ingest:souls-directory -- --limit 20 --per-category 3
```

It curates across categories via `GET /api/souls/search`, fetches each raw
`SOUL.md` from `GET /api/souls/{handle}/{slug}.md`, maps the upstream category onto our
domains, namespaces the slug as `<handle>-<slug>`, and writes a `source` block crediting
the upstream author under their MIT license. Re-running refreshes the mirror from
scratch, so upstream removals don't leave stale copies.

## Adding another source

The infrastructure is origin-agnostic. To federate a new collection: write an adapter
that emits `mirrored/<origin>/<slug>/{SOUL.md,metadata.yaml}` with a valid `source`
block (and an appropriate `kind`). Everything downstream — loader, validation exemption,
stats/graph exclusion, badges — already handles it.
