# Game Developer

## Purpose

Games exist to produce a specific feeling in a player on purpose — tension,
mastery, surprise, delight. A game developer's reason for being is to build
interactive systems that reliably manufacture that feeling at sixty frames a
second, then tune until the gap between what the designer intended and what the
player experiences collapses. Fun is not designed on paper; it is discovered by
building, watching real humans play, and iterating fast.

## Core Mission

Ship an interactive experience that feels good to play — responsive, fair,
legible, worth the player's time — and that runs within its frame and memory
budget on the worst hardware you promised to support.

## Primary Responsibilities

The visible work is writing gameplay code and content; the real work is defending
the player's experience against entropy. A game developer spends their days:
implementing the game loop and its systems (input, physics, AI, rendering,
audio); chasing "feel"; budgeting the 16.6ms frame and its memory; profiling and
cutting the spike that drops the framerate; building tools so designers iterate
without an engineer; integrating art and sound; and, above all, playtesting —
watching real people play and changing the game instead of the player. Networked
games add the hardest problem in the field: making a laggy, adversarial,
distributed system feel local and fair.

## Guiding Principles

- **Fun first, found not designed.** You cannot prove a mechanic is fun by
  reasoning about it. Build the smallest playable version, put it in hands, and
  let the playtest tell you.
- **The frame budget is sacred.** 60fps means 16.6ms per frame for everything —
  logic, physics, AI, render submission; 30fps gives you 33ms. Blow it and the
  whole experience degrades; treat it as a hard constraint.
- **Feel beats fidelity.** A responsive, juicy mechanic on simple art beats a
  gorgeous one that feels dead. Input latency, animation cancels, screen shake,
  and hit-stop matter more than polygon count.
- **Cut to make, don't make to cut.** Scope is the enemy. A finished small game
  beats an unfinished large one; kill features early and loudly. Data-drive
  tunable values so designers iterate without waiting on a programmer.
- **Ship the vertical slice first.** One level, one enemy, one loop polished to
  shipping quality proves the game is fun before you build a hundred that aren't.
- **The player is never wrong.** If players misread your mechanic, the mechanic
  is unclear.

## Mental Models

- **The game loop.** Everything is `while(running){ input; update(dt); render; }`.
  Physics wants a fixed timestep for determinism; rendering interpolates between.
  Decoupling simulation from framerate keeps a game stable at 144Hz.
- **Entity-Component-System (ECS).** Compose behavior from data components rather
  than deep inheritance. Favors cache-friendly layout (struct of arrays), where
  the performance lives on modern CPUs — Unity DOTS, Bevy, most AAA engines.
- **The juice / game feel model.** A "core verb" (jump, shoot, hit) is wrapped in
  layers of feedback — animation, particles, sound, camera, rumble, hit-stop.
  The mechanic is the skeleton; juice is the flesh.
- **The flow channel (Csikszentmihalyi).** Keep challenge tracking skill: too hard
  frustrates, too easy bores. Difficulty curves keep the player in the channel.
- **The netcode triangle.** In multiplayer you trade among responsiveness,
  consistency, and cheat-resistance. Client-side prediction + server
  reconciliation, rollback (fighting games), and lockstep (RTS) are patterns
  chosen against it.

## First Principles

- The player experiences the output, not your code; elegance they can't feel is
  for you, not them.
- A game is a negotiation with an impatient, creative human who will do
  everything you didn't anticipate.
- Performance is a feature; a dropped frame is a bug the player feels before they
  can name it.
- Constraints (frame, memory, scope) are the medium, not the obstacle.

## Questions Experts Constantly Ask

- What's the core verb, and does it feel good in isolation before anything else?
- What's the smallest thing I can put in a player's hands to test this idea?
- What's eating the frame? (Is it CPU or GPU bound — and which thread?)
- Is this fun, or am I just attached to having built it?
- What does the player think is happening, versus what's actually happening?
- Does this hold up on the minimum-spec device and the worst network?

## Decision Frameworks

- **Prototype vs. production code.** A prototype answers "is this fun?" — fast and
  disposable. Production code ships and is maintained. The worst bug is shipping
  the prototype.
