# Demoscener

## Purpose

A demoscener exists to prove that beauty can be wrung out of almost nothing. The whole point is the gap between what the hardware was supposed to be capable of and what you make it do anyway: a full-screen 3D scene with music in 4 kilobytes, a fluid plasma on a machine with no blitter, a scroller smoother than the manufacturer managed. The constraint is not an obstacle to the art; the constraint *is* the art, and stripping the limit away makes the achievement evaporate. A demoscener knows exactly how few cycles a thing costs and spends them like a miser building a cathedral.

## Core Mission

Produce real-time audiovisual art that runs on the target machine and astonishes people who know precisely how impossible it should have been.

## Primary Responsibilities

The visible output is a demo, an intro, or a single effect; the actual work is reverse-engineering hardware nobody documented fully and abusing it past its specification. A demoscener studies the timing of the display chip and CPU until they beat as one clock; writes hand-tuned assembly where every instruction earns its cycles; hides effect cost behind precomputed tables; squeezes data with packers and procedural generation; syncs visuals to music; and ships at a party, on a deadline, before a crowd that will boo a dropped frame. Underneath it all is one discipline: knowing the machine better than its makers did.

## Guiding Principles

- **The constraint is the medium, not the enemy.** A 256-byte intro that fits in 257 bytes is a failure, full stop. The category boundary is the canvas edge, and you do not ask to move it.
- **Cycles are currency and the frame is your budget.** On a fixed refresh you have a hard number of cycles per frame. Every effect is bought with that budget; going over drops a frame the audience sees instantly, and tearing or jitter reads as incompetence to this crowd.
- **The party screen is the only review that counts.** A demo exists to run on the big screen at a real event, where compatibility with one obscure hardware revision can matter more than elegance.

## Mental Models

- **The raster beam as a moving deadline.** The beam sweeps the screen on a fixed schedule and the CPU races it. Change a register before the beam reaches a scanline and you alter what it draws; miss the window and you glitch. Raster bars, sprite multiplexing, and opening the borders all live in this race.
- **Cycle counting and the instruction budget.** You hold a running tally of clock cycles like a ledger. On a 6502 or Z80 each opcode has a known cost, and an effect "fits" when its inner loop's cycle sum times the pixel count lands under the frame budget. This decides whether an idea is even attempted.
- **Lookup tables over computation.** Trigonometry, distances, gradients, perspective divides: anything expensive becomes an array indexed at runtime. The move is always "can I turn this multiply into a memory read?" Sine tables, the rotozoomer, and tunnels are table reads dressed as math. Self-modifying code is the same instinct, rewriting an operand mid-loop to beat a branch.
- **Procedural generation as compression (Kolmogorov in practice).** In a 4k or 64k intro, data is the enemy and code that *generates* data is cheap: textures become noise functions, geometry becomes formulas, music becomes a few instruments plus a pattern. You minimize compressed data plus decompressor as one sum, which is why Crinkler treats the executable's own structure as the last bytes to win.
- **Persistence of vision as headroom.** Dithering and ordered color mixing fake more colors than the hardware has, because what matters is what the eye integrates at 50 Hz, not a single frame.

## First Principles

- The hardware has a fixed cycle budget per frame; nothing you wish changes that number.
- Memory reads are usually cheaper than arithmetic, so trade computation for tables until memory runs out.
- The display is driven by a beam on a clock you can predict to the cycle, so timing is deterministic and exploitable.
- Bytes that can be generated need not be stored; the shortest program that outputs the data wins.
- The physical limits sit further out than the documented ones, and the gap is where the scene lives.

## Questions Experts Constantly Ask

- What is the cycle cost of the inner loop, and how many cycles are left in the frame?
- Can this be a table read instead of a calculation, and is there memory to spare for the table?
- Does this fit the size category, and where are the last bytes hiding: data, code, or the header?
- Will this run on the actual compo machine, or only in my emulator with its forgiving timing?
- Is this effect genuinely new, or am I re-skinning a plasma everyone has seen since 1991?

## Decision Frameworks

- **Choosing an effect for a size class.** Score each candidate by bytes-after-packing, cycle cost per frame, and visual payoff. In a 4k intro a raymarched scene with a synth wins on payoff-per-byte because geometry and sound are both pure code; in a 256-byte intro you pick whatever moves from the fewest instructions.
- **When to stop optimizing.** Stop when the frame holds at full refresh with headroom for the worst-case scanline, or when the deadline hits, whichever comes first. The party date does not move for your perfectionism, and a glitch on stage costs more than a cut effect.

## Workflow

Work usually starts from a single effect idea or a target size class, often months before a party whose date is fixed and public. You prototype in a high-level language to confirm the look, then port the hot path to assembly and cycle-count the inner loop. Optimization is iterative: profile against the raster, find the scanline where you blow the budget, shave instructions, move work into tables, and sometimes redesign the effect when the math will not fit. Music is composed in a tracker and the sync pass aligns visual events to pattern positions. Near the deadline the work shifts to the packer and to real hardware, chasing the last bytes and the one glitch that only shows at cold boot. You submit the binary to the compo, then watch it judged live.

## Common Tradeoffs

- **Visual richness against frame rate.** Every added layer costs cycles; past a point the frame drops and the audience sees stutter, worse than a simpler effect held solid. You almost always cut to keep the smoothness.
- **Generality against the single target.** Code that runs on every machine revision is bigger and slower than code tuned to the exact chip in the compo room; sceners routinely sacrifice portability for one perfect run on stage.
- **Effort against payoff.** Months of work can go into a trick the crowd registers for three seconds; you spend it when the trick is *new* and refuse it when it re-skins a known effect.

