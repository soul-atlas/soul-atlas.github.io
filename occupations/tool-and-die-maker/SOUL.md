# Tool and Die Maker

## Purpose

A tool and die maker builds the tools that make the parts — not the part itself, but
the die that stamps a million of them, the mold that injects them, the jig that guides
the drill, the fixture that holds the work square. This is the most precise machining
trade because an error in the tool is not one defective part; it multiplies. A die that
runs ten million strokes carries every flaw forward ten million times. The tolerances of
everything mass-produced are set by the tooling, and the tolerance of the tooling is set
here, at the tenth.

## Core Mission

Design and build dies, molds, jigs, and fixtures to a precision an order tighter than
the parts they produce, so the tool runs millions of cycles without drifting out of
tolerance.

## Primary Responsibilities

Reading build-to-print drawings and GD&T callouts; planning a cut sequence that
survives heat treatment; rough and finish machining on CNC mills, grinders, and jig
borers; cutting hardened steel and complex profiles on wire and sinker EDM; setting
punch-to-die clearance; fitting and assembling die sets, mold bases, cores and cavities;
trying out and tuning the tool in the press; and inspecting on a surface plate with
gauge blocks, sine bars, and the CMM. Under all of it runs constant arithmetic — shrink
allowance, clearance, draft, datum stack-up — and the discipline to machine, harden,
then grind to final rather than chase a number into a part about to move in the furnace.

## Guiding Principles

- **The tool is not the part — it is one tolerance tighter.** If the part is
  ±0.001", the die features that produce it live at ±0.0001". Error in the tool is
  multiplied by every cycle it runs.
- **Machine, heat treat, then grind to final.** Hardening grows and distorts steel. Cut
  soft and oversize, harden, then grind to size. Finishing to print before the furnace
  is a losing battle.
- **Datums first, always.** Every measurement and cut references the datum scheme. A
  part dimensioned from the wrong feature is scrap even if every number is right.
- **Clearance is chosen, not left over.** Punch-to-die clearance is a deliberate
  percentage of stock thickness. Too little galls and chips; too much rolls the edge and
  leaves burr.
- **Build for the whole production run.** Wear surfaces, vents, cooling, ejection, and
  resharpening matter more than getting one part out the door — a tool that makes one
  good part and then drifts is a failed tool.

## Mental Models

- **The tool makes the part; design the tool, not the part.** The mental shift that
  defines the trade: you never machine the customer's part — you machine its negative,
  its guide, its holder, and the part falls out of that.
- **Tolerance stack-up.** Tolerances accumulate along a chain of features and datums.
  Hold the tight tolerance where the function lives and open it elsewhere so the tool is
  buildable.
- **Heat treat moves metal.** Steel grows and warps in hardening, predictably enough to
  plan for — so you leave grind stock on precision surfaces and orient the part to
  limit distortion.
- **Jig guides the tool, fixture holds the part.** A jig guides a cutting tool (a drill
  jig with hardened bushings); a fixture locates and clamps the workpiece while a machine
  cuts. Confusing the two designs the wrong device.
- **Shrink and draft are baked in.** In a forming die, metal stretches and springs back;
  in a mold, the cavity is machined oversize by the shrink rate and walls angled by draft
  so the part releases. You design for how the material moves, not just its final shape.

## First Principles

- The precision of any mass-produced part is bounded by the precision of the tool that
  made it; the tool is the ceiling.
- Hardened steel cannot be conventionally machined, only ground or EDM'd — so the cut
  sequence is dictated by when hardness arrives.
- A locating scheme can only constrain six degrees of freedom; over-constraining a
  fixture guarantees inconsistent parts.

## Questions Experts Constantly Ask

- What is the datum scheme, and which dimensions are actually critical to function?
- How much will this feature grow in heat treat, and how much grind stock do I leave?
- What thickness and material is this die cutting, and what clearance does that demand?
- Where will the metal thin, tear, or wrinkle when this part forms?
- Is there enough draft to eject, and can this tool be resharpened in service?
- Should this be milled, ground, or wire EDM'd — and in what order?

## Decision Frameworks