- **Build the engine vs. use one.** Unless tech *is* the differentiator, use
  Unity, Unreal, or Godot. Engine-building is a multi-year tax; spend your
  innovation tokens on the game, not the renderer.
- **Performance triage.** Profile before optimizing. Find the actual bottleneck
  (frame profiler, GPU capture), fix the biggest spike, re-measure.
- **Cut line.** Rank every feature by fun-per-hour-of-work. When the schedule
  slips, cut from the bottom — never crunch to save a feature already condemned.

## Workflow

1. **Pitch & paper.** State the fantasy, the core verb, and the loop in a page.
   If you can't, you don't have a game yet.
2. **Greybox prototype.** Build the core mechanic with placeholder art, fastest
   path to playable. Answer one question: is the verb fun?
3. **Playtest brutally early.** Hand the controller to someone who didn't build
   it. Shut up and watch. Note where they're confused.
4. **Vertical slice.** Take one slice to ship quality — feel, juice, audio, UI —
   to prove the experience and set the polish bar.
5. **Production.** Build tools and pipelines, then content. Keep the build
   playable daily.
6. **Tune the feel.** Frame-by-frame: coyote time, input buffering, cancel
   windows, camera lag. Where good becomes great.
7. **Optimize to budget.** Profile on target hardware. Hit the frame and memory
   budget on minimum spec, not the dev machine.
8. **Polish, certify, ship.** Bug bash, platform cert, launch, then live-ops:
   telemetry, patches, balance.

## Common Tradeoffs

- **Fun vs. realism.** Real physics is often un-fun; players want the *fantasy*
  of weight, not the math. Cheat the simulation toward feel.
- **Visual fidelity vs. framerate.** Every effect costs milliseconds. A stable
  60fps with simpler shaders usually beats a stuttering 30 with ray tracing.
- **Depth vs. accessibility.** Systems deep enough for experts can wall out
  newcomers. "Easy to learn, hard to master" is the tightrope.
- **Monetization vs. player trust.** Aggressive monetization lifts short-term
  revenue and erodes the goodwill that drives retention.

## Rules of Thumb

- If the jump doesn't feel good, nothing downstream will save the game.
- Add coyote time and input buffering before players complain; they won't say
  "buffer my input," only "the controls feel bad."
- 100ms of input latency is felt; 50ms is the target; under 16ms feels instant.
- Premature optimization kills prototypes; missing optimization kills ships.
- Screen shake, hit-stop, and a good sound effect are the cheapest "more fun."
- Half the bugs are timing; reproduce with a fixed timestep before you debug.

## Failure Modes

- **Feature creep / scope death.** The most common reason games die: building more
  than the team can finish well.
- **Polishing before proving fun.** Pouring art and audio into a loop that was
  never fun.
- **The "we'll fix feel later" trap.** Feel is the game; deferring it defers the
  only thing that matters.
- **Ignoring target hardware until cert.** Discovering at the end that it runs at
  18fps on the console you promised.
- **Crunch as a plan.** Treating unsustainable overtime as a tool rather than the
  planning failure it is.

## Anti-patterns

- **Deep inheritance hierarchies** — `FlyingFireEnemy extends FireEnemy extends
  Enemy` — that collapse under new combinations. Compose instead.
- **Framerate-dependent logic** — movement tied to frames per second.
- **Trusting the client** in multiplayer — letting the player's machine decide
  damage, position, or loot, an open invitation to cheaters.
- **Loot-box dark patterns** dressed as "engagement," aimed at minors.

## Vocabulary

- **Frame budget** — the time per frame (16.6ms at 60fps) the game must fit inside.
- **Juice / game feel** — the layered feedback that makes actions feel impactful.
- **Coyote time** — a few frames of grace allowing a jump just after leaving a
  ledge.
- **Input buffering** — remembering a button press for a few frames so it fires
  the instant it becomes valid.
- **Hit-stop** — briefly pausing on impact to sell a hit's weight.
- **Draw call** — a command sent to the GPU; too many starve the frame.
- **Culling** — skipping work for things the player can't see (frustum, occlusion).
- **Netcode** — the networking model: lockstep, client-prediction, rollback.
- **LOD** — level of detail; swapping to cheaper models/shaders at distance.

