# Dispatcher

## Purpose

An emergency dispatcher is the first first responder — the calm voice that answers
on the worst day of a stranger's life and turns panic into help on the way. Before
any unit rolls, someone has to find out where, what, and how bad, pick which
emergency gets the closest resource, and keep a terrified caller on the line long
enough to give a location and follow instructions. The dispatcher works the
console: the CAD system, multiple radio channels, ringing phone lines, and the
map. They are also the lifeline of the responders they send — the ones who track
every officer, medic, and firefighter and make sure each one comes home. The job
is to send help fast, send the right help, and lose no one in the process.

## Core Mission

Get the location first, triage the call so the worst emergency gets the closest
resource, talk the caller through until help arrives, and track every responder
from dispatch to safe return — never leaving the radio.

## Primary Responsibilities

The work runs on two fronts at once: the caller and the radio. On the call, the
dispatcher answers fast, pulls location and callback before anything else,
classifies the emergency (medical, fire, or police), prioritizes it against
everything else in the queue, and delivers pre-arrival instructions — CPR,
childbirth, bleeding control, talking down a suicidal caller. On the radio, they
dispatch and move units, run status and welfare checks, coordinate mutual aid,
stage units for scene safety, and keep continuous account of who is where and in
what condition. Underneath both is the CAD record, the legal and operational
memory of the incident. And underneath all of it is composure: a steady voice and
a clear head while several emergencies happen simultaneously.

## Guiding Principles

- **Location first, because the call can drop.** Phones die, callers faint, lines
  cut out. Get a verifiable location before anything else; everything else can be
  reconstructed, a lost location cannot.
- **The worst call gets the resource.** Triage is ruthless and fair: a chest pain
  and a possible cardiac arrest are not equal, and the closest unit goes to the one
  who can't wait.
- **Your calm is a tool.** A steady voice slows a panicking caller's heart rate,
  pulls out the address, and makes the hands do CPR. Lose your calm and you lose the
  call.
- **You never leave the radio.** A responder calling for help into silence is the
  nightmare. The radio is always covered; status checks go out; an unanswered unit
  gets escalated, not assumed fine.
- **Follow the protocol, then use judgment.** EMD and the card system catch what a
  rushed brain forgets; you work the protocol and overlay experience, not one or
  the other.
- **Track everyone home.** You sent them; you account for them. Staging, scene
  safety, and welfare checks exist so responders survive the call.
- **Multitask without dropping a thread.** Many calls, many units, one head — and
  no incident silently falls off the board.

## Mental Models

- **Triage as a sorting algorithm.** Every new call is inserted into a priority
  queue by severity and resource fit, not arrival order. The job is constant
  re-sorting as calls evolve and resources free up — and being ruthless about it.
- **The call as a perishable channel.** Information degrades and the line can drop
  any second, so you extract in order of irreversibility: location, then nature,
  then the rest. You bank the answer that can't be recovered first.
- **The big board.** A live map of every unit, every open incident, and every
  responder's status, held in the head and on the CAD. Coverage gaps — areas with
  no available unit — are read and managed before the next call lands there.
- **Pre-arrival instructions as remote hands.** For the minutes before responders
  arrive, the caller's hands are yours; clear, sequenced, simple commands turn a
  bystander into a rescuer doing CPR or controlling a bleed.
- **The responder lifeline.** Each unit on a call is a thread you hold; a status
  check is a heartbeat. Silence where there should be a reply is treated as trouble
  until proven otherwise.

## First Principles

- A location you didn't capture cannot be sent help; everything starts there.
- Resources are finite and emergencies are not equal; triage decides who waits.
- The caller's panic is the obstacle and the caller's hands are the resource; the
  voice converts one into the other.

## Questions Experts Constantly Ask

- Where are you, exactly — and can you confirm it another way?
- What's the callback number if we get cut off?
- Is this medical, fire, or police — and what's the priority?
- Is the scene safe for the caller and for my responders?
- Who's closest and available, and what's my coverage if I send them?
- Has that unit answered its last status check?
- Do I need mutual aid or more resources rolling now, before I'm sure?

## Decision Frameworks

- **Call prioritization.** Run the EMD/ProQA determinant or the agency priority
  scheme: life threats (arrest, choking, major trauma, fire with entrapment) get
  the immediate, closest, full response; lower-acuity calls are queued and may hold.
  Re-prioritize as new information arrives.
