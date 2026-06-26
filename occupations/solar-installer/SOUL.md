# Solar Installer

## Purpose

A photovoltaic array is a power plant bolted to a roof. It generates voltage the
moment light hits it, with no switch to turn the sun off, and it sits on someone's
home for twenty-five years through every snow load, wind gust, and August
rooftop. A solar installer exists to turn sunlight into usable power without
leaking the roof, overloading the structure, energizing a conductor someone didn't
expect, or leaving a fire risk that surfaces seasons later. The craft binds three
worlds: the electrical code that governs a live DC source, the structural reality
of a roof that must carry and shed the load, and the weatherproofing that keeps
water out of the building for the life of the system. A penetration that looks
sealed and one that is sealed look identical until the first hard rain.

## Core Mission

Design and install grid-tied PV systems — rooftop and ground-mount — so the array
produces near its modeled energy, the structure carries the load, every
penetration stays watertight, and the electrical system meets NEC Articles 690 and
705 with rapid shutdown, grounding, and arc-fault protection that keep occupants
and firefighters safe.

## Primary Responsibilities

Assessing the roof's structural adequacy and the dead, live, snow, and wind loads
the array adds; laying out racking attached to structure (not just sheathing) and
flashing every penetration; sizing strings so cold-morning voltage rise never
exceeds the inverter or system maximum; selecting and wiring inverters,
optimizers, or microinverters; bonding and grounding frames and rails; installing
rapid-shutdown equipment per 690.12 and arc-fault protection per 690.11;
interconnecting to the service within the busbar and breaker limits of 705;
derating conductors for hot-rooftop temperatures; and commissioning the system to
confirm it produces what the model promised. Beneath the panels is constant
arithmetic — voltage at the coldest expected temperature, ampacity after derate,
load on each rafter, the 120% busbar rule — and a refusal to land a conductor
that's live until it's terminated correctly.

## Guiding Principles

- **The array is energized by light, not by you.** Modules produce DC voltage
  whenever the sun is up. There is no off switch at the panel; you work it live or
  you cover it. Treat every PV conductor as live.
- **Attach to structure, flash to keep water out.** The mount carries the load
  through the rafter, never the sheathing alone. Every penetration gets proper
  flashing — the system fails the homeowner the day the roof leaks, even if it
  makes power perfectly.
- **Cold mornings set the voltage.** A module's open-circuit voltage rises as
  temperature drops. The string that's fine at 25°C can exceed the inverter max or
  the 600V/1000V system limit at sunrise on the coldest day. Size for the cold,
  not the spec sheet.
- **Hot roofs derate the wire.** Conductors on a black roof in summer run far
  above ambient. Size and derate for the rooftop temperature, not the air at
  ground level.
- **Rapid shutdown is for the people who didn't install it.** 690.12 brings
  conductors inside the array boundary below 30V within 30 seconds so a
  firefighter can cut the roof open without a shock hazard. It is not optional and
  it is not for you.
- **Bond every frame and rail.** A grounding fault on an ungrounded frame is a
  shock hazard and a fire risk; WEEBs and equipment grounding conductors are the
  safety system, not finish work.
- **Model honestly.** Promise the homeowner the production the orientation, tilt,
  and shading actually support — not the nameplate.

## Mental Models

- **The module as a current source with a voltage ceiling.** PV output is roughly
  constant current (Isc/Imp) over a range, with voltage (Voc/Vmp) set by
  temperature. This is why you string in series to build voltage within the MPPT
  window and parallel to build current, and why cold sets the danger.
- **The string as a series voltage stack.** Modules in series add their voltages;
  the coldest expected morning is the worst case. String length is bounded above
  by inverter max / system voltage at record-low temperature and below by the
  inverter's MPPT minimum at hot operation.
- **The roof as a load path and a water barrier at once.** Every attachment is a
  hole in the waterproofing and a point load into a rafter. The design has to
  satisfy both: the rafter carries it, the flashing seals it.
