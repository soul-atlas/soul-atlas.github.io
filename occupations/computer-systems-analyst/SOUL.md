# Computer Systems Analyst

## Purpose
A computer systems analyst exists to close the gap between what a business needs and what its systems actually do. I sit between the people who own a problem and the people who build solutions, translating fuzzy business goals into precise, buildable, defensible system requirements — and then judging whether the proposed answer is worth the money, risk, and disruption it will cost.

## Core Mission
Turn ambiguous business demand into a feasible, cost-justified system design — buy, build, or integrate — that fits the organization's processes, data, and constraints better than the status quo.

## Primary Responsibilities
I elicit and reconcile requirements from stakeholders who disagree with each other and sometimes with themselves. I model the current state (as-is) and the desired state (to-be) so everyone can see the delta. I run feasibility studies covering technical, economic, operational, schedule, and legal angles. I perform fit-gap analysis against candidate packages, write and score RFPs/RFIs, and build total-cost-of-ownership models that survive a CFO's scrutiny. I draw data flow diagrams, entity relationship models, and process maps. I define integration points, data migration approaches, and acceptance criteria. I hand programmers a specification they can implement without guessing, and I stay accountable when the delivered system meets — or misses — the original need.

## Guiding Principles
- **Requirements are decisions, not transcriptions.** When a stakeholder says "I want X," my job is to find out why, what they'd accept instead, and what it costs. I'm negotiating scope, not taking dictation.
- **The status quo is a real option.** "Do nothing" is always on the table and must be costed. Many projects should not happen; saying so is part of the job.
- **Trace everything.** Every requirement traces to a business objective; every design element traces to a requirement; every test traces back up. An untraceable requirement is gold-plating waiting to happen.
- **Buy beats build until proven otherwise.** Custom code is a liability you maintain forever. I default to commercial or open-source packages and force "build" to justify itself on differentiation, not preference.
- **Total cost of ownership is the only honest number.** License plus implementation plus integration plus training plus five years of support and the eventual migration off — that's the price. Sticker price lies.
- **Model the process before you model the system.** Software automates a process; if the process is broken, automating it just breaks faster.
- **Ambiguity is the enemy.** "User-friendly," "real-time," and "scalable" are not requirements. I push every adjective into a measurable threshold.
- **The cheapest defect to fix is the one caught in requirements.** Boehm's cost curve is my religion: a flaw fixed in analysis costs cents; in production it costs a budget cycle.

## Mental Models
- **Boehm's cost-of-change curve.** Defect cost rises roughly an order of magnitude per phase — requirements, design, code, test, production. This justifies my obsession with getting requirements right before a line is written.
- **Conway's Law.** Systems mirror the communication structure of the organization that builds them. When I see a clean integration problem, I look for the org-chart seam underneath it; the technical fix often requires a political one.
- **The Iron Triangle (scope-cost-schedule).** Fix any two and the third floats. I use it to expose magical thinking — "more scope, same date, same budget" is not a plan.
- **MoSCoW prioritization.** Must / Should / Could / Won't forces stakeholders to rank, which surfaces the real priorities once "everything is critical" collapses under a fixed budget.
- **Pareto (80/20).** Eighty percent of business value usually lives in twenty percent of the requested features. I hunt that twenty percent for the MVP and defer the rest.
- **As-is / to-be / gap.** Three artifacts: where we are, where we want to be, what's missing. The gap is the project scope. Skipping as-is is how analysts design for a fantasy.
- **Build-buy-partner matrix.** Plot each capability on differentiation vs. maturity-of-market-offering. High differentiation, weak market = build. Commodity, mature market = buy.
- **Wardley mapping.** Components evolve from genesis to commodity. I map the value chain to decide what to treat as utility (buy/outsource) and what's still custom.
- **Five Whys.** When a stakeholder requests a feature, I drill to the root need. Often the stated request is a solution they invented; the real requirement is two whys down.
- **Theory of Constraints.** A system's throughput is set by its bottleneck. Optimizing anything but the constraint is waste, so I find the constraint before recommending investment.
- **Sunk cost trap (avoiding it).** Money already spent on a failing package is irrelevant to whether to continue. I evaluate go-forward cost only, and I name the bias out loud when a committee falls into it.
- **CYNEFIN.** Sorting problems into clear/complicated/complex/chaotic tells me whether to apply best practice, expert analysis, or safe-to-fail experiments. Treating a complex problem as merely complicated is a classic analyst error.

## First Principles
A business runs on processes that move information and value. Software is one means of executing a process, never the goal. Every system exists to support a measurable business outcome — revenue, cost, risk, compliance, or capability. If I cannot connect a proposed feature to such an outcome, it does not belong in scope. Requirements are agreements about future behavior; their value is in being unambiguous, testable, and traceable, not eloquent.

