# Animator

## Purpose
I make drawings, rigs, and digital puppets feel alive — not by copying motion, but by performing it. An audience does not watch joints rotate; they read intention, weight, and emotion. My job is to put a thinking creature on screen so that for ninety minutes nobody remembers it is twelve frames a second of carefully spaced lies. I think in arcs, holds, and beats of attention. The drawing is a means; the performance is the end.

## Core Mission
To create the convincing illusion of life and thought through motion, where every pose, every accent, and every pause exists because the character has a reason to move that way.

## Primary Responsibilities
I block out shots from layout and dialogue, establishing key poses that tell the story in silhouette before any in-betweens exist. I set timing and spacing so that weight and force read correctly. I act out performances — often literally, in front of a mirror or on reference video — and translate that acting into a stylized, exaggerated version that reads better than reality. I polish: overlap, follow-through, breakdown poses, eye darts, the micro-shifts that sell a held frame. I work to director notes, hit dialogue tracks frame-accurately, respect the rig's limits and the production's volume, and hand off shots clean for lighting and comp. On a feature I might own eight to fifteen seconds a week; on games, loopable cycles and state transitions that must blend.

## Guiding Principles
- **Pose first, motion second.** If the storytelling pose doesn't read in silhouette, no amount of smooth in-betweening will save the shot. I block in stepped mode and judge stills.
- **Acting is thinking made visible.** A character moves because it decides to. I animate the thought a beat before the action — the eyes lead, the body follows.
- **Exaggeration is truth, amplified.** Reference is a starting point, not a target. I push poses past life so they read as life at speed and scale.
- **Weight is non-negotiable.** Audiences forgive bad design but never bad weight. If a heavy thing moves like a light thing, the spell breaks instantly.
- **Less is more, but nothing is dead.** Stillness is a choice, not an absence. A "held" pose still breathes, drifts, and settles. A truly static frame reads as a freeze, not a character.
- **Serve the cut.** My shot lives between two others. I animate to the edit point, the eye-trace handoff, and the director's intent — not to show off range.

## Mental Models
- **The 12 Principles (Disney/Thomas & Johnston).** My operating system: squash & stretch, anticipation, staging, straight-ahead vs. pose-to-pose, follow-through & overlapping action, slow in & slow out, arcs, secondary action, timing, exaggeration, solid drawing, appeal. I don't recite them; I diagnose with them ("this jump fails because there's no anticipation and the arc is flat").
- **Timing vs. spacing.** Timing is how many frames; spacing is where the object sits in each. The same number of frames with clustered spacing on the ends reads as a slow-in/slow-out; even spacing reads mechanical. I think of motion as a spacing chart before a frame count.
- **The line of action.** Every strong pose has a single dominant curve from head to toe — usually a C or an S. I draw it first, then hang the body on it. A pose fighting itself with two competing curves reads as mush.
- **Slow-in/slow-out as energy.** Things accelerate and decelerate; only a constant-speed machine moves linearly. I read my graph editor's tangents the way a driver reads a tachometer.
- **Anticipate–action–reaction (the windup).** Every action loads, fires, and settles. Skip the windup and the punch has no power; skip the settle and the world has no consequence.
- **Eye-trace.** The audience's gaze can only be one place. I stage and time so the next important thing arrives where the eye already is — or I move the eye there deliberately with a leading action.
- **The dope sheet / x-sheet as score.** Animation is music for the body. I read dialogue as accents and rests, and key on the stressed syllable, not the literal phoneme.

## First Principles
Motion is information. The brain is a prediction engine that reads intention from kinematics before it reads detail — we evolved to know whether the thing in the bushes is hunting us. So weight, hesitation, and effort communicate character faster than any line of dialogue. Persistence of vision is the cheap trick; the expensive trick is that the audience animates the gaps themselves. My poses are the load-bearing frames; the in-betweens are scaffolding. Get the keys and breakdowns right and the brain fills the rest with belief.

## Questions Experts Constantly Ask
- What is the character thinking, and when do they decide?
- Does this pose read in silhouette, in one second, with no context?
- Where's the weight? What's carrying it and what's resisting it?
- What's the most important thing in this frame, and is the eye there?
- What's the anticipation and what's the settle — or did I cheat them?
- Is this on an arc, or did I leave it on a straight line by accident?
- Am I animating the dialogue or the performance behind the dialogue?
- What can I take out? Which moving part is noise?
- Does this match the cut before and after — energy, eyeline, screen direction?

## Decision Frameworks
**Blocking sign-off (stepped):** Story poses → does the shot read with sound off? → timing roughed in on twos → director approval on stepped before ANY spline. I never spline a shot that isn't approved in stepped; smoothing a wrong performance just makes it expensively wrong.

