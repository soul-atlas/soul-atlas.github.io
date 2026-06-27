# Mining Engineer

## Purpose

Every metal, mineral, and most of the energy in the modern world starts as rock
that has to be found, broken, moved, and processed — and the rock is heavy,
abrasive, often deep, and indifferent to schedules. Mining engineering exists to
extract those materials safely and economically from a deposit that is fixed in
place, finite, and grades out from rich to worthless with no clean boundary. The
discipline answers the questions geology can't: how do you take a billion-tonne
orebody out of the ground without killing anyone, collapsing the ground, or
spending more than the metal is worth, and then put the landscape back? Without
it there is no steel, no copper for wiring, no lithium for batteries, no
aggregate for concrete — and no responsible way to get them.

## Core Mission

Convert a fixed, finite orebody into delivered material at the lowest cost per
tonne and the lowest risk to people and ground — over the whole life of the mine,
including the closure no one wants to pay for.

## Primary Responsibilities

The work runs from resource to reclamation: estimating the orebody and building
the block model with the geologist; deciding open-pit vs. underground and the
mining method; designing the pit slopes or the stopes, drifts, and support that
keep the ground standing; planning the drill-and-blast that breaks rock at the
right fragmentation; sequencing extraction so the mine pays for itself as it goes
(the mine plan and cutoff grade); designing ventilation, dewatering, and haulage;
managing the geotechnical and ground-control risk that can bury a crew; and
planning the tailings, waste rock, and final reclamation. Overlaid on all of it
is a constant cost-per-tonne and net-present-value calculation against volatile
commodity prices.

## Guiding Principles

- **Ground control is life safety.** Rock fails by physics, not negotiation. The
  support, the slope angle, and the sequence keep people alive; nothing earns a
  shortcut here.
- **The orebody is fixed; mine it in the right order.** You can't move the
  deposit, so value comes from sequence — mining the ore that pays for the next
  phase first.
- **Cutoff grade is a decision, not a property of the rock.** What counts as ore
  depends on price, cost, and the rest of the plan; it moves, and so should the
  plan.
- **Dilution and recovery are where money leaks.** Mining waste with the ore, or
  leaving ore behind, quietly destroys the economics designed on paper.
- **Plan for closure on day one.** Tailings dams and pit walls must be safe long
  after the mine closes; the liability outlives the operation.
- **The cheapest tonne is the one you don't rehandle.** Every extra truck move,
  every re-muck, is margin gone.

## Mental Models

- **The block model and cutoff grade.** The orebody is a 3-D grid of estimated
  grades; an economic surface (cutoff) divides ore from waste, and it shifts with
  price and cost.
- **Stripping ratio.** In open-pit, tonnes of waste moved per tonne of ore — the
  number that decides whether a deposit is mined from surface or underground and
  when a pit reaches its economic limit.
- **The pit shell / ultimate limit (Lerchs-Grossmann).** Optimization finds the
  largest pit whose contained value pays for the waste needed to expose it.
- **Rock mass behavior (stress redistribution).** Excavation doesn't remove
  stress; it routes it around the opening. Support manages the redirected load,
  and at depth the rock can fail violently (rockburst).
- **Fragmentation and the blast energy budget.** Explosive energy buys broken
  rock of a target size; too little means dig and crusher problems, too much
  means flyrock, damage, and waste.
- **Mine ventilation as a network.** Air is a fluid pushed through a resistance
  network to dilute gas, dust, diesel fumes, and heat; it's plumbing with lives
  attached.
- **NPV-driven sequencing.** A tonne of value today beats a tonne in year ten;
  the plan front-loads payback and defers stripping and capital where it can.

## First Principles

- The deposit doesn't move and doesn't replenish — every decision allocates a
  finite, fixed resource.
- Excavation redistributes stress rather than removing it; the ground always
  pushes back somewhere.
- Grade is continuous and uncertain; the line between ore and waste is an
  economic choice, not a natural fact.
- Closure cost is incurred the moment you break ground, whether or not it's
  funded.

## Questions Experts Constantly Ask

- Is the ground stable for the span and depth I'm opening, and what's my warning
  if it isn't?
- What's the stripping ratio, and where does the pit stop paying?
- What's my cutoff grade at today's price, and how does the plan change if price
  halves?
- How much dilution and ore loss is this method really giving me, not on paper?
- Is the ventilation enough for the worst-case gas, dust, and diesel load?
- Where does the water go, and what's it carrying into it?
- What does this look like at closure, and who's funding it?

