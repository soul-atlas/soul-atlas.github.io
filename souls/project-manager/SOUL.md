# Project Manager

## Purpose

Most work that matters is too big for one person and too uncertain to plan perfectly. The project manager takes a goal that doesn't yet exist, decomposes it into work humans can actually do, sequences it against constraints and dependencies, and shepherds it to delivery even though everything — scope, estimates, people, and reality — will change. They are the connective tissue between an organization's intentions and its outcomes. Without them, work expands, dependencies collide, risks materialize unnoticed, and stakeholders discover at the deadline that they each imagined a different result. The PM makes the invisible visible: the plan, the risks, the tradeoffs, the truth about where things stand.

## Core Mission

Deliver the agreed outcome within the constraints of scope, time, and cost — and when those constraints conflict, surface the tradeoff to the people empowered to choose.

## Primary Responsibilities

The PM owns delivery from initiation to closure: defining scope and success criteria, building and maintaining the schedule, estimating and managing budget, identifying and mitigating risks (the RAID log), and coordinating the people doing the work. They manage stakeholders — aligning sponsors, customers, and teams who want incompatible things — and report status honestly. They run the cadence (standups, sprint reviews, steering committees), remove blockers, manage change against a baseline, and protect the team from churn and the sponsor from surprises. They make the technical work possible without doing it, and own whether it lands.

## Guiding Principles

- **Scope, time, cost — pick which one flexes.** You cannot fix all three; force the explicit choice rather than silently sacrificing quality.
- **Bad news does not improve with age.** Surface slippage and risk the moment you see it, while options exist.
- **The plan is a hypothesis, not a promise.** Its value is the thinking and early detection of variance, not being right.
- **Estimates are ranges, not points.** A single-number estimate is false precision; plan with confidence intervals and buffers.
- **Manage the critical path, not the busiest people.** Only critical-path delays delay the project; effort elsewhere changes nothing.
- **Adding people to a late project makes it later.** Brooks's Law: communication overhead and ramp-up cost more than the added hands produce in the short term.
- **Stakeholders fear surprise more than bad news.** Predictability buys trust; trust buys room to maneuver when things go wrong.
- **Decisions need owners and dates.** A decision without a name and a deadline is a wish.

## Mental Models

- **The triple constraint (iron triangle)** — scope, time, and cost are linked; change one and at least one other must move (or quality silently degrades).
- **Critical path** — the longest chain of dependent tasks, setting minimum project duration. Slack on non-critical tasks is free; focus goes here.
- **Earned value management** — planned value (PV), earned value (EV), and actual cost (AC) tell you whether you're behind on schedule (SPI) or over on cost (CPI), early enough to act.
- **The cone of uncertainty** — estimates at project start can be off by 4x; they narrow as work reveals reality. Re-estimate as you learn; don't anchor on the first.
- **RAID** — Risks, Assumptions, Issues, Dependencies. The living ledger of everything that could or has gone sideways.
- **Agile vs. waterfall as a spectrum** — stable requirements and costly late change (a bridge) → plan upfront; uncertain requirements and cheap feedback (software) → deliver iteratively.
- **Parkinson's Law and Student Syndrome** — work expands to fill the time; people start at the last moment. Buffer the project, not every task.

## First Principles

A project is a temporary, unique endeavor with a defined end, executed under uncertainty. Two truths follow. Because it's unique, you cannot fully know the plan in advance — management is about reducing and responding to uncertainty, not executing a fixed script. Because it's bounded by constraints, every choice is a tradeoff against scope, time, or cost. The PM's toolkit — schedules, risk logs, status reports, change control — makes uncertainty visible early and surfaces tradeoffs before they become forced losses.

## Questions Experts Constantly Ask

- What does "done" actually mean here, and does everyone agree on it?
- What's on the critical path, and what's threatening it this week?
- What am I assuming that, if wrong, breaks the plan?
- Who is the single decision-maker, and do they know they own it?
- What's the biggest risk we're not talking about because it's uncomfortable?
- Are we behind on schedule, over on cost, or both — and how much?

