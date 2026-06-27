# Cloud Architect

## Purpose

A cloud architect exists to make the highest-leverage, hardest-to-reverse
technical decisions about where and how software runs — on purpose, with the
tradeoffs named, rather than by accident through a thousand choices. Cloud turned
"buy a server" into "call an API," replacing old constraints with new ones: a
bill that scales with mistakes, a blast radius that can span a continent, and a
menu where picking wrong and picking nothing both cost. The job is to impose
structure before freedom sprawls.

## Core Mission

Design systems on cloud infrastructure that meet the business's real
requirements for reliability, security, performance, and cost — and that the
teams who inherit them can operate, change, and afford for years.

## Primary Responsibilities

The visible work is drawing diagrams; the actual work is making tradeoffs
explicit before they harden into infrastructure nobody can move. A cloud
architect translates business requirements into reliability, security, and cost
targets; chooses the topology that meets them; designs the landing zone and
guardrails so teams build safely without a human in every loop; decides
managed-versus-self-hosted per component; encodes everything as IaC; owns cost
and security posture; and writes the ADRs that explain *why*. The recurring duty
is saying no to complexity that doesn't earn its keep.

## Guiding Principles

- **Design for the requirement, not the brochure.** Start from the RTO/RPO and
  SLA the business will pay for; build the cheapest thing that meets it.
- **Cost is a design parameter, not a monthly surprise.** Architecture decides the
  bill; a diagram that ignores it is wrong.
- **Infrastructure as code or it doesn't exist.** If Terraform didn't create it,
  it's undocumented and untrustworthy.
- **Push security left and down.** Encryption, least privilege, and network
  isolation are defaults in the landing zone, not bolted on later.
- **Reversible by default.** Avoid one-way doors — data residency, database
  engine, account topology — unless the requirement forces them.
- **Managed until proven otherwise.** Let the provider operate the hard parts;
  spend your operational budget on what differentiates.
- **Loose coupling buys independent failure and change.** Components that fail and
  deploy alone are ones you can reason about.

## Mental Models

- **The Well-Architected Framework.** Six pillars — operational excellence,
  security, reliability, performance efficiency, cost optimization, and
  sustainability — are the standing checklist; every design trades *among* them.
- **The CAP / cost / latency triangle.** Distributed systems trade consistency
  against availability under partition (CAP), and atop that sits the physical
  trade among cost, latency, and durability — pick per workload.
- **Regions, AZs, and blast radius.** An AZ is an independent-failure boundary
  within a region; a region is a geography boundary. Spread across AZs for HA; go
  multi-region only when an entire-region loss is business-ending.
- **The shared responsibility model.** The provider secures the cloud; you secure
  what you put in it. Where that line sits separates "encrypted" from "breached."
- **Landing zone and guardrails.** A pre-built, governed multi-account foundation
  — networking, identity, logging, policy — so teams get a paved road with
  preventive and detective controls.
- **The total-cost-of-ownership iceberg.** Compute's sticker price is the tip;
  egress, cross-AZ traffic, idle capacity, and the human cost of self-hosting are
  the submerged mass.
- **Cattle, not pets.** Immutable, reproducible infrastructure you replace rather
  than repair — servers to whole environments.

## First Principles

- The bill is a direct, real-time readout of your architecture's quality.
- Every cross-boundary call — region, AZ, account, VPC — costs latency, money, or
  both; topology is a budget.
- A control not enforced by policy is a suggestion ignored under deadline.
- You cannot bolt reliability or security onto a design that didn't plan for
  them; they are structural, not additive.
- The cheapest, most reliable component is the one you didn't build.

## Questions Experts Constantly Ask

- What's the actual RTO and RPO, and what will the business pay for each nine?
- What does this cost at expected scale — including egress and cross-AZ traffic?
- Is this a one-way door? What does it take to undo if we're wrong?
- What's the blast radius if this account, region, or credential is compromised?
- Managed or self-hosted — and what's the real total cost of operating it?
- How does this get created and recreated? Is it all in code?
- Where exactly does the shared-responsibility line sit for this service?
- Are we designing for the load we have or the load a VP imagined?

## Decision Frameworks

- **Managed vs. self-hosted.** Score on differentiation, operational cost,
  lock-in, and control. Default managed; self-host only when a hard requirement
  (cost at scale, data residency, a capability gap) justifies owning the ops.
- **Single vs. multi-region.** Drive it from RTO/RPO and revenue-at-risk per hour.
  Multi-AZ handles almost everything; multi-region roughly doubles cost and is
  justified only when a region-wide outage is existential.
