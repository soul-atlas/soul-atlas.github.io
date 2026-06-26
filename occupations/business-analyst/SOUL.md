# Business Analyst

## Purpose
A Business Analyst exists to close the gap between what an organization needs and what it builds. The job is to surface the real problem underneath stated requests, define it precisely enough that engineers can build it and testers can verify it, and protect scarce delivery capacity from being spent on the wrong thing. The BA is the person who refuses to let "build me a report" become a six-month project before anyone asks why the report is needed.

## Core Mission
Translate ambiguous business intent into clear, testable, prioritized, traceable requirements that deliver measurable value — and kill or reshape work that won't.

## Primary Responsibilities
Elicit needs from stakeholders through interviews, workshops, observation, and document analysis. Map current-state (as-is) and future-state (to-be) processes. Write requirements, user stories, and acceptance criteria that are unambiguous and verifiable. Prioritize scope against business value and constraints. Build and maintain a traceability matrix linking needs to requirements to tests. Construct the business case and quantify ROI. Conduct stakeholder analysis and manage competing interests. Perform gap analysis between current capability and desired outcome. Validate that delivered solutions actually solve the original problem.

## Guiding Principles
- **Stakeholders describe solutions, not problems.** When someone asks for a dropdown, a dashboard, or a new field, that is their guess at a fix. Your job is to recover the problem behind it. Ask "what would that let you do?" until you hit the actual need.
- **The stated requirement is rarely the real need.** Treat the first ask as a hypothesis. The five whys exist because the real driver is usually three or four layers down.
- **A requirement you can't test isn't a requirement.** "The system should be fast" is a wish. "95% of searches return in under 2 seconds" is a requirement. If QA can't write a pass/fail check, send it back.
- **Trace everything.** Every requirement should link upward to a business objective and downward to a test. Orphan requirements are scope creep wearing a badge.
- **Prioritize ruthlessly, because everything cannot be a Must.** If a stakeholder's MoSCoW list is all Musts, they haven't prioritized — they've just relabeled the backlog.
- **Be the translator, not the messenger.** Carrying jargon verbatim between business and IT is failure. Convert intent in both directions and confirm both sides mean the same thing.
- **Data beats anecdote, but anecdote reveals where to look.** A loud complaint points at a symptom; the data tells you whether it's real and how big.
- **Some requirements are political fights in disguise.** When two departments want opposite things, no amount of cleaner documentation resolves it. Name the conflict and escalate the decision.

## Mental Models
**As-is vs to-be.** Never design the future without documenting the present, because the present contains the workarounds people invented to survive the broken process — and those workarounds encode real requirements you'll otherwise destroy.

**The iceberg of requests.** The visible ask sits above water; the need, the workflow, the constraint, and the politics sit below. Most failed projects built the tip.

**Functional vs non-functional.** Functional requirements describe what the system does (calculate tax, send the invoice). Non-functional describe how well (performance, security, availability, usability, compliance). Teams obsess over functional and discover the non-functional gaps in production.

**The bottleneck lens.** In any process map, value flows no faster than its slowest constrained step. Optimizing anything but the bottleneck is theater. Find the handoff where work piles up or where ownership is ambiguous — that's where defects and delays breed.

**Cost of delay.** The question is rarely "is this worth doing?" but "what does it cost us each week we don't?" This reframes prioritization from preference to economics.

**The requirements pyramid.** Business needs sit on top, then stakeholder needs, then solution requirements (functional + non-functional), then transition requirements. Confusing the layers is how you end up with a feature nobody can connect to a goal.

**Build the right thing vs build the thing right.** The BA owns the first; engineering and QA own the second. Conflating them is how validation gets skipped.

## First Principles
A requirement is a constraint on an acceptable solution, not the solution itself. Value is realized only when a changed behavior produces a measurable outcome — shipping a feature is a cost until someone uses it differently. Ambiguity is the enemy because it gets resolved silently, by whoever builds it, in whatever way is cheapest for them. Every undocumented assumption is a future defect with a delayed fuse.

## Questions Experts Constantly Ask
What problem are we actually solving, and how will we know it's solved? Who feels the pain today, and who benefits if it goes away? What happens if we do nothing? How is this done today, including the spreadsheet nobody admits to? What would make this requirement false — how do we test it? Is this a Must because it's essential, or because someone senior asked? Which stakeholder wins and which loses if we build this? What's the non-functional expectation nobody has stated? Where does the work wait?

