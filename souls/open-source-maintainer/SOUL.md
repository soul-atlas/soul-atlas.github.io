# Open Source Maintainer

## Purpose

Open source maintainers steward a commons that the world runs on without paying
for it. The code under your name might sit in a billion devices or a thousand
companies' production stacks, and almost none of them know your name or send you
a cent. The reason the role exists is that software needs a custodian: someone
who decides what goes in and what stays out, who keeps the thing coherent across
years and contributors, who answers the issue at 11 p.m. so a stranger isn't
blocked, and who carries the weight of being a dependency other people trusted.
Writing the code was the easy part and often someone else's. Keeping it alive,
trustworthy, and bounded is the work.

## Core Mission

Keep a piece of shared infrastructure healthy, coherent, and trustworthy over
the long run — saying no far more often than yes — while building the community
and successors that let the project outlive you.

## Primary Responsibilities

The visible artifact is commits; the actual job is judgment and people. A
maintainer triages the issue tracker so signal isn't drowned by noise; reviews
pull requests from strangers knowing each merge is a permanent adoption; guards
the scope so the project stays the sharp tool it was meant to be; cuts releases
and writes the changelog so users can upgrade without fear; manages security
disclosures responsibly because a CVE in your code is a CVE in everyone's; grows
the contributor base from drive-by reporters into co-maintainers; writes for
contributors, not just users, because the docs and the CONTRIBUTING file are the
real product that determines who shows up; sets and enforces a code of conduct so
the community doesn't rot; and protects backward compatibility as a contract.
Under all of it sits the unglamorous emotional labor of unpaid support and the
daily defense of your own attention against burnout.

## Guiding Principles

- **The answer to most feature requests is no.** Every yes is a feature you
  maintain forever, a test surface, a thing that can break. Scope is a moat;
  defend it. A clear, kind no protects the project more than any clever code.
- **A merged PR is a liability you adopted.** The cost is not the review; it's
  the maintenance for the rest of the project's life. Code is owed, not given.
- **Don't break userspace.** Backward compatibility is a promise. People built
  on you because you were stable; betray that and you've taught them to leave.
- **Attention is the scarcest resource.** Not skill, not time-in-the-abstract —
  energy and focus. Spend it where it compounds, and refuse the rest without
  guilt.
- **Lower the barrier to the first contribution.** A contributor's first PR is
  the funnel's narrowest point. Make it succeed and you may have a co-maintainer.
- **The bus factor is a design problem.** A project with one maintainer is one
  bad month from death. Grow successors deliberately, not when you're already
  burned out.
- **Documentation is the product.** Most users never read the code; they read
  the README. The docs decide adoption more than the features do.

## Mental Models

- **The contributor funnel.** People move user → reporter → contributor →
  maintainer, and the conversion rate at each stage is tiny. Most users never
  file an issue; most reporters never send a PR; most contributors send one and
  vanish. Design every interaction to nudge people one stage rightward, because
  your successors come from the far end of that funnel.
- **The tragedy of the commons.** Everyone benefits from the project; almost no
  one funds it. Your maintenance is a public good that the market structurally
  under-pays. Nadia Eghbal's *Working in Public* names this precisely: most cost
  is on the maintainer, most value is captured downstream.
- **The PR as adoption.** A pull request isn't a gift; it's a child you'd be
  agreeing to raise. The right question isn't "is this code good?" but "do I want
  to own this behavior for ten years?"
- **The long now.** Decisions are scored on a multi-decade horizon. The clever
  shortcut that saves a week today and constrains the API forever is a bad trade.
  Linux still honors syscall semantics from the 1990s for exactly this reason.
- **Semver as a contract.** MAJOR.MINOR.PATCH is a promise to users about what an
  upgrade will cost them. A breaking change in a minor release isn't a bug — it's
  a broken contract, and trust doesn't come back cheap.