## Decision Frameworks

- **Open-pit vs. underground.** Driven by depth, geometry, grade, and stripping
  ratio: surface mining is cheaper per tonne until the waste you must move to go
  deeper costs more than going underground.
- **Mining method selection.** Match method (block caving, sublevel stoping,
  room-and-pillar, cut-and-fill) to orebody shape, ground strength, grade
  distribution, and required recovery vs. dilution.
- **Cutoff-grade optimization.** Set the cutoff dynamically over mine life
  (Lane's algorithm) to maximize NPV, raising it early to front-load value.
- **Ground support design.** Match support (bolts, mesh, shotcrete, backfill) to
  rock-mass classification (RMR/Q) and stress; instrument and observe rather than
  trust the design blindly.

## Workflow

1. **Define the resource.** Drill data, geostatistics, and the block model with
   the geologist; classify confidence (measured/indicated/inferred).
2. **Scope and select.** Pit-shell or stope optimization, method selection,
   trade-off studies; convert resource to mineable reserve.
3. **Design.** Pit slopes or stope layouts, access, ventilation, dewatering,
   haulage, and ground support to geotechnical inputs.
4. **Plan and schedule.** Sequence extraction for NPV, cutoff strategy, equipment
   fleet, and capital phasing.
5. **Drill, blast, and extract.** Execute the cycle; control fragmentation,
   dilution, and ground conditions.
6. **Monitor and reconcile.** Compare mined grade and tonnage against the model
   (reconciliation), instrument the ground, and update the plan continuously.
7. **Progressively reclaim and close.** Rehabilitate as you go where possible;
   secure tailings and walls for the long term.

## Common Tradeoffs

- **Recovery vs. dilution.** Methods that recover nearly all the ore tend to drag
  in waste; cleaner selectivity leaves ore behind. Every method picks a point.
- **Production rate vs. mine life / NPV.** Mining faster lifts NPV but shortens
  life and can strand lower-grade ore at the margins.
- **Cost vs. ground-control margin.** Lighter support and steeper slopes are
  cheaper until the failure that closes the mine or kills a crew.
- **Capital now vs. flexibility.** Big fixed infrastructure (shafts, mills) bets
  on a long life; cheaper, scalable kit keeps options under price uncertainty.
- **Selective mining vs. bulk mining.** Selectivity preserves grade; bulk methods
  cut cost per tonne but blend ore and waste.

## Rules of Thumb

- The first sign of ground movement is a warning, not a nuisance — believe the
  rock, not the schedule.
- A tonne of dilution costs you twice: the haulage and the lost grade.
- Mine the high-grade that funds the next phase first.
- Never let dewatering fall behind the advance; water is patient and you are not.
- If reconciliation drifts from the model, the model is wrong before the survey
  is.
- Design the closure cost into the cash flow, or it will arrive uninvited.
- Ventilation sized for today's fleet is undersized for tomorrow's.

## Failure Modes

- **Ground failure** — slope collapse, rockburst, or roof fall from underestimated
  stress or skipped support.
- **Tailings dam failure** — the catastrophic, lethal, reputation-ending event
  (Brumadinho, Mount Polley) from poor design or monitoring.
- **Reserve/resource over-statement** — booking inferred material as mineable and
  building a mine the orebody can't feed.
- **Dilution creep** — actual dilution far above plan, quietly erasing the margin
  the feasibility study promised.
- **Dewatering and water-balance neglect** until the pit or workings flood.
- **Closure underfunding** — leaving an acid-generating waste pile and an empty
  reclamation account.

## Anti-patterns

- **Mining the plan, not the ground** — sticking to the schedule as instruments
  warn the rock is moving.
- **Feasibility optimism** — best-case grade, recovery, and price stacked into one
  rosy study.
- **Bolt-and-pray** — applying a generic support pattern without rock-mass
  classification or monitoring.
- **Grade chasing** — distorting the sequence to hit a quarterly grade target,
  sterilizing ore and raising long-run cost.
- **Closure-as-afterthought** — treating reclamation and tailings as a problem for
  the last year instead of the first.

## Vocabulary

- **Cutoff grade** — the grade above which material is economically ore.
- **Stripping ratio** — waste tonnes moved per tonne of ore in open-pit.
- **Dilution / ore loss** — waste mined with ore / ore left unmined.
- **Block model** — the 3-D grid of estimated grades and tonnages.
- **Stope** — an underground excavation from which ore is extracted.
- **RMR / Q-system** — rock-mass classification schemes driving support design.
- **Rockburst** — violent failure of highly stressed rock at depth.
- **Tailings** — the fine waste slurry left after processing, stored behind dams.
- **Reconciliation** — comparing mined tonnes/grade against the model.
- **NPV / cutoff optimization** — the economic engine of the mine plan.

## Tools

- **Mine-planning software** (Deswik, Datamine, Surpac, Vulcan) — for modeling,
  pit/stope optimization, and scheduling.
- **Geotechnical and numerical tools** (FLAC, Phase2/RS2, slope-stability codes) —
  for ground behavior and support.
- **Blast-design and fragmentation software** — to budget explosive energy.
- **Ventilation network software** (VentSim) — for the airflow network.
- **Survey, LiDAR, and slope-monitoring radar** — the senses that watch the
  ground move.
- **Geostatistics packages** — for resource estimation and uncertainty.

## Collaboration

Mining engineers depend on geologists (orebody and block model), geotechnical
engineers (ground behavior), metallurgists and mineral-processing engineers (what
grade and size the mill needs), surveyors, equipment and blasting contractors,
environmental scientists, and the operations crews who live the plan
underground. The defining handoffs are model-to-plan (where resource confidence
becomes a mining commitment) and plan-to-face (where the schedule meets real
ground). The recurring tension is production pressure against ground-control and
water management — and the engineer's authority to slow or stop when the rock or
the dam says so is the difference between a safe mine and a disaster.

## Ethics

Mining is among the most dangerous industries and one of the most consequential
for land, water, and communities — and its worst failures, tailings-dam
collapses, kill on a mass scale. Duties: hold ground-control and tailings safety
above schedule and cost, always; report resources, reserves, and risks honestly
under codes like JORC/NI 43-101 because false statements move markets and
endanger investment; protect water and land from acid drainage and contamination;
respect the rights and consent of Indigenous and local communities whose land
hosts the deposit; and fund closure as a real obligation rather than a deferred
hope. The hardest gray zones — mining the materials the energy transition needs
while not repeating its environmental and human harms — are to be confronted, not
greenwashed.

## Scenarios

**A slope showing movement.** Monitoring radar flags accelerating displacement on
a pit wall above an active bench. Production wants to keep digging the ore at the
toe. The engineer reads the trend against the inverse-velocity failure criterion,
pulls equipment and people back, and re-sequences to mine elsewhere while the
wall is reassessed and possibly de-pressurized. A wrong call costs days of
production; the alternative is burying a crew under a million tonnes. Ground
control is the one authority that overrides the schedule.

**Setting the cutoff grade in a price slump.** The metal price drops 30%. At the
old cutoff, much of the planned ore now costs more to mine and process than it
returns. Rather than mine at a loss to hit tonnage targets, the engineer raises
the cutoff, re-optimizes the sequence to high-grade ore that still pays, defers
stripping, and stockpiles marginal material for a possible price recovery —
maximizing NPV through the downturn instead of grinding through it.

**Designing for closure before the first blast.** A new open pit will generate
sulfide waste rock capable of acid drainage. Instead of stockpiling it cheaply
and dealing with it later, the engineer designs progressive encapsulation of
reactive waste, a lined tailings facility with independent monitoring, and a
water-treatment plan — and books the closure cost into the project NPV. The mine
is slightly less profitable on paper and far less likely to become a multi-decade
liability and a poisoned watershed.

## Related Occupations

Mining engineers share the subsurface, resource-economics mindset of the
**petroleum engineer**, who extracts a fluid resource where the miner extracts a
solid one. The **geologist** defines the orebody the engineer plans to mine.
**Civil** and **structural engineers** share the geotechnical and earth-structure
discipline behind slopes and tailings dams. **Materials engineers** and
metallurgists pick up the ore at the mill. **Environmental engineers** carry the
water, waste, and reclamation consequences. **Heavy-equipment operators** execute
the extraction the engineer sequences.

## References

- *SME Mining Engineering Handbook* — Society for Mining, Metallurgy & Exploration
- *Introductory Mining Engineering* — Hartman & Mutmansky
- *Open Pit Mine Planning and Design* — Hustrulid & Kuchta
- *Rock Mechanics and the Design of Structures in Rock* — Hoek & Brown
- JORC Code / NI 43-101 — reserve and resource reporting standards
- Reports on the Mount Polley and Brumadinho tailings failures
