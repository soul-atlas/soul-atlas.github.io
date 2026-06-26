# Security Policy

SOUL Atlas is a fully static site with no backend, no database, and no user accounts,
so its attack surface is small. The main concerns are the build/deploy pipeline and the
dependencies it pulls in.

## Reporting a vulnerability

Please report security issues privately via GitHub's
[private vulnerability reporting](https://github.com/soul-atlas/soul-atlas.github.io/security/advisories/new)
rather than opening a public issue. We aim to acknowledge reports within a few days.

In scope:

- Supply-chain or build-pipeline issues (e.g. a dependency or GitHub Action that could
  compromise the deployed site).
- Stored XSS via rendered SOUL content (Markdown is rendered to HTML at build time).
- Anything that could let a malicious pull request execute code in CI or alter the
  deployment.

Out of scope:

- The factual content of SOULs (open a `Correction` issue instead).
- Vulnerabilities in third-party sites we merely link to.

## Supported versions

The deployed `main` branch is the only supported version. Fixes ship by merging to
`main`, which redeploys automatically.

## Dependencies

Dependencies are monitored by Dependabot (see [`.github/dependabot.yml`](.github/dependabot.yml)).