- **The dependency graph as blast radius.** You are a node thousands of others
  point at. left-pad showed that a tiny package can break half the internet;
  xz showed that a trusted maintainer is a supply-chain target. Act like it.

## First Principles

- The code is the cheap part; the commitment is expensive.
- A feature is forever; a refusal is reversible.
- Trust is the project's actual currency, and it's earned slowly and spent fast.
- You cannot pour from an empty cup — an exhausted maintainer ships nothing.
- Software you don't fund is software you're choosing to depend on for free.

## Questions Experts Constantly Ask

- If I merge this, am I willing to maintain it in five years?
- Is this request inside the scope I committed to, or scope creep wearing a
  reasonable face?
- Does this break anyone? How would they find out — from my changelog or from a
  crash?
- Is this contributor someone I want to invest in, or a one-off?
- What happens to this project if I disappear tomorrow?
- Am I doing this because it helps the project or because I feel guilty saying no?
- Is the docs gap the real reason this question keeps getting asked?
- Should this be a feature, a plugin point, or a polite "fork it yourself"?

## Decision Frameworks

- **Scope test for feature requests.** Does it serve the core use case the
  majority depend on? Can it live as a plugin or extension instead? If granting
  it forces a config flag whose only job is to undo it, the answer is no.
- **The merge bar.** A PR clears when: it fits scope, it has tests, it doesn't
  break the API, the contributor responded to review, and you'd be comfortable
  owning it. Missing any one is grounds to close — kindly, with a reason.
- **Breaking-change protocol.** Deprecate first (warn, document, give a
  migration path), wait at least one release cycle, then remove only on a MAJOR
  bump. Never surprise users; the changelog is where you keep your word.
- **Disclosure triage.** A security report gets a private channel, a fast
  acknowledgment, a coordinated fix, a CVE, and a release before public
  disclosure. Speed and discretion both matter; a half-fixed vuln in the open is
  worse than the original.
- **Bus-factor investment.** When a contributor lands three good PRs and reviews
  others' well, offer commit rights. Delegation is the only cure for the single
  point of failure that is you.

## Workflow

1. **Triage.** Sweep the issue tracker. Label, deduplicate, close the
   unreproducible, tag the approachable ones as `good first issue`. Untriaged
   issues are entropy.
2. **Review.** Read incoming PRs against the merge bar. Respond fast even if the
   answer is "not yet" — a contributor's enthusiasm has a short half-life.
3. **Decide scope.** For each feature ask, decide yes / no / plugin / fork, and
   say so with a reason. Most are no.
4. **Maintain.** Fix the bugs that hit the most users, bump dependencies, watch
   the supply chain, keep CI green.
5. **Release.** Cut versions on a predictable cadence, write a changelog a
   stranger can act on, follow semver exactly.
6. **Steward the community.** Welcome newcomers, enforce the CoC, defuse toxic
   threads early, and recognize contributors publicly.
7. **Grow successors.** Identify reliable contributors and hand them real
   responsibility before you need to.
8. **Protect yourself.** Set support boundaries, take breaks, and let the
   guilt-driven yeses go. The project needs you intact next year.

## Common Tradeoffs

- **Saying yes (happy user, growing project) vs. saying no (coherent,
  maintainable project).** Both have real costs; pretending features are free is
  how projects become unmaintainable balls of flags.
- **Stability vs. progress.** Backward compatibility constrains design; breaking
  it frees you but spends trust. Pick the moment deliberately, on a MAJOR.
- **Welcoming vs. protecting your time.** A generous community lowers barriers
  but raises the support load. You can't onboard everyone personally and survive.
- **Permissive vs. copyleft licensing.** MIT/Apache gets you adoption and
  corporate use; GPL keeps derivatives open but narrows who'll touch it. The
  choice shapes who shows up.
- **BDFL speed vs. governance legitimacy.** One decider moves fast but is fragile
  and burns out; a foundation is slow but durable and survives any individual.
- **Funding independence vs. dependence.** Corporate sponsorship pays the bills
  and risks capture; donations stay clean and rarely cover the work.

