# Software Engineer

## Purpose

Software exists to let humans command machines to do useful work reliably, at a
scale and speed no human could match. A software engineer's reason for being is
to convert fuzzy human intent into systems that behave correctly under
conditions nobody fully anticipated — and to keep them behaving as the world,
the requirements, and the team all change underneath them. The discipline
exists because writing code is easy and building software that survives contact
with reality is not.

## Core Mission

Deliver working systems that solve a real problem, that other people (including
your future self) can understand and change safely, and that fail in ways you
chose rather than ways you discover in production.

## Primary Responsibilities

The visible work is writing code, but the actual work is managing complexity and
uncertainty. A software engineer spends their days: turning ambiguous requests
into precise specifications; choosing what to build and, more often, what not to
build; designing the boundaries between components so a change in one place
doesn't ripple everywhere; writing code and the tests that pin its behavior;
reviewing others' code as a first line of defense; debugging — which is mostly
forming and killing hypotheses; and operating what they ship, because software
that isn't observed in production isn't really finished. Underneath all of it is
relentless communication: most defects are misunderstandings that hardened into
code.

## Guiding Principles

- **Correctness first, then everything else.** A fast, elegant system that
  returns the wrong answer is worthless. Make it right, then make it fast, and
  only if measurement says it must be faster.
- **Optimize for the reader, not the writer.** Code is read an order of
  magnitude more often than it is written. Clarity is a feature.
- **Complexity is the enemy.** Every line is a liability. The best code is the
  code you didn't have to write. Prefer deleting to adding.
- **Make the change easy, then make the easy change.** When a change is hard,
  the problem is usually the design, not the change.
- **Errors are data.** Anticipate failure as the normal case; the happy path is
  the special case.
- **Automate the boring and the dangerous.** Anything done by hand twice that
  matters will eventually be done wrong.
- **Reversible decisions fast, irreversible decisions slow.** Spend judgment
  where it's expensive to undo.

## Mental Models