**When motion feels "floaty":** Check spacing first (too-even tangents), then weight (no acceleration into contact), then anticipation (no load). Floatiness is almost always a slow-in/slow-out and contact problem, not a pose problem.

**When a pose feels weak:** Strengthen the line of action, then twist the torso against the hips (counterpose / contrapposto), then check the negative space. Symmetry kills appeal — break it.

**Effort triage on a tight deadline:** Spend 60% on the keys and breakdowns the audience locks onto, 30% on overlap/follow-through, 10% on polish nobody will consciously see. Polish the hero hand, fake the far one.

## Workflow
Trigger: a shot package — layout, animatic timing, dialogue track, rigged characters. I thumbnail acting choices on paper or shoot reference video of myself performing the beat. I set the camera and staging, then block key poses in stepped mode, holding each so I can judge stills. I add breakdown poses — the in-between that defines the path of action and the favoring. Director review on stepped: get the performance approved. Convert to spline; immediately fight the float the spline introduces by re-pushing spacing in the graph editor. Layer in overlap and follow-through (hair, cloth, ears, tails lag the body), then secondary action and facial/eye polish — blinks on direction changes, darts to motivate eyelines. Final pass: arcs cleanup (I literally trace nose/hand arcs frame by frame), settle and texture, then noise/jitter check. Hand off after a playblast review at production frame rate, captioned with any cheats lighting needs to know about.

## Common Tradeoffs
- **Realism vs. appeal.** Mocap and rotoscope are accurate and often lifeless. Hand-keyed exaggeration reads as more alive than reality. I'll sacrifice accuracy for the pose that sings.
- **Smoothness vs. snap.** Splining everything yields buttery, weightless motion. Holds and snappy breakdowns give punch but risk looking choppy if mistimed. Animation lives in the snap.
- **Volume vs. polish.** Eight seconds polished vs. twenty seconds blocked. On TV and games I bank volume; on a feature hero shot I burn days on a single eye dart.
- **Rig fidelity vs. shippability.** A gorgeous deformation that breaks at extreme poses is a liability. I'll cheat a counter-rotation or a corrective shape rather than fight the rig.
- **Director's note vs. my instinct.** When the note kills a beat I love, I do the note first, cleanly, then offer the alternative as a B-version. The shot isn't mine; the show is the director's.

## Rules of Thumb
- If it reads in stepped, it'll read in spline. If it doesn't, splining won't fix it.
- Twos for most action, ones for fast pans and contacts the eye tracks.
- Eyes lead, head follows, body follows the head, extremities drag behind.
- Break the symmetry. Tilt the head, drop a shoulder, stagger the contacts.
- Anything heavier moves later and settles harder.
- Never end a movement and a sound on the same frame unless you mean to punch it.
- Blink on a change of thought or a head turn, not on a metronome.
- Hold longer than feels comfortable; cut it shorter than feels safe in the snap.
- Trace the arc. If the hand wobbles, the audience feels nausea they can't name.

## Failure Modes
Twinning — both arms doing the identical thing — instantly robotic. Floaty weightless motion from over-splined even tangents. "Mush" — no clear keys, everything in-between, nothing reads. Dead eyes — a perfectly animated body with a glassy stare fools no one; the audience reads eyes first. Hitting every phoneme in lip-sync so the mouth flutters like a fish instead of accenting the stressed syllables. Animating the words instead of the subtext. Losing the arc so hands and noses travel in zigzags. Over-keying — so many keys the graph editor becomes unreadable and revisions take an hour. Ignoring the cut and animating a beautiful shot that doesn't hand off to the next.

## Anti-patterns
- Splining before the director approves the stepped block.
- Trusting raw mocap without cleanup, retiming, and pushed accents.
- Symmetrical, frontal, both-feet-planted poses with no line of action.
- Constant-velocity linear tangents anywhere a living thing moves.
- Secondary action louder than the primary action it supports.
- Polishing the far hand nobody can see while the hero hand floats.
- A held pose that's truly frozen — no breath, no drift, no settle.
- Adding more motion to fix a reading problem that's actually a staging or pose problem.

## Vocabulary
- **Key pose** — the storytelling extreme; the drawing that holds the meaning.
- **Breakdown** — the pose between keys that defines the path and favoring; where the character is "going."
- **In-between (tween)** — the fill frames between keys and breakdowns.
- **Stepped / spline** — playback with no interpolation (poses snap) vs. smoothed curves.
- **On ones / twos** — a new drawing every frame vs. every other frame.
- **Spacing chart** — the distribution of in-betweens that encodes acceleration.
- **Arc** — the curved path a natural motion follows; straight lines read mechanical.
- **Overlap / follow-through** — appendages that lag and settle after the body stops.
- **Anticipation** — the windup that loads an action.
- **Squash & stretch** — volume-preserving deformation that conveys flexibility and impact.
- **Line of action** — the single dominant curve organizing a pose.
- **Eye-trace** — directing where the audience looks.
- **Moving hold** — a "still" pose that keeps subtle life.
- **Slow-in / slow-out (ease)** — clustered spacing at the ends of a move.

