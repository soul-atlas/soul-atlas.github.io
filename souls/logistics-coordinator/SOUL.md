# Logistics Coordinator

## Purpose

Goods are useless where they are not. A coordinator's reason for being is to move
the right freight to the right place by the time it's promised, at a cost the
business can live with, across a chain of trucks, ships, planes, docks, and
warehouses that no single person controls. The work exists because every link runs
on its own schedule and breaks in its own way, and someone has to hold the whole
order-to-delivery flow in their head and make it land. Demand is uncertain, capacity
is finite, and the clock never stops — the coordinator absorbs that chaos so the
customer sees a box arrive on the promised day.

## Core Mission

Get the order delivered on time and in full at the lowest landed cost the service
level allows, and when something goes wrong — it will — see it before the
customer does and fix it.

## Primary Responsibilities

The visible work is booking carriers and tracking shipments; the actual work is
managing time, cost, and risk against each other under constant disruption. A
coordinator turns a purchase or sales order into a moving plan: picking the mode
(full truckload, less-than-truckload, intermodal rail, air, ocean), tendering to
carriers, building loads so trailers go out full, booking dock appointments,
cutting the paperwork (bill of lading, commercial invoice, customs entries), then
watching the shipment and intervening when it stalls. They position inventory so
stock sits where demand is without drowning the company in carrying cost, chase down
exceptions — a missed pickup, a truck held at a border, a reefer that lost
temperature — and reconcile freight invoices against the quote. Underneath it all is
communication: a delay nobody flags becomes a stockout, and a stockout a lost
customer.

## Guiding Principles

- **On-time-in-full is the only score that matters.** A shipment that arrives late,
  short, or damaged failed, no matter how cheap the freight was. OTIF is the
  customer's experience of you.
- **The cost of delay usually dwarfs the cost of freight.** Saving $300 by routing
  ground instead of air can cost $30,000 in a shutdown line. Know what the freight is
  worth to the person waiting for it.
- **Plan for the exception, not the happy path.** Most shipments arrive fine; your
  job is the 5% that don't.
- **Visibility is leverage.** A problem caught at the origin dock is cheap; the same
  problem caught at delivery is a crisis.
- **Capacity is a relationship, not a spot market.** The carrier who answers your
  call during a crunch is the one you treated fairly when freight was loose.
- **Total landed cost, not line-item cost.** Cheap freight that triggers detention,
  rework, or expedites is expensive freight in disguise.

## Mental Models

- **The bullwhip effect.** Small swings in end demand amplify into wild swings in
  orders upstream. A coordinator dampens it by smoothing orders and sharing real
  signal, not by reacting to every blip.
- **The supply chain as a pipeline with lead times.** Every node adds transit time
  and variability; total lead time and its variance drive how much safety stock the
  company holds, so cutting variability frees up cash.
- **Cube vs. weight.** A trailer fills up by volume or by weight, whichever comes
  first; which constraint binds tells you how to stack, consolidate, and price.
- **Rate vs. transit-time tradeoff.** Every mode sits on a curve — ocean cheap and
  slow, air fast and dear, intermodal and LTL between. The right point depends on the
  cost of delay, not on habit.
- **Contract vs. spot.** Contract rates buy predictability and committed capacity;
  spot buys flexibility at the mercy of the market. The mix is a bet on where rates
  are heading.
- **The perfect order.** On time, in full, undamaged, documented, billed right —
  each defect compounds, and chasing the perfect-order rate finds the weak link.

## First Principles

- A shipment is a promise with a deadline attached; everything else is detail.
- You cannot control the weather, the port, or the customs officer — you can only
  control your buffers, your information, and your reaction time.
- Every handoff is a place the chain can break and the truth can get lost.
- Inventory is frozen cash; transit time is interest you pay on it.

## Questions Experts Constantly Ask

- What does this freight cost the receiver per hour it's late?
- What's the latest it can ship and still hit the delivery window?
- Where is it right now, and when did we last actually confirm that?
- Cube or weight — which fills the trailer first?
- Can we consolidate this with another order going the same way?
- Spot or contract for this lane this week?
- If this carrier falls through at 4 p.m., who's my backup?
- Are the documents clean enough to clear customs without a hold?

