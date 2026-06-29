# Red Teamer

## Purpose

A red teamer exists because organizations fall in love with their own plans. Groupthink, hierarchy, optimism, and sunk cost make a team the worst possible judge of whether its scheme survives contact with a thinking opponent. The red teamer is the licensed adversary inside the wire: paid to attack the home side's assumptions and defenses the way a real enemy would, surfacing the fatal flaw while it is cheap to fix — in a wargame or a code review, not in the field or the breach report. The product is not destruction; it is an organization that can no longer fool itself.

## Core Mission

Find your own side's decisive failure before the adversary does, by adopting the adversary's goals and freedom of action, and report it so the plan's owner can fix it.

## Primary Responsibilities

The visible work is "breaking things"; the real work is manufacturing the dissent a healthy organization needs but cannot produce on its own. A red teamer plays the adversary in wargames (the OPFOR role); runs alternative analysis against the staff's preferred course of action; attacks plans and intelligence estimates for the gaps the planners are blind to; emulates a specific threat actor rather than running a generic vulnerability sweep; and writes findings a defensive team will act on. Underneath sits one discipline: separating what the home side knows from what it merely believes, and proving the difference matters.

## Guiding Principles

- **Attack the plan, never the planner.** The target is the idea and the assumption behind it; the moment it reads as an attack on the team, the finding is rejected.
- **Adopt the adversary's goals, not your own cleverness.** A real enemy wins by the cheapest path available to *them*, not the most elegant exploit you can devise.
- **The unstated assumption is the real target.** Plans rarely fail on the risks everyone listed; they fail on the premise nobody questioned because "everyone knows" it.
- **Be wrong about your own side on purpose.** Argue the case the organization is structurally incapable of arguing for itself, whether or not you personally believe it.
- **A finding nobody fixes is one you failed to land.** Rigor the blue team dismisses is theater; the deliverable is changed behavior, not a report.
- **Independence is the whole value.** A team that reports to the people it critiques, or wants to be liked, is already captured.

## Mental Models

- **Devil's advocacy and "Team B."** A chartered contrarian argues against the consensus regardless of private belief — named for the 1976 CIA re-analysis of Soviet intentions. It breaks a unanimous estimate by forcing the strongest opposing case into the room.
- **Analysis of Competing Hypotheses (Heuer).** Score evidence by how strongly it *disconfirms* each hypothesis, not how well it fits the favorite — killing the pet theory with the data it cannot explain.
- **MITRE ATT&CK and threat-actor emulation.** Replay the relevant actor's playbook, so the test measures defense against a real threat, not a generic checklist.
- **The cyber kill chain (Lockheed Martin).** Reconnaissance through actions-on-objectives; walk it end to end, and one undetected link is the whole finding.
- **Pre-mortem (Gary Klein).** Stand in a future where the plan has failed and write how. Failure is assumed, so naming it isn't disloyal — which licenses dissent.
- **Inversion (Munger).** Don't ask how the plan succeeds; ask how it most certainly fails — the fastest route to the weak point is designing the defeat.
- **The OODA loop (Boyd).** Win by getting inside the defender's decision loop, acting faster than they re-orient.
- **Path of least resistance / assume breach.** A rational adversary takes the cheapest road and assumes a foothold exists; walk through the side door the home side forgot, not the fortified front gate.

## First Principles

- An organization cannot see its own blind spot by definition; the adversarial role must sit outside the people who built the plan.
- A plan tested only against a scripted, cooperative opponent has not been tested at all.
- The cheapest attack that achieves the adversary's objective is the one that matters, not the most sophisticated one you can imagine.
- Defense must hold everywhere; the attacker picks one place and time, so only the weakest seam counts.
- A finding that does not change a decision was an expensive way to be ignored.

## Questions Experts Constantly Ask

- What does this plan assume is true that, if false, breaks everything — and who has checked it?
- If I were the adversary with their goals and constraints, what is the cheapest thing I'd do?
- What is the home side certain of, and what is that certainty resting on?
- Where is the seam — between teams, systems, or phases — that nobody owns?
- How will the blue team explain *away* this finding, and how do I close that hatch in advance?
- Am I attacking the adversary's likely move, or showing off the cleverest exploit?

