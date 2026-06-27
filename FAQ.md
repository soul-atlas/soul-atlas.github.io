# Frequently Asked Questions

## What is a SOUL, really?

A structured Markdown file that captures **how an expert in a field thinks** — their
mental models, instincts, decision frameworks, tradeoffs, heuristics, failure modes,
vocabulary, and ethics. It's the tacit knowledge that usually only transfers through
years of apprenticeship.

## Who writes these — experts or AI?

Right now, mostly AI. The launch corpus was machine-drafted to create a consistent
starting point across every domain, and we say so plainly: those entries are marked
`provenance: ai-generated`, `status: draft`, and carry an **"AI-drafted ·
unverified"** badge until a human who does the work has checked them. The drafts are
uneven — concrete trades tend to come out specific and useful; more abstract roles
can read like paraphrase. That's exactly where you come in. When a practitioner
reviews a SOUL, they're credited in `reviewers` and the badge flips to
**"Practitioner-reviewed."** The goal isn't 383 AI drafts — it's 383 entries that
people who do the work have stood behind. See [`/suggest`](https://soul-atlas.github.io/suggest).

## How is this different from a prompt?

A prompt instructs a model for one task and is tuned to a specific model. A SOUL is a
durable, human-readable artifact about a *domain*. It can be used to ground a prompt or
an AI agent, but it isn't one — it's worth reading on its own, has version history, and
lives in a graph of related minds.

## How is it different from documentation or a wiki?

Documentation tells you *what* something is or how a procedure runs. A SOUL tells you
*how to think* about the domain — the judgment that chooses between procedures when the
manual runs out. Wikipedia describes the profession of nursing; a nurse's SOUL tries to
let you borrow a nurse's instincts.

## Isn't this just stereotyping a profession?

A good SOUL describes a *way of thinking*, not the people who hold a job, and it names
real variation (specializations, country variants, controversies). It's a model, and
like all models it's useful and incomplete. The open, versioned, community-reviewed
process is how it stays honest.

## Who writes these? Are they authoritative?

Contributors with real understanding of the work, refined through public review. A SOUL
is a living best-effort distillation, not a credentialed standard. Every page links to
its history, contributors, and an "edit" button. If one is wrong, fix it.

## Can I use SOULs to train AI models?

Yes. The corpus is released under the MIT License, and AI training is explicitly encouraged. The
machine-readable API (`/api/...`) exists precisely so systems can consume it.

## How do I use a SOUL with an AI assistant?

Fetch `/api/occupations/<slug>.md` (or `.json`) and include it as context/system
material when you want the assistant to reason like a domain expert. The structured
sections map cleanly onto how you'd brief a new hire.

## Why static? Why no database?

Longevity, cost, forkability, and trust. A static repo can be archived, mirrored, and
read decades from now with no running infrastructure. Everything is derivable from the
corpus, so the "database" is just files in git.

## How big can it get?

The architecture targets 10,000+ SOULs and 100,000+ relationships without redesign.
See [ARCHITECTURE.md](ARCHITECTURE.md#scalability).

## What counts as a valid SOUL topic?

Anything that has a distinctive *way of thinking* worth capturing: occupations first,
then roles, disciplines, communities, identities, life roles (parent, mentor,
caregiver), historical trades, and emerging careers. If experts in it reason
differently from everyone else, it can have a SOUL.

## How do I add or fix one?

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: `npm run new`, write from real
expertise following the [Style Guide](STYLE_GUIDE.md), `npm run validate`, open a PR.

## What license is everything under?

[MIT](LICENSE) — for both the platform code and the SOUL content. Reuse, remix,
redistribute, sell, and train freely.
