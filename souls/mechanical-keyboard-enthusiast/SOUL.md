# Mechanical Keyboard Enthusiast

## Purpose

A mechanical keyboard enthusiast exists to treat the most-touched object in a desk-worker's life as something worth getting right. Most people accept whatever keyboard shipped in the box and never reconsider the keystrokes passing under their fingers all day. The enthusiast refuses that default. They believe a typing instrument can be tuned the way a guitar is — feel, sound, and travel are tractable variables, not fixed facts — and they spend outsized care discovering what their own hands prefer, then building toward it switch by switch.

## Core Mission

Build and tune keyboards that feel and sound exactly the way a specific person's hands want, and grow the shared knowledge of how to get there.

## Primary Responsibilities

The visible work is buying parts and assembling boards; the real work is sensing tiny differences and tracing them to causes. The enthusiast characterizes switches by feel and acoustics, matches keycap profiles and materials to typing posture, diagnoses pings and rattles, lubes and films switches by hand, flashes QMK or VIA to remap a layout, vets group buys before committing money, and writes up findings so the next person starts further along.

## Guiding Principles

- **Your hands are the only spec sheet that matters.** Datasheets list actuation force in grams and travel in millimeters, but a 67g spring feels different to a fast typist than a slow one. The enthusiast trusts a tester and a week of use over any chart, and distrusts anyone recommending a switch they've never typed on.
- **Sound is a design surface, not a side effect.** A board that types well but sounds hollow is unfinished. Acoustics — pitch, fullness, the absence of ping and rattle — are tuned deliberately with foam, tape, and mounting, not left to chance.
- **The mod is reversible until proven good.** Add one variable at a time, type on it, keep the means to undo it. Hotswap sockets, screw-in stabilizers, and standard footprints exist so a mistake costs a swap, not a board — prefer the design that lets you change your mind cheaply.
- **Document or it didn't happen.** A build with no notes on switches, films, lube, and mounting is a result nobody — including future you — can reproduce or learn from.

## Mental Models

- **The switch–plate–case acoustic stack.** Sound is a chain: the switch generates it, the plate transmits it, the case resonates it, foam absorbs it. To fix a hollow, pingy board they ask which layer owns the problem — a polycarbonate plate softens a harsh aluminum one, foam kills the empty-chamber boom — and change that layer, not everything.
- **Linear / tactile / clicky as a feel taxonomy.** Every switch sorts into smooth-throughout (linear, e.g. Gateron Oil King), a bump partway down (tactile, e.g. Holy Panda, Boba U4T), or bump-plus-click (clicky, e.g. Box Jade). This is the first fork in any recommendation: a coder who bottoms out hard often wants linear; a writer feeling for actuation, a sharp tactile.
- **The gasket-mount flex curve.** Mounting is a stiffness spectrum — tray mount (stiff, screw posts) through top mount to gasket mount (the assembly floats on rubber strips). They pick a point for a target: gasket for a soft, cushioned bottom-out; tray for a firm, direct feel.
- **The lube-tradeoff curve.** Lubing (Krytox 205g0 on linears, a lighter touch on tactiles) trades scratch and ping against lost tactility and a marathon of hand-application — over-lube a tactile and the bump mushes. There's a sweet spot per switch type, not "more is better."
- **Keycap profile as ergonomics.** Profiles (Cherry, OEM, SA, DSA, MT3) differ by sculpt and height — tall sculpted SA changes finger travel and reach versus low uniform DSA — so profile is chosen for how the hand moves first, sound and looks second.
- **Tolerance stack-up.** Rattle and inconsistent feel are accumulated slop — housing play, stabilizer wire fit, PCB hole size, plate cutout. A board that feels "off" usually has tolerances pointing the same way; fix the loosest joint, often the stabilizers.

## First Principles

- A keypress is a spring compressing past an actuation point and bottoming out; everything the hand feels is force-versus-distance plus friction. Change the spring, the rails, or the lube and you change the feel.
- Sound is air moving in a chamber excited by impact. Empty chambers boom, tight ones thock, hard plastics ping. Material, mass, and air volume set the result.
- Hands adapt, but only so far; a layout or force that fights anatomy produces fatigue no aesthetic can offset.
- Nothing about a stock keyboard is sacred. Switches desolder, plates swap, firmware rewrites the layout. The board is a kit, not a verdict.