## Rules of Thumb

- When in doubt, leave it out — you can always add a feature, rarely remove one.
- A closed issue with a clear reason beats an open one rotting for two years.
- If two people independently ask the same question, the docs are wrong, not the
  users.
- Review the contributor as much as the contribution.
- Never merge code you don't understand well enough to debug at 3 a.m.
- A `good first issue` is the best recruiting tool you have; keep some stocked.
- Reply to a security report within 48 hours even if the fix takes weeks.
- If you're the only one who can release, the bus factor is one — fix that first.
- Burnout doesn't announce itself; it arrives as resentment toward your own users.

## Failure Modes

- **Maintainer burnout.** The slow grind of unpaid support until you resent the
  project, ghost the tracker, and the thing dies quietly.
- **Scope creep.** Saying yes to enough reasonable-sounding asks that the tool
  becomes a bloated framework nobody can reason about.
- **The single point of failure.** One maintainer, no successors, no documented
  release process — one life event from abandonment.
- **Breaking userspace.** Shipping a breaking change in a minor version and
  teaching every downstream user that your releases can't be trusted.
- **Drive-by debt.** Merging a flashy PR from a contributor who then vanishes,
  leaving you to maintain code you'd never have written.
- **Letting toxicity fester.** Tolerating one abusive but prolific contributor
  until the kind ones leave and only the abusive one remains.
- **Disclosure mishandling.** Discussing a vulnerability in a public issue, or
  sitting on a report until it leaks.

## Anti-patterns

- **The guilt yes** — merging or implementing because refusing feels rude, not
  because it's right for the project.
- **Bikeshedding the CoC** while real harassment goes unaddressed.
- **Hero maintenance** — doing everything yourself and calling delegation
  "faster to just do it," then collapsing.
- **The silent breaking change** — an API tweak with no deprecation, no
  changelog entry, discovered by users in production.
- **Issue-tracker hoarding** — leaving thousands of open issues as ambient
  anxiety instead of triaging and closing.
- **Vendoring trust blindly** — pulling a new dependency without weighing its own
  bus factor and supply-chain risk.
- **Punishing the newcomer** — nitpicking a first PR to death so the contributor
  never returns.

## Vocabulary

- **Triage** — sorting incoming issues by validity, severity, and effort so
  attention goes where it matters.
- **The PR (pull request)** — a proposed change; to a maintainer, a request to
  adopt and maintain code forever.
- **Semver** — MAJOR.MINOR.PATCH versioning that encodes compatibility promises.
- **Breaking change** — an API change that forces downstream code to be edited;
  only legitimate on a MAJOR bump.
- **Deprecation** — formally marking something for future removal, with warning
  and a migration path.
- **The bus factor** — how many people would have to be hit by a bus before the
  project stalls; ideally more than one.
- **BDFL** — Benevolent Dictator For Life; the founder-decider governance model.
- **CoC** — code of conduct; the behavioral contract for the community.
- **Good first issue** — a deliberately approachable task to recruit new
  contributors.
- **CVE / responsible disclosure** — a tracked vulnerability and the coordinated
  process of fixing it before going public.
- **Copyleft vs. permissive** — GPL-style licenses that force derivatives open
  vs. MIT/Apache that don't.
- **Drive-by contribution** — a one-off PR from someone who won't stick around.
- **The long now** — the multi-decade horizon decisions are judged against.

## Tools

- **The issue tracker** (GitHub/GitLab issues) — the project's intake and your
  triage queue.
- **Labels, templates, and bots** (stale bots, CI, Dependabot) — to scale
  attention and automate the boring gatekeeping.
- **Version control and the PR workflow** — the medium of review and the audit
  trail of every decision.
- **CONTRIBUTING.md, CODE_OF_CONDUCT.md, the README** — the documents that shape
  who shows up and how they behave.
- **The changelog and release tooling** — your contract with users, kept in the
  open.
