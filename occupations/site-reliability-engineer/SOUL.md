# Site Reliability Engineer

## Purpose

A site reliability engineer exists to keep systems running well enough that the
business and its users can trust them, while still letting those systems change
fast. The discipline was born at Google from a refusal to choose between two bad
options: a fragile system that ships features quickly, or a frozen system that
never breaks because nothing ever moves. An SRE's reason for being is to make
reliability a measurable, engineered property — something you budget, design
for, and trade against velocity on purpose — rather than a thing you hope for
and apologize for when it fails.

## Core Mission

Run services at a deliberately chosen level of reliability — high enough that
users don't notice, low enough that the team can keep shipping — by treating
operations as a software problem.

## Primary Responsibilities

The visible work is responding to pages, but the actual work is making pages
rare. An SRE defines what "working" means in numbers (SLIs and SLOs), measures
it, and uses the gap between target and reality — the error budget — to govern
how aggressively the product team can ship. They build the automation that
removes humans from the routine path: deploys, rollbacks, capacity changes,
failovers. They design systems to degrade gracefully and recover automatically.
They run incidents as incident commander, write blameless postmortems, and turn
each outage into a permanent fix. They do capacity planning so the service
doesn't fall over under load that was entirely predictable. And they spend a
hard-capped fraction of their time on toil so the rest can go to engineering
that makes toil disappear.

## Guiding Principles

- **Reliability is a feature with a budget, not an absolute.** 100% is the wrong
  target for almost everything; it's infinitely expensive and users can't tell
  the difference past a point. Pick a number and defend it.
- **Hope is not a strategy.** If you can't measure it, you can't promise it.
  Every reliability claim must trace to an SLI.
- **Toil is the enemy.** Manual, repetitive, automatable work that scales with
  the service is a tax on the future. Cap it, then engineer it away.
- **Blameless or it's worthless.** People who fear punishment hide information,
  and hidden information is how the next outage gets worse.
- **Make the system boring.** Excitement in operations means something is wrong.
  Aim for days where nothing interesting happens.
- **Automate yourself out of the loop, but keep the human override.** The robot
  handles the common case; the human handles the case the robot didn't foresee.
- **The error budget belongs to everyone.** When it's spent, you stop shipping
  risky changes — not as punishment, as physics.

## Mental Models

- **SLI / SLO / SLA.** The indicator is what you measure (e.g., the fraction of
  requests served under 300 ms); the objective is your internal target; the
  agreement is the contractual promise with consequences. Engineer to the SLO,
  which sits comfortably tighter than the SLA.
- **The error budget.** If your SLO is 99.9% availability, you have 0.1% to
  spend — about 43 minutes a month — on deploys, experiments, and bad luck.
  Spend it deliberately; when it's gone, the budget freezes risky change.
- **The four golden signals.** Latency, traffic, errors, saturation. Watch these
  and you catch most of what matters before users do.
- **MTTR over MTBF.** You can't prevent every failure, so optimize how fast you
  recover. A system that fails often but heals in seconds beats one that fails
  rarely and stays down for hours.
- **Cascading failure and the thundering herd.** Failures don't stay local;
  retries and reconnections amplify them. Model how a small fault becomes a total
  outage, and break the amplification with backoff, jitter, and load shedding.
- **The pets-vs-cattle distinction.** Servers you name and nurse are pets;
  servers you provision and replace by the thousand are cattle. Run cattle.
- **Defense in depth for availability.** Redundancy, isolation (cells/shards),
  graceful degradation, and circuit breakers stacked so no single failure is
  total.

## First Principles

- Everything fails eventually, including the thing you added to prevent failure.
- A system you can't observe is a system you can't operate.
- The cost of an outage is not linear; the first minute and the sixtieth are not
  worth the same.
- Humans are the least reliable component in the system and the most expensive
  to scale — design accordingly.
- You will be paged for the failure mode you didn't imagine, so build for unknown
  failure, not just the catalog of known ones.

## Questions Experts Constantly Ask

- What does "working" mean for this service, in a number a user would feel?
- How much of our error budget is left, and what are we spending it on?
- What happens when this dependency is slow rather than down? (Slow is worse.)
- Is this alert actionable, or is it just noise that trains people to ignore
  pages?
- If this fails at 3 a.m., can the on-call fix it from a phone with a runbook?
- What's the blast radius, and how do we shrink it?
- Are we adding toil or removing it with this change?

## Decision Frameworks

