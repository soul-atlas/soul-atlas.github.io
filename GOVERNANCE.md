# Governance

SOUL Atlas aims to be a long-lived public good. Governance is intentionally light, but
explicit, so the project stays trustworthy and forkable.

## Principles

- **Open by default.** Discussion, decisions, and history happen in public on GitHub.
- **Merit and accuracy over authority.** The best argument and the most accurate
  content win, regardless of who makes it.
- **Forkability is the ultimate check.** Everything is static and under the MIT License. If
  governance fails the community, the community can fork and continue. We design to
  make that unnecessary, never impossible.

## Roles

- **Contributors** — anyone who opens an issue or PR. No prior commitment required.
- **Reviewers** — trusted contributors who review PRs in domains they understand.
  Earned through a track record of good contributions and reviews.
- **Maintainers** — hold merge rights, steward the schema and platform, and resolve
  disputes. Listed in [`CODEOWNERS`](.github/CODEOWNERS).
- **Stewards** — a small group responsible for the project's direction, the code of
  conduct, and adding/removing maintainers.

## How decisions are made

- **Content (a single SOUL):** normal PR review. One reviewer approval and green CI is
  enough to merge an improvement; new SOULs benefit from a domain-aware review.
- **Schema or platform changes:** require a maintainer approval and a short rationale in
  the PR. Changes to [`schema/`](schema/) are the contract for everything downstream
  and get extra scrutiny.
- **Direction (roadmap, policy):** proposed as an issue or PR to [ROADMAP.md](ROADMAP.md)
  / this file; stewards seek rough consensus, defaulting to the status quo when none
  emerges.

## Adding maintainers

Sustained, high-quality contribution and good judgment in review earn a maintainer
nomination from an existing maintainer, confirmed by the stewards. We'd rather grow the
maintainer pool than bottleneck on a few people.

## Conflicts of interest & accuracy

A SOUL describes a way of thinking, not a product or an employer. Contributions that
promote a vendor, a methodology-for-sale, or a single ideological line as fact will be
edited toward neutrality or declined. Genuine professional controversy should be
*named as controversy*, not silently resolved.

## Conduct

All participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). Stewards are
responsible for enforcement.

## Changing this document

This file is itself governed by the process it describes: propose changes in a PR.