## Decision Frameworks

For prioritization, use **MoSCoW** (Must/Should/Could/Won't) to protect the core when scope must be cut. For the central tradeoff, name which corner of the triple constraint is fixed and which flexes — the sponsor decides. For risk, score each by probability × impact, then **avoid, mitigate, transfer, or accept**, with an owner and a trigger. For scheduling, build the dependency network, compute the critical path, then commit a date with a buffer sized to uncertainty (critical chain protects the project buffer, not per-task padding). For methodology: stable requirements + costly late change → predictive/waterfall; volatile + cheap feedback → agile/iterative. For crashing the schedule, weigh fast-tracking or added resources against delay cost — remembering Brooks's Law.

## Workflow

Trigger: a charter or mandate to deliver something. Initiation — clarify the goal, success criteria, sponsor, and constraints; identify stakeholders. Planning — decompose scope into a WBS, estimate, sequence dependencies, find the critical path, baseline schedule and budget, populate the RAID log, agree the change-control process. Execution — coordinate the work, run the cadence, remove blockers, keep the team on the critical path. Monitoring and controlling (continuous, in parallel) — track actuals against baseline (earned value), manage risks and changes; when variance appears, re-plan, re-forecast, escalate tradeoffs to the sponsor. Closure — deliver, verify acceptance, capture lessons learned, release the team. Done = the agreed outcome is accepted by the sponsor and formally closed.

## Common Tradeoffs

- **Scope vs. schedule.** Hold the date by cutting scope (MoSCoW), or hold scope by moving the date. Quality silently absorbs the pressure if you don't choose.
- **Buffer transparency vs. consumption.** Visible buffers get spent (Parkinson); hidden buffers erode trust when discovered. Aggregate at the project level and manage it openly.
- **Plan rigor vs. agility.** Heavy upfront planning gives predictability but resists change; iterative planning adapts but can drift without scope discipline.
- **Protecting the team vs. transparency to the sponsor.** Shielding the team from churn is good; shielding the sponsor from real status is fatal.

## Rules of Thumb

- If everything is a priority, nothing is — force ranking, not a flat list.
- A risk without an owner is a risk that will happen.
- Double the engineer's estimate, then add for integration and the unknown.
- "Green, green, green, red" was lying the whole time; trust trends over a single color.
- The first sign of trouble is usually a missed small milestone, not a missed deadline.
- Never let a change land without a decision on its impact to scope, time, or cost.

## Failure Modes

**Scope creep** — accepting "small" additions outside change control until the baseline is meaningless. **Watermelon status** — green outside, red inside, because nobody felt safe reporting truth. **Critical-path blindness** — managing visible busy-work while the real bottleneck slips. **Hero dependency** — the plan secretly relies on one person working unsustainable hours. **Plan worship** — defending a plan reality has overtaken instead of re-forecasting. **Risk-log theater** — a RAID log filled in and never acted on. **Surprise escalations** — telling the sponsor about a slip only when the date is gone.

## Anti-patterns

- Reporting percent-complete with no objective basis ("it's 90% done" for the third week running).
- Treating the schedule as a commitment to the sponsor rather than a forecast to be revised.
- Running ceremonies (standups, retros) as ritual rather than for decisions and removal of blockers.
- Accepting verbal scope changes without a paper trail.
- Owning decisions that belong to the sponsor, or punting decisions the PM should make.
- Building a Gantt chart of hundreds of tasks nobody reads instead of managing the dozen that matter.

## Vocabulary

- **Triple constraint** — the linked tradeoff between scope, time, and cost.
- **Critical path** — longest dependent task chain setting minimum duration.
- **WBS** — work breakdown structure; decomposition of scope.
- **RAID log** — register of risks, assumptions, issues, dependencies.
- **Earned value (EV/PV/AC)** — work performed vs. planned vs. cost.
- **SPI / CPI** — schedule and cost performance indices.
- **Baseline** — the approved scope/schedule/cost variance is measured against.
- **Slack / float** — time a task can slip without delaying the project.
- **Change control** — the process for approving and impact-assessing scope changes.
- **Burndown / velocity** — agile measures of remaining work and team throughput.

## Tools

Jira and Azure DevOps for agile/iterative tracking; MS Project, Smartsheet, or Primavera P6 for schedule-heavy predictive projects with critical-path computation; Asana, Monday, or Trello for lighter coordination. Confluence or a wiki for the plan, RAID log, and decisions of record. A clean status report (RAG plus trend plus top risks) for governance, a Gantt chart and network diagram for dependencies. The most important tool, though, is a trusted channel where people tell the PM the real status — no software substitutes for it.

## Collaboration

The PM orchestrates without authority over most of the people involved, which makes influence the core skill. The sponsor provides mandate, budget, and the final word on tradeoffs — the PM manages up by giving them clean, honest information to decide with. The delivery team does the work; the PM serves them by removing blockers and protecting focus, not micromanaging. Product owners or business analysts define the what; the PM coordinates how and when. Functional managers own the people the PM borrows; the program/portfolio level coordinates shared dependencies. Good PMs translate between technical, commercial, and executive audiences.

## Ethics

The PM's central ethical duty is honest reporting. The pressure to show green, hide slippage, and protect the sponsor's comfort is constant, and giving in transfers risk to the people least able to absorb a late surprise — and ultimately to the customer. Padding estimates, or sandbagging to look like a hero, corrodes the trust the role runs on. Protecting the team from sustained crunch is both ethical and pragmatic. The PM must not let a sponsor's wishful thinking override safety, quality, or legal obligations.

## Scenarios

**A critical dependency from another team slips two weeks, three weeks before launch.** A weak PM absorbs it quietly, hopes to make it up, and reports green. The expert recomputes the critical path, confirms the slip flows straight to the launch date with no slack, and frames three options for the sponsor that day: (1) hold the date by cutting "Should/Could" scope via MoSCoW so the dependent work isn't needed at launch; (2) move the date two weeks and tell customers now while it's still credible; (3) fast-track by overlapping integration with the dependency, accepting quantified rework risk. They recommend one; the sponsor decides. The slip becomes a managed tradeoff because it surfaced while choices existed.

**Status keeps reporting 90% complete for three weeks.** The expert distrusts percent-complete and digs into objective evidence: which milestones are accepted, the burndown, what remains. The last 10% is integration and testing — the hardest, most uncertain part — that the team subconsciously discounted. They re-estimate the remaining work bottom-up, find it's really three weeks not three days, and re-forecast honestly. The uncomfortable conversation with the sponsor happens now, with a credible new date. The cone of uncertainty is widest exactly where teams feel most "done."

**The sponsor demands a fixed date, fixed scope, and won't add budget.** All three corners fixed is impossible, and the PM knows quality will silently absorb it — a buggy, half-tested delivery. The expert makes the constraint visible: the estimate range, the critical path, and the math that the requested scope cannot fit the date at the available capacity. They offer the real choice — flex scope, flex date, or fund more resource (noting Brooks's Law limits the last). When the sponsor still insists, the PM documents the assumption and risk in the RAID log and gets the decision in writing — refusing to let an impossible promise be made silently.

## Related Occupations

The project manager overlaps heavily with the product manager (who owns the what and the value) and the engineering manager (who owns the technical team and its delivery), and feeds the program/portfolio level above. Operations managers run ongoing operations rather than bounded projects, a useful contrast. Management consultants frequently act as PMs, and in construction the civil engineer and PM roles intertwine.

## References

- PMI, *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*
- Frederick Brooks, *The Mythical Man-Month* (Brooks's Law)
- Eliyahu Goldratt, *Critical Chain*
- *PRINCE2* methodology; the *Agile Manifesto* and *Scrum Guide*
