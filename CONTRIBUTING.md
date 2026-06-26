# Contributing to SOUL Atlas

Thank you for helping map how humans think. Every SOUL you add or improve makes the
Atlas more useful to the next reader — human or machine.

There are three ways to contribute, in rough order of value:

1. **Improve an existing SOUL** — sharpen a heuristic, add a failure mode, fix a
   mischaracterization. The fastest way to learn the format.
2. **Add a new SOUL** — capture a way of thinking that isn't here yet.
3. **Improve the platform** — the engine, website, schema, or docs.

## Before you start

- Read the [Style Guide](STYLE_GUIDE.md) — it's the difference between a SOUL and a
  job description.
- Skim a gold-standard example: [`occupations/software-engineer/SOUL.md`](occupations/software-engineer/SOUL.md).
- A SOUL must come from **real understanding** of the work. You don't have to be the
  world's leading expert, but you must be honest about how the work is actually done.

## Adding a new SOUL

```bash
# 1. Scaffold the two files from the canonical templates
npm run new -- --title "Glassblower" --category "Skilled Trades" \
  --summary "Shapes molten glass by breath, gravity, and timing."

# 2. Write occupations/glassblower/SOUL.md — fill every required section
#    with dense, concrete, first-hand-feeling content. No filler.

# 3. Fill in occupations/glassblower/metadata.yaml — tags, difficulty,
#    and 4–6 typed `related` edges to occupations that already exist.

# 4. Validate locally
npm run validate

# 5. Preview it on the site
npm run dev
```

### Categories

Pick exactly one primary `category` from the allowed set (see
[`schema/metadata.schema.json`](schema/metadata.schema.json)): Technology, Healthcare,
Skilled Trades, Engineering, Science, Education, Business, Government, Military, Law,
Transportation, Agriculture, Hospitality, Creative, Sports, Entertainment, Finance,
Public Service, Historical, Emerging, Life Roles.

### Relationships

Connect your SOUL into the graph with 4–6 `related` entries, using varied types
(`related`, `specialization`, `prerequisite`, `adjacent`, `collaboration`,
`progression`). Reference only slugs that already exist. A well-connected SOUL is far
more useful than an island.

## Pull request checklist

- [ ] `npm run validate` passes with **zero errors** (warnings are okay to discuss).
- [ ] `npm run check` passes (validate + lint + format).
- [ ] Every required section is present and substantive — no placeholders, no TODOs.
- [ ] The content reads like it came from a practitioner, not a textbook or a model.
- [ ] No AI clichés (see the Style Guide's banned-phrases list).
- [ ] `metadata.yaml` is complete; `slug` matches the directory name.
- [ ] Relationships point to real slugs and use appropriate types.
- [ ] One SOUL (or one focused improvement) per pull request when practical.

CI runs validation, linting, formatting, link and graph-integrity checks, and a full
build on every PR. Deployment to GitHub Pages happens automatically on merge to `main`.

## Reviews

Reviews focus on **accuracy and insight**, not prose polish. A reviewer who knows the
field may push back on a heuristic — that's the system working. Treat review as
collaborative distillation. See [GOVERNANCE.md](GOVERNANCE.md) for how decisions and
maintainership work.

## Improving the platform

The engine is plain ESM under [`scripts/`](scripts/); the site is Astro + TypeScript
under [`src/`](src/). See the [Developer Guide](docs/DEVELOPER.md). Keep the project
**static, dependency-light, and scalable** — it must handle 10,000+ SOULs without an
architectural rewrite.

## Code of Conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). Be the kind of
collaborator you'd want reviewing your own work.

## Licensing of contributions

By contributing, you agree your contributions are licensed under the project's
[MIT License](LICENSE), including reuse for AI training and derivative works.
