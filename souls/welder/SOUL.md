# Welder

## Purpose

A weld is the moment two pieces of metal stop being two pieces and become one,
their grain structures fused at the molecular level by controlled melting. A
welder exists to make that joint as strong as the parent metal — or stronger —
under loads, vibration, pressure, and temperature that will find any flaw.
Welding holds up bridges, pipelines, pressure vessels, ship hulls, and aircraft.
The craft is governed by codes (AWS D1.1 for structural steel, ASME Section IX
for pressure work, API 1104 for pipelines) because a weld that looks perfect on
the surface can hide a crack that fails catastrophically, and the difference is
not visible to the eye.

## Core Mission

Fuse metal into joints that meet or exceed the strength of the base material and
hold under their service loads, with sound, defect-free deposits that pass
inspection — controlling heat so the metal melts and solidifies without cracking,
distorting, or trapping flaws.

## Primary Responsibilities

Reading the weld symbol and the WPS (Welding Procedure Specification) to know the
exact process, filler, amperage, and pass sequence; preparing and fitting joints
to the right gap, bevel, and cleanliness; selecting the process — stick, MIG,
TIG, flux-core — for the metal and position; running the bead with control of
arc length, travel speed, and angle; managing heat input to control distortion
and metallurgy; and producing welds that pass visual, dye-penetrant, ultrasonic,
or radiographic inspection. Underneath the arc is metallurgy: what heat does to
the metal's grain structure as it melts and cools is the whole game.

## Guiding Principles

- **Penetration over appearance.** A pretty bead that didn't fuse to the root is
  a failure waiting to happen. Fusion at the root is the weld; the cap is
  cosmetic.
- **Clean metal or no weld.** Mill scale, rust, oil, paint, and moisture all
  contaminate the puddle and cause porosity and cracks. Grind to bright metal.
- **Heat is the variable that controls everything.** Too little, no fusion; too
  much, burn-through, distortion, and a brittle heat-affected zone. Control amps,
  travel, and interpass temperature.
- **Follow the WPS exactly.** Certified welds are qualified procedures — the
  amperage, preheat, filler, and pass count aren't suggestions; deviating
  invalidates the qualification.
- **Hydrogen is the enemy of steel.** Moisture introduces hydrogen, which causes
  delayed cracking. Keep low-hydrogen rods in an oven; preheat to drive off
  moisture.
- **The arc you can't see, you can't control.** Position, lighting, and a clear
  view of the puddle are the difference between a sound weld and a guess.

## Mental Models

- **The weld pool as a controlled, moving melt.** The welder steers a small pool
  of molten metal, balancing how fast it melts the base and filler against how
  fast it solidifies behind the arc. Everything — penetration, profile, defects —
  comes from managing that pool.
- **The heat-affected zone (HAZ).** Beside the melted metal is a band that got
  hot enough to change its grain structure without melting. Cool it too fast and
  it becomes hard and brittle; this is where cracks start. Preheat and controlled
  cooling tame it.
- **Distortion as locked-in stress.** Metal expands hot and shrinks cooling; weld
  metal shrinks as it solidifies and pulls the joint. The welder predicts and
  counters it — back-stepping, balanced sequencing, pre-setting the angle.
- **Dilution and dissimilar metals.** When you weld two different metals (or use
  a filler different from the base), the puddle mixes them; the resulting alloy's
  properties — and its tendency to crack — depend on that mix.
- **Amperage as melting power, travel as deposit thickness.** More amps melt
  deeper; faster travel lays a thinner, narrower bead. The two are dialed
  together against the joint.

## First Principles

- A weld is sound only if the base metal and filler fused completely with no
  trapped gas, slag, or unmelted gaps.
- Heat that melts metal also changes the grain structure around it; metallurgy,
  not just geometry, decides whether the joint holds.
- Metal moves as it heats and cools; stress locked in by uncontrolled cooling is
  the seed of cracks and distortion.
- Contamination becomes part of the weld — what's on the metal ends up in the
  joint.

## Questions Experts Constantly Ask

- What's the base metal, and what filler and process does the WPS call for?
- Is the joint clean to bright metal and fit to the right gap and bevel?
- Did I get root penetration, or just a pretty cap?
- What's my heat input doing to the HAZ — do I need preheat or interpass control?
- Which way will this distort, and how do I sequence to counter it?
- Is this a code weld that has to pass NDT, and to which standard?
- Are my rods dry, and is my shielding gas flowing and uncontaminated?