- **Mill vs. grind vs. EDM.** Roughing and soft steel go on the mill; hardened flats and
  precision surfaces on the grinder; hardened, complex, or sharp-internal-corner geometry
  on wire or sinker EDM. Sequence is set by hardness: cut soft, harden, then grind/EDM.
- **Tool steel selection.** O1 for simple low-volume tooling; A2 for general die work
  (air-hardening, low distortion); D2 for high-wear, high-volume blanking; S7 for shock
  loads like forming punches; carbide where wear life must be extreme.
- **Jig vs. fixture.** If the device must guide the cutting tool to a location, build a
  jig with bushings. If it only holds the part rigidly while a machine finds the
  location, build a fixture.

## Workflow

1. **Study the print.** Identify datums, critical dimensions, GD&T, material, and how
   the finished tool will be used and maintained.
2. **Plan the build.** Decide operations and order, where heat treat falls, and what
   gets ground or EDM'd after hardening. Plan grind stock onto hardened features.
3. **Rough machine soft.** Mill stock oversize on critical surfaces; bore datum
   features; leave 0.005–0.015" grind stock where precision is required.
4. **Stress-relieve, then heat treat.** Relieve roughed stock; harden and temper to the
   specified Rockwell; expect and account for growth and distortion.
5. **Grind and EDM to final.** Grind datums first, then work off them; wire EDM profiles
   that can't be ground.
6. **Fit and assemble.** Fit punches to dies, cores to cavities; set shut height,
   stripper travel, ejection.
7. **Try out and tune.** Run the tool in the press; read the parts and edges; adjust
   clearance, vents, cooling, timing.
8. **Inspect and document.** Verify on the surface plate and CMM; record build dimensions
   and resharpen allowances.

## Common Tradeoffs

- **Tolerance vs. buildability.** Holding everything tight is slow and costly. Hold the
  tenth where function demands it and open the rest so the tool can be built.
- **Steel cost/wear vs. machinability.** D2 and carbide last far longer but are brutal to
  grind; O1 and A2 cut easily but wear faster. Match the steel to the volume.
- **Build-to-print vs. design-for-manufacture.** The print is law, but a maker who spots
  a feature that can't be molded (no draft, a buried sharp corner) flags it before
  cutting steel rather than building a tool that won't run.
- **Maintainability vs. compactness.** A cheaper die that can't be resharpened costs more
  over its life than a slightly larger one that can.

## Rules of Thumb

- Machine soft, heat treat, grind hard — never finish to size before the furnace.
- Leave ~0.010" of grind stock on critical surfaces into heat treat; more on thin
  sections.
- Cutting clearance per side ≈ 5–10% of stock thickness for steel; verify by the burr.
- Grind your datums first, then measure and cut everything from them.
- A2 is the safe default die steel; reach for D2 only when wear life justifies the grind.
- If two parts must fit, make one to size and the mating one to it, not both to print.

## Failure Modes

- **Finishing before heat treat.** The part comes back from the furnace grown and
  warped, and the precision is gone — scrap.
- **Wrong cutting clearance.** Too tight chips and galls the die; too loose rolls a
  large burr and shortens die life.
- **Insufficient draft in a mold.** The part sticks, drags, or won't eject — the tool
  jams in production.
- **Datum confusion.** Locating from the wrong feature produces parts that are
  individually "in spec" but won't assemble.
- **Ignored springback.** A formed part relaxes after the press opens and ends up off
  angle unless the die overbends to compensate.

## Anti-patterns

- **Treating the tool like the part** — holding part tolerances on the die instead of
  one order tighter.
- **Chasing a dimension into hardened steel** that should have been left with grind
  stock.
- **One-piece monolithic dies** that can't be repaired or resharpened when a detail
  wears.
- **Skipping tryout** and shipping a tool that has never made a part.

## Vocabulary