## Decision Frameworks

- **Charter first, attack second.** Fix scope, ROE, objective, and recipients before anything. An unscoped red team is a liability; an off-charter win poisons the well.
- **Emulate a named adversary, not a generic one.** Constrain yourself to what the matching actor would realistically do, or the test answers a question nobody asked.
- **Triage by decision impact, not severity score.** The finding that changes the commander's course of action outranks the severe one nobody can act on; "does this move the decision?" is the filter.
- **Disclose to the owner, not the room.** Land the most threatening finding privately with the person who can fix it, so they fix rather than defend.

## Workflow

1. **Charter and scope.** Agree the objective, ROE, threat to emulate, and who owns the findings — signed.
2. **Recon and re-orient.** Learn the plan as the home side understands it, then adopt the adversary's goals, knowledge, and freedom of action.
3. **Surface the load-bearing assumptions.** The richest target is the premise nobody wrote down because it felt obvious.
4. **Generate attacks.** Pre-mortem, invert the plan, build attack trees; pick the cheapest viable paths, not the flashiest.
5. **Execute against a thinking opponent.** Play the adversary for real, adapting as the blue team reacts.
6. **Close the escape hatches.** Pre-empt how each finding will be dismissed and gather the evidence that forecloses it.
7. **Report to land, not to win.** Deliver owner-first as the plan's risk, with a fix attached.
8. **Verify and re-test.** A finding isn't closed until the fix holds against the same attack.

## Common Tradeoffs

- **Realism vs. safety.** Faithful emulation yields more value and more risk of real damage or leaked findings. Bound it in the ROE.
- **Surprise vs. learning.** A covert engagement measures true detection but teaches little; an announced exercise teaches more but flatters the defense.
- **Candor vs. credibility.** Brutal findings are the point, but a red team perceived as gleeful gets ignored; too gentle and it has said nothing.
- **Independence vs. influence.** Far enough from the chain to stay objective, close enough that decision-makers read you — the tension of the role.

## Rules of Thumb

- If the home team isn't a little uncomfortable, you haven't found anything yet.
- Attack the assumption everyone treats as too obvious to state; that is where the body is buried.
- If your "win" required genius, the real enemy won't replicate it — the finding is hollow.
- Write the finding for the one person who can fix it, in the language of their decision.
- A red team that's never overruled isn't independent; one that's always overruled isn't credible.

## Failure Modes

- **Capture.** Reporting to the people you critique until the contrarian aligns with the consensus it should break.
- **The clever-exploit trap.** Burning the engagement on a dazzling attack the real adversary would never use, while the cheap actual threat goes untested.
- **Off-charter wins.** Achieving the objective by violating the ROE — a point scored, trust destroyed.
- **Findings nobody fixes.** A thick report that proves how smart the team is and changes nothing.
- **Contrarianism as identity.** Opposing everything reflexively, so the dissent becomes noise the organization tunes out.
- **Sportsmanship loss.** Treating the blue team as the enemy rather than the client, turning the exercise into a grudge match.

## Anti-patterns

- **The scanner run dressed as a red team** — running a tool and calling it adversary emulation. It seduces because it is fast and produces a big number, but never tests a thinking opponent.
- **The gotcha report** — optimizing for the most embarrassing finding over the most decision-relevant one. Humiliation feels like impact, but it converts the people you need into enemies.
- **Mirror-imaging the adversary** — assuming the enemy shares your logic, tooling, and risk tolerance. It seduces because it is effortless, and it is the original sin of every failed estimate.
- **The advisory red team** — drifting into recommending and owning fixes. It feels constructive, and surrenders the independence that is the point.

## Vocabulary

- **Red / blue / purple team** — the licensed adversary, the defenders, and the mode where both improve defense together.
- **OPFOR** — opposing force; the role of playing the enemy in a wargame.
- **Devil's advocacy** — formally arguing against the consensus, irrespective of private belief, to surface its weaknesses.
- **Pre-mortem** — assuming a future failure occurred and reconstructing its causes, to license dissent before commitment.
- **Rules of engagement (ROE)** — the agreed bounds, targets, and prohibitions of an engagement.
- **Groupthink** — the consensus-seeking pressure that suppresses dissent and produces confident, unanimous error.

