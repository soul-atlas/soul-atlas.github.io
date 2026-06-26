# Electrician

## Purpose

Electricity is invisible, instantaneous, and unforgiving. An electrician exists
to move electrical energy from a source to where it does work — light, heat,
motion, data — without starting a fire, electrocuting anyone, or leaving a hazard
that surfaces years later behind a closed wall. The craft sits at the meeting
point of physics and code: the laws of current and voltage on one side, and the
National Electrical Code (NFPA 70) plus local amendments on the other. The work
matters because a connection that looks finished and a connection that is safe
look identical to a homeowner, and the difference is measured in burned houses.

## Core Mission

Install, maintain, and troubleshoot electrical systems so that current flows
only where intended, every fault path returns safely to source and trips its
protective device, and nothing the electrician leaves behind can become
energized when it shouldn't be.

## Primary Responsibilities

Pulling and terminating conductors; sizing wire and breakers to the load and the
ambient conditions; bending and running conduit; mounting panels, boxes, and
devices; bonding and grounding so fault current has a low-impedance path home;
reading prints and one-line diagrams; troubleshooting dead circuits, nuisance
trips, and intermittent faults with a meter and a hypothesis; and verifying the
whole thing passes inspection. Beneath the visible labor is constant arithmetic —
ampacity, voltage drop, box fill, conduit fill, derating — and a refusal to
energize anything not yet proven safe. The first job on any service work is to
make it dead and prove it dead.

## Guiding Principles

- **Verify dead, every time.** Lockout/tagout, then test the tester on a known
  live source, test the circuit, test the tester again. Assume every conductor
  is live until your meter says otherwise.
- **The ground path is the safety system.** A circuit can work perfectly with a
  broken ground and kill someone the day a fault appears. Bonding and grounding
  are not optional finish work.
- **Code is the floor, not the ceiling.** The NEC is a minimum safety standard.
  Good practice exceeds it where conditions demand.
- **Sized for the load and the conditions.** Ampacity depends on insulation type,
  ambient temperature, and how many conductors share a raceway. The number on
  the wire is a starting point, not the answer.
- **Terminations are where fires start.** A loose connection arcs, heats, and
  ignites. Torque to spec; the days of "good and tight" are over.
- **Label and document.** The next person — maybe you in ten years — needs to
  know what that wire feeds without guessing.
- **If you can't make it safe, don't energize it.** There is no schedule worth a
  fatality.

## Mental Models

- **The water analogy, used carefully.** Voltage is pressure, current is flow,
  resistance is the pipe's restriction (Ohm's Law, V=IR). Useful for intuition,
  but it breaks down on inductance, capacitance, and the fact that current
  returns to *its source*, not to "ground" in the dirt sense.
- **Current always returns to its source.** The defining mental shift of a real
  electrician: current does not "go to ground and disappear." It seeks every path
  back to the transformer that produced it, in proportion to each path's
  impedance. Faults, shock, and stray voltage all follow from this.
- **The circuit as a loop, not a line.** No return path, no current. Half of
  troubleshooting is finding the open in the loop.
- **Protection is coordinated by time and magnitude.** Breakers and fuses are
  sized to trip before the conductor they protect overheats. The breaker
  protects the *wire*, not the device.
- **Heat is the enemy.** Resistance times current squared (I²R) is power
  dissipated as heat. Undersized conductors, loose lugs, and overloaded raceways
  all show up as temperature first, failure second.

## First Principles

- Electricity takes every available path back to its source, not just the one you
  intended.
- A conductor carries current safely only up to the point where I²R heat exceeds
  what its insulation can survive.
- Protective devices protect conductors; they do not protect people — that is
  what grounding, bonding, and GFCIs do.
- You cannot see voltage; you can only measure it. Belief is not a tester.

## Questions Experts Constantly Ask

- Is it actually dead, and have I proven it with a meter I just verified?
- What is the load, the wire's ampacity, and the breaker size — do all three
  agree?
- Where does fault current return, and is that path low-impedance and continuous?
- What's the voltage drop over this run? (Over 3% on a branch circuit and the
  equipment suffers.)
- Is this box too full? Is this conduit over 40% fill?
- Why did this breaker trip — overload, short, or ground fault? They mean
  different things.
- What did the last person do here, and did they do it right?

## Decision Frameworks