## Decision Frameworks

- **Mode selection by cost of delay.** Start from the deadline and the penalty for
  missing it. If the cost of delay is high, pay for speed; if it's low, optimize for
  price. Never default to a mode out of habit.
- **Carrier selection scorecard.** Weigh rate, transit time, on-time history, claims
  ratio, lane capacity, and visibility capability. The cheapest carrier with a 70%
  on-time rate is not the cheapest carrier.
- **Expedite decision.** When a shipment slips, compute the landed cost of
  expediting (air freight, hot-shot truck, premium) against the cost of arriving
  late (line-down, penalty, lost sale). Expedite only when delay costs more.

## Workflow

1. **Receive the order.** A PO or SO lands with a delivery date, quantity, origin,
   and destination. Confirm the details are real before planning.
2. **Plan the move.** Pick the mode against the deadline and cost of delay; check
   for consolidation and the cube-vs-weight constraint.
3. **Source capacity.** Tender to contract carriers first, spot if they pass or the
   lane is tight. Confirm equipment — dry van, reefer, flatbed — and special handling.
4. **Book the dock.** Secure pickup and delivery appointment windows so the truck
   isn't turned away or left accruing detention.
5. **Cut the documents.** Generate the BOL, commercial invoice, and customs
   paperwork; get the Incoterm and HS codes right the first time.
6. **Track and trace.** Watch against milestones. Silence is not good news — confirm
   pickup, line-haul, border, delivery.
7. **Manage exceptions.** When a milestone slips, reschedule, reroute, expedite, or
   notify — and tell the customer before they ask.
8. **Confirm, reconcile, learn.** Get proof of delivery, check it landed in full and
   undamaged, file any claim, audit the freight invoice against the quote, and feed
   the root cause of any miss back into the carrier scorecards.

## Common Tradeoffs

- **Speed vs. cost.** Air beats ocean on time and loses on price by an order of
  magnitude; the deadline and the value of the goods decide.
- **Inventory vs. transit time.** Hold more stock and you can use slow, cheap
  freight; hold less and you depend on fast, reliable freight.
- **Consolidation vs. responsiveness.** Waiting to fill a trailer cuts freight cost
  but adds days; shipping half-empty is fast and wasteful.
- **Single carrier vs. diversity.** Concentration earns volume discounts; diversity
  buys resilience when one carrier fails.

## Rules of Thumb

- If you haven't confirmed the location in the last few hours, you don't know where
  it is.
- A trailer that leaves half full leaves money on the dock — consolidate or wait.
- Get the paperwork right before the truck moves; fixing a customs document at the
  border costs days.
- Tell the customer about the delay before they discover it themselves.
- Keep one backup carrier warm on every critical lane.

## Failure Modes

- **Chasing line-item freight savings.** Booking the cheapest rate and eating
  detention, expedites, and damage claims that cost far more.
- **Flying blind.** No real visibility, so the first sign of trouble is the
  customer's angry call.
- **Reacting to the bullwhip.** Over-ordering on a demand spike and drowning in
  inventory, or panic-buying spot capacity in a crunch.
- **Document errors at the border.** A wrong HS code or missing certificate that
  parks a container in customs for a week.
- **Promising windows you can't hit.** Quoting an optimistic ETA to win the
  conversation, then missing it.
- **Treating carriers as interchangeable.** Burning relationships when freight is
  loose and finding no capacity when it's tight.

## Anti-patterns

- **Spreadsheet-and-phone-calls only** — running a network on tribal memory with no
  system of record.
- **Ship-and-pray** — tendering the load and assuming it arrives.
- **Mode by default** — always trucking it because that's what was done last time.
- **Single point of failure** — one broker, one carrier, one dock door with no
  backup.

## Vocabulary

- **OTIF** — on-time-in-full; the share of orders delivered complete by the promised
  date.
- **FTL / LTL** — full truckload vs. less-than-truckload (shared trailer, priced by
  space and class).
- **Intermodal** — freight moved in a container across rail and truck without
  rehandling the goods.
- **Detention / demurrage** — penalty charges for holding a truck or container
  beyond the free time.
- **Incoterms** — standardized rules (FOB, CIF, DDP, EXW…) for who owns risk and cost
  at each point.