- **Reversibility test.** Two-way doors (instance size, autoscaling) — decide
  fast, adjust later. One-way doors (primary datastore, org structure, data
  residency) — slow down, write an ADR.
- **Cost-optimization ladder.** Right-size, then reserve (commit/savings plans),
  then re-architect (serverless, spot, tiered storage), then renegotiate.
- **Buy vs. build the platform.** Adopt the provider's primitive unless the
  platform is your product.

## Workflow

1. **Elicit requirements.** Reliability (RTO/RPO/SLA), security and compliance
   (PCI, HIPAA, data residency), performance, scale, and the cost ceiling — in
   numbers, not adjectives.
2. **Model the workload.** Read/write ratio, traffic shape, statefulness, data
   gravity, latency budget. The workload picks the architecture.
3. **Draft against Well-Architected.** Sketch topology, account/network design,
   data stores, and managed-vs-self-hosted calls — one pillar at a time.
4. **Cost the design.** Model the monthly bill at realistic scale, including
   egress and cross-AZ; if it's unaffordable, the design is wrong now.
5. **Write the ADRs.** Record each hard-to-reverse decision and the alternatives
   rejected — the diagram shows what, the ADR shows why.
6. **Codify.** Express the landing zone and workloads as IaC (Terraform/CDK) with
   policy-as-code guardrails — nothing important is created by hand.
7. **Review and threat-model.** Security review, failure-mode walkthrough, cost
   review with whoever signs the invoice.
8. **Hand off and revisit.** Hand operators runbooks and dashboards, then revisit
   as load, prices, and the catalog shift.

## Common Tradeoffs

- **Cost vs. reliability.** Each nine multiplies spend; buy the availability the
  business feels, not the number on a slide.
- **Latency vs. consistency vs. cost.** Global strong consistency is slow and
  expensive; eventual consistency is cheap and fast but shifts complexity to the
  app. Pick per domain.
- **Managed convenience vs. lock-in.** Proprietary services accelerate delivery
  and deepen dependence; lock-in is a real cost, and so is the layer that avoids it.
- **Portability vs. leverage.** Multi-cloud portability forfeits the best managed
  services for a lowest-common-denominator tax.
- **Centralized governance vs. team autonomy.** Tight guardrails reduce risk but
  slow teams; a paved road balances the two.
- **Provisioned vs. on-demand/serverless.** Reserved capacity is cheapest at
  steady utilization; serverless wins on spiky load and not paying idle.

## Rules of Thumb

- Spread across AZs by default; reach for multi-region only when a region loss
  ends the business.
- If it's not in code, it doesn't exist — someone who didn't know it was
  load-bearing will delete it.
- Egress is the silent budget killer; keep data where it's processed.
- Tag every resource on creation or lose cost attribution.
- The first cost optimization is turning off what you don't use.
- Least privilege is a default, not a hardening pass.
- Pick boring, proven services for the foundation; spend novelty at the edges.
- A design with no ADR is a decision waiting to be relitigated.

## Failure Modes

- **Resume-driven architecture.** Choosing Kubernetes, multi-region, and a
  service mesh for an app three people use, because the patterns impress.
- **Cost blindness.** A design that works beautifully and bills catastrophically.
- **Lock-in by accident.** Wiring proprietary services through the core so deeply
  that leaving — or negotiating — becomes impossible.
- **The snowflake account.** A hand-configured environment nobody can reproduce —
  the DR plan is a prayer.
- **Over-engineering for imaginary scale.** Building for a million users at launch
  while serving a thousand.
- **Security as a phase.** Treating the pen test as the moment to add security,
  not verify it.
- **Guardrails so tight teams route around them.** Governance that breeds shadow
  IT, not safe defaults.

## Anti-patterns

- **Click-ops** — building production by hand in the console.
- **The lift-and-shift that never shifts** — moving VMs to the cloud unchanged,
  inheriting both worlds' costs and neither's benefits.
- **One giant account** — every environment and team sharing a blast radius and
  IAM policy.
- **Multi-cloud by default** — paying the portability tax for unused flexibility.
- **The bespoke control plane** — hand-building what the provider already offers.
- **Open security groups** — `0.0.0.0/0` because it "made the demo work."
- **Untagged sprawl** — resources with no owner, cost center, or end date.

## Vocabulary

- **RTO / RPO** — recovery time objective (how fast you must be back) / recovery
  point objective (how much data you can lose).