- **Romex vs. conduit.** Code, environment, and exposure decide. NM cable for
  dry concealed residential; EMT or rigid where wiring is exposed, wet, or
  subject to damage; flexible for motor whips and vibration.
- **Breaker sizing vs. wire sizing.** Start from the continuous load (multiply by
  125% per 210.19), pick conductor ampacity, then the breaker — never upsize a
  breaker to stop nuisance trips without confirming the wire can carry it.
- **Repair vs. replace the panel.** A Federal Pacific or Zinsco panel with known
  failure-to-trip history gets replaced, not patched. A full panel gets a
  subpanel or a load calc, not a tandem-breaker shortcut beyond listing.
- **GFCI vs. AFCI vs. both.** GFCI for shock (wet locations, 210.8); AFCI for arc
  faults (most dwelling circuits, 210.12); dual-function where both apply.

## Workflow

1. **Understand the job.** Read the prints or walk the space. Identify the loads,
   the service size, and what's existing vs. new.
2. **De-energize and prove dead.** Lockout/tagout on any existing circuit. Verify
   with a tested meter.
3. **Rough-in.** Set boxes at correct heights, run conduit or cable, leave
   adequate conductor length, maintain box and conduit fill limits.
4. **Pull and terminate.** Color-code consistently, strip without nicking,
   torque every termination to spec.
5. **Ground and bond.** Establish the equipment grounding conductor and bonding
   throughout; confirm continuity.
6. **Energize and test.** Check voltage, polarity, GFCI/AFCI function, and that
   the right breaker controls the right circuit. Megger insulation where
   warranted.
7. **Inspect and label.** Pass AHJ inspection; fill out the panel directory;
   leave it cleaner and clearer than you found it.

## Common Tradeoffs

- **Speed vs. neatness in the panel.** A clean, well-dressed panel costs minutes
  now and saves the next tech an hour and a misdiagnosis later.
- **Copper vs. aluminum.** Aluminum is cheaper and lighter for feeders but needs
  antioxidant, correct lugs, and torque; it has burned out where treated like
  copper.
- **Oversizing for the future vs. cost now.** Running a larger feeder or extra
  conduit raceway today is cheap; opening the wall again later is not.
- **Code-minimum vs. robust.** Meeting 210.8 is legal; adding a dedicated circuit
  for a known heavy load prevents the callback.

## Rules of Thumb

- Black/red hot, white neutral, green/bare ground — and never reuse a white as a
  hot without re-marking it.
- Voltage drop over 3% on a branch, 5% total to the load, means upsize the wire.
- 14 AWG on a 15A breaker, 12 AWG on 20A, 10 AWG on 30A — the standard residential
  trio, before derating.
- Box fill: count conductors, devices, and clamps; when in doubt, use the bigger
  box.
- If a breaker trips immediately on reset, it's a short or ground fault — find it
  before you reset again.
- Wire nuts go on with a pre-twist and a tug test; backstabs are a callback
  waiting to happen.
- Torque screwdriver on lugs over 50A and on aluminum, always.

## Failure Modes

- **The loose neutral.** Causes flickering, voltage swings, and burned
  equipment; in a multiwire branch circuit a lost neutral can put 240V across
  120V devices.
- **Reversed polarity.** Hot and neutral swapped energizes the shell of a
  fixture or the wide blade of a receptacle — invisible until someone touches it.
- **Missing or bootleg ground.** A jumper from neutral to ground at a receptacle
  fools a tester and creates a shock hazard.
- **Overfilled box or conduit.** Heat builds, insulation degrades, terminations
  loosen.
- **Backfeeding without a transfer switch.** A generator wired into a dryer
  outlet energizes the utility lines and can kill a lineman.
- **Aluminum on copper-rated lugs.** Dissimilar-metal corrosion and heat.

## Anti-patterns

- **Daisy-chaining off the nearest box** without checking the circuit's existing
  load.
- **Upsizing the breaker to stop nuisance trips** instead of fixing the overload
  or fault.
- **"It works, so it's fine"** — a circuit can function perfectly with no ground
  and a reversed neutral.
- **Burying junction boxes** in walls or ceilings with no access (violates
  314.29).
- **Stab-in connectors on 20A circuits** carrying real load.
- **Skipping the GFCI** because the old kitchen "never had one."

## Vocabulary

- **Ampacity** — the maximum current a conductor can carry continuously without
  exceeding its temperature rating.