- **Bill of lading (BOL)** — the contract and receipt for the freight.
- **Lead time / safety stock** — total order-to-receipt time, and the buffer held
  against its variability.
- **Cold chain / hazmat** — temperature-controlled handling for perishables and
  pharma; regulated dangerous goods needing special documentation.
- **Cube-out vs. weight-out** — a trailer hitting its volume limit before its weight
  limit, or vice versa.

## Tools

- **TMS (transportation management system)** — plans, tenders, and tracks loads; the
  system of record for the network.
- **WMS (warehouse management system)** — inventory and dock operations at the node.
- **EDI / API integrations** — automated carrier messaging for tenders, status, and
  invoicing.
- **Track-and-trace / GPS visibility platforms** — real-time location and ETA against
  milestones.
- **Rate and spot-market tools** — load boards and benchmarks for sourcing capacity.
- **Customs and trade-compliance software** — HS classification, duties, and filings.

## Collaboration

Logistics is played across organizational seams. The coordinator works with
procurement and suppliers inbound, sales and customers outbound, warehouse and dock
crews who load and receive, carriers and brokers who haul, and customs brokers and
finance who clear and pay. The recurring friction lives at handoffs — between the
promised pickup and the actual one, between what sales sold and what the network can
move, between the carrier's status feed and the truth. Good coordinators
over-communicate at exactly those seams: one call confirming an appointment window
prevents a day of detention and a missed delivery. They treat carriers as partners
whose capacity they need next month, not vendors to squeeze today.

## Ethics

Coordinators sit on safety, honesty, and labor. Hazmat rules, weight limits, and
hours-of-service regulations exist because cutting them kills people; pressuring a
driver past legal hours or overloading a trailer to save a trip is never worth it.
Cold-chain integrity for food and pharma is a public-health duty — a falsified reefer
log can poison someone. Customs declarations must be truthful; mis-declaring value to
dodge duty is fraud. And warehouse crews and drivers carry the physical risk and
deserve realistic schedules. The honest ETA, the accurate manifest, and the safe load
are the quiet ethics of the job.

## Scenarios

**A carrier no-show at 4 p.m. on a critical lane.** The booked truck for a next-day
delivery to a production plant cancels late in the day. First move is to size the
cost of delay: this freight feeds an assembly line that costs the customer roughly
$20,000 an hour if it goes down. That dwarfs any freight premium, so the coordinator
works the backup list, books a hot-shot expedite at triple the rate, and confirms an
after-hours dock appointment with the plant. Then they log the root cause against the
carrier's scorecard — a pattern of late cancellations drops this carrier off the
critical lanes even if its rate is best.

**A container held in customs.** A track-and-trace alert shows an ocean container
stuck at port three days past its free time, accruing demurrage. The coordinator
pulls the entry and finds the commercial invoice listed an HS code that triggered a
compliance hold. Rather than wait, they have the broker file a corrected
classification that day, release the container, and trace the error to the
supplier's invoice template. The fix is systemic: an HS-code check in the document
workflow before the next shipment moves.

**A demand spike whipsaws the network.** Sales reports a surge and asks to triple
the supplier order. The coordinator recognizes the bullwhip: one promotion is not
permanent demand, and tripling orders leaves the company holding frozen cash and
scrambling for spot capacity. Instead they smooth the order, lift safety stock
modestly on the affected SKUs, and pre-book contract capacity for the window — so
when the spike fades, there's no warehouse of dead stock.

## Related Occupations

A logistics coordinator shares the exception-management instinct of several roles
but is defined by orchestrating the physical movement of goods in real time. Supply
chain managers own the strategy and network design the coordinator executes within.
Truck drivers and ship captains are the carriers whose capacity and schedules the
coordinator books and tracks. Procurement specialists source the goods at the
inbound end, and operations managers run the warehouse and dock nodes the freight
flows through. All of them reason about time, cost, and reliability — but the
coordinator lives at the handoffs.

## References

- *APICS / ASCM Body of Knowledge (CPIM/CSCP)* — the supply chain reference standard
- *Designing and Managing the Supply Chain* — Simchi-Levi, Kaminsky & Simchi-Levi
- Incoterms 2020 — International Chamber of Commerce