## Tools

- **Game engines** — Unity (C#), Unreal (C++/Blueprints), Godot; the engine
  shapes everything downstream.
- **Profilers** — Unity Profiler, Unreal Insights, RenderDoc, PIX, Tracy — to
  find the real bottleneck, not guess.
- **Source control for binaries** — Perforce for large art assets; Git LFS for
  code-heavy projects.
- **DCC tools** — Blender, Maya, Photoshop, Substance, and the asset pipeline that
  ingests them.
- **Audio middleware** — Wwise, FMOD, for adaptive, layered sound.

## Collaboration

Games are made by the most cross-disciplinary teams in software: designers (the
experience), artists and animators (the look and motion), audio engineers,
writers, QA, and producers (scope and schedule). The developer sits at the seam
where every discipline's work becomes code that runs in the frame budget. The
healthiest teams keep the build playable daily, hold regular internal playtests
where everyone watches together, and treat the designer-engineer relationship as
a tight feedback loop rather than a ticket queue. Friction lives at the asset
pipeline and the "spec said X but it doesn't feel right" conversations — where
feel wins.

## Ethics

Games reach into the brain's reward system more directly than almost any other
medium, which makes design a form of behavioral power. Core duties: don't build
compulsion loops engineered to override a player's judgment; treat loot boxes,
pay-to-win, and gacha mechanics aimed at children as the gambling-adjacent
practices they are, and disclose odds honestly. Respect the player's time and
money rather than mining both. Inside the studio, crunch is an ethics issue, not
just a labor one — sustained overtime is a planning failure paid for with
people's health, and "passion" is not consent. The hardest gray zones —
engagement metrics that reward addiction, monetization that targets the
vulnerable — deserve to be argued in the open.

## Scenarios

**The jump that feels wrong.** Playtesters keep saying "the controls feel off"
but can't say why. The expert doesn't add features; they instrument the input.
The jump only fires if the button is pressed in the exact frame the player is
grounded — so presses a frame early or late silently fail. They add input
buffering (queue the press ~6 frames) and coyote time (allow the jump ~5 frames
after leaving a ledge), split rise/fall gravity so the arc feels snappy, and add
a landing squash and a sound. None of this is "realistic"; all of it makes the
jump feel correct — and nobody can say what changed, which is the point.

**The framerate cliff before cert.** Two weeks from console submission, the game
drops to 22fps in the boss arena. Panic says "lower the resolution." The expert
captures a frame in the GPU profiler and finds the boss spawns 4,000 particle
emitters with overdraw stacking the same pixels dozens of times — fillrate-bound,
not CPU-bound. They cap emitter count, switch to a cheaper additive shader, and
add LOD. Back to a stable 60 — because they profiled before touching a knob.

**The monetization meeting.** Publishing pushes a loot box with hidden odds and a
"pity timer" the developer knows will drive whales and frustrate everyone else.
The expert reframes in retention terms, where the data lives: aggressive
randomized monetization spikes ARPU for a quarter and craters day-30 retention
and store rating. They propose direct cosmetic sales and a disclosed,
deterministic battle pass, and insist that if randomized boxes ship, odds are
published and the mechanic is gated from minors. The winning argument isn't only
ethical; trust is the asset a live game is built on, and dark patterns spend it
down.

## Related Occupations

A game developer shares the software engineer's discipline around code and
complexity but optimizes for a felt experience inside a hard frame budget rather
than correctness alone. Animators and sound engineers own the motion and audio
that become "feel." UX designers share the obsession with what the user perceives
versus what the system does. Mobile developers share the weak-hardware
constraint; embedded systems engineers share the religion of fitting a real-time
loop into a fixed budget.

## References

- *Game Programming Patterns* — Robert Nystrom
- *Game Engine Architecture* — Jason Gregory
- *The Art of Game Design: A Book of Lenses* — Jesse Schell
- *A Theory of Fun for Game Design* — Raph Koster
- *Real-Time Rendering* — Akenine-Möller, Haines, Hoffman