- **Tenth** — one ten-thousandth of an inch (0.0001"), the working unit of precision.
- **Cutting clearance** — the gap per side between punch and die, a percentage of stock
  thickness.
- **Progressive die** — a multi-station die that blanks, pierces, forms, and draws a
  part step by step as the strip advances.
- **Core and cavity** — the two halves of an injection mold; the cavity forms the
  outside, the core the inside.
- **Draft** — the taper on mold and cast walls that lets the part release.
- **Wire / sinker EDM** — electrical discharge machining; wire cuts profiles, sinker
  burns a shaped electrode into hardened steel.
- **GD&T** — geometric dimensioning and tolerancing; the language of form, orientation,
  and position relative to datums.

## Tools

CNC mills and jig borers for soft machining and precise hole location; surface,
cylindrical, and jig grinders for hardened flats and bores; wire and sinker EDM for
hardened, complex geometry; the surface plate with gauge blocks, sine bars, indicators,
and a CMM for verification; micrometers and gauge pins for everyday measurement; a
heat-treat furnace and Rockwell tester for hardness; hand files and stones for fitting
die details. Mastery of the grinder and the surface plate is what separates a tool maker
from a machinist.

## Collaboration

The tool and die maker sits between design and production. Mechanical and industrial
engineers hand over part drawings; the maker pushes back with design-for-manufacture
feedback when a feature can't be molded or stamped. Machinists run production parts once
the tool exists; welders repair die details; millwrights and the press crew install and
run the tool; robotics engineers integrate dies and fixtures into automated cells. The
recurring friction is the old one between engineers and tradespeople: the drawing says
one thing, the steel and the heat treat say what's achievable, and the maker makes the
two agree.

## Ethics

A die runs millions of cycles, often unattended, in a press that can take a hand off.
The maker's conscience lives in safety and honesty: build guards and anti-tie-down into
tooling, and never deliver a die with a pinch point you could have designed out. Hold
the real tolerance, not the easy one, because a tool that drifts produces scrap the
customer pays for long after delivery. Tell the truth about what a material can hold
rather than promising a tenth you can't repeat, and flag an unmanufacturable design
before cutting expensive steel. The reputation is built on tools that do exactly what
the print says, cycle after cycle.

## Scenarios

**A blanking die throwing a large burr.** A progressive die produces parts with a heavy,
ragged burr and the punches wear fast. The inexperienced response is to sharpen and run
again. The tool maker reads the edge: a large rollover and burr on 0.060" mild steel
points to excessive clearance. He measures near 15% per side — far above the ~6% the
material wants. He wire EDMs the openings to about 0.004" per side and gets a clean
shear. The fix was the clearance, not the sharpening.

**A mold part that won't eject.** A new injection mold makes good parts, then a part
drags on a sidewall and sticks. The cavity checks fine dimensionally. The maker looks at
draft: a deep rib was drawn with near-zero draft, and as the plastic shrinks onto the
core it grips. He sinker-EDMs the rib into the hardened core with about one degree of
taper per side and opens the ejector pattern. The parts release. Draft is not optional on
deep features.

**Planning a punch to survive heat treat.** A shop needs a long, slender S7 punch held
to ±0.0002" on the profile. A junior wants to mill it to size and harden it. The tool
maker plans backward from the furnace: S7 grows and a slender part bows. He rough mills
oversize, leaving 0.012" grind stock, relieves stress, and hardens to about 56 HRC. It
comes back grown and bowed, as expected. He straightens, then grinds the profile to
final off the ground datum end — hitting ±0.0002" because the precision went in after
the metal stopped moving.

## Related Occupations

The tool and die maker grows out of the machinist's trade — the same machines and
measuring discipline, pushed to the tenth and into hardened steel and tool design. The
mechanical and industrial engineer hand down the part designs the tooling must satisfy,
and the maker's design-for-manufacture judgment feeds back. Welders alter die details;
millwrights install and maintain the tooling and presses; robotics engineers build tools
and fixtures into automated cells. The jeweler shares the obsession with precision
fitting and hardened-tool work at a smaller scale.

## References

- *Machinery's Handbook* — the standard reference for the trade
- *Die Design Fundamentals* — Vukota Boljanovic and J.R. Paquin
- *Tool and Manufacturing Engineers Handbook (TMEH)* — SME
- ASME Y14.5 — Dimensioning and Tolerancing (GD&T standard)
