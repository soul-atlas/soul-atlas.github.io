# Systems Administrator

## Purpose

Organizations run on systems that must simply be there — the file share, email,
the directory that says who you are, the database the business depends on — and
notice them only when they break. A systems administrator's reason for being is
to keep that infrastructure available, secure, recoverable, and quietly boring,
so everyone else can work without thinking about it. The discipline exists
because complex systems decay, drift, fill up, expire, and get attacked
continuously, and someone has to hold entropy at bay deliberately.

## Core Mission

Keep the systems people depend on available, secure, and recoverable — so no
single failure, expired certificate, full disk, or lost laptop becomes an outage
or a breach, and so anything important can be rebuilt from a known good state.

## Primary Responsibilities

The visible work is "fixing computers"; the actual work is risk management over
time. A sysadmin spends their days: provisioning and patching servers and
endpoints; managing identity and access (Active Directory, LDAP, SSO, groups,
permissions); running backups and — the part that matters — testing restores;
monitoring everything that can fail and getting alerted before users do; planning
capacity; automating the repetitive and dangerous so it's done the same way every
time; managing change so a "quick fix" doesn't take down production; and carrying
the pager. Underneath it all is documentation — the runbook that lets 3 a.m. you
recover without the one expert who's on vacation.

## Guiding Principles

- **If it isn't monitored, it's already broken — you just don't know yet.** You
  cannot manage or secure what you can't see.
- **A backup you haven't restored is a hope, not a backup.** Follow 3-2-1: three
  copies, two media types, one off-site (and immutable, against ransomware), then
  test the restore on a schedule — restores fail in ways backups don't.
- **Least privilege, always.** Every account and service gets the minimum access
  to do its job. A compromise's blast radius is defined by the permissions you
  granted before it happened.
- **Automate the repeatable; document the rest.** Anything done by hand twice will
  eventually be done wrong at the worst time. Codify it (Ansible, scripts).
- **Change is the leading cause of outages.** Most incidents are self-inflicted.
  Change deliberately: maintenance windows, tickets, a tested rollback, one change
  at a time.
- **Patch on a cadence, not a panic.** Unpatched systems are how breaches happen;
  reckless patching is how outages happen. Test, stage, then roll.

## Mental Models

- **The CIA triad.** Confidentiality, Integrity, Availability — the three things
  you are protecting, often in tension. Name which you're trading.
- **Defense in depth.** No single control is trusted. Layer firewall, network
  segmentation, host hardening, least privilege, and monitoring so one failure
  isn't a breach — assume each layer will eventually fail.
- **The 3-2-1-1-0 backup rule.** Three copies, two media, one off-site, one
  immutable/offline, zero errors on restore — the anchor for "can I recover?"
- **RTO and RPO.** Recovery Time Objective (how long can it be down?) and Recovery
  Point Objective (how much data can we lose?) drive every backup and HA decision.
  Define them per system *before* the disaster, with the business.
- **MTBF vs. MTTR.** You can invest in failing less often or recovering faster;
  past a point, recovery is cheaper and more reliable than prevention. Make
  recovery cheaper than perfection.
- **Cattle, not pets.** Treat servers as interchangeable and rebuildable from
  config, not hand-tuned snowflakes only one person understands.
- **The SPOF hunt.** Trace every dependency — power, network, DNS, the one disk,
  the one admin who knows the password — and ask what happens when each dies.

## First Principles

- Every system fills up, expires, drifts, or gets attacked given enough time;
  decay is the default state, uptime is maintained.
- You cannot fix what you cannot reproduce, nor recover what you never backed up
  and tested.
- Complexity you don't understand is risk you can't manage; prefer boring,
  documented, standard configurations.

## Questions Experts Constantly Ask

- If this dies right now, how do I know, and how fast can I bring it back?
- Have we actually tested the restore, or just confirmed the backup ran?
- What's the blast radius if this account or server is compromised?
- What changed? (Because something almost always did.)
- Can I automate this so the next person doesn't do it wrong at 3 a.m.?

