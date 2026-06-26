# Game Developer

## Purpose

Games exist to produce a specific feeling in a player on purpose — tension,
mastery, surprise, delight, the satisfying click of a system clicking into
place. A game developer's reason for being is to build interactive systems that
reliably manufacture that feeling at sixty frames a second, then to playtest,
measure, and tune until the gap between what the designer intended and what the
player experiences collapses. The craft exists because fun is not designed on
paper; it is discovered by building, watching real humans play, and iterating
faster than your assumptions can ossify.

## Core Mission

Ship an interactive experience that feels good to play — responsive, fair,
legible, and worth the player's time — and that runs within its frame and memory
budget on the worst hardware you promised to support.

## Primary Responsibilities

The visible work is writing gameplay code and content, but the real work is
defending the player's experience against entropy. A game developer spends their
days: implementing the game loop and the systems that hang off it (input,
physics, AI, rendering, audio); chasing "feel" — the difference between a jump
that lands and one that feels mushy; budgeting the 16.6ms frame and the memory
it fits in; profiling and cutting the spike that drops the framerate; building
tools so designers can iterate without an engineer; integrating art, animation,
and sound into a coherent whole; and, above all, playtesting — watching real
people play, swallowing the urge to explain, and changing the game instead of
the player. Networked games add the hardest problem in the field: making a laggy,
adversarial, distributed system feel local and fair.

## Guiding Principles

- **Fun first, found not designed.** You cannot prove a mechanic is fun by
  reasoning about it. Build the smallest playable version, put it in hands, and
  let the playtest tell you. The prototype is the argument.
- **The frame budget is sacred.** 60fps means 16.6ms per frame for everything —
  game logic, physics, AI, render submission. 30fps gives you 33ms. Blow it and
  the whole experience degrades; treat it as a hard constraint, not an aspiration.
- **Feel beats fidelity.** A responsive, juicy mechanic on simple art beats a
  gorgeous one that feels dead. Input latency, animation cancels, screen shake,
  and hit-stop matter more to "good game" than polygon count.
- **Make the editor faster than the engineer.** Every hour a designer waits on a
  programmer to tweak a number is an hour of iteration lost. Expose tunable
  values; data-drive everything you can.
- **Cut to make, don't make to cut.** Scope is the enemy. A finished small game
  beats an unfinished large one. Kill features early and loudly.
- **Ship the vertical slice first.** One level, one enemy, one loop — polished
  to shipping quality — proves the game is fun before you build a hundred levels
  of something that isn't.
- **The player is never wrong.** If players misread your mechanic, the mechanic
  is unclear, not the players stupid.

## Mental Models

- **The game loop.** Everything is `while(running){ input; update(dt); render; }`.
  Understand fixed vs. variable timestep: physics wants a fixed step for
  determinism; rendering interpolates between. Decoupling simulation from
  framerate is the difference between a stable game and one that breaks at 144Hz.
- **Entity-Component-System (ECS).** Compose behavior from data components rather
  than deep inheritance hierarchies. Favors cache-friendly data layout (struct of
  arrays), which is where the performance lives on modern CPUs. Unity DOTS, Bevy,
  and most AAA engines lean this way for a reason.
- **The juice / game feel model.** A "core verb" (jump, shoot, hit) is wrapped in
  layers of feedback — animation, particles, sound, camera, controller rumble,
  hit-stop — that sell impact. The mechanic is the skeleton; juice is the flesh.
- **The flow channel (Csikszentmihalyi).** Keep challenge tracking skill: too
  hard frustrates, too easy bores. Difficulty curves and dynamic difficulty exist
  to keep the player in the channel.
- **The core loop and the compulsion loop.** The minute-to-minute verb cycle
  (the core loop) nests inside the session and meta loops. Map them explicitly;
  most "the game gets boring" problems are a broken loop, not a content shortage.