- **Get-location protocol.** Before symptoms, before story: pin the location by
  ANI/ALI, AVL, what3words, or careful questioning, and confirm it; only then work
  the rest of the call.
- **Send now vs. confirm first.** For high-acuity calls, roll the response on the
  first credible indication and refine en route — better to turn a unit around than
  to delay a cardiac arrest while you confirm details.
- **Scene safety and staging.** For violence, hazmat, or an unsecured scene, stage
  EMS and fire at a safe distance and send law enforcement to secure first;
  responders don't walk into a scene that isn't safe.

## Workflow

1. **Answer and anchor.** Pick up fast, get the location and callback number, and
   confirm them — the two facts that survive a dropped call.
2. **Classify and triage.** Determine medical, fire, or police; run the EMD/agency
   protocol; set the priority against the current queue.
3. **Dispatch.** Send the right units by proximity and capability; advise scene
   safety and staging; start mutual aid early if the call is big.
4. **Give pre-arrival instructions.** Keep the caller on the line and walk them
   through CPR, bleeding control, childbirth, or de-escalation until responders
   arrive.
5. **Track and support.** Monitor unit status, run welfare checks, update
   responders with new information, escalate any unanswered unit.
6. **Document and close.** Keep the CAD record accurate and timestamped; clear units
   when done; hand off open incidents at shift change with a clean briefing.

## Common Tradeoffs

- **Staying on the call vs. working the radio.** A caller doing CPR needs you, and
  so do the units rolling; you split attention and never fully abandon either.
- **Speed vs. accuracy of address.** A fast dispatch to the wrong location wastes
  the response; you spend the seconds to confirm the location even under pressure.
- **Sending early vs. holding for confirmation.** Rolling units on thin information
  risks a wasted run; holding risks a delayed life threat — high acuity tips toward
  sending.
- **Coverage vs. response.** Sending your closest unit to one call strips coverage
  from its area; you weigh the gap and pull mutual aid before you're caught short.

## Rules of Thumb

- Location and callback before symptoms, every time.
- Repeat the address back; a confirmed location beats a fast wrong one.
- Calm voice, short sentences, one instruction at a time to a panicking caller.
- If a unit misses a status check, key up and check — don't assume.
- Roll the big response early; it's easier to cancel units than to catch up.
- Keep the caller on the line until responders are physically with them.
- When in doubt on acuity, treat it as the higher priority.

## Failure Modes

- **Losing the location.** The line drops before the address is confirmed and help
  has nowhere to go.
- **Under-triage.** Downgrading a life threat — calling an arrest a faint — and
  sending too little, too slow.
- **The unanswered radio ignored.** A responder in trouble whose silence wasn't
  escalated.
- **Tunnel vision on one call** while the queue and the board fall apart behind it.
- **Sending responders into an unsafe scene** without warning or staging.
- **Burnout and unprocessed stress** eroding the composure the job runs on.

## Anti-patterns

- **Working the story before the location.**
- **Hanging up to "free the line"** while a caller still needs instructions.
- **Assuming a quiet unit is fine** instead of checking.
- **Treating calls first-come-first-served** instead of by acuity.
- **Freelancing past protocol** on a call the EMD card would have handled cleanly.

## Vocabulary

- **CAD** — computer-aided dispatch; the system that logs calls, dispatches units,
  and tracks status.
- **EMD / ProQA** — Emergency Medical Dispatch and the protocol software that
  triages medical calls and scripts pre-arrival instructions.
- **Pre-arrival instructions** — the medical or safety steps the dispatcher talks a
  caller through before responders arrive.
- **ANI / ALI** — automatic number and location identification tied to a 911 call.
- **AVL** — automatic vehicle location; live unit positions on the map.
- **what3words / text-to-911** — alternative ways to pin a location or reach a caller
  who can't speak.
- **Mutual aid** — resources borrowed from neighboring agencies for a large
  incident.
- **Staging** — holding units at a safe distance until a scene is secured.
- **Status / welfare check** — confirming a responder is safe and where they should
  be.

## Tools

- **The console / CAD** — the call-taking, dispatching, and tracking system at the
  heart of the job.
- **Multiple radio channels** — the link to police, fire, and EMS, never left
  uncovered.
