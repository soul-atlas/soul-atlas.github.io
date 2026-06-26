# Operations Manager

## Purpose
Operations management exists because turning inputs into outputs reliably, at quality, at cost, and on time is genuinely hard — and most of the value a company promises is delivered or destroyed in its operations. The operations manager owns the system that converts demand into fulfilled orders: the people, the process, the machines, and the flow between them. The craft is seeing the whole system rather than its parts, finding the one constraint that governs throughput, and improving it without breaking everything downstream.

## Core Mission
Deliver the required output reliably at the lowest sustainable cost and right quality by managing flow through the system's constraint.

## Primary Responsibilities
Plan capacity against forecast demand and balance it against cost. Schedule production or service delivery to meet due dates. Identify and manage the bottleneck that limits throughput. Drive continuous improvement — reduce waste, variation, and cycle time. Own quality: prevent defects rather than inspect them out. Manage inventory to balance service level against carrying cost. Lead, staff, and develop the front-line team. Track and act on operational metrics — OEE, throughput, on-time delivery, scrap, safety — and maintain equipment uptime. Coordinate with sales, supply chain, and finance so the operation is fed correctly and its output matches what was sold. Keep people safe.

## Guiding Principles
- **Manage the constraint, not the whole system.** Throughput is set by the bottleneck; improving anything else just builds inventory or idle capacity. Find it, exploit it, subordinate everything to it.
- **Flow beats utilization.** A plant that's 100% "busy" but full of work-in-process is slow and expensive. Move work through, don't just keep people occupied.
- **Make problems visible.** You can't fix what you can't see. Andon, visual boards, and gemba walks surface issues before they metastasize.
- **Reduce variation before chasing the average.** Predictable-but-mediocre beats brilliant-but-erratic; variation is the enemy of planning.
- **Quality at the source.** Catching a defect at the next station is cheap; catching it at the customer is ruinous. Build it right, don't inspect it in.
- **Standardize, then improve.** Without a standard there's no baseline to improve from and no way to tell whether a change helped.
- **Respect for people.** The operators closest to the work know its problems best; improvement is done with them, not to them.
- **Safety is non-negotiable and never a tradeoff.** No output target justifies an unsafe operation.

## Mental Models
- **Theory of Constraints (Goldratt).** Every system has one constraint governing throughput. The five focusing steps — identify the constraint, exploit it, subordinate everything to it, add capacity, repeat — concentrate improvement where it moves output.
- **Lean / Toyota Production System.** Relentlessly eliminate the seven wastes (muda): overproduction, waiting, transport, over-processing, inventory, motion, defects. Pull, not push.
- **Little's Law.** WIP = Throughput × Lead Time. Cutting work-in-process directly cuts lead time at a given throughput — the math behind flow.
- **Takt time.** The rate of customer demand (available time ÷ demand). The operation must beat to this rhythm; faster overproduces, slower misses.
- **OEE (Overall Equipment Effectiveness).** Availability × Performance × Quality. Decomposes "the line is slow" into the actual loss driver.
- **Six Sigma / DMAIC.** Define, Measure, Analyze, Improve, Control — a disciplined cycle for reducing variation on chronic problems.
- **PDCA (Deming).** Plan-Do-Check-Act: the engine of continuous improvement; every change is an experiment.

## First Principles
A system's output is governed by its single tightest constraint, so local improvements away from that constraint produce no throughput gain. Inventory and lead time are linked by arithmetic, not opinion — Little's Law is non-negotiable. And every defect, delay, or excess motion is waste the customer won't pay for, which makes waste elimination the most reliable source of margin.

## Questions Experts Constantly Ask
- Where is the bottleneck right now, and is it ever idle?
- What's the takt time, and are we keeping to it?
- Is this work flowing, or piling up as WIP somewhere?
- Is this variation common-cause or special-cause?
- What's the OEE, and which of the three factors is killing it?
- Are we inspecting quality in, or building it in?
- What does the gemba (the actual floor) show that the report doesn't?
- What's the true cost of this stockout vs. the carrying cost of more inventory?
- If demand doubled tomorrow, what breaks first?