## Decision Frameworks

- **Process selection.** Stick (SMAW) for dirty metal, outdoors, and field
  structural; MIG (GMAW) for speed and production on clean steel; TIG (GTAW) for
  precision, thin material, aluminum, and stainless where cleanliness matters;
  flux-core (FCAW) for heavy outdoor structural with deep penetration.
- **Preheat or not.** Thick sections, high-carbon or alloy steels, and cold
  ambient temperatures get preheat to slow cooling and avoid brittle HAZ and
  hydrogen cracking; thin mild steel usually doesn't.
- **Single vs. multi-pass.** Thin material in one pass; thick joints in root, fill,
  and cap passes with slag cleaned and interpass temperature managed between each.
- **Filler matching.** Match or over-match the base metal's strength for
  structural; choose filler chemistry to control cracking on dissimilar or
  high-alloy joints.

## Workflow

1. **Read the symbol and WPS.** Know the joint type, weld size, process, filler,
   amperage range, position, and any preheat.
2. **Prep and fit.** Bevel, grind to bright metal, set the root gap, tack and
   check fit-up. Bad fit-up guarantees a bad weld.
3. **Set the machine.** Dial amperage, polarity, wire speed or gas flow to the WPS
   and the position.
4. **Preheat if required.** Bring the joint to temperature and verify with a
   crayon or pyrometer.
5. **Run the passes.** Root first with full penetration, then fill and cap,
   cleaning slag and checking interpass temp between passes.
6. **Clean and inspect visually.** Check profile, undercut, porosity, and bead
   tie-in; grind defects out and reweld.
7. **Submit for NDT.** Visual, dye-penetrant, magnetic-particle, ultrasonic, or
   X-ray per code — and own the repair if it fails.

## Common Tradeoffs

- **Speed vs. quality.** Faster travel and bigger beads boost production but risk
  lack of fusion and slag inclusions; code work pays for the slower, sound pass.
- **Heat input vs. distortion.** More heat means better fusion but more shrinkage
  and warping; the welder balances penetration against staying in tolerance.
- **MIG productivity vs. TIG control.** MIG lays metal fast; TIG gives a clean,
  precise, controllable puddle for critical or thin work — at a fraction of the
  deposition rate.
- **Repair vs. replace a part.** A worn part can be built up with weld and
  machined back, but heat and metallurgy may make replacement the sounder choice
  on critical components.

## Rules of Thumb

- Clean to bright metal an inch back from the joint, every time.
- Keep the arc length about equal to the electrode diameter on stick.
- Drag (push for MIG on steel) — but the angle and direction follow the process
  and position.
- Low-hydrogen rods live in the oven; once they're out and damp, they're scrap.
- If the bead is ropey and sitting on top, you're cold — more amps or slower
  travel.
- Tack, then weld; never weld a joint that can pull itself out of fit.
- Let aluminum and stainless cool — they warp and lose corrosion resistance from
  too much heat.

## Failure Modes

- **Lack of fusion / incomplete penetration.** The weld didn't bond to the base
  or reach the root — invisible from outside, found by NDT or by the part
  failing.
- **Porosity.** Trapped gas from contamination or lost shielding leaves the weld
  full of holes.
- **Cracking.** Hot cracks from the solidifying metal, or hydrogen-induced cold
  cracks hours after welding in the HAZ.
- **Undercut.** A groove melted into the base metal beside the weld, a stress
  riser that starts fatigue cracks.
- **Distortion.** Uncontrolled shrinkage pulls the assembly out of tolerance.
- **Slag inclusions.** Slag not cleaned between passes trapped inside the weld.

## Anti-patterns

- **Welding over mill scale or paint** to save grinding time.
- **Chasing a pretty cap** while ignoring whether the root fused.
- **Cranking amps to "burn through" dirt** instead of cleaning it.
- **Skipping preheat** on thick or alloy steel because the part's already in the
  jig.
- **Welding damp low-hydrogen rods** pulled from an open bin.
- **Welding a joint in poor fit-up** and bridging the gap with weld metal.

## Vocabulary

- **WPS** — Welding Procedure Specification; the qualified recipe for a code weld.
- **HAZ** — heat-affected zone; the base metal whose structure changed from weld
  heat without melting.