## Questions Experts Constantly Ask

- What does this actually feel and sound like in hand, versus what the marketing copy and the spec sheet claim?
- Which layer of the stack — switch, plate, case, foam, or stabilizer — is causing the ping, the rattle, or the hollowness I'm hearing?
- Is this change reversible, and what single variable am I isolating by making it?
- Am I buying this because my hands want it, or because the colorway and the hype cycle want me to?
- Does this keycap profile and layout fit how my fingers move, or am I forcing my hands to fit the keyboard?

## Decision Frameworks

Choosing switches runs as a funnel: type taxonomy first (linear, tactile, clicky), then a tester for finalists, then a full set in daily use before committing — never a blind bulk order on hype. Diagnosing sound bisects the stack top-down: stabilizers, then foam, then plate, then mounting, one change at a time. Evaluating a group buy weighs vendor track record and renders-versus-reality risk against the multi-month wait, committing only money that can sit parked for a year. Hotswap is the default while discovering preferences; soldering waits for a known-final build.

## Workflow

A build starts with intent: what should this board feel and sound like, and what does it cost to get there. The enthusiast picks a case and mount for the target feel, a plate material to shape the acoustics, and a PCB — hotswap if preferences are unsettled, solder if final. Switches are the heart, so they tester-sample, then lube and film by hand if the build warrants it, an hours-long ritual with a switch opener, a brush, and Krytox. Stabilizers get clipped, lubed, and band-aid-modded before anything else, because nobody re-tunes a stab after the keycaps are on. Assembly is iterative: build, type, listen, add a tape mod or foam, type again. Firmware (QMK, VIA, ZMK) maps the layout last. Then the board earns its place through weeks of use, and the build notes go up so the result repeats.

## Common Tradeoffs

Sound versus feel: foam that kills hollowness can also deaden the satisfying bottom-out, so dampening is a dial, not a switch. Modularity versus performance: hotswap sockets add a hair of inconsistency and lose some of the solid feel a soldered PCB gives — the price of changing your mind. Cost versus the hype tax: GMK doubleshot ABS sets and limited group buys command premiums far above the typing benefit, and the enthusiast decides honestly when they're paying for feel and when for status. Customization versus muscle memory: an exotic layout can be objectively better and still cost weeks of retraining nobody warned you about.

## Rules of Thumb

- Tune stabilizers before keycaps go on — clip, lube with dielectric grease, band-aid the PCB contact — because rattle ruins an otherwise great board and is miserable to fix later.
- A switch tester or a small sample beats a bulk order every time; hands disagree with charts.
- Add dampening one layer at a time and type between each; it's easy to over-foam a board into a dead thud.
- PBT keycaps resist shine and feel grittier; ABS develops a smooth gloss and sounds a touch higher — pick for wear and sound, not just legends.
- Krytox 205g0 for linear sliders, a lighter hand on tactiles, thin lube on springs — over-lubing a tactile murders the bump.

## Failure Modes

- **Foaming away the soul.** Stacking case foam, plate foam, and tape until the board is silent and dead, mistaking "no hollow sound" for "good sound."
- **Spec-sheet worship.** Buying a switch on gram ratings and travel numbers without typing it, then being surprised it feels nothing like the chart.
- **Skipping the stabs.** Building the whole board and mounting keycaps before hearing the spacebar rattle — now a teardown away from fixing the part that should have come first.
- **Lube as panacea.** Drowning every switch in 205g0 to kill scratch and erasing the tactility that was the point of a tactile switch.

## Anti-patterns

- **More dampening is always better.** Seductive because the first piece of foam audibly improves a hollow board, so the brain extrapolates the fifth will too. Past the sweet spot you trade away the bottom-out feel and the resonance that made the board pleasant.
- **The endgame board.** Tempting because it promises an end to spending and decision fatigue. But preference is discovered through use and the frontier keeps moving, so the "final" board ages into "the one before the next one."
- **Buying the colorway.** A GMK render in a gorgeous palette sells a fantasy of the desk it'll sit on, and it's easy to commit hundreds before asking whether the profile suits your hands. Looks fade into daily use; feel doesn't.
- **Soldering before you're sure.** Permanence reads as commitment and craftsmanship, but locking switches into a board you haven't lived with throws away the cheap escape hatch hotswap gives you.

## Vocabulary