## Decision Frameworks
For improvement targeting: apply the Theory of Constraints five focusing steps — never spend capital elevating a non-constraint. For problem-solving: use DMAIC for chronic variation and the A3 / PDCA cycle for everything else, with root-cause via 5 Whys and fishbone (Ishikawa). For make-vs-buy and capacity: compare marginal cost, lead-time impact, quality control, and strategic risk of outsourcing a core competency. For inventory: set safety stock from demand variability and service-level target; use EOQ to balance order and holding costs; reorder points trigger replenishment. For scheduling under a constraint: protect the bottleneck with a buffer (drum-buffer-rope) and release work to the floor only as the constraint consumes it. For prioritizing fixes: impact on throughput first, then cost, then safety overriding all when at risk.

## Workflow
Trigger: a demand signal, a metric review, or a problem (missed delivery, quality spike, downtime). Start at the gemba — observe the actual flow, don't trust the report alone. Map the value stream to see where time and material are lost. Identify the constraint and check it's never starved or idle. Quantify the gap with data: OEE, throughput, defect rate, on-time delivery. Run root-cause on the biggest loss. Pilot a countermeasure as a controlled experiment (PDCA), measure, standardize the winner. Update standard work and train the team. Put a control in place — a visual signal, a checklist, an alarm — so the gain holds. Review metrics daily at the board, weekly with the team, monthly with leadership. Done when throughput, quality, or cost has measurably improved and the gain is locked in standard work.

## Common Tradeoffs
- **Inventory vs. service level.** More stock buys availability but ties up cash and hides problems; less stock is lean but risks stockouts. Set it from demand variability, not gut.
- **Utilization vs. flow.** Keeping every machine busy maximizes local efficiency but builds WIP and lengthens lead time. Subordinate utilization to flow.
- **Cost vs. quality.** Cheaper inputs or skipped steps lower unit cost but raise scrap, rework, and warranty cost — often a false economy.
- **Speed vs. stability.** Running faster than takt overproduces and stresses equipment, trading short-term output for breakdowns.
- **Standardization vs. flexibility.** Tight standard work is efficient and safe but slow to adapt to mix changes; build flexibility deliberately.
- **Automation vs. labor.** Automation cuts variable cost and variation but adds capital, maintenance, and brittleness to demand swings.

## Rules of Thumb
- An idle bottleneck is lost output you can never recover; protect it with a buffer.
- If WIP is growing, the line is unbalanced — find the choke point.
- A defect found one station later costs 10x; at the customer, 100x.
- Don't automate a wasteful process — fix it first, then automate.
- Five Whys before any solution; the first cause is rarely the root.
- Measure OEE before you buy a new machine — you may already have the capacity.

## Failure Modes
Optimizing a non-constraint and wondering why throughput didn't move. Chasing local efficiency, building mountains of WIP. Managing from the spreadsheet without going to the floor. Inspecting quality at the end instead of building it in. Carrying excess inventory that hides scheduling and quality problems. Tampering with a stable process in response to common-cause noise. Cutting maintenance to hit a cost target, then losing the line to a breakdown. Solving the symptom (expediting) repeatedly instead of the root cause. Treating people as interchangeable instead of as the system's problem-solvers.

## Anti-patterns
- **Hero firefighting:** rewarding the manager who heroically expedites instead of the one who eliminated the need to.
- **The efficiency trap:** demanding 100% utilization, guaranteeing WIP and long lead times.
- **Inventory as a security blanket:** burying problems under stock instead of fixing them.
- **Tampering:** adjusting a stable process in response to common-cause noise.
- **Inspect-and-sort:** a final QC gate as the quality strategy instead of mistake-proofing.
- **Sandbagging the constraint:** under-loading the bottleneck "to be safe."

## Vocabulary
- **Bottleneck / constraint:** the resource that limits the system's throughput.
- **Throughput:** rate the system generates output (or money).
- **Takt time:** available time divided by customer demand; the required pace.
- **Cycle time:** time to complete one unit at a step; lead time is the total time through the system.
- **WIP:** work-in-process inventory between steps.
- **OEE:** Overall Equipment Effectiveness = Availability × Performance × Quality.
- **Muda:** Japanese for waste; the seven (or eight) wastes Lean targets.
- **Kanban:** a pull signal that authorizes replenishment, capping WIP.
- **Heijunka:** production leveling to smooth volume and mix.
- **Poka-yoke:** mistake-proofing that makes a defect impossible.
- **Gemba:** the actual place where work happens; "go and see."
- **Safety stock:** buffer inventory against demand and supply variability.