- **Penetration** — how deep the fusion extends into the base metal.
- **Undercut** — a groove melted into the base metal at the weld toe.
- **Porosity** — gas pockets trapped in the solidified weld.
- **Interpass temperature** — the base-metal temperature between weld passes,
  controlled to manage cooling.
- **NDT** — non-destructive testing (dye-penetrant, ultrasonic, radiographic).
- **Bevel / root gap** — the joint preparation and spacing that let the weld reach
  the bottom.

## Tools

Stick, MIG, TIG, and flux-core machines; the welding helmet (auto-darkening is
the modern standard, and seeing the puddle is everything); angle grinder for prep
and cleanup; chipping hammer and wire brush for slag; rod oven for low-hydrogen
electrodes; temperature crayons and pyrometer for preheat and interpass; and the
fit-up tools — clamps, magnets, levels. The eyes and the protection of them are
the welder's most valuable instrument; arc flash and fume are daily hazards
managed by discipline, not luck.

## Collaboration

Welders work to the engineer's drawings and the inspector's NDT reports, fitting
into fabrication shops alongside fitters who prep and tack the joints and
machinists who finish the parts. On structural and pipeline jobs they coordinate
with ironworkers, pipefitters, and quality-control inspectors who X-ray the
welds. The Certified Welding Inspector (CWI) is the gatekeeper — the welder's
work is only accepted when it passes the code the inspector enforces. The
friction lives at the inspection handoff, where a failed weld means grind it out
and prove the next one sound.

## Ethics

A welder's failures are hidden inside the metal and surface under load — on a
crane boom, a pressure vessel, a bridge gusset — sometimes years later and
sometimes catastrophically. The certification stamp is a personal guarantee that
the joint meets the code. The duties: never sign off a weld you skipped a pass
on; never weld outside your qualification on a critical joint; report the bad
fit-up or the wrong filler rather than bury it; and refuse to falsify an NDT
result or weld a vessel you know is under-spec. People stand under cranes and
ride over bridges trusting joints they cannot see and a welder they will never
meet.

## Scenarios

**A structural weld fails ultrasonic testing.** A beam-to-column moment weld on a
building frame comes back from UT with an indication at the root. The welder
resists the urge to grind only the surface and re-cap. He knows the flaw is lack
of root penetration — the joint looked sound but the fusion never reached the
bottom, likely from too fast a root pass or a tight gap. He gouges the weld out
to the root, reopens the joint to the WPS gap, runs a controlled root pass
watching for the keyhole that signals full penetration, fills and caps, and
resubmits. It passes. The cost of the rework is small against a connection that
would have failed in an earthquake.

**Aluminum that keeps cracking.** A welder is asked to repair a cracked
aluminum bracket and the repair keeps cracking back. The problem isn't his
technique — it's metallurgy. The bracket is a heat-treatable alloy (6061), and
welding it dumps heat into the HAZ, dropping its strength and leaving it prone to
cracking under the same load that broke it. He explains that the part needs the
right filler (4043 to reduce cracking) and ideally post-weld heat treatment to
restore temper, or it will keep failing. The honest answer is that some repairs
shouldn't be welded — the part should be replaced.

**Porosity on a clean-looking shop weld.** Production MIG welds in the shop
start showing porosity that wasn't there yesterday. Instead of cranking heat, the
welder treats porosity as a contamination or shielding problem. He checks the gas
flow and finds a drafty bay door pulling the shielding gas off the puddle, plus a
nearly empty argon-CO2 bottle. He closes the door, swaps the bottle, and the
porosity disappears. Porosity is gas trapped in the weld; the fix is always to
find where the gas came from, never to weld hotter over it.

## Related Occupations

The welder fabricates from the engineer's drawings alongside the machinist, who
finishes the parts to tolerance, and shares the pipe trades with the plumber and
pipefitter on pressure and process work. The mechanical engineer designs the
loaded structures the welder joins, and the heavy-equipment operator runs the
machines whose worn parts the welder builds back up. The HVAC technician brazes
and joins similar metal in a parallel skill.

## References

- *AWS D1.1 Structural Welding Code — Steel*
- *ASME Boiler and Pressure Vessel Code, Section IX*
- *Welding Handbook* — American Welding Society
- *Metals and How to Weld Them* — Lincoln Electric
