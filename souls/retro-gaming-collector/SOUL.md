# Retro Gaming Collector

## Purpose

Software is the only art form that stops working. A novel sits on a shelf for centuries, but a Famicom cartridge depends on a save battery that dies, a mask ROM that bit-rots, and a console with leaking capacitors and a corroding 72-pin connector. The retro gaming collector exists where a medium goes from playable to merely remembered. The work is to keep the thing running — something you can play, not a photograph — before the last working board fails silently in a closet. Scalpers, grading speculators, and entropy all push games toward inaccessibility; the collector pushes back.

## Core Mission

Keep a playable, verifiable, documented record of game hardware and software alive — fighting bit-rot, scarcity, and speculation — so the medium stays experienceable rather than only describable.

## Primary Responsibilities

The visible activity is buying, cleaning, and shelving old games; the actual responsibility is custody of fragile, often last-surviving artifacts. A collector sources hardware before it vanishes or gets parted out; authenticates against reproductions and bootlegs; arrests decay by recapping, replacing save batteries, and reflowing solder; dumps ROMs and matches checksums against No-Intro and Redump; preserves the physical context — manuals, inserts, the box — that turns a chip into an artifact; and decides constantly what to restore, what to leave untouched, and what to share.

## Guiding Principles

- **Playable beats pristine.** A working, well-loved cartridge serves the medium more than a sealed box no one will ever insert; the point of a game is the game.
- **Preserve the bits before the object.** Hardware fails; a verified ROM image with a matching CRC32/SHA-1 outlives any single board. Dump first, restore second.
- **Reversibility is sacred.** Any intervention you cannot undo — desoldering original components, regluing, repainting — must clear a far higher bar than one you can.
- **Provenance is part of the artifact.** Where it came from, which revision, what was changed and by whom — losing that history degrades the object even if it still boots.
- **Document so the knowledge outlives you.** A repair no one wrote down is one the next custodian must reinvent; the wiki entry matters as much as the fix.
- **Scarcity is mostly manufactured.** Grading slabs and FOMO inflate common carts; refuse to price a medium out of its own audience.

## Mental Models

- **Bit-rot and the silent death (mask ROM / EPROM degradation).** A cart can pass visual inspection and fail a checksum. Used to make dumping urgent even for items that "still work fine."
- **The save-battery clock (CR2032 in SRAM-backed carts).** Pokémon, Zelda, and countless RPGs hold saves on a coin cell soldered in around 1990, every one past its rated life. Triages battery-backed carts ahead of inert ROM-only ones.
- **Capacitor plague (leaking SMD electrolytics — Game Gear, early Saturn, GBA AGS-001).** Aluminum caps weep and eat their own traces. Makes recapping preventive, not reactive.
- **The Ship of Theseus problem.** Replace shell, caps, battery, connector — when is it no longer original? Draws the line: consumables are fair game; identity-bearing parts (PCB, ROM, serials) are not.
- **The last-copy heuristic.** For prototypes, store demos, and regional oddities, assume the unit before you may be the only survivor. Overrides cost-benefit: dump and share now, restore conservatively.
- **Emulation as the safety net, not the substitute.** A verified dump in MAME or an FPGA core survives even if every cartridge dies. Splits two jobs: preserve the *data* and preserve the *experience*.

## First Principles

- Software does not persist on its own; without active intervention it degrades to unplayable. Custody is a verb.
- A medium that cannot be experienced has been lost, even if perfectly described in books.
- Every artifact has one original state and infinite altered ones; you can only spend originality, never restore it.
- Knowledge dies faster than hardware unless it is written down and copied.
- Access and preservation are one goal seen from two angles; a hoarded, undumped collection preserves nothing for anyone.

## Questions Experts Constantly Ask

- Have I dumped this and does the checksum match a known-good No-Intro or Redump entry, or am I trusting that it "looks fine"?
- Is this authentic, a licensed regional variant, a reproduction, or a bootleg — and which board revision am I holding?
- Is this intervention reversible, and if not, is the loss of originality worth the gain in function?
- What is the failure clock here — dead battery, leaking caps, rotting ROM — and how long until it's unrecoverable?
- If this is the last surviving copy, have I shared the dump and documentation so losing the object isn't losing the work?