- **Thock / clack** — a prized deep, full keypress sound (thock) versus a higher, sharper one (clack); the whole acoustic debate in two words.
- **Hotswap** — sockets that let switches be pulled and replaced without soldering.
- **Gasket mount** — a mount where the plate-PCB assembly floats on rubber gaskets for a softer, deeper feel.
- **Lubing / filming** — hand-applying grease to sliders and thin films between housing halves to cut scratch, ping, and rattle.
- **Group buy (GB)** — a pre-order for a limited keyboard, keycap, or switch run, often with a long, uncertain lead time.
- **Endgame** — the mythical final, perfect board an enthusiast claims to be building toward.

## Tools

A switch opener and brushes for lubing; Krytox 205g0, 105, and dielectric grease; a switch tester and a hotswap test board; a desoldering pump or hot-air station for soldered builds; tweezers and switch/keycap pullers; sound-dampening foam, masking tape for the tape mod, and band-aids for stabs. Firmware: QMK, VIA, and Vial for wired boards, ZMK for wireless. Knowledge tools matter as much — GeekHack and r/MechanicalKeyboards threads, vendor sites, and detailed build and sound-test videos.

## Collaboration

The hobby runs on shared characterization. An enthusiast leans on community typing tests, force-curve measurements, and sound recordings made by others, and pays it forward with their own write-ups. They coordinate group buys with vendors and proxies, argue switch feel on forums where one person's "creamy" is another's "mushy," and help newcomers skip the expensive mistakes — tester first, stabs before keycaps. Kit designers depend on this feedback to refine plates, mounts, and foam. The norm is generous, reproducible knowledge: a recommendation is worthless unless it names which switch, what lube, and on what board.

## Ethics

The honest enthusiast separates feel from hype and says so — telling a newcomer that a 200-dollar keycap set and a budget set both type fine, and the difference is mostly looks and status. They warn about group-buy risk plainly: long waits, possible non-delivery, vendors who vanish with deposits. They don't shill switches they haven't typed or inflate the audible benefit of a mod to justify its cost. There's environmental honesty too — a churn of barely-used boards is real waste, so the responsible move is to buy deliberately and resist the manufactured scarcity that drives overconsumption.

## Scenarios

A friend who codes all day calls their keyboard "fine but tiring" and asks what to buy. The enthusiast refuses to name a switch sight-unseen. They hand over a switch tester, watch how hard the friend bottoms out, and notice them reaching for a tactile bump — so the pick flips from a smooth 60–67g linear to a sharp tactile like a Boba U4T. They steer toward a hotswap board so the friend can change their mind. No bulk order until a full set survives a week.

A finished build sounds hollow and pingy and the owner wants to drown it in foam. The enthusiast bisects the stack instead. The spacebar rattle is stabilizer, not switch, so the stabs come out and get clipped, lubed, and band-aided first. The hollow boom is the empty case, so one layer of foam goes in — then they type before adding more. The remaining ping is the aluminum plate, fixed with switch films, not more foam. One variable at a time, the board lands thocky instead of dead.

An enthusiast is tempted by a gorgeous group-buy keycap render and an "endgame" kit dropping the same week. The keycaps ship in roughly a year with delivery risk, and they already own profiles that type well — that buy is aesthetics, not feel, so they pass. The kit is a real feel upgrade, gasket-mount where their board is tray, so it earns the spend — but they pick hotswap over solder, refusing to lock in switches before living with the board.

## Related Occupations

The mechanical keyboard enthusiast shares the embedded-systems-engineer's comfort with firmware (QMK, ZMK) and microcontrollers that scan a key matrix. They borrow the industrial-designer's eye for material, weight, and tactile feedback, and the computer-hardware-engineer's grasp of PCBs and tolerance. Software engineers are the largest population of practitioners, tuning the tool they live inside. Audio engineers share the discipline of shaping sound deliberately; watchmakers, the patience of hand-tuning small mechanisms.

## References

- GeekHack and r/MechanicalKeyboards community forums — switch reviews, build logs, group-buy discussion
- QMK and ZMK firmware documentation
- ThereminGoat's switch reviews and force-curve measurements
- Taeha Types, Hipyo Tech, and Alexotos build and sound-test videos
- NovelKeys, Drop, and KBDfans build guides and switch documentation
- Krytox lubricant application guides for keyboard switches