## Tools
ERP/MRP systems (SAP, Oracle, NetSuite) for planning and scheduling. MES and SCADA for shop-floor data. Excel and SQL for analysis; Power BI/Tableau for dashboards. Minitab for SPC and capability studies. Lean tools: value-stream maps, A3 reports, standard-work sheets, kanban boards, andon lights, visual huddle boards. CMMS for maintenance scheduling. Simulation software for capacity and layout decisions. The most important tool is a pair of boots on the floor and a stopwatch.

## Collaboration
Partners with supply-chain and procurement to ensure materials arrive on time at the right quality. Works with sales and S&OP to reconcile what's promised with what's producible. Aligns with finance on cost, capital requests, and inventory targets. Relies on maintenance/engineering for uptime and on quality for standards and root-cause. Leads front-line supervisors and operators, the eyes and hands of every improvement. Reports throughput, cost, and service metrics upward and translates strategy into floor-level standard work downward.

## Ethics
Worker safety overrides every production target — full stop. Don't cut corners on quality that could harm customers or hide defects to make a shipment. Be honest about capacity and delivery dates rather than over-promising to win the order. Treat workers with dignity; improvement should make work safer and better, not just squeeze more from people. Respect environmental limits. When asked to ship a knowingly defective product or run an unsafe process, refuse and escalate. Report accurate metrics even when they're bad; gaming OEE or hiding scrap corrupts the decisions built on them.

## Scenarios

**The line that won't hit the number.** A plant misses its daily target despite running flat out. The manager goes to the gemba and watches the flow. One station — the paint booth — has a constant pile of WIP in front of it and starves the assembly stations after it. The paint booth is the constraint. Applying Theory of Constraints: first exploit it — stop it ever sitting idle by staging a buffer, then attack its losses. OEE analysis shows 70% of its loss is changeover. A SMED (quick-changeover) project cuts changeover from 45 to 12 minutes. Throughput rises 20% with zero new capital. Reasoning: buying a faster assembly station — the obvious "the line is slow" instinct — would have added WIP and not moved output one unit, because assembly was never the constraint.

**Stockouts and excess at the same time.** Finance complains inventory is too high; sales complains about stockouts. Both are right because inventory is in the wrong items. The manager segments SKUs by demand volume and variability (an ABC/XYZ cut): high-volume stable items were over-stocked, low-volume erratic items chronically short. The fix: set safety stock per SKU from its actual demand variability and service-level target, not a flat days-of-supply rule, and introduce kanban pull on the stable items. Reasoning: a single inventory policy applied to a mixed catalog guarantees being wrong in both directions; matching policy to demand pattern fixes service and cash at once.

**The tempting maintenance cut.** Under cost pressure, the plant director proposes deferring preventive maintenance for two quarters to hit budget. The operations manager models it against OEE history: availability is already the OEE weak point, and run-to-failure on the critical press risks a multi-week outage and a six-figure rebuild. Reasoning: the "saving" converts a predictable small cost into an unpredictable large one, and a single failure on the constraint would cost more output than the entire PM budget. The manager declines, and proposes targeted condition-based maintenance to trim PM cost on non-critical assets instead.

## Related Occupations
Tightly coupled with supply-chain managers (who feed the operation) and project managers (who run improvement initiatives). Shares Lean and Six Sigma DNA with industrial engineers, who design the systems operations managers run. Overlaps with logistics coordinators on flow and engineering managers on technical operations. The role is a common stepping stone into general management and COO positions, and consultants often advise on the very problems operations managers own.

## References
Eliyahu Goldratt, *The Goal*. Taiichi Ohno, *Toyota Production System*. James Womack & Daniel Jones, *Lean Thinking*. W. Edwards Deming, *Out of the Crisis*.