## Tools

- **MITRE ATT&CK and threat-intel libraries** — the shared map of real adversary tactics, grounding emulation in what actually happens.
- **Adversary-emulation and C2 frameworks** (Caldera, Cobalt Strike, Atomic Red Team) — to replay a named actor's playbook against live defenses.
- **Offensive tooling** (Burp, nmap, Metasploit) — the attacker's kit, used as the attacker uses it.
- **Structured analytic techniques** — ACH, attack trees, pre-mortems, key-assumptions checks — for plan and intelligence red-teaming.
- **Wargames and tabletops** — the arena for adversarial play against the home side.

## Collaboration

A red team is only valuable embedded against — and ultimately for — the people it attacks. With planners and commanders, it provides the dissent the staff cannot generate internally, reporting through an independent channel so candor survives. With the blue team and security engineers, it works adversary-to-defender and, in purple-team mode, turns each finding into a detection or control. With leadership, it trades on credibility earned by landing fixes. The standing tension: independent enough to stay honest, close enough to be heard — and the moment the team is loved, it has stopped doing its job.

## Ethics

The red teamer holds a charter to attack its own side, and that license is why restraint defines the professional. The duties: operate strictly within the agreed scope and ROE, because an off-charter win betrays the trust the role runs on; attack ideas and never people, since the goal is a better plan, not a humiliated colleague; protect the findings, which map the home side's weaknesses and are devastating in the wrong hands; and tell the truth even when it is that a beloved plan is fatally flawed. The hardest edge is candor without cruelty — delivering the worst news so it gets fixed, not buried.

## Scenarios

**A unanimous staff and a plan nobody doubts.** The staff has converged on one course of action with no dissent. Chartered as devil's advocate, the red teamer runs a pre-mortem: assume it failed, write how. The story hinges on a logistics assumption — a key route stays open — treated as given because it had held before. The home side has confused "it worked before" with "it will work." Rather than ambush the briefing, the red teamer takes it privately to the operations chief, who adds a branch plan. It landed because it attacked the assumption, not the planners.

**A security engagement that could become a scanner run.** A company asks for a red-team test; the easy move is to scan the perimeter and ship a CVE report. The red teamer refuses and emulates a threat actor whose intent matches — a group that phishes finance staff. They phish a junior accountant and reach the payment system through a forgotten service account, bypassing the hardened front-end the budget went to. The finding isn't a CVE list; it's that the company defended the wrong threat — landed by pre-empting the dodge ("that account is being decommissioned") with logs showing it authenticated last week.

**Knowing when to stop.** Mid-engagement, the decisive failure is proven: the adversary reaches the objective cheaply and undetected. More attacking would surface flaws but only deepen the home team's defensiveness without changing the obvious decision. The red teamer stands down, consolidates the one finding that matters, and resists running up the score — restraint that preserves the relationship the next engagement needs.

## Related Occupations

A red teamer is the offensive mirror of the security engineer, who defends the systems against the attacks the red team invents. The cyber-warfare-specialist runs the same techniques under a state mandate rather than an internal charter. The military-intelligence-analyst shares the discipline of testing assumptions and resisting mirror-imaging. The penetration tester is the narrower technical cousin, hunting vulnerabilities rather than emulating a full adversary campaign.

## References

- *Red Team: How to Succeed by Thinking Like the Enemy* — Micah Zenko
- *Psychology of Intelligence Analysis* — Richards J. Heuer Jr.
- *The Applied Critical Thinking Handbook* (Red Team Handbook) — University of Foreign Military and Cultural Studies, U.S. Army
- *Sources of Power* and the pre-mortem method — Gary Klein
- *Boyd: The Fighter Pilot Who Changed the Art of War* — Robert Coram (the OODA loop)
- MITRE ATT&CK framework — attack.mitre.org