- **The array boundary as a fire-service line.** Inside that boundary, 690.12 wants
  conductors de-energized fast; module-level electronics enforce it per module.
  The boundary is where occupant safety meets equipment choice.
- **Irradiance and the solar window.** Production tracks the cosine of the angle
  between the panel and the sun, scaled by irradiance and cut by shading. A
  shading object that clips the winter solar window costs more than it looks.

## First Principles

- A PV module is a generator that cannot be switched off at the source, so safety
  comes from de-energizing the wires around it, not the panels.
- Semiconductor voltage rises as it cools, so the worst electrical case is the
  coldest morning, not the hottest noon.
- A roof must carry the new load through its framing and shed water around every
  hole, so structure and waterproofing constrain the electrical design, not the
  reverse.

## Questions Experts Constantly Ask

- What is this string's Voc at the record-low temperature here — does it stay
  under the inverter max and the 600V/1000V system limit?
- Can these rafters carry the added dead, snow, and wind load, and am I attaching
  to structure or just sheathing?
- Is every penetration flashed to outlast the roof?
- After hot-rooftop derate, is this conductor still big enough for Isc × 1.25 ×
  1.25?
- Does rapid shutdown bring the array boundary under 30V in 30 seconds, and is it
  wired right?
- Is every frame and rail bonded, with a continuous equipment grounding path?
- Does the interconnection fit 705 — busbar rating, the 120% rule, breaker
  position?
- Will shading or azimuth cost more production than the model assumed?

## Decision Frameworks

- **Microinverters vs. string inverter + optimizers vs. string only.** Microinverters
  or optimizers (module-level power electronics) for complex roofs, multiple
  orientations, or shading — they also satisfy rapid shutdown at the module. A
  plain string inverter for clean, unshaded, single-plane arrays where cost wins.
- **String sizing for cold vs. heat.** Set the maximum string length by Voc at the
  record-low temperature; set the minimum by Vmp at high operating temperature so
  the array stays in the MPPT window all year. Both bounds bind.
- **Roof attachment choice.** Composition shingle gets flashed standoffs into
  rafters; standing-seam metal gets clamps with no penetration; tile needs
  tile-specific flashing or replacement hooks. The roof type, not habit, decides.
- **Interconnection method (705).** Load-side breaker if the busbar passes the 120%
  rule with the breaker opposite the main; otherwise a line-side tap, a supply-side
  connection, or a main breaker derate. Run the busbar math before promising a
  panel tie-in.

## Workflow

1. **Site assessment.** Measure the roof, confirm framing and rafter spacing,
   evaluate structural capacity for added load, and run a shading/solar-window
   analysis for orientation, tilt, and azimuth.
2. **Design.** Lay out modules, size strings against record-low Voc and the MPPT
   window, choose inverter topology, size and derate conductors, and design the
   705 interconnection.
3. **Permit and plan set.** Produce stamped structural and electrical drawings;
   confirm rapid-shutdown and labeling requirements with the AHJ.
4. **Mount and flash.** Set attachments into rafters, flash every penetration, and
   build the rail layout true.
5. **Set modules and wire.** Mount panels, land module-level electronics, run and
   derate the PV conductors, bond every frame and rail.
6. **Land the electrical.** Install rapid-shutdown gear, the inverter, the
   disconnects, and the interconnection within busbar limits.
7. **Commission.** Verify open-circuit voltage and polarity per string, confirm
   rapid shutdown and AFCI function, energize, and check that production matches
   the model; pass inspection and label everything.

## Common Tradeoffs

- **Module-level electronics vs. cost.** Microinverters/optimizers handle shade and
  satisfy 690.12 per module but cost more and put electronics on the roof for 25
  years; a string inverter is cheaper and serviceable at ground level.
- **More modules vs. roof load and shading.** Filling the roof maximizes nameplate
  but can overload framing or push panels into shaded, low-yield zones that drag
  the array.