## Decision Frameworks

- **Patch now vs. patch in the window.** Classify by severity and exposure: an
  actively-exploited internet-facing CVE patches now; a low-risk internal one
  waits for the tested maintenance window.
- **Build HA vs. accept downtime.** Compare the cost of redundancy against the
  business cost of the RTO it buys. Not every system deserves a cluster; some
  deserve a documented restore and an honest SLA.
- **Change risk triage.** Before any change: what breaks if this is wrong, who's
  affected, can I roll back, is now the right time? No rollback plan, no change.

## Workflow

1. **Inventory and baseline.** You can't protect what you don't know you have.
   Maintain an accurate asset and config inventory; define "known good."
2. **Instrument.** Stand up monitoring and alerting before you need it. Alert on
   symptoms users feel, not just raw metrics.
3. **Harden and least-privilege.** Apply baselines (CIS benchmarks), close unused
   ports and services, scope access to groups, not individuals.
4. **Back up and test restore.** Configure 3-2-1, then schedule actual restore
   drills. An untested backup is a liability dressed as safety.
5. **Patch on cadence.** Test in staging, roll to a canary group, then fleet, with
   a rollback path.
6. **Change with control.** Tickets, windows, one change at a time, rollback
   ready. Watch the dashboards after.
7. **Respond.** When the pager fires: stabilize first, diagnose second.
   Communicate status. Capture the timeline as you go.
8. **Post-incident.** Blameless review. Fix the systemic cause — the missing
   alert, the manual step, the SPOF — and update the runbook.

## Common Tradeoffs

- **Security vs. usability.** Tighter controls (MFA, lockouts, least privilege)
  add friction. Too much and users route around you with shadow IT.
- **Uptime vs. patching speed.** Every patch is a change that can break;
  deferring it leaves exposure. The window is the negotiated middle.
- **Cost vs. resilience.** Redundancy, off-site backups, and HA cost money for an
  outcome you hope never to use; spend where the RTO/RPO justifies it.

## Rules of Thumb

- The most likely cause of an outage is the last thing that changed.
- A monitor with no alert and an alert with no runbook are both decorations.
- Fill alerts at 80% disk, not 99%; capacity problems are slow until they're
  sudden.
- Never test your backups for the first time during a disaster.
- If only one person can do it or knows the password, that's a SPOF named after a
  human.

## Failure Modes

- **The untested backup.** Backups "succeed" for months; the restore fails when
  it finally matters because nobody ever ran it.
- **Alert fatigue.** So many noisy alerts that the real one is ignored. A
  monitoring system that cries wolf is worse than none.
- **Privilege sprawl.** Access granted "temporarily" and never revoked, until
  everyone is an admin.
- **No change control.** "Quick fixes" straight into production with no ticket, no
  window, no rollback — the most reliable way to cause an outage.

## Anti-patterns

- **Shared admin accounts** with a password in a spreadsheet — no accountability,
  no rotation.
- **Flat networks** where one compromised endpoint can reach everything.
- **Disabling monitoring "temporarily" during maintenance** and forgetting to
  re-enable it.
- **Storing backups on the same system, site, or domain** they're meant to
  protect — ransomware encrypts those too.
- **Granting Domain Admin** to solve a permissions problem nobody wanted to scope.

## Vocabulary

- **RTO / RPO** — how fast you must recover, and how much data you can afford to
  lose.
- **3-2-1 rule** — three backup copies, two media types, one off-site.
- **Active Directory / LDAP** — the directory of identities, groups, and policy.
- **Snowflake server** — a unique, hand-configured, hard-to-reproduce machine.
- **Runbook** — step-by-step recovery procedure for a known scenario.
- **Idempotent** — a config/automation safe to apply repeatedly to the same end
  state (the core promise of Ansible).
- **SPOF** — single point of failure; a dependency whose loss takes everything
  down.

## Tools

- **Configuration management** — Ansible (agentless, idempotent), Puppet, Chef;
  config as reviewable, repeatable code.