- **Landing zone** — a governed, multi-account foundation teams build on.
- **IaC** — infrastructure as code: declarative, versioned resources.
- **Blast radius** — how much fails when one component or region does.
- **Egress** — outbound data transfer, the most underestimated cost line.
- **Shared responsibility model** — the provider/customer split of security duties.
- **Availability zone (AZ)** — an isolated-failure datacenter group within a region.
- **Guardrails** — preventive and detective policy controls bounding teams.
- **Reserved / savings plan** — a usage commitment for a lower unit price.
- **Data gravity** — the tendency of applications to migrate toward where the
  data already lives.

## Tools

- **IaC** — Terraform/OpenTofu, AWS CDK, Pulumi, CloudFormation, Bicep.
- **Policy as code** — OPA/Conftest, Sentinel, Service Control Policies, Azure Policy.
- **Cloud platforms** — AWS, Azure, GCP, and their Well-Architected tools and
  landing-zone accelerators (Control Tower, Landing Zone Accelerator).
- **Cost** — native cost explorers, Infracost in CI, Kubecost, tagging.
- **Diagramming / decisions** — C4 diagrams, ADRs as versioned markdown.
- **Networking & identity** — VPC/VNet design, Transit Gateway, IAM, SSO/identity
  federation.
- **Security** — Security Hub / Defender, GuardDuty, KMS, CSPM.

## Collaboration

A cloud architect is a force multiplier or a bottleneck depending on how they
work with the teams who build on their designs. With software engineers, the
architect provides the paved road — golden modules, reference architectures, ADRs
— rather than approving every decision personally. With SREs and DevOps engineers
the architect designs the redundant substrate and the SRE keeps it alive.
Security engineers co-own the threat model; finance and FinOps are genuine
stakeholders. The failure pattern is the ivory-tower architect handing down
diagrams they've never operated.

## Ethics

Cloud architects decide where data lives, who can reach it, and how much energy
a system burns — quiet but real power. The duties: design for the data residency
the law and the user require, not the cheapest region; make least privilege and
encryption defaults so a breach is contained; be honest about cost and risk
rather than designing to the budget and hoping; weigh the carbon cost of
unjustified always-on redundancy; and resist lock-in that serves a sales
relationship over the freedom to leave. The harder gray zones —
surveillance-capable data lakes, jurisdictions that compel access — rarely have
clean answers, but an architect who stays silent has chosen by default.

## Scenarios

**"We need multi-region active-active."** A VP returns from a conference
demanding active-active across three regions for an internal HR application. The
expert doesn't draw the diagram; they ask for the RTO and RPO. The honest answers
are "back within a few hours" and "we can lose a few minutes" — for a system used
by employees in one country during business hours. Active-active would roughly
triple cost and solve a region loss that has never occurred. The architect proposes
multi-AZ in a single region with automated cross-region backups and a tested
restore runbook — the real RTO/RPO at a fraction of the cost — in an ADR.

**The end-of-month bill triples.** Finance escalates a bill that jumped with no
traffic increase. Cost-by-service shows two causes: a microservice chatty across
availability zones (cross-AZ traffic is billed), and a pipeline reading and
writing across regions, racking up egress — neither visible on the diagram, which
is the lesson. The fix: co-locate the chatty services in one AZ and move the
pipeline's compute to the data's region. The systemic fix: add Infracost to CI so
the next cross-region write shows its cost.

**Choosing the database for a new product.** Engineering wants a trendy
distributed NewSQL database for a product expecting moderate, predictable load.
The architect runs the reversibility test: the primary datastore is a one-way
door, so it earns scrutiny. The workload is read-heavy with strong-consistency
needs and a single-region home — managed PostgreSQL with read replicas meets
every requirement, while the distributed option buys write scale unneeded for
years. They choose Postgres and document the ceiling to revisit.

## Related Occupations

A cloud architect is a software engineer zoomed out to the level of systems and
dollars, trading day-to-day code for decisions about topology, cost, and risk.
Site reliability engineers operate the redundant infrastructure the architect
designs, and the two must agree on what "reliable" costs. DevOps engineers build
the pipelines and IaC tooling that turn the architecture into running systems.
Security engineers co-own the guardrails; network engineers handle connectivity;
data engineers depend on the substrate provisioned.

## References

- AWS Well-Architected Framework (and Azure/Google equivalents)
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Cloud Native Patterns* — Cornelia Davis
- *Fundamentals of Software Architecture* — Mark Richards & Neal Ford
- *The Phoenix Project* — Kim, Behr & Spafford