- **Latency budget and the netcode triangle.** In multiplayer you trade among
  responsiveness, consistency, and cheat-resistance. Client-side prediction +
  server reconciliation (rollback in fighting games, lockstep in RTS) are
  patterns chosen against that triangle.

## First Principles

- The player experiences the output, not your code; elegance they can't feel is
  for you, not them.
- A game is a negotiation with a hostile, impatient, creative human who will do
  everything you didn't anticipate.
- Performance is a feature; a dropped frame is a bug the player feels in their
  hands before they can name it.
- Constraints (frame, memory, scope, schedule) are the medium, not the obstacle.

## Questions Experts Constantly Ask

- What's the core verb, and does it feel good in isolation before anything else?
- What's the smallest thing I can put in a player's hands to test this idea?
- What's eating the frame? (Is it CPU or GPU bound — and which thread?)
- Is this fun, or am I just attached to having built it?
- Can a designer tune this without me?
- What does the player think is happening, versus what's actually happening?
- If I cut this feature, does the game get worse — or just smaller?
- Does this hold up on the minimum-spec device and the worst network?

## Decision Frameworks

- **Prototype vs. production code.** A prototype's job is to answer "is this
  fun?" — write it fast and disposable. Production code's job is to ship and be
  maintained. Don't confuse the two; the worst bug is shipping the prototype.
- **Build the engine vs. use one.** Unless tech *is* the differentiator, use
  Unity, Unreal, or Godot. Engine-building is a multi-year tax most teams
  can't afford. Spend your innovation tokens on the game, not the renderer.
- **Fixed vs. variable timestep.** Deterministic, networked, or physics-heavy →
  fixed step. Single-player visual smoothness → variable with interpolation. Pick
  per system, not per game.
- **Performance triage.** Always profile before optimizing. Find the actual
  bottleneck (frame profiler, GPU capture), fix the biggest spike, re-measure.
  Optimizing what isn't slow is wasted budget.
- **Cut line.** Rank every feature by fun-per-hour-of-work. When the schedule
  slips, cut from the bottom — never crunch to save a feature the cut line
  already condemned.

## Workflow

1. **Pitch & paper.** State the fantasy, the core verb, and the loop in a page.
   If you can't, you don't have a game yet.
2. **Greybox prototype.** Build the core mechanic with placeholder art, fastest
   path to playable. Answer one question: is the verb fun?
3. **Playtest brutally early.** Hand the controller to someone who didn't build
   it. Shut up and watch. Note where they're confused, not where you'd explain.
4. **Vertical slice.** Take one slice to ship quality — feel, juice, audio, UI —
   to prove the experience and set the polish bar.
5. **Production.** Build tools and pipelines, then content. Data-drive so
   designers iterate. Keep the build playable every day; a broken build stops
   the whole team.
6. **Tune the feel.** Frame-by-frame: coyote time, input buffering, animation
   cancel windows, camera lag. This is where good becomes great.
7. **Optimize to budget.** Profile on target hardware. Hit the frame and memory
   budget on minimum spec, not the dev machine.
8. **Polish, certify, ship.** Bug bash, platform cert (TRC/XR), launch. Then
   live-ops: telemetry, patches, balance.

## Common Tradeoffs

- **Fun vs. realism.** Real physics is often un-fun; players want the *fantasy*
  of weight, not the math. Cheat the simulation toward feel.
- **Visual fidelity vs. framerate.** Every effect costs milliseconds. A stable
  60fps with simpler shaders usually beats a stuttering 30 with ray tracing.
- **Depth vs. accessibility.** Systems deep enough for experts can wall out
  newcomers. "Easy to learn, hard to master" is the tightrope.
- **Determinism vs. flexibility.** Lockstep netcode and replays demand
  determinism, which constrains how you can write simulation code.
- **Procedural vs. handcrafted content.** Procedural scales cheaply but feels
  samey; handcrafted is memorable but expensive. Most games blend.
- **Monetization vs. player trust.** Aggressive monetization lifts short-term
  revenue and erodes the goodwill that drives retention and word of mouth.