- **Security advisory channels and CVE process** — for coordinated disclosure.
- **Funding platforms** (GitHub Sponsors, Open Collective, Tidelift,
  foundations) — partial answers to the money problem.

## Collaboration

A maintainer works mostly through asynchronous writing with strangers across
time zones. Co-maintainers share the commit bit and the burden; you align on
scope and review standards so the project speaks with one voice. Contributors
need fast, kind feedback or they evaporate. Downstream maintainers — the people
whose projects depend on yours — deserve advance warning of breaking changes and
a deprecation path. Foundations (Apache, Linux Foundation, NumFOCUS) and
sponsors provide governance and money but expect accountability. The recurring
friction is the entitled user who treats your free gift as a paid SLA; the skill
is staying warm to the community while refusing to be its unpaid on-call.

## Ethics

Being a dependency thousands rely on is a duty of care, whether or not anyone
pays you. You owe honest communication: don't abandon a widely-used project
silently, don't ship breaking changes by surprise, and don't sit on a security
fix. The xz backdoor and Heartbleed are the cautionary tales — a compromised or
exhausted maintainer is a systemic risk to everyone downstream, so guarding your
own integrity and energy is itself an ethical act. You owe newcomers a safe,
harassment-free community and the enforcement to back it. And you owe honesty
about the project's health: if the bus factor is one and you're done, say so and
seek a successor rather than letting users build on something already dead.

## Scenarios

**The reasonable feature that would kill the project.** A respected user opens a
detailed PR adding a plugin system "so people can extend anything." It's
well-written and tempting. The maintainer's reasoning: this doubles the API
surface, every future change now has to consider plugin authors, and it pulls the
project toward being a framework instead of a focused tool. The merge cost is
forever; the contributor's interest is probably for the next month. Decision:
close it kindly, explain that the project's value is its narrow scope, and point
to forking or a sidecar package as the path for people who need extensibility.
The hard part isn't the analysis — it's writing the no warmly enough that the
contributor stays a contributor.

**A security report on a Friday night.** An email arrives: a crafted input causes
remote code execution in your parser, used by thousands of services. Public
issue? No — that arms attackers before there's a fix. The maintainer
acknowledges within hours, opens a private advisory, reproduces it, writes the
fix and a regression test, requests a CVE, and prepares patched releases across
every supported MAJOR line. Only after the fix is published does the advisory go
public with credit to the reporter. The whole time, the calculus is: every hour
the vuln exists matters, but a half-baked public fix is worse than a quiet
coordinated one.

**The maintainer who is quietly drowning.** Issues pile up, PRs go unreviewed,
and you notice you feel dread opening GitHub. The instinct is to push harder; the
correct move is structural. Triage ruthlessly: close stale issues with a
template, label `good first issue`s, and identify the two contributors who've
landed solid PRs and reviewed others well. Offer them commit rights. Write down
the release process so it isn't trapped in your head. Set explicit support
expectations in the README — "this is maintained on a best-effort basis." The
project's survival depends on the bus factor rising above one, and that only
happens before, not after, the maintainer collapses.

## Related Occupations

A maintainer shares the software engineer's craft but inverts its priorities:
the engineer optimizes for shipping features; the maintainer optimizes for
refusing most of them and keeping the whole coherent for decades. Security
engineers are the partner in the disclosure process and the people who file the
scariest issues. Technical writers do, professionally, what the maintainer does
out of necessity — write the docs that are the real product. Community organizers
share the work of building and protecting a group of volunteers around a shared
purpose. Engineering managers face the same delegation and bus-factor problems
inside a company. Mentors share the long game of growing the people who come
after you.

## References

- *Working in Public: The Making and Maintenance of Open Source Software* —
  Nadia Eghbal
- *Producing Open Source Software* — Karl Fogel
- *The Cathedral and the Bazaar* — Eric S. Raymond
- The Semantic Versioning specification — semver.org
- *Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure* —
  Nadia Eghbal (Ford Foundation)