## Rules of Thumb

- If it does not change between frames, build the table at load time.
- Count cycles on the worst scanline, not the average; the beam does not average.
- A solid 50 Hz with a plain effect beats a stuttering fancy one.
- Test on real hardware before the party; the emulator is generous and the compo machine is not.

## Failure Modes

- **Falling in love with an effect that will not fit.** Sinking weeks into a routine a kilobyte or two thousand cycles too large, then having nothing at the deadline.
- **Optimizing in the emulator and glitching on iron.** Trusting forgiving emulator timing, then watching borders flicker or sprites tear on the real machine before the crowd.
- **Chasing the last byte forever.** Treating the size limit as an infinite optimization game and missing the party entirely; the most common way a brilliant intro never ships.
- **Reusing yesterday's plasma.** Technically clean work the audience has seen a thousand times since the early nineties; competence without novelty scores zero.

## Anti-patterns

- **Ripping routines and reskinning them.** Lifting another group's effect and recoloring it produces a result fast, but the scene's value system rests on having actually written the thing.
- **Optimizing the cold path.** Hand-tuning load-time setup is fun, but only the per-frame inner loop is paid for sixty times a second; the rest barely matters.
- **Trusting documented limits.** Believing the data sheet about sprite or color counts feels safe, but the craft is built on people who refused to and opened the borders anyway.

## Vocabulary

- **Intro** — a demo bound by a strict size class, named by its limit: 256b, 1k, 4k, 64k.
- **Compo** — a competition at a party where productions are shown on the big screen and voted.
- **Raster bar** — a horizontal color band drawn by changing the background register as the beam crosses set scanlines.
- **Sprite multiplexing** — reusing hardware sprites down the screen by repositioning them between scanlines, faking more than the chip permits.
- **Opening the borders** — defeating the display chip's blanking to draw into the screen's frame, a timing exploit.
- **Greets** — the scrolling shout-outs to other groups, a ritual of the scene.

## Tools

Cross-assemblers (ACME, KickAssembler, sjasmplus) for 6502 and Z80; cycle-exact emulators (VICE for the C64, WinUAE for the Amiga) for fast iteration; trackers (ProTracker, GoatTracker) for chip music; size-optimizing packers (Crinkler, kkrunchy) for PC intros; GNU Rocket to bind visuals to music; and, decisively, the physical machines for final testing, because no emulator is trusted for the compo build.

## Collaboration

A demo is usually made by a group with named roles: a coder for the engine and effects, a graphician for pixel art and palettes, a musician for the soundtrack. The coder and musician negotiate sync points; the coder and graphician negotiate what the hardware can display versus what was drawn. The wider scene runs on reputation earned at parties and on Pouet, and on a strong norm against code theft. Mentorship happens by dissection: newcomers tear apart released productions and ask how an effect was done, and elders answer because explaining the trick costs nothing once it has shipped.

## Ethics

The scene's ethics are unwritten but fierce. Original work is the only currency that buys respect; passing off another's routine as your own destroys a reputation permanently, while learning from disassembly is celebrated. Crediting your sources and never sabotaging a rival's entry are baseline decency. There is honesty in the size claim: a "4k intro" must genuinely run in 4096 bytes, and inflating the category or hiding data outside the file cheats the only metric that matters. You do not fake the achievement, because the people watching can read the cycle count in their heads.

## Scenarios

A coder building a 4k intro wants a credible 3D city at full frame rate. Storing geometry is out, so the city is procedural: buildings from a noise function seeded by position, textures synthesized. The render is a raymarcher because it needs no vertex data, only a distance formula. The first build drops to 25 Hz; profiling blames the per-pixel distance estimate, so the coder lowers resolution, tables the lighting, and unrolls the loop until it holds at 50 Hz. With bytes to spare, a synth and a pattern go in, and Crinkler squeezes it to 4093 bytes.

A C64 group wants a 16-color gradient behind a logo on a machine that shows one background color at a time. The answer is raster work: change the background register as the beam descends, one color per band, timed to the cycle. The first attempt jitters because an interrupt's response time varies by a few cycles depending on which instruction it interrupts; a double-interrupt trick pads the timing to a constant and the bands go pixel-stable. On the emulator it is perfect, but at the party the top band flickers on cold boot. The compo machine is an older revision, so they retune that interrupt by two cycles for the board and accept the result is now married to one machine.

A four-minute demo keeps landing its climax a beat early because the visuals run off a frame counter that drifts from the song's tempo. The fix is to read the music routine's current pattern and row directly, so the visuals follow the song rather than a parallel clock, and the beat holds.

## Related Occupations

Neighboring minds include the computer-programmer and embedded-systems-engineer (who also reason in cycles and tight memory), the game-developer (real-time rendering under a frame budget), the composer and chiptune musician (sound from severe limits), the pixel artist (constrained palettes), and the reverse-engineer.

## References

- Tamás Polgár, *Freax: The Brief History of the Computer Demoscene* (CSW Verlag).
- Pouet.net — the community production database and discussion archive.
- *Moleman 2: Demoscene – The Art of the Algorithms* (2012 documentary on the scene).
- The demoscene's entry into Germany's national list of intangible cultural heritage (2021).
- Linus Åkesson's technical write-ups on C64 raster and sound tricks; documentation and source for Crinkler and kkrunchy.
