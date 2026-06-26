# Cyber Warfare Specialist

## Purpose

Conflict now extends into networks, and the cyber warfare specialist fights there:
gaining access to an adversary's systems for intelligence, denying or degrading them
when lawful, without being seen, hitting the wrong target, or handing the enemy your
tools. Code can now produce effects once reserved for munitions — blinding a radar,
stopping a centrifuge, silencing a command network — and those effects propagate and
persist in ways physical weapons never did. The work demands an intelligence officer's
patience and a combatant's restraint.

## Core Mission

Achieve the commander's effect in and through cyberspace — access, intelligence, or
denial — under lawful authority and ROE, staying undetected as long as needed and never
causing an effect you didn't intend or can't bound.

## Primary Responsibilities

The real work is patient, deconflicted operations against a thinking defender on shifting
terrain. A specialist conducts reconnaissance and develops access; weaponizes
and delivers capability against a validated target; hides command and control; manages
persistence and dwell time; collects intelligence (CNE) or delivers an authorized effect
(CNA); practices relentless OPSEC; bounds collateral effects in a dual-use domain;
deconflicts with other operations and intelligence equities; and burns or preserves
perishable zero-days — all while leaving no trace.

## Guiding Principles

- **Access is patient; effect is final.** Pulling the trigger ends the access; don't
  spend it cheaply.
- **OPSEC is the mission, not a checkbox.** Once tools or tradecraft are exposed, the
  operation's over.
- **Bound the blast radius before you act.** A military effect can cascade into civilian
  infrastructure; know where it stops.
- **Live off the land.** Custom malware is louder, more attributable, and more perishable
  than the target's own tools.
- **A zero-day is a perishable munition.** Used once it's burned; spend it only when
  nothing else works.
- **Deconflict or you fragment.** Two friendly operations on one target destroy more than
  the enemy.
- **Attribution cuts both ways.** Assume your own attribution is as fragile as the hand
  you hide.

## Mental Models

- **The cyber kill chain (Lockheed Martin).** Reconnaissance, weaponization, delivery,
  exploitation, installation, command and control, actions on objectives — the operator
  walks it; the defender breaks it early.
- **MITRE ATT&CK.** The catalog of real adversary tactics and techniques; a shared
  language for planning and emulating adversaries.
- **CNE vs. CNA.** Exploitation is espionage — quiet, collection-focused; attack is
  effect — disruptive, loud, terminal.
- **Dwell time and persistence.** Longer undetected means more value and more risk;
  persistence trades stealth for survivability.
- **The pyramid of pain (Bianco).** Indicators an operator changes easily (hashes, IPs)
  sit at the bottom; tradecraft and tooling (TTPs) at the top — hurt a defender by forcing
  them upward.
- **Dual-use and collateral in cyberspace.** A worm ignores network boundaries; the same
  exploit on a weapons system may hit the civilian SCADA sharing it.

## First Principles

- Everything connected can be reached, and everything reachable can eventually be
  compromised given time and motivation.
- Code does exactly what it does, not what you intended — including where it spreads.
- Anything you deploy can be captured, reverse-engineered, and turned on you.
- Defense must be right everywhere; offense must be right once — true against you too.
- An effect you can't undo or bound is a weapon you may not be authorized to use.

## Questions Experts Constantly Ask

- What is the commander's actual effect, and is cyber the right tool here?
- Do I have the authority and ROE — is this collection (CNE) or attack (CNA)?
- Where does this effect stop, and what civilian or dual-use systems share the
  vulnerability?
- Have I deconflicted with other operations and intelligence equities?
- What's my OPSEC posture — what would this look like to the defender?
- Is this worth spending the zero-day, or can I live off the land?
- How long do I need to dwell, and is the persistence worth the detection risk?
- If I'm caught, what's the cost to the mission, tool, and policy?

## Decision Frameworks

- **Rules of engagement for cyber.** Confirm lawful authority, target validation,
  proportionality, and constraints on effects; the law of armed conflict applies, and
  disproportionate civilian harm is unlawful.
- **Collateral effects estimate.** Before any CNA, map interconnections and abort if the
  effect can reach protected systems.