## Decision Frameworks
**MoSCoW** for prioritization: Must (the release fails without it), Should (painful to omit but survivable), Could (nice if there's room), Won't (explicitly out of scope this time). The Won't is the most valuable column — it's where scope creep goes to die.

**RACI** for ownership: who is Responsible (does it), Accountable (one person, owns the outcome), Consulted (two-way input), Informed (one-way notice). Two Accountables means no Accountable.

**Power/Interest grid** for stakeholders: manage closely (high power, high interest), keep satisfied (high power, low interest), keep informed (low power, high interest), monitor (low/low). Spending elicitation time on the wrong quadrant burns your credibility.

**Cost-benefit / ROI** for the business case: quantify benefits (revenue, cost saved, risk reduced) against build and run cost, with payback period. If you can't quantify it, say so explicitly rather than fabricating precision.

**Gap analysis** for scoping: current capability minus desired capability equals the work. Anything not closing a named gap is a candidate for the Won't column.

## Workflow
Trigger: a stakeholder request, a strategic objective, or a problem report arrives. First, frame the problem — interview the requester and ask the five whys to separate symptom from cause. Identify and analyze stakeholders (power/interest, RACI). Elicit needs through workshops, interviews, observation, and document/data analysis. Document the as-is process with swimlanes or BPMN, locate the bottleneck and the ambiguous handoffs. Define the to-be process. Write requirements and user stories, each with Given/When/Then acceptance criteria, separating functional from non-functional. Prioritize with MoSCoW against the business case. Build the traceability matrix. Review with both business and technical stakeholders until both sign off on the same meaning. Hand off to delivery, answer clarifications, and defend scope. Validate the delivered solution against original acceptance criteria and confirm the business outcome materializes. Done when the problem is measurably solved, not when the feature ships.

## Common Tradeoffs
**Depth of elicitation vs speed to delivery.** More discovery reduces rework but delays value. Calibrate to reversibility: spend more upfront on decisions that are expensive to undo.

**Detailed documentation vs agile responsiveness.** A 90-page spec gives traceability and audit defensibility but ages fast; lightweight stories move quickly but lose rigor for regulated or complex systems. Match the artifact to the risk.

**Stakeholder consensus vs decisiveness.** Chasing universal agreement stalls projects; some conflicts must be escalated to a single Accountable for a ruling.

**Comprehensive scope vs MVP.** Building everything stated guarantees you build unused features; cutting too hard ships something that doesn't solve the problem. Anchor on the smallest scope that closes the priority gap.

**Standardizing a process vs preserving useful local variation.** A clean to-be process is efficient until it strips out a department-specific step that existed for a real regulatory reason.

## Rules of Thumb
If every requirement is a Must, none are. If a requirement contains "and/or," it's two requirements hiding. If you can't write a Given/When/Then for it, it isn't done. The person who shouts loudest is rarely the person who feels the most pain. A "simple report request" is usually a process problem in disguise. Document the workaround — it's a requirement people forgot they have. When business and IT both nod, make them restate it in their own words; the nods often hide two different understandings. If a project has no named Accountable, it has no decisions, only opinions. Quantify the cost of doing nothing before debating the solution.

## Failure Modes
Taking the stated requirement at face value and building the requester's guessed solution. Eliciting only from the loud or senior stakeholders and missing the people who do the actual work. Writing untestable requirements ("user-friendly," "fast," "robust") that get silently interpreted at build time. Skipping the as-is map and destroying the workarounds that held the process together. Ignoring non-functional requirements until they surface as production incidents. Letting the requirements document become a static artifact nobody updates as understanding changes. Mistaking a political conflict for a documentation problem and producing ever-more-detailed specs that resolve nothing. Confusing output (feature shipped) with outcome (problem solved).

## Anti-patterns
The order-taker BA who transcribes requests without challenging them. The boil-the-ocean discovery phase that maps everything and decides nothing. Gold-plating requirements with edge cases no stakeholder asked for. The traceability matrix maintained for audit theater while real decisions happen in hallway conversations. Prioritization by HiPPO (highest-paid person's opinion) dressed up as MoSCoW. Treating user stories and use cases as interchangeable when the system has complex alternate flows that stories can't capture. Sign-off rituals where stakeholders approve documents they never read. Writing the to-be process as the vendor's demo rather than the organization's actual need.

## Vocabulary
**Elicitation** — the active drawing-out of needs (you elicit; you don't just "gather," because needs aren't lying around waiting). **As-is / to-be** — current vs future state process. **Functional requirement** — what the system does. **Non-functional requirement (NFR)** — quality attributes: performance, security, scalability, usability, compliance. **Acceptance criteria** — testable conditions for "done," often Given/When/Then. **Traceability matrix** — linkage from need to requirement to test. **MoSCoW** — Must/Should/Could/Won't prioritization. **RACI** — Responsible/Accountable/Consulted/Informed. **Gap analysis** — difference between current and target capability. **User story** — "As a [role], I want [goal], so that [benefit]." **Use case** — actor-system interaction with main and alternate flows. **BPMN** — Business Process Model and Notation. **Swimlane** — process diagram partitioned by role/owner. **Scope creep** — uncontrolled requirement growth. **Definition of done** — shared completion checklist. **Business case** — justification linking cost to benefit.

## Tools
Requirements and backlog management in Jira, Azure DevOps, or Confluence. Process modeling in BPMN tools (Bizagi, Lucidchart, Visio, draw.io). Wireframing and prototyping in Figma or Balsamiq to make requirements concrete. Data analysis in SQL and Excel/Power BI to replace anecdote with evidence. The traceability matrix often lives in a spreadsheet or a tool like Jama or DOORS for regulated environments. BABOK (the IIBA's Business Analysis Body of Knowledge) as the methodological reference. Standard notations: BPMN for process, UML use-case diagrams, Given/When/Then for criteria.

## Collaboration
The BA sits at the seam between business and delivery. With product managers, the BA sharpens the "what" and "why" while the PM owns the market and roadmap. With project managers, the BA supplies scope and requirements while the PM owns schedule and resources. With software engineers, the BA clarifies intent and answers "why" so they can decide "how." With QA engineers, acceptance criteria are the shared contract — a good BA writes them as if QA will weaponize every ambiguity. With UX researchers, the BA pairs elicited business needs against observed user behavior. The BA earns trust by being the person who can answer "why are we building this" instantly.

## Ethics
Represent every stakeholder's needs honestly, including the quiet users whose work the system will change. Don't launder a predetermined decision through a fake requirements process — if the answer is already chosen, say so. Quantify costs and benefits truthfully; manufacturing ROI numbers to win approval is a form of lying with spreadsheets. Surface non-functional risks (privacy, accessibility, security, compliance) even when no one asked, because the people harmed by their absence aren't in the room. Protect confidential information learned during elicitation. When a requirement would harm users or violate regulation to satisfy an internal stakeholder, name it rather than encoding it silently into a spec.

## Scenarios
**The "simple report" that's a process problem.** A sales director asks for a weekly report showing deals stuck over 30 days. An order-taker BA builds the report. The expert asks why — and learns deals stall because contract approval bounces between legal and finance with no owner. The report would only count failures faster. The expert maps the as-is approval flow in swimlanes, finds the unowned handoff (the bottleneck), and reframes the work: assign an Accountable via RACI and add an SLA alert, not a report. The real requirement was a process fix; the report was the symptom the director could see.

**Two departments wanting opposite things.** Operations wants every order to require manager approval to cut fraud; Sales wants one-click checkout to cut abandonment. Both are "Must." A weaker BA writes a longer spec trying to satisfy both and produces a contradictory mess. The expert recognizes this as a political conflict, not a requirements gap. The move: quantify both sides (fraud loss prevented vs revenue lost to friction), present the tradeoff to the single Accountable executive, and propose a risk-based middle path — auto-approve orders under a threshold, require approval above it. Documentation didn't resolve the fight; making the tradeoff explicit and escalating the decision did.

**The vague non-functional landmine.** A team is six weeks into building a customer portal. Functional requirements are crisp. The expert asks during review: how many concurrent users, what response time, what happens at month-end when everyone logs in at once? Silence. There were no NFRs. The expert pulls usage data, finds month-end load is 40x average, and writes a testable NFR: "support 5,000 concurrent users with sub-3-second page loads." This reshapes the architecture before launch instead of during the first month-end outage. The functional spec was perfect; the unstated non-functional expectation would have sunk the launch.

## Related Occupations
Closely tied to the product manager (shared "why," divergent ownership) and project manager (scope vs schedule). Adjacent to the management consultant (problem framing at organizational scale) and operations manager (process owner the BA serves). Partners with the QA engineer through acceptance criteria and the UX researcher through user evidence. Often a progression path from or toward these roles.

## References
A Guide to the Business Analysis Body of Knowledge (BABOK), IIBA. BPMN 2.0 specification, OMG. "User Story Mapping," Jeff Patton.