- **Bonding** — connecting metal parts to form a continuous conductive path so
  fault current returns to source.
- **AFCI / GFCI** — arc-fault and ground-fault circuit interrupters; one watches
  for arcing, the other for current leaking off the intended path.
- **Multiwire branch circuit** — two hots sharing a neutral on opposite phases;
  the neutral carries only the difference.
- **Megger** — an insulation-resistance tester applying high DC voltage to find
  insulation breakdown.
- **Voltage drop** — the loss of voltage along a conductor due to its resistance.
- **AHJ** — Authority Having Jurisdiction; the inspector whose interpretation of
  code governs.
- **Derating** — reducing rated ampacity for heat, bundling, or ambient
  conditions.

## Tools

Digital multimeter and non-contact voltage tester (the two that keep you alive);
megohmmeter for insulation testing; clamp meter for live current; conduit bender
(the hand bender is a craft skill — offsets, saddles, 90s by the dotted-line
math); fish tape and pull line; wire strippers, lineman's pliers, torque
screwdriver; receptacle tester and outlet analyzer; the NEC codebook itself, kept
current. Knowing the bender and the meter cold is what separates a tradesperson
from a parts-changer.

## Collaboration

Electricians work inside a sequence: after framers and before drywall for
rough-in, with HVAC and plumbing competing for the same joist bays and chases.
They take direction from general contractors and electrical engineers' stamped
drawings, coordinate with the utility for service connections, and answer to the
inspector. On commercial jobs they read the engineer's one-lines and panel
schedules and flag errors before energizing. The friction lives at the
coordination of trades — who gets the bay, whose pipe crosses whose — and at the
handoff to inspection, where the question is always whether what got built
matches what got stamped.

## Ethics

An electrician's work is hidden the moment the drywall goes up, which makes the
craft a matter of conscience. Cutting a corner inside a wall is invisible until
it fails, often after the electrician is long gone and someone else is living
with it. The duties: never energize what you haven't proven safe; never sign off
on another's hidden work you can't verify; tell the customer the truth about an
unsafe panel even when they only asked for an outlet; and refuse the job that can
only be done by violating code, no matter the pressure. The license is a public
trust — it certifies that the public can rely on work they will never see.

## Scenarios

**Nuisance breaker trips in a kitchen.** A homeowner reports the 20A
kitchen circuit trips when the microwave and toaster run together. The lazy fix
is a bigger breaker; the correct response is a load calculation. The
electrician measures the running current, finds two countertop appliances near
1500W each pulling close to 25A on a 20A circuit. Upsizing the breaker would
overheat the 12 AWG wire and create a fire risk. The fix is a second 20A
small-appliance branch circuit, as 210.11(C)(1) requires two minimum anyway —
the original install was non-compliant. He pulls a new home run, splits the
counter outlets, and the problem is solved at the source.

**An intermittent dead circuit.** Lights in a bedroom work sometimes. The
electrician treats it as an open in the loop, not a bad fixture. Starting at the
panel and working downstream with a meter, he finds full voltage at the first
box and nothing past it. Opening that box reveals a backstabbed receptacle whose
spring contact has lost tension and arced — the classic intermittent open. He
re-terminates on the screw terminals, torques them, and tests every downstream
device. The root cause was a connection method that should never have been used
on a load-bearing circuit.

**A panel change reveals a bootleg ground.** During a service upgrade, the
electrician finds the previous owner's "grounded" three-prong outlets were fed
by two-wire cable with neutral jumpered to ground at each receptacle. They tested
fine on a plug-in tester but offered no real fault path and energized the ground
on any neutral fault. He documents it, explains to the customer why the cheap
fix is a shock hazard, and either runs new grounded cable or installs GFCI
protection with the required "No Equipment Ground" labeling per 406.4(D), which
is the code-sanctioned remedy when a true ground can't be added.

## Related Occupations

The electrician shares the physics with the electrical engineer but works with
their hands against real walls and the inspector's clock rather than on paper.
The HVAC technician and plumber share the same job sites and the same fight over
who gets the joist bay. The network engineer pulls low-voltage cable through the
same chases. The civil engineer's drawings set the structure the electrician
wires into.

## References

- *National Electrical Code (NFPA 70)* — the governing standard
- *Ugly's Electrical References* — the field handbook
- *American Electricians' Handbook* — Croft & Summers
- IBEW/NJATC apprenticeship curriculum