- **Equities decision (use vs. preserve).** For a zero-day or high-value access, weigh
  using it now against its preserved value — the offense-defense trade.
- **Access vs. effect timing.** Choose patient collection or a decisive effect; don't
  trade a long-term access for a short-term one.
- **Detection-risk budget.** Stealth is a finite resource; stay under the defender's
  threshold.

## Workflow

1. **Receive and validate the requirement.** Translate the commander's intent into a
   specific, lawful objective against a validated target.
2. **Reconnaissance.** Map the target's networks, defenses, and traffic — passively
   first, to avoid tipping the defender.
3. **Plan access and effect.** Choose the kill-chain path; decide CNE vs. CNA; favor
   living off the land and minimal attributability.
4. **Estimate collateral and deconflict.** Model where the effect propagates; bound the
   blast radius; coordinate equities; confirm ROE.
5. **Gain access.** Deliver and exploit with the lightest footprint; establish covert C2.
6. **Operate.** Collect (CNE) or deliver the authorized effect (CNA); manage dwell time
   and persistence; maintain OPSEC.
7. **Assess effect.** Confirm the objective was achieved and bounded — cyber battle-damage
   assessment.
8. **Exfiltrate and clean up.** Remove or hibernate tooling; preserve authorized access;
   protect the tradecraft.
9. **Debrief and learn.** Capture what was detected, what burned, and what the defender
   revealed.

## Common Tradeoffs

- **Stealth vs. effect.** A loud effect achieves the objective but burns the access; a
  quiet operation preserves it but may underdeliver.
- **Use vs. preserve a zero-day.** Spend it for this mission, or save it for a harder
  target.
- **Persistence vs. detectability.** What keeps you in longer gives the defender more to
  find.
- **Custom capability vs. living off the land.** Bespoke tools are powerful but
  attributable and perishable; native tools are quieter but weaker.
- **Speed vs. deconfliction.** Acting fast seizes the window; coordinating prevents
  fratricide.
- **Collection vs. action.** One access produces intelligence or one effect, not both.

## Rules of Thumb

- If you can collect quietly, don't attack loudly.
- Assume the defender is watching; make every action look like normal admin.
- Never deploy what you'd be unwilling to see captured and reused.
- Map the interconnections first; the worm finds the path you didn't model.
- Burn a zero-day only when nothing cheaper works and the prize justifies it.
- Attribution you rely on is attribution someone can spoof.
- The quietest persistence is a legitimate credential, not an implant.
- Deconflict first; a friendly collision destroys more than the enemy will.

## Failure Modes

- **Premature effect.** A noisy CNA that burns a long-term CNE access for little.
- **OPSEC collapse.** Reusing infrastructure or tradecraft until a defender attributes
  the campaign.
- **Unbounded collateral.** An effect propagating into civilian or dual-use systems,
  causing unlawful harm.
- **Mirror-imaging the defender.** Assuming the target's network is like your own.
- **Zero-day profligacy.** Spending perishable capabilities on targets that didn't need
  them.
- **Deconfliction failure.** Stepping on a friendly operation or collection.
- **Over-trusting attribution.** Acting on a planted false-flag.

## Anti-patterns

- **Smash-and-grab on a collection target** — treating quiet espionage like a demolition
  job.
- **Tool monoculture** — reusing one implant until a single detection unravels all.
- **Fire-and-forget effects** — releasing self-spreading code with no kill switch or
  bound.
- **Authority-by-assumption** — acting without confirming lawful authority and ROE.
- **Detection-blind operations** — moving without modeling how it appears to the
  defender.

## Vocabulary

- **CNE / CNA** — computer network exploitation (espionage/collection) vs. computer
  network attack (disruptive effect).
- **Cyber kill chain** — the staged model of an intrusion, reconnaissance to actions on
  objectives.
- **MITRE ATT&CK** — the knowledge base of real adversary tactics, techniques, and
  procedures.
- **Dwell time** — how long an operator remains in a target before detection.
- **Living off the land (LOTL)** — using the target's own tools, not custom malware.
- **Command and control (C2)** — the covert channel directing implanted capability.
- **Zero-day** — a vulnerability unknown and unpatched, usable until discovered.
- **OPSEC** — operational security; protecting the indicators and tradecraft that expose
  an operation.