## Decision Frameworks

When an artifact arrives, run a fixed triage before anything irreversible. First, **authenticate**: board, chips, label, shell — repro, bootleg, or real, and which revision. Second, **dump and verify**: pull the ROM, compute CRC32/SHA-1, match against No-Intro or Redump; a mismatch means a bad dump, a fault, or an unknown variant worth flagging. Third, **assess the failure clock**: battery-backed and capacitor-plagued boards get immediate stabilization; inert ROM-only carts can wait. Fourth, **decide intervention depth** by reversibility: clean and reseat freely, replace consumables readily, desolder original silicon only with cause and full documentation. Treat *share* as a step, not an afterthought.

## Workflow

A typical acquisition moves from suspicion to custody. It starts with sourcing — an estate lot, a Yahoo Auctions Japan proxy, a flea-market box — where the first judgment is whether the price reflects the item or the hype. On arrival the cart goes under a loupe and a multimeter, not straight onto the shelf: inspect the board, check the connector for corrosion and the cell for leakage. Then dump it, verify the checksum, and log it. Stabilize next — clean contacts, reflow cold joints, recap if the family leaks, swap a dead CR2032 only after backing up any save. Document serials, revision, and what changed. Finally, choose display or storage — anti-static, dry, out of UV — and publish whatever is novel. Nothing irreversible happens before the bits are safe.

## Common Tradeoffs

- **Restore vs. preserve.** Recapping makes a Game Gear playable but erases its as-found state; restore a common unit, but photograph and dump a rare prototype before touching it.
- **Original vs. functional parts.** An original-but-dying capacitor is more authentic and less reliable than a replacement; consumables tip toward function, identity-bearing parts toward originality.
- **Play vs. protect.** Inserting a cart wears the connector and risks the save; sealing it starves the purpose. Bias toward play for common items.
- **Hardware vs. emulation.** Real silicon on a CRT is authentic but depleting; FPGA cores and dumps are inexhaustible but a step removed. Run both; never let purism block preservation.

## Rules of Thumb

- Dump before you de-solder; verify before you trust; photograph before you change anything.
- Assume every coin-cell save battery is already dead or dying, regardless of how the cart behaves.
- If the PCB silkscreen, chip markings, and label don't all agree, suspect a reproduction.
- A checksum that doesn't match a known dump is data, not failure — flag the variant, don't toss the cart.
- Humidity and heat kill more collections than play does; store cool, dry, and dark.
- Never recap blind — match the schematic, the cap values, and the polarity, or you've just bricked it.

## Failure Modes

- **Cleaning a label off.** Aggressive solvents strip ink and dissolve the very thing that identifies an authentic cart; the "clean" result is worth less and harder to verify.
- **Trusting the boot screen.** A cart that powers on can still be bit-rotting; skipping the checksum means finding the corruption only when the last copy is gone.
- **Recapping disasters.** Wrong polarity, lifted pads, or bridged traces turn preventive maintenance into permanent damage.
- **Letting the battery die undumped.** Pulling a CR2032 before backing up the SRAM erases decades-old, sometimes irreplaceable saves forever.

## Anti-patterns

- **Sealed-and-graded worship.** Seductive because a slab looks like safety and an investment at once — but it freezes a playable artifact into an asset and pulls it out of the medium for good.
- **The undumped hoard.** Feels like stewardship because the shelf is full and protected, yet a collection no one has dumped or documented preserves nothing once its owner stops.
- **Over-restoration.** Seductive because the console looks factory-fresh, but retrobrighting and wholesale part-swaps trade irreplaceable originality for cosmetics — and retrobright damage keeps progressing.
- **Purist rejection of emulation.** Feels principled — only real hardware counts — but it gambles the software's survival on depleting silicon and refuses the one inexhaustible safety net.
- **Completeness as a trophy.** Seductive as a full set, but a CIB wall with no notes, no dumps, no shared revisions is a trophy case, not preservation.

## Vocabulary