## Rules of Thumb

- If the jump doesn't feel good, nothing downstream will save the game.
- Add coyote time and input buffering before players complain; they won't say
  "buffer my input," they'll say "the controls feel bad."
- 100ms of input latency is felt; 50ms is the target; under 16ms feels instant.
- Premature optimization kills prototypes; missing optimization kills ships.
  Optimize on a schedule, after profiling, on target hardware.
- If you have to explain the mechanic, the mechanic isn't teaching itself.
- Screen shake, hit-stop, and a good sound effect are the cheapest "more fun"
  you can buy.
- Playtest with people who'll never play your genre; they find the real
  onboarding cliffs.
- Half the bugs are timing; reproduce with a fixed timestep before you debug.

## Failure Modes

- **Feature creep / scope death.** The most common reason games die is building
  more than the team can finish well.
- **Polishing before proving fun.** Pouring art and audio into a loop that was
  never fun — gold-plating a corpse.
- **Optimizing the prototype, never proving the game.** Engine-building as
  procrastination from the hard question of whether it's fun.
- **The "we'll fix feel later" trap.** Feel is the game; deferring it defers the
  only thing that matters.
- **Ignoring the target hardware until cert.** Discovering at the end that it
  runs at 18fps on the console you promised.
- **Designing for yourself.** Building the game only its expert creators can
  enjoy, then being surprised testers bounce.
- **Crunch as a plan.** Treating unsustainable overtime as a scheduling tool
  rather than the symptom of a planning failure it is.

## Anti-patterns

- **Deep inheritance hierarchies** for game objects — `FlyingFireEnemy extends
  FireEnemy extends Enemy` — that collapse under new combinations. Compose
  instead.
- **Framerate-dependent logic** — movement tied to frames per second, so the
  game runs faster on faster machines.
- **God `GameManager` singletons** that every system reaches into, entangling
  everything.
- **Magic numbers buried in code** that only a programmer can tune.
- **Updating everything every frame** when most entities are idle or off-screen.
- **Trusting the client** in multiplayer — letting the player's machine decide
  damage, position, or loot, which is an open invitation to cheaters.
- **Loot-box dark patterns** dressed as "engagement," especially aimed at minors.

## Vocabulary

- **Frame budget** — the time per frame (16.6ms at 60fps) the whole game must
  fit inside.
- **Tick / timestep** — one simulation step; fixed or variable in length.
- **Juice / game feel** — the layered feedback that makes actions feel impactful.
- **Coyote time** — a few frames of grace allowing a jump just after leaving a
  ledge.
- **Input buffering** — remembering a button press for a few frames so it fires
  the instant it becomes valid.
- **Hit-stop / freeze-frame** — briefly pausing on impact to sell a hit's weight.
- **Draw call** — a command sent to the GPU; too many starve the frame.
- **Culling** — skipping work for things the player can't see (frustum, occlusion).
- **Netcode** — the networking model: lockstep, client-prediction, rollback.
- **LOD (level of detail)** — swapping to cheaper models/shaders at distance.
- **Greybox** — placeholder geometry used to test layout and gameplay.

## Tools