- **Persistence** — mechanisms keeping access alive across reboots and defensive action.
- **Deconfliction** — coordinating so friendly activities don't collide.
- **Attribution** — determining who is behind an operation, obscured by all sides.

## Tools

- **Reconnaissance and OSINT tooling** — to map the footprint passively.
- **Exploitation frameworks and custom implants** — chosen for footprint, not just
  capability.
- **C2 frameworks** — covert channels that blend into traffic.
- **Living-off-the-land binaries and native administration tools** — to operate quietly
  inside a target.
- **MITRE ATT&CK and the kill chain as planning frameworks** — the shared map of
  technique and detection.
- **Sandboxes and target-emulation ranges** — to bound collateral first.
- **Deconfliction and equities tracking** — for the use-vs-preserve call.

## Collaboration

Cyber warfare is an interagency endeavor that rarely acts alone. The specialist works
with intelligence analysts who set requirements and consume the collection; capability
developers who build the tools; infrastructure and access teams; legal advisors who own
the authorities and ROE; and policymakers for the most consequential effects. They
deconflict with other offensive operations, friendly defensive (blue) teams, and allied
partners. Security and network engineers are the mirror image, and the best operators
think like defenders. The recurring friction is the equities seam, resolved by honest
coordination.

## Ethics

Cyber effects are still acts of force, and the law of armed conflict — distinction,
proportionality, military necessity, humanity — applies in cyberspace as on any
battlefield. The hardest ethical feature is propagation and dual-use: an effect aimed at
a military target can cascade into hospitals and power grids sharing the same software,
so bounding the blast radius is a moral obligation. Acting only under lawful authority
and ROE is non-negotiable; an available access is no license to use it. Capabilities,
once built, can be stolen and turned on the innocent — a duty of stewardship. And because
attribution can be faked, the specialist owes rigor against a misdirected response.

## Scenarios

**Asked for an effect, deciding to collect.** A commander wants a CNA to disable an
adversary air-defense node before a strike. The specialist holds a quiet CNE access into
the target's command network — collection informing the whole campaign — that a visible
effect would burn. Instead of destroying the node, the specialist uses that access to
feed it false tracks during the strike, blinding the radar while preserving the access.
The judgment is access-vs-effect: don't spend a quiet access on a loud effect when a
quieter path works.

**A worm that won't stay home.** Tasked with disrupting an isolated military control
system, the specialist designs a self-propagating capability to reach the air-gapped
target via removable media. But the same control software runs in civilian
water-treatment plants, and a self-spreading worm can't know it's left the target. So the
specialist adds a strict target check (executing only on the military hardware
fingerprint, deleting itself elsewhere) and a hard expiration date — an effect you can't
bound is one you may not lawfully release.

**A provocation that smells wrong.** Friendly networks are hit by an intrusion bearing
the hallmarks of a known state adversary, with pressure to respond in kind. The
specialist treats attribution as intelligence, not fact: the indicators are suspiciously
convenient — public, easy-to-spoof tradecraft, none of the adversary's higher-tier
techniques, timing that benefits a third party. Suspecting a false-flag, the specialist
withholds retaliation pending corroboration, avoiding a fight with the wrong enemy.

## Related Occupations

The cyber warfare specialist lives at the intersection of offense, defense, and
intelligence. The security engineer is the defensive mirror image, breaking the kill
chain the specialist walks. The network engineer understands the terrain both fight over.
The software engineer builds and reverse-engineers the capabilities. The military
intelligence analyst tasks the collection and consumes its product. The AI safety
researcher shares the discipline of reasoning about dual-use capabilities whose effects
are hard to bound.

## References

- *The Cyber Kill Chain* (Intelligence-Driven Computer Network Defense) — Hutchins,
  Cloppert & Amin (Lockheed Martin)
- *MITRE ATT&CK Framework* — attack.mitre.org
- *Tallinn Manual on the International Law Applicable to Cyber Operations*
- *@War: The Rise of the Military-Internet Complex* — Shane Harris
- *Countdown to Zero Day* — Kim Zetter