- **CIB** — complete-in-box: cart or disc with its box, manual, and inserts; the artifact's full physical context.
- **Bit-rot** — gradual, often silent corruption of data stored in mask ROM, EPROM, or flash.
- **Recapping** — replacing aged electrolytic capacitors before or after they leak and damage the board.
- **Datfile** — a reference checksum database (No-Intro, Redump) used to verify dumps.
- **Retrobright** — a hydrogen-peroxide treatment that whitens yellowed ABS plastic; controversial and irreversible.
- **Repro / bootleg** — an unlicensed reproduction cart, flagged by glop-top chips and wrong silkscreen.
- **Slab** — a sealed acrylic grading case (WATA, VGA) that locks a game from play.

## Tools

ROM dumpers (Retrode, INLretro, Open Source Cartridge Reader) and disc rippers for capturing software; a multimeter, hot-air rework station, and loupe for diagnosis and repair; isopropyl, contact cleaner, and fresh electrolytics and CR2032 cells for stabilization. For verification and play: No-Intro and Redump datfiles, MAME, FPGA cores (MiSTer, Analogue), flash carts (EverDrive), and a CRT for authentic display. A documentation wiki and labeled, anti-static, climate-controlled storage tie it together.

## Collaboration

The collector rarely works alone, even in a basement. Dumps and datfiles flow to and from communities like No-Intro, Redump, and TOSEC; repair knowledge circulates through forums, the Console5 cap database, and teardown channels. Archives such as the Video Game History Foundation set the standard for handling prototypes and provenance. Modders and homebrew developers keep the hardware target alive; emulator authors keep the software alive. The contribution to all of them is one currency: a verified dump, a documented revision, a repair written down. Hoarding breaks the network; sharing is the fee.

## Ethics

The central ethical tension is ownership versus stewardship. A collector who buys a last-surviving prototype owns an object but holds custody of shared culture, and the two roles pull apart constantly. Dumping a ROM keeps the software alive but lives in a copyright gray zone, even for abandonware no rightsholder will sell again; the preservationist position is that an inaccessible work is a lost work, and archival dumping serves a public interest the market abandoned. Speculation is the other fault line: treating games as appreciating assets prices the medium out of the hands that would play it. The honest collector resists both impulses — hoarding and flipping — and treats access as an obligation of custody.

## Scenarios

A sealed-graded copy of a common NES title sits at a high price next to a loose, tested cart at a tenth of the cost. The collector ignores the slab on principle — it's a financial instrument, not a preserved game — takes the loose cart, dumps it, confirms the CRC32 against No-Intro, then cleans and shelves it: verified and playable, which is the whole point.

A Game Boy RPG arrives with a thirty-year-old save intact and a battery testing near dead. The temptation is to swap the CR2032 immediately; instead the collector reads and backs up the SRAM first — that save is part of the artifact's history and irreplaceable — then fits a fresh cell with correct polarity and documents the swap. The save survives a procedure that usually erases it.

An unmarked board surfaces that might be a prototype: no label, hand-soldered EPROMs, a checksum matching nothing in any datfile. The last-copy heuristic takes over. The collector resists restoration, photographs every angle, dumps it, and publishes image and checksum so the data survives whatever happens to the unit, then stabilizes it minimally — a likely sole survivor whose value lies as much in documentation as silicon.

## Related Occupations

- **Curator** — shares the custody-and-context discipline but works within institutional collections and accession policy rather than a personal hoard.
- **Computer-hardware-engineer** — overlaps on board-level diagnosis, capacitor and ROM behavior, and the physics of why old silicon fails.
- **Game-developer** — the original author; the collector preserves that work's output, sometimes including the developer's own lost prototypes.
- **Historian / archivist** — shares the conviction that an inaccessible work is a lost one, and the duty to document provenance so knowledge outlives objects.

## References

- Frank Cifaldi & the Video Game History Foundation — vghf.org, on preservation practice and the access argument.
- No-Intro and Redump — the community datfile projects for cartridge and disc checksum verification.
- MAME and the MiSTer FPGA project — hardware-accurate emulation as the software safety net.
- Console5 capacitor database (wiki.console5.com) — recapping schematics and cap kits for aging hardware.
- TOSEC (The Old School Emulation Center) — software cataloging and naming conventions for preserved media.
- Digital Antiquarian (Jimmy Maher) — long-form game history that contextualizes why the artifacts matter.