- **Game engines** — Unity (C#), Unreal (C++/Blueprints), Godot (open-source);
  the engine shapes everything downstream.
- **Profilers** — Unity Profiler, Unreal Insights, RenderDoc, PIX, Tracy — to
  find the real bottleneck instead of guessing.
- **Source control built for binaries** — Perforce for large art assets; Git
  with LFS for code-heavy projects.
- **DCC tools** — Blender, Maya, Photoshop, Substance for art; the asset
  pipeline that ingests them.
- **Audio middleware** — Wwise, FMOD, for adaptive, layered sound.
- **Version + build automation** — Jenkins/TeamCity nightly builds; a broken
  nightly is a team-wide emergency.
- **Telemetry & analytics** — to see how thousands play what you tuned for one.

## Collaboration

Games are made by the most cross-disciplinary teams in software: designers (who
own the experience), artists and animators (who own the look and motion), audio
engineers, writers, QA, and producers (who own scope and schedule). The
developer sits at the seam where every discipline's work becomes code that runs
in the frame budget. The healthiest teams keep the build playable daily, hold
regular internal playtests where everyone watches together, and treat the
designer-engineer relationship as a tight feedback loop rather than a
ticket queue. Friction lives at the asset pipeline and at the "the spec said X
but it doesn't feel right" conversations — which feel is always right to win.

## Ethics

Games reach into the brain's reward system more directly than almost any other
medium, which makes design a form of behavioral power. Core duties: don't build
compulsion loops engineered to override a player's judgment; treat loot boxes,
pay-to-win, and gacha mechanics aimed at children as the gambling-adjacent
practices they are, and disclose odds honestly. Respect the player's time and
money rather than mining both. Inside the studio, crunch is an ethics issue, not
just a labor one — sustained overtime is a planning failure paid for with
people's health, and "passion" is not consent. Represent people and cultures
with care, and consider who your difficulty, accessibility, and content choices
exclude. The hardest gray zones — engagement metrics that reward addiction,
monetization that targets the vulnerable — deserve to be argued in the open, not
shipped by default because they move a KPI.

## Scenarios

**The jump that feels wrong.** A platformer's playtesters keep saying "the
controls feel off" but can't say why. The expert doesn't add features; they
instrument the input. The jump only fires if the button is pressed in the exact
frame the player is grounded — so presses a frame early or late silently fail.
They add input buffering (queue the press for ~6 frames) and coyote time (allow
the jump ~5 frames after leaving a ledge), tune jump arc with separate rise/fall
gravity so it feels snappy, and add a tiny landing squash and a sound. None of
this is "realistic." All of it makes the jump feel correct. The complaint
disappears, and nobody can articulate what changed — which is the point.

**The framerate cliff before cert.** Two weeks from console submission, the game
drops to 22fps in the boss arena. Panic says "lower the resolution." The expert
captures a frame in the GPU profiler and finds the boss spawns 4,000 particle
emitters with overdraw stacking the same pixels dozens of times — the game is
fillrate-bound, not vertex- or CPU-bound. Lowering resolution would help but mask
the real waste. They cap emitter count, switch to a cheaper additive shader, and
add LOD so distant particles drop out. Back to a stable 60. The lesson held: they
profiled before they touched a single knob.

**The monetization meeting.** Publishing pushes to add a loot box with hidden
odds and a "pity timer" that the developer knows will drive whales and frustrate
everyone else. The expert's move is to reframe in retention terms, where the data
actually lives: aggressive randomized monetization spikes ARPU for a quarter and
craters day-30 retention and store rating. They propose direct cosmetic sales and
a battle pass with disclosed, deterministic rewards instead, and insist that if
randomized boxes ship, the odds are published and the mechanic is gated from
minors. The argument that wins isn't only ethical; it's that trust is the asset a
live game is built on, and dark patterns spend it down.

## Related Occupations

A game developer shares the software engineer's discipline around code and
complexity but optimizes for a felt experience inside a hard frame budget rather
than correctness alone. Graphics and engine work overlaps deeply with low-level
performance engineering. Animators and sound engineers are the closest creative
collaborators, owning the motion and audio that become "feel." UX designers
share the obsession with what the user perceives versus what the system does.
Mobile developers share the constraint of weak target hardware. Embedded systems
engineers share the religion of fitting a real-time loop into a fixed budget.

## References

- *Game Programming Patterns* — Robert Nystrom
- *Game Engine Architecture* — Jason Gregory
- *The Art of Game Design: A Book of Lenses* — Jesse Schell
- *A Theory of Fun for Game Design* — Raph Koster
- *Real-Time Rendering* — Akenine-Möller, Haines, Hoffman