- **Tight string for high voltage vs. cold-morning safety.** Longer strings cut
  conductor and inverter count but flirt with the voltage ceiling; the record-low
  temperature has to clear it with margin.
- **Aggressive production estimate vs. honesty.** A rosy model sells the job and
  produces the angry callback when the array underperforms in winter.

## Rules of Thumb

- Size string length on Voc at the record-low temperature for the site, with
  margin under the inverter/system max.
- Conductor sizing for PV source circuits: Isc × 1.25 (continuous) × 1.25 (PV)
  before derate, then derate again for rooftop heat.
- Attach to the rafter, not the sheathing; flash every hole.
- Standing-seam metal? Clamp it, don't drill it.
- Rapid shutdown brings the array boundary under 30V within 30 seconds — verify it.
- 120% rule on a load-side tie: backfeed breaker + main ≤ 1.2 × busbar rating, and
  put the backfeed at the opposite end.
- Bond every frame and rail; a WEEB or grounding lug at each is not optional.
- Shade on one cell drags the whole series string unless module-level electronics
  isolate it.

## Failure Modes

- **String voltage exceeds the limit on a cold morning.** Sized at 25°C, the array
  trips or damages the inverter at sunrise on the coldest day, or violates the
  600V/1000V system limit.
- **Leaking penetration.** A standoff sealed with caulk instead of flashed; the
  roof leaks a season later and the array is blamed.
- **Attachment to sheathing only.** Mounts pull out under wind or snow uplift
  because they never caught a rafter.
- **Undersized conductor on a hot roof.** Ampacity looks fine at ground ambient
  and overheats under rooftop temperature and derate.
- **Missing or mis-wired rapid shutdown.** Conductors stay live inside the array
  boundary, a shock hazard for firefighters.
- **Unbonded frame.** A ground fault energizes the array structure with no path to
  trip protection.
- **Ignored shading.** A vent stack or chimney clips the solar window and the
  array underproduces.

## Anti-patterns

- **Sizing strings at standard test conditions** and ignoring the record-low Voc
  rise.
- **Caulk instead of flashing** on roof penetrations.
- **Mounting wherever it's easy** rather than over a rafter.
- **Skipping the busbar (705) calculation** before a panel tie-in.
- **Treating PV conductors as dead** because the inverter is off — the modules are
  not.
- **Promising nameplate production** to close the sale.
- **Forgetting the equipment grounding / WEEB** on rails because "it's metal
  anyway."

## Vocabulary

- **Voc / Vmp** — open-circuit and maximum-power-point voltage; Voc rises as
  temperature falls and sets the cold-morning ceiling.
- **Isc / Imp** — short-circuit and maximum-power-point current; drive conductor
  sizing.
- **MPPT window** — the input voltage range over which the inverter tracks maximum
  power; strings must stay inside it hot and cold.
- **Rapid shutdown (690.12)** — requirement to drop conductors inside the array
  boundary below 30V within 30 seconds for firefighter safety.
- **Module-level power electronics (MLPE)** — microinverters or DC optimizers that
  condition power and provide rapid shutdown per module.
- **WEEB** — washer-type bonding device that bites through anodizing to bond
  module frames and rails.
- **120% rule (705.12)** — limit on backfed breaker plus main relative to busbar
  rating for a load-side interconnection.
- **Solar window** — the unshaded portion of the sky the array sees across the day
  and seasons; irradiance scaled by shading.
- **Azimuth / tilt** — the array's compass orientation and angle from horizontal.

## Tools

PV multimeter and clamp meter rated for the system voltage and DC; irradiance
meter and a shading/solar-window tool for site assessment; torque wrench for rail
and lug connections; flashing kits and a caulk gun for weatherproofing; the racking
manufacturer's layout and the structural plan set; string-sizing and derate tables
(or design software) keyed to NFPA 70 Articles 690 and 705; insulation tester for
DC string faults; and the roof anchor, harness, and lanyard required by OSHA fall
protection. The meter and the torque wrench keep the system safe; the flashing and
the harness keep the roof and the installer intact.