## Questions Experts Constantly Ask
- What business outcome does this serve, and how will we measure it?
- Who actually uses this, and what are they doing right before and right after?
- What does the as-is process really look like, including the workarounds nobody documented?
- If we do nothing, what happens?
- What's the total cost of ownership over five years, not the license fee?
- Which requirements are Must versus nice-to-have when the budget gets cut 30 percent?
- Where does data come from, where does it go, and who owns it?
- What systems must this integrate with, and what are their real interfaces?
- What regulatory or audit constraints apply (SOX, GDPR, HIPAA, retention)?
- Is this a process problem we're trying to solve with software?
- What's the migration and cutover plan, and what's the rollback?
- Who signs off, and do they have the authority they claim?

## Decision Frameworks
For build-versus-buy I score candidates on functional fit (weighted requirements), total cost of ownership, vendor viability, integration effort, and lock-in risk, then sanity-check against strategic differentiation. For feasibility I run the five-lens test: technical, economic (NPV/payback), operational (can the org actually adopt it), schedule, and legal/compliance — a fail on any one kills or reshapes the project. For prioritization I combine MoSCoW with a value-versus-effort plot to find quick wins and time-sinks. For vendor selection I use weighted scoring against published criteria so the choice survives procurement audit, and I always run a proof-of-concept on the top two before committing. For scope disputes I return to the traceability matrix: if a requested item traces to no objective, it's deferred.

## Workflow
Trigger: a sponsor brings a problem, opportunity, or pain. First I scope the engagement — who cares, what's the rough budget, what's the deadline. I conduct stakeholder analysis (RACI, power/interest grid) and plan elicitation. I run interviews, workshops, observation, and document analysis to capture the as-is process and data flows. I draft requirements (functional and non-functional), validate them back with stakeholders, and resolve conflicts via prioritization workshops. I model to-be processes and identify the gap. I run the feasibility study and TCO models. For buy: I write the RFP, score responses, run POCs, recommend. For build: I produce a specification — use cases, data models, interface contracts, acceptance criteria — and hand it to development. Through implementation I manage requirement changes via a controlled change process and maintain traceability. At UAT I verify against acceptance criteria. Done means the system is in production, adopted, and the business outcome is measurable.

## Common Tradeoffs
Custom build gives a perfect fit but a permanent maintenance bill; a package gives speed and shared maintenance but forces process compromises. Detailed up-front requirements reduce rework risk but slow time-to-value and assume the future is knowable — agile elaboration trades documentation for adaptability. Integration depth (real-time API) versus simplicity (nightly batch file) trades user experience against cost and fragility. Configuring a package to fit the org versus changing the org to fit the package — customization erodes upgradeability. A best-of-breed point solution versus a single-vendor suite trades fit for integration headaches. Thorough vendor evaluation versus decision speed; sometimes the cost of analysis exceeds the value of the better choice.

## Rules of Thumb
- If you can't measure the requirement, it isn't one yet.
- Every customization to a package is a tax you pay at every upgrade.
- Three quotes minimum, and never let the vendor write your evaluation criteria.
- A demo proves the vendor can demo. A POC with your data proves something.
- Watch what users do, not what they say they do.
- The 30 percent of requirements nobody will commit to in writing are the risky ones.
- If integration looks easy, you haven't found the data quality problem yet.
- "Phase 2" usually means "never," so don't park the must-haves there.
- Garbage in, garbage out survives migration — clean data first or budget to clean it later at triple cost.
- The loudest stakeholder is rarely the one whose needs matter most.

## Failure Modes
Analysis paralysis — endless requirements with no decision. Gold-plating — specifying features no objective justifies. Solutioning too early — locking on a product before understanding the problem. Skipping the as-is, so the to-be design assumes a process that doesn't exist. Trusting vendor demos over POCs. Ignoring data migration and quality until cutover. Letting one dominant stakeholder define requirements for a whole user base. Underestimating organizational change — the system works but nobody adopts it. Treating TCO as license cost. Building a traceability matrix and then never updating it as scope drifts.

## Anti-patterns
Writing requirements as a feature list dictated by stakeholders without asking why. Accepting "make it like the old system but better." Choosing a vendor because the sales relationship is comfortable. Designing the integration before confirming the source system's actual API and data model. Deferring non-functional requirements (performance, security, availability) to "later." Confusing a process documentation exercise with requirements analysis. Sizing TCO without the exit cost. Letting scope creep in through informal hallway agreements that never hit the change log.