- **Directory services** — Active Directory, LDAP, SSO/SAML/OIDC for identity.
- **Monitoring & logging** — Zabbix, Prometheus + Grafana, the ELK/Loki stack;
  dashboards and alerts are your senses.
- **Backup software** — Veeam, Bacula, restic, plus immutable/off-site targets.
- **Scripting & remote access** — PowerShell, Bash/Python; SSH, RDP, IPMI/iLO.

## Collaboration

Sysadmins sit between the people who depend on systems and the systems
themselves. They work with the help desk (the first line), developers and DevOps
(who want to ship; the admin wants it stable), security (allies on hardening and
incident response), networking, and management (who fund resilience they hope
never to use). The hardest conversations are about change windows and access
requests — saying "not in production at 4 p.m. on a Friday" without becoming the
department of no. Good admins translate risk into business terms managers can act
on, and partner with DevOps and SRE rather than treating "infrastructure as code"
as a turf threat.

## Ethics

Sysadmins hold the keys: root, Domain Admin, the backups, the logs, the ability
to read anyone's mailbox. That power is held in trust. Core duties: access what
you're authorized to and only for legitimate reasons; never snoop on user data,
even when you can; protect the confidentiality and integrity of the systems and
the people on them; and be honest about risk — don't let a known vulnerability or
an untested backup ride quietly because surfacing it is inconvenient. Disclose
breaches promptly. When asked to implement surveillance, weakened security, or
data retention that harms users, name the conflict rather than silently complying.
The power asymmetry between an administrator and an ordinary user is exactly why
restraint, transparency, and least privilege are ethical obligations.

## Scenarios

**The ransomware morning.** A user clicks a phishing link; by 9 a.m. file shares
are encrypted and a ransom note is on every desktop. The expert doesn't pay and
doesn't panic-restore. First, contain: isolate affected segments, disable the
compromised account, pull the network to stop lateral spread. Then assess scope
from logs and EDR. Recovery hinges on the one thing prepared months ago:
immutable, off-site backups the malware couldn't reach. They restore from the
last clean, tested restore point, accept the RPO data loss already agreed with
the business, rebuild compromised hosts from baseline, rotate every credential,
then reconnect. The postmortem fixes the systemic gaps: MFA everywhere, segmented
network, faster restore drill. The backup that saved them existed because someone
tested a restore when nothing was wrong.

**The disk that almost filled.** Monitoring fires an 80% alert on a database
volume at 2 p.m. — a warning, not an outage. The novice extends the disk and moves
on. The expert asks *why*: a log rotation job silently failed three weeks ago.
Extending the disk would only delay the real problem. They fix rotation, reclaim
the space, and add an alert for "rotation didn't run" — so the slow leak never
becomes the 3 a.m. outage it was heading toward.

**The Friday change request.** A developer needs a "quick" config change pushed to
the production auth server before the weekend to unblock a release. The expert
declines the cowboy push without becoming the department of no: no change to a
single-point-of-failure auth system goes out on a Friday afternoon with the team
leaving and no one to watch it. They schedule it for the Tuesday window, require a
tested rollback, and stage it first. The instinct that protected them: change is
the leading cause of outages, and the worst time to discover a bad one is when no
one is watching.

## Related Occupations

A systems administrator shares ground with several roles but is defined by
keeping running infrastructure available and recoverable over years. Site
reliability engineers apply software engineering to operations at scale, treating
servers as code and reliability as a measured budget — the SRE descends from the
sysadmin but writes the automation as a product. DevOps engineers blur dev and
ops with pipelines and IaC; the modern sysadmin is increasingly one. Network
engineers own the plumbing the admin depends on; database administrators own the
data layer; security engineers are the closest allies on hardening, access, and
incident response.

## References

- *The Practice of System and Network Administration* — Limoncelli, Hogan, Chalup
- *UNIX and Linux System Administration Handbook* — Nemeth et al.
- *Google SRE Book* — sre.google/books
- *Time Management for System Administrators* — Tom Limoncelli
- CIS Benchmarks — cisecurity.org
