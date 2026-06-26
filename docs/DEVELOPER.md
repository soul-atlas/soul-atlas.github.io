# Developer Guide

How to work on the SOUL Atlas platform (the engine and the website). For writing SOULs,
see [CONTRIBUTING.md](../CONTRIBUTING.md) and [STYLE_GUIDE.md](../STYLE_GUIDE.md).

## Prerequisites

- Node.js **≥ 18.17** (the engine scripts are plain ESM; no transpile step).
- npm.

## Setup

```bash
npm install
npm run dev        # generate data + Astro dev server (http://localhost:4321)
```

`npm run dev` runs `generate` first so `src/generated/` exists, then starts Astro.
When you add or edit a SOUL, re-run `npm run generate` (or restart `dev`) to refresh
the derived data.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Generate + dev server. |
| `npm run build` | Generate + `astro build` + Pagefind search index → `dist/`. |
| `npm run preview` | Serve the production build. |
| `npm run generate` | Rebuild `src/generated/` and `public/api/` from `occupations/`. |
| `npm run validate` | Schema + section + relationship validation (CI gate). |
| `npm run stats` | Print quick corpus statistics. |
| `npm run new -- --title "…" --category "…"` | Scaffold a new SOUL. |
| `npm run lint` / `npm run format` | ESLint + markdownlint / Prettier. |
| `npm run check` | validate + lint + format check. |

## Project layout

```text
scripts/            # the content engine (plain ESM, no build step)
  lib/              # paths, markdown, corpus, git, stats
  generate.mjs      # writes src/generated + public/api
  validate.mjs      # the CI validation gate
  new-occupation.mjs
src/
  lib/              # data.ts (typed corpus access), site.ts (config + url helpers)
  layouts/          # Layout.astro
  components/       # GraphView, CommandPalette, SoulCard, Header, Footer, ThemeToggle
  pages/            # routes + API-adjacent endpoints
  styles/global.css # design tokens + prose styles
  generated/        # (gitignored) engine output consumed by the site
schema/             # the format contract
public/             # static assets; public/api is generated
```

## How data reaches a page

1. `generate.mjs` reads `occupations/`, computes everything, and writes
   `src/generated/{index,graph,stats,manifest,activity,search}.json` and
   `src/generated/souls/<slug>.json`.
2. `src/lib/data.ts` imports those (full records via `import.meta.glob`) and exposes
   typed helpers (`souls`, `graph`, `stats`, `getRecord`, `categoryColor`, …).
3. Pages import from `data.ts`. `occupations/[slug].astro` uses `getStaticPaths` over
   `allRecords()`.

Never read `occupations/` from a page directly — go through the engine so the API and
the website never diverge.

## Conventions

- **Base path:** all internal links go through `url()` / `soulUrl()` in `site.ts`. The
  site must work at `/` and at `/<repo>` unchanged. Don't hardcode `/` paths.
- **Styling:** Tailwind utilities + CSS custom properties (`--ink`, `--bg`, `--accent`,
  …) defined in `global.css`. Respect light/dark by using the tokens, not fixed colors.
- **Client JS:** keep it minimal and progressive. Inline `is:inline` scripts for small
  enhancements; a module `<script>` (bundled by Astro) for D3.
- **Engine purity:** `lib/stats.mjs` is pure (no I/O). Keep computation there and I/O in
  `generate.mjs`, so logic stays testable.

## Environment variables

Copy `.env.example` to `.env` to override defaults:

- `SITE_URL` — canonical origin (sitemap, canonical URLs, RSS).
- `BASE_PATH` — `/` for a user/org page, `/<repo>` for a project page.
- `GITHUB_REPO` — used for edit/history/blame deep links.

## Adding to the schema

Edit [`schema/sections.json`](../schema/sections.json) (the single source for the
section list) or [`schema/metadata.schema.json`](../schema/metadata.schema.json). The
template, validator, docs, and website all derive from these — change them in one place
and run `npm run validate` + `npm run build` to confirm the whole pipeline still holds.

## Performance & scale

- The build is per-occupation independent; full records are separate files.
- Brandes betweenness in `stats.mjs` is capped by node count and skips on large graphs;
  degree centrality always runs.
- The graph view reduces label density and force strength as the node count grows.

## Troubleshooting

- **`src/generated` missing / stale data:** run `npm run generate`.
- **Search empty in dev:** Pagefind only indexes the built site; run `npm run build`
  then `npm run preview`. The ⌘K palette works in dev regardless.
- **Wrong links after deploy:** check `BASE_PATH` matches how the site is served.