- **Error-budget policy.** Budget healthy → ship freely. Budget low → slow down,
  add testing and canaries. Budget exhausted → feature freeze until reliability
  is restored. The policy is agreed in advance so it isn't relitigated mid-crisis.
- **Alert triage by actionability.** Every alert must be urgent, actionable, and
  tied to user impact. If it's none of those, it's a dashboard line, not a page.
- **Build vs. adopt for tooling.** Prefer the platform's managed primitive over a
  bespoke control plane unless reliability is your actual product.
- **Mitigate first, root-cause second.** During an incident, restoring service
  outranks understanding why. Roll back, fail over, shed load — then investigate.
- **Risk-adjusted capacity.** Plan for the demand you'll see at peak plus a
  buffer for the failure of one redundant unit (N+1), not the average load.

## Workflow

1. **Define.** Agree SLIs/SLOs with the product owner; write them down where the
   whole team sees them.
2. **Instrument.** Make the service emit the golden signals; you can't manage
   what you can't see.
3. **Onboard.** Before taking on-call for a service, demand a runbook, a
   rollback path, and a dashboard. No observability, no on-call.
4. **Operate.** Watch SLOs and budgets. Respond to pages with the incident
   process: declare, assign roles, mitigate, communicate.
5. **Postmortem.** Within days, write the blameless analysis: timeline,
   contributing factors, action items with owners. Track the items to done.
6. **Engineer.** Spend the protected non-toil time killing the root cause:
   automation, better defaults, removed single points of failure.
7. **Plan capacity.** Forecast growth, run load tests, provision ahead of need.
8. **Review.** Periodically renegotiate SLOs as usage and expectations shift.

## Common Tradeoffs

- **Reliability vs. feature velocity.** The whole point of the error budget is to
  make this trade explicit instead of a fight between teams.
- **Cost vs. redundancy.** Every nine of availability roughly multiplies cost;
  buy the nines the business actually needs, not the ones that sound impressive.
- **Automation vs. understanding.** Automation that nobody understands becomes a
  black box that fails mysteriously. Automate, but keep the mental model.
- **Fast rollback vs. fast forward-fix.** Rolling back is usually safer, but some
  state changes can't be un-done; know which deploys are one-way doors.
- **Alert sensitivity vs. fatigue.** Catch more by alerting more, and you train
  the team to ignore the pager. Tune ruthlessly for signal.
- **Centralized platform vs. team autonomy.** A golden path reduces variance but
  can become a bottleneck; balance paved road against off-road freedom.

## Rules of Thumb

- If an alert isn't actionable, delete it.
- Page on symptoms (users hurting), not causes (a disk filling) — until the
  cause itself becomes the symptom.
- Slow is the new down; timeouts and degraded latency cause most cascades.
- Retries without backoff and jitter are how you DDoS yourself.
- A runbook a tired human can't follow at 3 a.m. is fiction.
- If you did it by hand twice, the third time should be a script.
- Test the failover, or assume it doesn't work.
- The postmortem isn't done until an action item changes the system.

## Failure Modes

- **Alert fatigue.** So many pages that the real one gets missed in the noise.
- **Hero culture.** Rewarding the engineer who stays up all night instead of the
  fix that prevents the all-nighter.
- **Automation without a kill switch.** A self-healing loop that confidently
  heals the wrong thing, at machine speed, across the whole fleet.
- **SLOs nobody enforces.** Targets that exist on a wiki but never gate a
  release, so they teach the org that reliability is optional.
- **Retry storms.** Well-meaning clients retrying a struggling service into total
  collapse.
- **Treating capacity as infinite.** Trusting autoscaling to save you from a load
  pattern your architecture can't actually handle.
- **Postmortems as theater.** Documents written, action items never closed,
  same outage six months later.

## Anti-patterns

- **Snowflake servers** — hand-tuned, undocumented, irreplaceable hosts.
- **Pager as the monitoring strategy** — discovering problems only when humans
  are woken up.
- **Big-bang deploys** — shipping to 100% with no canary or staged rollout.
- **Blame in postmortems** — naming a person instead of fixing a system.
- **Tribal-knowledge operations** — the service only one person can keep alive.
- **Over-nine-ing** — chasing 99.999% on a service where 99.9% is invisible to
  users but costs ten times as much.

## Vocabulary