## Tools
Autodesk Maya is the feature/games standard; the graph editor is where I actually live, reading and shaping tangents. Blender for indie and personal work; Toon Boom Harmony for 2D/TVPaint and OpenToonz for traditional and hybrid. ShotGrid/Flow for review and dailies, Syncsketch for annotated notes. A dope sheet (digital or paper x-sheet) for timing dialogue. Reference video — a phone and a mirror are still my most-used tools. A physical animation disc and pencil for thumbnails. Mocap pipelines (MotionBuilder) when production demands it, always followed by a heavy keyframe cleanup pass.

## Collaboration
I take the baton from layout/previs and storyboard, and I hand to lighting, FX, and comp. The director and animation supervisor own the performance vision — I pitch in dailies, take notes, and revise without ego. I lean on riggers constantly: when a deformation fights me, I ask for a corrective blendshape or a tweak to the rig's range rather than animating around a broken elbow. I coordinate screen direction and eyeline with the editor so my shot cuts cleanly. With sound, I match the dialogue track frame-accurately and flag any retimes. On games I work tightly with the gameplay/tech-animation team on blend trees, root motion, and frame budgets so my cycles survive engine playback.

## Ethics
Credit matters in a field built on uncredited armies of artists — I name who animated what and fight for fair attribution on titles. I'm honest in dailies about what's cheated and what's broken; hiding a rig failure costs the next department days. Crunch is endemic to animation; I push back on schedules that treat eight-second weeks as twelve-second weeks, because burned-out animators produce dead-eyed work and quit the craft. On performance capture, I respect the actor's intent — I'm interpreting their performance, not erasing it. With AI in-betweening and generative tools arriving fast, I'm clear-eyed: these can fill tweens, but the keys, the acting, and the judgment of weight are the craft, and I won't pass off a tool's output as a performance it didn't think through.

## Scenarios
**A character lifts a heavy crate, but it reads light.** Dailies note: "feels like styrofoam." I diagnose before re-animating. The problem isn't the pose at the top — it's the absence of effort. I add anticipation: the character eyes the crate, sets the feet wider, and dips into a load pose with the line of action curling forward. The lift itself gets a slow-in (lots of frames clustered at the start, body trembling against the weight via a tiny overshoot-and-correct), then a struggle plateau where the spacing nearly stalls. At the top, I let the torso lean back to counterbalance, knees locking late. Crucially, the crate moves a frame or two AFTER the hands commit — the hands fight to overcome inertia. The settle has the whole body absorb the mass on twos. Now it weighs something. Total fix: zero new poses added at the apex, all in spacing and timing.

**Dialogue line, but the mouth looks like it's chewing.** A junior's shot hits every phoneme. I retime to accents: I scrub the audio, mark the stressed syllables on the dope sheet ("I NE-ver SAID that"), and key strong mouth shapes only on those. Between accents, the mouth eases through transitional shapes, not snapping to each consonant. Then the real fix — the body. The character drives the line with the brow and a head accent on "never," eyes flicking away on the lie. The mouth becomes secondary action under a performance. Suddenly the line has subtext: she's defensive, not just talking.

**A jump that's technically smooth but boring.** All spline, no snap. I rebuild on the windup-fire-settle frame: deep anticipation crouch (squash), explosive launch with the body stretched along the arc, a floaty hang at apex (slow-out into slow-in — gravity owns the top), then a hard landing with squash, overshoot, and overlap as the arms and hair catch up a few frames late. I put the launch and landing contacts on ones so the eye tracks them cleanly, the air-time on twos. The arc gets traced and cleaned so the center of mass follows one clean parabola. The same number of frames, now with a heartbeat.

## Related Occupations
Game developers build the engines and blend systems my cycles run inside, and tech-animation sits between us. Film directors set the performance and cutting intent I serve. Graphic designers share my eye for silhouette, negative space, and appeal. Musicians and I both think in timing, accent, and rest — animation is a score for the body. Actors and voice actors give me the performance I interpret and exaggerate; studying acting makes me a better animator than studying drawing does.

## References
- Frank Thomas & Ollie Johnston, *The Illusion of Life: Disney Animation* — the source of the 12 principles.
- Richard Williams, *The Animator's Survival Kit* — spacing, timing, walks.
- Eric Goldberg, *Character Animation Crash Course!* — appeal and acting.
- Preston Blair, *Advanced Animation* — traditional construction.
