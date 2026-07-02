# Skills: equipping a SOUL with Agent Skills

A SOUL captures **how an expert thinks**. A **skill** captures **what that
expert can do** — an executable, progressively-disclosed capability. SOUL Atlas
does not invent a new skill format: a skill is a standard
[**Agent Skill**](https://agentskills.io/specification), reused as-is. The SOUL
supplies the mindset; a skill supplies a procedure the model (or a person) can run.

A SOUL with no skills behaves exactly as before — skills are optional and additive.

## Add a skill to a SOUL

Drop a spec-compliant Agent Skill directory under the SOUL's `skills/` folder:

```text
souls/barista/
├── SOUL.md                       # the mindset (unchanged)
├── metadata.yaml
└── skills/
    └── espresso-dial-in/         # folder name must equal the skill `name`
        ├── SKILL.md              # required: YAML frontmatter + instructions
        ├── scripts/ratio.py      # optional: runnable code
        └── references/…          # optional: docs loaded on demand
```

`SKILL.md` follows the Agent Skills spec — minimally:

```markdown
---
name: espresso-dial-in            # 1–64 chars, lowercase/digits/hyphens, == folder
description: Dial in an espresso shot… Use when a shot tastes sour/bitter…  # what + when
license: MIT                      # optional
---

# Espresso dial-in
…step-by-step instructions, examples, edge cases…
```

Keep `SKILL.md` focused (the spec recommends < ~500 lines); move detail into
`references/` and code into `scripts/`. See
[the specification](https://agentskills.io/specification) for all frontmatter
fields (`compatibility`, `metadata`, `allowed-tools`).

## What the engine does

`scripts/lib/corpus.mjs` discovers each SOUL's `skills/`, parses every
`SKILL.md`, and records `{ name, description, license, compatibility,
allowedTools, metadata, bodyHtml, files, valid }`. A skill is `valid` when its
`name` matches its folder and it has a non-empty `description` (surfaced, not
gated). `generate.mjs` then:

- adds `skills` to the full record (`src/generated/souls/<slug>.json`) and
  `skillCount` to the light list;
- copies each skill directory **verbatim** into
  `public/api/souls/<slug>/skills/<name>/…`;
- writes a manifest at `public/api/souls/<slug>/skills.json`.

## API

| Endpoint | Description |
| --- | --- |
| `/api/souls/<slug>.json` | Full record; now includes a `skills` array |
| `/api/souls/<slug>/skills.json` | Manifest: names, descriptions, paths, files |
| `/api/souls/<slug>/skills/<name>/SKILL.md` | The skill itself (+ its `scripts/`, `references/`) |

## Using an equipped SOUL

- **Mindset only (unchanged):** fetch `/api/souls/<slug>.md` and put it in the
  system prompt.
- **Equipped:** read `skills.json`, then mount each skill directory into an
  Agent-Skills-compatible runtime (e.g. Claude Code). The runtime loads skills
  *progressively* — name + description always, the full `SKILL.md` when relevant,
  `scripts/`/`references/` only when needed.
- **Plain model (no native skill support):** inline each skill's name +
  description as an available-capabilities menu and expose `scripts/` as tools.

## Security

Skills can contain **runnable code**. The corpus is community-contributed, so
treat an unverified skill as a starting point and review its code before running
it. Honour each skill's `allowed-tools`, prefer sandboxed execution, and never
auto-run skill scripts at build time.