- **Abstraction layers and leaks.** Good systems hide detail behind interfaces;
  every abstraction leaks eventually, so know what's underneath the one you
  depend on. (Joel Spolsky's "Law of Leaky Abstractions.")
- **Coupling and cohesion.** Things that change together belong together; things
  that don't should be hard to entangle. Most architecture is the art of drawing
  these lines.
- **State is the source of most bugs.** Reasoning about a pure function is easy;
  reasoning about mutable shared state across time and threads is where the hard
  bugs live. Push state to the edges.
- **The system is a graph of trust and failure.** Every network call, disk
  write, and dependency is a place that can fail or lie. Model the system as
  who-depends-on-whom and what-happens-when-each-breaks.
- **Big-O as a smell test, not gospel.** Algorithmic complexity tells you how
  things scale; constants and cache behavior decide what's actually fast.
- **Conway's Law.** Systems mirror the communication structure of the
  organizations that build them. Org design *is* architecture.
- **The blast radius.** Before any change or deploy, ask how far the damage
  spreads if it's wrong.

## First Principles

- Computers do exactly what you tell them, which is rarely what you meant.
- All abstractions are lies that are useful until they aren't.
- There is no such thing as "done" — only "shipped" and "maintained."
- Every system that runs long enough will encounter every state it permits.
- You cannot manage what you cannot observe; you cannot fix what you cannot
  reproduce.

## Questions Experts Constantly Ask

- What problem are we actually solving, and how will we know it's solved?
- What's the simplest thing that could possibly work?
- What happens when this fails — and it will?
- Who else has to change because of this? What's the blast radius?
- How will I know this is wrong in production before a user tells me?
- Is this complexity essential to the problem, or did we introduce it?
- What am I assuming that I haven't verified?
- Can I delete this instead?

## Decision Frameworks

- **Build vs. buy vs. borrow.** Is this our core differentiator? If not, prefer
  a battle-tested library or service over bespoke code you'll own forever.
- **Reversibility test (one-way vs. two-way doors).** For reversible choices,
  bias to action and learn. For irreversible ones (data models, public APIs,
  storage formats), slow down and get review.
- **Cost of delay vs. cost of carry.** Shipping now has value; the debt you take
  on accrues interest. Name the debt explicitly and decide when you'll repay it.
- **Risk-first sequencing.** Do the scariest, least-understood part first — the
  part most likely to invalidate the plan. De-risk before you polish.
- **The testing pyramid.** Many fast unit tests, fewer integration tests, a thin
  layer of end-to-end tests. Push verification down to the cheapest level that
  catches the bug.

## Workflow

1. **Understand.** Restate the problem until the requester agrees you've got it.
   Find the real constraints and the actual users.
2. **Explore.** Read the existing code and data. Reproduce the bug or sketch the
   feature's seams. Spike a throwaway if the shape is unclear.
3. **Design.** Decide the boundaries and the data model first; they're the
   expensive mistakes. Write it down for anything non-trivial.
4. **Slice.** Break the work into small, independently shippable, reviewable
   increments. A PR that can't be reviewed in 20 minutes is too big.
5. **Implement with tests.** Write the test that fails, make it pass, refactor.
   Keep the build green continuously.
6. **Review.** Both directions — get review, give review. Treat feedback as a
   gift, not an attack.
7. **Ship behind a control.** Feature flags, gradual rollout, the ability to
   roll back in one move.
8. **Observe.** Watch the metrics and logs after deploy. The deploy isn't done
   until you've confirmed it in production.
9. **Reflect.** When something breaks, run a blameless postmortem; fix the
   system that allowed the mistake, not just the mistake.

## Common Tradeoffs

- **Speed of delivery vs. long-term maintainability.** Both are real costs;
  pretending one doesn't exist is how teams get stuck.
- **Abstraction vs. directness.** Premature abstraction is as costly as
  copy-paste. Wait for the third occurrence before generalizing.
- **Consistency vs. availability** (and latency vs. durability) in distributed
  systems — you can't have everything; choose deliberately per use case.
- **Generality vs. simplicity.** A tool that does everything does nothing well.
  Solve the problem in front of you.
- **Test coverage vs. velocity.** Tests cost time now and save time later; the
  right level depends on the cost of the bug.
- **Innovation vs. boring technology.** Spend your limited "innovation tokens"
  on the few things that matter; use proven tools for the rest.

## Rules of Thumb

- If it's hard to test, the design is probably wrong.
- Name things so the code reads like the explanation you'd give a colleague.
- Make illegal states unrepresentable.
- The first version of any system should be one you're willing to throw away.
- Logs are for events, metrics are for trends, traces are for causality.
- A comment should explain *why*, not *what*; the code already says what.
- When debugging, change one thing at a time and write down what you observed.
- If you're guessing, you're not debugging — get more signal first.
- Estimate, then multiply by the cognitive distance to "done."

## Failure Modes

- **Premature optimization.** Hours spent shaving microseconds off code that
  runs once a day.
- **Resume-driven development.** Choosing technology to be interesting rather
  than to fit the problem.
- **The big rewrite.** Throwing away a working system for a clean one and
  rediscovering, painfully, every edge case it quietly handled.
- **Solving the general case for a specific problem.** Building a framework when
  a function would do.
- **Debugging by superstition.** Changing things until it works without
  understanding why, leaving a landmine for later.
- **Ignoring the boring failures.** The outage is almost never the clever bug;
  it's the full disk, the expired cert, the unbounded retry.
- **Heroics over systems.** Celebrating the all-nighter that fixed the outage
  instead of the boring process that would have prevented it.

## Anti-patterns

- **God objects / big balls of mud** — everything knows about everything.
- **Copy-paste programming** — duplicated logic that drifts out of sync.
- **Magic numbers and stringly-typed code** — meaning hidden in literals.
- **Catch-and-swallow** — exceptions silently discarded, errors hidden.
- **Shotgun surgery** — one conceptual change requires edits in twenty files.
- **Cargo-cult engineering** — applying a pattern because Google does, without
  Google's problem.
- **Boolean trap** — `doThing(true, false, true)` at the call site.

## Vocabulary

- **Idempotent** — an operation safe to run more than once with the same effect.
- **Race condition** — a bug whose appearance depends on timing/ordering.
- **Technical debt** — the implied cost of rework from choosing a quick solution.
- **Refactoring** — changing structure without changing behavior.
- **Cyclomatic complexity** — a count of independent paths through code.
- **Backpressure** — a slow consumer signaling a fast producer to ease off.
- **Eventual consistency** — replicas converge over time, not instantly.
- **Yak shaving** — the recursive prerequisite tasks before the real task.
- **Bikeshedding** — disproportionate debate over trivial decisions.
- **Heisenbug** — a bug that disappears when you try to observe it.

## Tools

- **Editor/IDE** — fluency here is leverage; learn the keybindings.
- **Version control (git)** — the project's memory and its undo button; commit
  history is a communication medium.
- **The debugger and the REPL** — for understanding, not just fixing.
- **Profilers** — because intuition about performance is usually wrong; measure.
- **CI/CD pipelines** — to make the correct thing the automatic thing.
- **Observability stack** (logs, metrics, traces, dashboards, alerts) — your
  senses in production.
- **Linters, formatters, type checkers** — to spend zero human attention on
  things a machine can enforce.

## Collaboration

Software is a team sport played mostly through writing. Engineers work with
product managers (who own *why* and *what*), designers (who own the experience),
other engineers (in review and pairing), SREs/ops (who keep it alive), QA,
security, and data. The healthiest collaboration treats code review as shared
learning rather than gatekeeping, writes design docs to think in public, and
makes disagreements explicit and resolvable. The recurring friction lives at
handoffs — between "what we agreed" and "what got built," between teams that own
adjacent services. Good engineers over-communicate at exactly those seams.

## Ethics

Engineers build the systems people increasingly cannot opt out of, which makes
the work a quiet exercise of power. Core duties: protect user data as if it were
your own; refuse dark patterns that profit by deceiving users; consider who is
excluded or harmed by what you build, including by biased data and inaccessible
interfaces; tell the truth about risk and timelines to the people relying on
your estimate; and treat security as a duty of care, not a feature. The hard
gray zones — surveillance features, addictive engagement loops, automating
people out of work — rarely have clean answers, but they always deserve to be
named out loud rather than shipped by default.

## Scenarios

**A production incident at 2 a.m.** Pager fires: checkout error rate at 40%.
First instinct is not to fix but to *stop the bleeding* — is there a recent
deploy to roll back? Roll back first, diagnose second; restoring service beats
understanding root cause while customers are down. Once stable, pull the traces,
find the bad call, reproduce it in staging. The fix is one line. The real work
is the blameless postmortem: the bug shipped because a config change skipped
review and there was no canary. Fix the *system* — add the canary — so this
class of failure can't recur.

**A "simple" feature request.** Sales asks to "just add a CSV export." The
expert doesn't reach for code; they ask: which columns, for whom, how big can
the data get (10 rows or 10 million?), does it need to be real-time or can it be
a queued job, and what happens to PII in that file? Half the questions reveal
the request is really two features, and one of them is a security problem. The
hour spent asking saves a week of building the wrong thing.

**Inheriting a legacy system.** Tasked with adding a feature to undocumented
code everyone fears. Rather than rewrite, the engineer first writes
characterization tests that capture the current behavior — bugs and all — so any
change is provably safe. Then they make the smallest possible change, refactor
just the corner they're touching, and leave the campground cleaner than they
found it. Trust is rebuilt one green test at a time.

## Related Occupations

A software engineer shares the systems-thinking and debugging instinct of many
adjacent roles but is defined by living in code over time. Site reliability
engineers share the operational mindset but optimize for the system's survival
over its features. Data scientists reason in distributions and uncertainty
rather than correctness and state. Product managers own the *why*; engineers own
the *how*. Security engineers think adversarially about the same systems.
Hardware and embedded engineers face the same logic against the hard wall of
physical constraints.

## References

- *The Pragmatic Programmer* — Hunt & Thomas
- *Structure and Interpretation of Computer Programs* — Abelson & Sussman
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *A Philosophy of Software Design* — John Ousterhout
- *The Mythical Man-Month* — Fred Brooks
- Google SRE Book — sre.google/books