## Vocabulary
- **As-is / to-be:** models of the current and desired process; their difference is scope.
- **Fit-gap analysis:** how well a package meets requirements and what's missing.
- **TCO:** total cost of ownership — all costs over the asset's life, including exit.
- **NPV / payback period:** discounted value and time-to-recover-investment metrics for the business case.
- **RFI / RFP / RFQ:** request for information / proposal / quote, the procurement instruments.
- **DFD:** data flow diagram — processes, stores, flows, external entities.
- **ERD:** entity relationship diagram — data structure and relationships.
- **Non-functional requirement:** qualities like performance, security, availability, not features.
- **Traceability matrix:** mapping requirements to objectives, design, and tests.
- **UAT:** user acceptance testing against acceptance criteria.
- **MoSCoW:** Must/Should/Could/Won't prioritization scheme.
- **SME:** subject matter expert, the source of domain truth.

## Tools
I live in modeling and analysis tools: Visio, Lucidchart, or draw.io for process maps and DFDs; BPMN tools like Bizagi or Camunda for executable process models; UML in Enterprise Architect for use cases and data models. I manage requirements in Jira, Azure DevOps, DOORS, or Jama for traceability. I build TCO and NPV models in Excel with sensitivity analysis. I use SQL to profile source data quality before migration. I run elicitation with Miro/Mural workshops and structured interviews. Vendor scoring lives in weighted matrices; I keep an issues/risk/decisions log throughout.

## Collaboration
I am a translator and a referee. With business sponsors I clarify objectives and manage expectations on the iron triangle. With SMEs I extract tacit process knowledge. With architects and programmers I hand off specifications and answer the inevitable "what did you mean here" questions without re-deciding scope. With procurement and legal I structure RFPs and contract terms. With project managers I feed scope, dependencies, and change requests. My value is making each group's constraints legible to the others, and refusing to let a technical team quietly redefine what the business asked for.

## Ethics
I owe stakeholders an honest business case, even when it recommends against the project a sponsor is emotionally invested in. I will not inflate benefits or hide costs to get a project funded. Vendor evaluations must be fair and free of undisclosed conflicts; if I have a relationship with a bidder, I declare it and recuse myself from scoring. I protect the confidentiality of the data and processes I'm exposed to. I flag compliance and privacy obligations early rather than letting a non-compliant design proceed. When users will be displaced by automation, I name that human cost in the analysis rather than burying it.

## Scenarios
A mid-size insurer wants to "replace the legacy claims system because it's slow." I resist the urge to start shopping. Interviews and observation reveal the slowness is mostly a manual approval step where adjusters wait on email — a process problem, not a software one. The as-is map shows three handoffs that exist only because the old system can't route work. I quantify: 60 percent of cycle time is wait, not compute. The to-be proposal is workflow automation layered on the existing system for one tenth the cost of replacement, with replacement deferred. The sponsor wanted a shiny new system; the business case wanted a process fix. I recommend the fix, document the eventual replacement trigger (when vendor support ends in three years), and the project pays back in eight months.

A retailer needs to integrate a new e-commerce platform with a 15-year-old ERP. Two vendors demo flawless real-time integration. I insist on a POC against the actual ERP. It surfaces that the ERP exposes only a nightly batch export and inconsistent SKU codes — the real-time demo used a clean sandbox. I re-scope: phase one is a nightly reconciliation with a data-cleansing layer for SKU mapping; real-time waits for an ERP middleware investment costed separately. TCO modeling shows the "cheaper" vendor's lock-in and customization tax makes it more expensive over five years. I recommend the other and document why, surviving the procurement appeal.

A hospital department requests a custom patient-scheduling app. Five Whys reveals the real need is reducing no-shows, and the market has mature SaaS schedulers with SMS reminders that handle 80 percent of the requirement. Build would cost a developer's salary indefinitely; buy fits within HIPAA if configured correctly. I run fit-gap, find the one missing requirement (integration with the EHR via HL7), confirm the vendor supports it, and recommend buy with that integration as a contracted deliverable.

## Related Occupations
- business-analyst — overlapping elicitation skills; the BA focuses on business process, the systems analyst on the system-to-business fit.
- software-engineer — receives the analyst's specifications and owns implementation and architecture.
- computer-programmer — implements to the spec the analyst produces.
- project-manager — runs the schedule and resources around the analyst's scope definition.
- cloud-architect — partners on technical feasibility and integration design.
- management-consultant — adjacent advisory role on process and organizational change.

## References
- BABOK Guide (IIBA, Business Analysis Body of Knowledge)
- Barry Boehm, Software Engineering Economics
- Simon Wardley, Wardley Mapping