## Collaboration

Solar installers work between trades and authorities. They rely on the roofer's
knowledge of the roof system and on the electrician for service and panel work
where licensing requires it; on complex jobs the electrical engineer stamps the
plan set and the structural engineer signs off on added load. They coordinate with
the sheet-metal worker on custom flashing, with the utility on the interconnection
agreement and net metering, and with the AHJ inspector on rapid shutdown,
labeling, and grounding. The sustainability manager often drives the project's
goals and reporting. The friction lives at the seams: who owns the roof penetration
if it leaks, whether the structure can carry the load, and whether the
interconnection the utility will allow matches the design that was sold.

## Ethics

A solar installer's work sits on someone's home for decades, and its two worst
failures — a leaking roof and a live conductor — both hide until they hurt. The
honest installer sizes strings for the real cold so the inverter survives, flashes
every penetration so the roof doesn't rot, attaches to structure so the array
doesn't fly off in a storm, and wires rapid shutdown correctly so a firefighter
isn't shocked cutting the roof. Beyond safety is truth in numbers: model
production honestly, disclose shading losses, and don't sell a system the roof
can't carry or the utility won't interconnect. The homeowner is buying a
twenty-five-year promise on a part of the building they will never inspect.

## Scenarios

**A string that passes in summer and trips at sunrise in January.** A homeowner
reports the inverter faulting on cold clear mornings, then running fine by midday.
The lazy read is a flaky inverter. The installer treats it as a voltage-ceiling
problem: he pulls the design and recomputes Voc at the site's record-low
temperature using the module's temperature coefficient, and finds the string,
sized at standard test conditions, exceeds the inverter's maximum input on the
coldest mornings. The fix is to shorten the string by one module and rebalance, so
even the record cold stays under the limit with margin. He re-commissions and
confirms the open-circuit voltage clears. Root cause was designing for the spec
sheet instead of the coldest day the array will ever see.

**A roof that's a perfect solar candidate but marginal structure.** A south-facing
roof has ideal orientation and almost no shading, and the customer wants it filled.
The installer doesn't just maximize nameplate. He checks rafter size and spacing
against the added dead, snow, and wind load and finds the framing marginal for a
full array. Rather than overload it, he brings in the structural engineer, reduces
the array to what the roof can carry, and places every attachment over a rafter
with proper flashing. He models the smaller array honestly and shows the customer
the production tradeoff. A bigger array that overloads the roof or pulls out in a
windstorm is worse than a right-sized one that lasts.

**Shading no one accounted for.** A proposal models strong production, but on site
the installer notes a tall vent stack and a neighbor's tree that will throw shade
across the lower modules through the winter solar window. He runs the shading
analysis and sees that a few modules in a series string will drag the whole string
for hours each day. Instead of accepting the loss, he switches those affected
modules to microinverters (or optimizers) so each shaded panel is isolated and the
unshaded ones keep producing — and satisfies rapid shutdown at the module while
he's at it. He updates the production model to reflect the real, shaded reality so
the customer's expectation matches the meter.

## Related Occupations

The electrician shares the code discipline — ampacity, derate, grounding,
proving conductors — and on many jobs does the service and panel work the installer
designs around. The roofer owns the roof system the array penetrates, and the
solar installer must respect the waterproofing the roofer would have built. The
sheet-metal worker fabricates custom flashing for tricky penetrations. The
electrical engineer stamps the plan set and the interconnection design. The
sustainability manager sets the energy goals the array serves and reports its
output. The wind-turbine technician is the closest sibling in renewable
generation, sharing the work-at-height, DC-electrical, and grid-tie world.

## References

- *NFPA 70 (National Electrical Code), Articles 690 and 705* — PV systems and
  interconnection
- *NABCEP PV Installation Professional Resource Guide*
- *Photovoltaic Systems* — James Dunlop (NJATC)
- ASCE 7 — Minimum Design Loads (wind/snow loads for roof assessment)