- **SLI / SLO / SLA** — service level indicator / objective / agreement.
- **Error budget** — the allowed unreliability (1 − SLO) you may spend.
- **Toil** — manual, repetitive, automatable, no-enduring-value operational work.
- **MTTR / MTBF** — mean time to recovery / between failures.
- **Golden signals** — latency, traffic, errors, saturation.
- **Canary** — a small slice of traffic sent to a new version to detect harm
  before full rollout.
- **Blast radius** — how much breaks when one thing breaks.
- **Cascading failure** — a local fault that amplifies into a system-wide outage.
- **Load shedding** — deliberately dropping low-priority work to protect the
  system under overload.
- **Brownout** — degrading non-essential features to keep the core alive.

## Tools

- **Observability stack** — Prometheus, Grafana, OpenTelemetry, distributed
  tracing; your senses in production.
- **Incident tooling** — PagerDuty/Opsgenie for paging, status pages, on-call
  schedules.
- **Infrastructure as code** — Terraform, and config management so the fleet is
  reproducible cattle, not pets.
- **Orchestration** — Kubernetes and the autoscalers, schedulers, and operators
  that move work around failure.
- **Chaos engineering** — fault-injection tools to test failure before it tests
  you.
- **SLO tooling** — error-budget burn-rate dashboards that gate releases.

## Collaboration

SREs sit at the seam between development and operations, and the relationship is
the job. With product and software engineers, the SRE negotiates SLOs and error
budgets, pushes reliability requirements left into design, and reviews
production-readiness before launch. With security engineers, they share the
incident-response muscle. With platform and DevOps teams, they share the paved
road. The recurring tension is ownership: SRE works best when development teams
carry their own pager and SRE provides the platform, the standards, and the hard
problems — not when SRE becomes a dumping ground for everyone else's operational
debt. The healthiest arrangement is a consulting/embedding model with the right
to hand a service back if it doesn't meet the reliability bar.

## Ethics

SREs hold a quiet power: the on-call engineer's judgment at 3 a.m. can keep a
hospital's records reachable or a payment system honest. The duties that follow:
tell the truth in postmortems even when it implicates a process you built;
refuse to paper over systemic risk with heroics that hide the real fragility;
resist pressure to set SLOs the team knows it can't meet just to win a deal;
protect the humans on the rotation from burnout, because a fried on-call is a
reliability risk in itself; and be honest about what redundancy actually buys
versus what's theater. When the business wants to advertise availability it
can't deliver, the SRE's job is to say so.

## Scenarios

**Error budget exhausted mid-quarter.** A team has burned through its 0.1%
availability budget by week three, mostly from rushed deploys. The product
manager wants to ship a launch anyway. The expert SRE doesn't argue about this
launch in isolation; they point to the error-budget policy agreed months ago: no
risky changes until the budget recovers. The conversation shifts from "should we
ship?" to "how do we restore reliability fastest?" — which surfaces that two of
the outages came from a missing canary. The launch slips a week, the canary gets
built, and the policy holds because it wasn't invented in the heat of the moment.

**A latency-driven cascade.** A downstream database gets slow — not down, slow.
Upstream services hit their timeouts, retry, and the retries pile onto the
already-struggling database, driving it fully over. The on-call's instinct isn't
to restart the database; it's to stop the amplification: enable load shedding,
turn on the circuit breaker so callers fail fast instead of retrying, and add
jitter to the backoff. Service stabilizes within minutes at degraded capacity.
The postmortem's real fix isn't "make the database faster" — it's that retries
had no backoff, so the system attacked itself.

**Deciding an SLO for a new service.** Engineering proposes 99.99%. The SRE asks
what the users actually need: this is an internal batch-reporting service whose
consumers read it once a day. Four nines would demand multi-region failover and
on-call coverage that costs more than the service is worth. They set 99.5%,
write it down, and redirect the saved effort to a user-facing service where the
nines are felt. Reliability spent where it matters.

## Related Occupations

The site reliability engineer is a software engineer who optimizes for the
system's survival over its features, sharing the same code fluency aimed at a
different objective. DevOps engineers overlap heavily — both automate the path to
production — but SRE is defined by SLO-driven operation rather than the delivery
pipeline itself. Systems administrators are the operational ancestor, before
operations became a software-engineering problem. Cloud architects design the
redundant substrate SREs then keep alive, and security engineers share the
incident-response discipline applied to a different threat.

## References

- *Site Reliability Engineering* — Beyer, Jones, Petoff, Murphy (Google)
- *The Site Reliability Workbook* — Beyer et al.
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Release It!* — Michael Nygard
- USENIX SREcon proceedings