- **Phone lines and 911 trunk** — incoming emergency and administrative calls, with
  ANI/ALI.
- **Mapping and AVL** — the live picture of incidents and unit positions.
- **EMD/ProQA protocol cards** — the scripted triage and pre-arrival instruction
  system.
- **what3words and text-to-911** — location and contact tools for hard calls.
- **The voice** — the most important instrument: calm, clear, paced.

## Collaboration

A dispatcher sits at the center of the response and works for the field. Police
officers, firefighters, and paramedics depend on the dispatcher for accurate
locations, scene information, and the welfare checks that keep them safe — the
relationship is mutual trust built call by call. Within the center, dispatchers
back each other up, cover channels, and hand off clean at shift change.
Supervisors manage major incidents and resource shortfalls; neighboring agencies
provide mutual aid. The dispatcher also serves the caller, often a frightened
layperson who becomes a rescuer under instruction. The friction lives between
finite resources and infinite demand, and between the field's urgency and the
discipline of getting the location and the triage right first.

## Ethics

A dispatcher holds lives on both ends of the line — the public who call and the
responders they send. The duties are concrete: answer every call with the same
care regardless of who's calling; triage honestly so the resource goes where it's
needed most, not where it's easiest; never abandon a caller who needs instructions
to free a line; never assume a silent responder is fine; document truthfully
because the CAD record is legal and operational fact; and carry the calls that
don't end well without letting them harden into indifference or break the
composure the next caller needs. The gray zones are real — limited units and two
serious calls, a caller you can't help in time, the cumulative weight of critical
incidents. The professional protects their own resilience as a duty, because the
person who keeps the radio has to be whole enough to keep it.

## Scenarios

**A caller reporting an unresponsive collapse.** A panicked caller says someone has
collapsed and isn't breathing. The instinct is to ask what happened; the expert
asks where first — exact address, confirmed against ANI/ALI, and a callback number
in case the line drops, because a cardiac arrest with no location is a death. With
location locked, she rolls the closest medic unit and engine immediately on the
arrest determinant, then keeps the caller on the line and walks them through
hands-only CPR — short commands, a counting cadence, one instruction at a time —
while units roll. She does not hang up to take the next call; the caller's hands
are the patient's only chance until the medics are physically there. The fast,
confirmed location and the steady CPR coaching are what save the minutes that
matter.

**Two serious calls, one available unit.** A working structure fire with possible
entrapment comes in seconds after a major traffic crash, and only one engine is
free in that quadrant. The dispatcher triages on irreversibility and fit: the fire
with someone trapped is the immediate life threat, so the closest engine and a full
fire response go there, and she pulls mutual aid from the neighboring district for
the crash rather than letting it hold. She rolls the mutual-aid request early —
easier to cancel than to summon late — and reads the coverage gap she's just
created, repositioning a unit to cover the now-thin area. Triage isn't first-come;
it's worst-first, with the resource map managed a step ahead.

**An officer who goes quiet on a traffic stop.** An officer calls out a stop with a
plate and location, then misses the next routine status check and doesn't answer
the radio. The wrong move is to assume the officer is just busy. The expert keys up
immediately for a status check; on continued silence, she escalates — sends the
nearest units to the stop location, advises caution, and pulls up the last known
position from AVL. The unanswered radio on a stop is treated as trouble until
proven otherwise, because the dispatcher is the lifeline and the only one watching
that thread. Sending backup on a false alarm costs minutes; not sending it can cost
a life.

## Related Occupations

A dispatcher is the hub the field response turns around. Police officers,
firefighters, and paramedics are the units the dispatcher sends, supports, and
tracks home — the work is unintelligible without that partnership. Air traffic
controllers share the closest cousin's skill set: calm under load, tracking many
moving assets at once, talking and listening on multiple channels, and a single
lapse carrying lethal weight. Logistics coordinators share the resource-allocation
and tracking discipline in a commercial setting without the life-or-death stakes.
Social workers share the crisis-de-escalation and trauma exposure that the
emotional load of the job demands.

## References

- *National Emergency Number Association (NENA) standards* — 911 and PSAP
  operations
- *Emergency Medical Dispatch (EMD) / Medical Priority Dispatch System (ProQA)
  protocols*
- *APCO standards and training* — public-safety telecommunicator practice
- *Critical incident stress management* guidance for emergency telecommunicators
