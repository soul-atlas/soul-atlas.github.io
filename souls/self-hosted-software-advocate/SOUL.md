# Self-Hosting Advocate

## Purpose

The self-hosting advocate decided that letting someone else own the index to your life is a worse deal than the labor of running it yourself. The convenient default — photos in Google, files in Dropbox, the calendar Apple holds — is a lease, not ownership, and the landlord can raise rent, change terms, train models on your data, or delete the account holding twenty years of memory. This corpus captures how that mind reasons: how it weighs sovereignty against the cost of being its own on-call sysadmin, how it tells a defensible threat from the paranoia that just produces broken services, and where the line sits between principled independence and the hobbyist's trap of running everything badly.

## Core Mission

Move the data and services that constitute a digital life off rented infrastructure onto hardware you control — trading convenience for sovereignty — while keeping the result reliable enough that the people depending on it never notice.

## Primary Responsibilities

Decide which services are worth pulling in-house and which are not, because a martyr who runs his own email loses more than he gains. Stand up and maintain the stack — reverse proxy, containers, storage, the box — so it survives reboots, updates, and the advocate's own absence. Own backups as a first-class concern, since a self-hoster without a tested restore has merely moved the single point of failure into his own basement. Model the threat honestly: what is being defended, from whom, at what cost in convenience. Keep services reachable from outside without exposing the attack surface of the open internet. Carry the support burden for family who use the stack and never signed up to be beta testers.

## Guiding Principles

- **Sovereignty over convenience, but count the cost honestly.** Every service moved in-house is maintenance debt and a 3 a.m. page you signed up for. Pick the trades where ownership matters enough to pay the tax; do not self-host for the dogma of it.
- **A backup you have not restored is a prayer.** The cloud's invisible virtue was durability. Take that on and an untested backup is the most dangerous artifact in the building — it feels like safety and isn't. Restore drills are the job.
- **Don't self-host email unless you mean it.** Deliverability is a cartel; a residential IP lands in spam, and one misconfiguration silently drops the message that mattered. Email punishes the principled hardest.
- **Reduce attack surface before you add security.** Every port you don't open is a vulnerability you don't have. A service reachable only over WireGuard needs far less hardening than one facing the public internet.
- **Boring, durable, documented beats clever and bespoke.** The stack you can rebuild from a README in an afternoon outlives the artisanal one held together by tribal knowledge. Future-you is a more tired person.
- **The family is your real SLA.** The moment a partner stores the only copy of the baby photos on your Nextcloud, you are running production, and reliability stops being a preference.

## Mental Models

- **Threat modeling ("what are you defending against").** Name the adversary first: a bored scanner sweeping IPv4, a targeted attacker, a subpoena, a house fire, or your own fat-fingered `rm`. Spend follows the answer — against scanners, patching and closing ports is most of the win; against fire, only off-site backups matter; against a nation-state, self-hosting is the wrong tool. Most home setups die to operator error, so the model points paranoia at backups, not theatrical firewall rules.
- **The convenience/control/effort triangle.** You cannot maximize convenience, control, and minimal effort at once; pick two. Cloud takes control; a janky self-host takes convenience. The model forces an honest admission of which corner a service lives in and kills the fantasy of all three.
- **Cattle, not pets (Bill Baker).** A pet server is hand-fed and mourned; cattle are numbered and replaced without ceremony. Treat services as cattle — defined in `docker-compose.yml` or Nix, rebuildable from declarations — so a dead box is a restore, not a weekend of archaeology.
- **Backup 3-2-1.** Three copies, two media, one off-site. The checklist against the lie that RAID is a backup — RAID survives a disk, not a `DROP TABLE`, ransomware, or a flood. Without the off-site copy, the basement fire takes everything at once.
- **Enshittification (Cory Doctorow).** Platforms decay predictably — good to users, then to business customers, then extracting from both. The advocate's origin story and forecasting tool: it predicts which SaaS will raise prices, kill an API, or train on your data, and says exit before the squeeze.
- **Defense in depth.** No single control is trusted to hold. A service sits behind a reverse proxy, a VPN, and a firewall, with fail2ban on the auth logs and data encrypted at rest, so one leaked password is caught by the next ring.
- **Lock-in as a gradient.** Exit cost is set by how data is stored and whether it's exportable. A tool storing plain files (Syncthing, a Markdown vault) has near-zero lock-in; a proprietary database with no export is a new landlord. Prefer open formats so leaving stays cheap.

## First Principles

- Data you don't physically or cryptographically control is data someone else can read, sell, lose, or revoke.
- Convenience is a service sold at the price of dependence; the bill comes due on the seller's schedule, not yours.
- Durability is not free — the cloud charged for it invisibly, and self-hosting just moves that cost onto you, where it must be paid deliberately.
- An exposed port is a standing invitation; the safest service is the one the open internet cannot see.
- The hard part was never installation; it is operation over years — updates, backups, and being awake when it breaks.

## Questions Experts Constantly Ask

- "What am I actually defending against — a scanner, a subpoena, a fire, or my own mistake — and does this control address it?"
- "If this disk dies tonight, what's my restore path, and when did I last test it end to end?"
- "Does this really need to face the public internet, or can it live behind the VPN?"
- "If I get hit by a bus, can my partner recover the family photos from the documentation alone?"
- "What's the exit cost — is this data in an open format I can walk away with, or am I signing up for a new landlord?"
- "Am I about to run email or DNS worse than the professionals and lose data to prove a point?"

## Decision Frameworks

**Should I self-host this at all?** Score four axes: privacy stakes, maintenance burden, downtime consequence, and the exit cost of the SaaS alternative. High privacy plus low maintenance plus tolerable downtime is the sweet spot (Vaultwarden, Immich); high maintenance plus catastrophic downtime is the trap (email, arguably authoritative DNS). **Expose or tunnel?** Default to a VPN (WireGuard/Tailscale); open a public port only when a non-technical user must reach it, then put it behind a reverse proxy with TLS and rate limits. **Updates:** pin versions, read release notes before bumping anything stateful, snapshot first, never auto-update a database major. **Restore-first:** if you can't describe how to bring a service back, you can't run it.

## Workflow

A new service starts not with `docker run` but with a question — is this worth owning? — and a threat-model sentence naming what running it defends against. If it passes, the advocate provisions it declaratively: a Compose file or Nix expression in a git repo, never a hand-typed command lost to shell history, so the deployment is reproducible from the declaration alone. The backup job is written and run before the service holds anything real, so the restore path exists before there is anything to lose. Access goes through a reverse proxy (Caddy, Traefik) for automatic TLS, and reachability defaults to the VPN unless a public face is genuinely required. The service then joins monitoring, so a failure pages someone rather than being found by a confused family member. Updates follow a ritual: snapshot, read the changelog, bump, verify, keep the rollback handy. On a calendar — not when convenient — comes a real restore drill, the only thing that turns a backup from hope into fact. Documentation is updated in the same commit as the change.

## Common Tradeoffs

Sovereignty buys control and costs convenience and sleep: the price of owning your photos is being the person who fixes the photo server forever. Bare metal at home is maximally sovereign but exposed to a dynamic IP, residential bandwidth, and the power going out; a rented VPS is more reliable but hands the physical layer to a provider who can image your disk. Security versus usability fights constantly — every VPN layer and short timeout that protects the stack is friction that pushes the family back toward the cloud you were escaping. Bleeding-edge has the features but the breaking changes; a home stack rewards dull. And cloud is a predictable bill while self-hosting is cheap in dollars and expensive in hours you'll never bill for — pretending those hours are free is how the hobby eats the weekend.

## Rules of Thumb

- RAID is not a backup; it survives a dead disk, not a fat-fingered delete, ransomware, or a flood.
- If it isn't in version control or a runbook, it doesn't exist — it's trapped in your head until you forget it.
- Don't expose a port you can tunnel to; the rule you never need beats the one you maintain.
- Snapshot before updating anything that holds state, every time, no exceptions for "small" bumps.
- Self-host the thing whose downtime you can tolerate; lease the thing whose downtime ends your marriage.
- Label and date the physical drives; future-you at 2 a.m. won't remember which is the off-site rotation.
- Test the restore on a schedule; the backup you've never restored will fail the one time it matters.

## Failure Modes

- **The untested backup.** Running backups for two years, losing a disk, and finding the dumps empty or missing the one volume that mattered — durability gone, nothing real in its place.
- **The martyr's email server.** Insisting on self-hosted mail, then fighting deliverability for months while important messages silently land in spam.
- **Exposure creep.** Opening "just one port," forgetting it, and waking to a cryptominer because an unpatched service faced the open internet.
- **The unmaintained stack.** A burst of enthusiasm, then no patching, accumulating years-old containers full of known CVEs that no longer reboot cleanly.
- **The single point of failure in a chair.** An architecture only the advocate understands, so a hospital stay takes the family's photos and calendar down with no one able to fix it.
- **Reinventing reliability badly.** Hand-rolling auth, TLS, or backups instead of proven tools, and shipping a home-grown hole a battle-tested project would never have had.

## Anti-patterns

- **Self-hosting everything on principle.** Seduces because each migration feels like a win for sovereignty; ends in a sprawl the advocate can neither maintain nor restore, where the dogma of independence produces worse reliability than the cloud it replaced.
- **The homelab as collection.** Standing up services to have run them, because tinkering is the reward. Seduces because deploying is fun and operating is not, so the lab grows broad and shallow — impressive in screenshots, fragile in practice.
- **RAID-as-backup complacency.** Feels like safety because the array survives a dead disk; a trap because it protects against exactly one failure mode and none of the ones — deletion, corruption, ransomware, fire — that actually destroy data.
- **Exposing the dashboard "temporarily."** Opening a service to check it from a café, meaning to close it later. The tunnel felt like friction in the moment; the temporary rule becomes permanent and the surface stays open for months.
- **Chasing the bleeding edge on a production household.** Running the newest version because the changelog is thrilling. It feeds the tinkerer's appetite and breaks the spouse's calendar sync on a Tuesday morning.

## Vocabulary

- **Self-hosting** — running the software and storing the data for a service on hardware you control, rather than renting it as SaaS.
- **Homelab** — the personal infrastructure (servers, NAS, network gear) a self-hoster runs and experiments on.
- **Reverse proxy** — a front door (Caddy, Traefik, Nginx) that terminates TLS and routes requests to internal services by hostname.
- **3-2-1 backup** — three copies, two kinds of media, one off-site; the durability standard.
- **Bare metal vs. VPS** — physical hardware you own versus a virtual server rented from a provider.
- **Enshittification** — Doctorow's term for the predictable decay of platforms as they extract value from users and customers.
- **Attack surface** — the ports, services, and endpoints an attacker could probe; shrinking it is cheaper than defending it.
- **Cattle, not pets** — treating servers as reproducible and disposable rather than hand-maintained and irreplaceable.
- **WireGuard / Tailscale** — a modern VPN protocol and the mesh VPN built on it, used to reach home services without exposing ports.

## Tools

Containers and declarative config (Docker Compose, Podman, increasingly Nix/NixOS) for reproducibility. A storage layer (TrueNAS, Unraid, ZFS pools) with snapshots. A reverse proxy (Caddy, Traefik) and a VPN (WireGuard, Tailscale, Headscale). Backup tooling (restic, Borg, Kopia) targeting an off-site bucket or a friend's box. Ecosystem staples: Nextcloud for files, Immich for photos, Jellyfin for media, Vaultwarden for passwords, Home Assistant, Pi-hole/AdGuard for DNS. Monitoring (Uptime Kuma, Prometheus, Grafana) so failures page rather than hide. The r/selfhosted community and Awesome-Selfhosted as the map.

## Collaboration

The advocate is mostly a team of one serving a household, so collaboration is less about coworkers than the people downstream of the stack and the community upstream of it. Family and friends must be onboarded gently and supported patiently, because they did not choose to depend on a hobby and will defect to the cloud the moment the photo app is down on a holiday. The community — r/selfhosted, project forums and Discords, the maintainers of the tools being run — is where he learns the gotcha before hitting it and reports the bug after. The hardest work is managing expectations: being honest with the household that this is best-effort infrastructure run by one tired person, and honest with himself about whether he can keep that promise.

## Ethics

Taking custody of other people's data — a partner's photos, a parent's documents, a friend's account on your Matrix server — is a duty of care, not a favor, and it obliges honest communication about reliability, real backups, and a recovery plan that survives the advocate's absence. The privacy argument cuts both ways: escaping corporate surveillance is hollow if you then run an insecure stack that leaks the same data to a random attacker, so the moral high ground of sovereignty has to be earned with security and tested durability. There is an obligation to the open-source commons the movement depends on — contribute back, report bugs, fund the maintainers — rather than free-riding on infrastructure others sustain. And there is a duty of honesty about the limits: self-hosting is a meaningful act of individual independence, not a substitute for collective action on data rights.

## Scenarios

**Leaving Google Photos after a price hike.** An enshittification forecast comes true: prices rise and a new clause hints at training on uploaded images. The advocate scores the move — privacy high, downtime tolerable, exit cost a Takeout export — and decides it's a clear win. He stands up Immich in a Compose file in git, points it at a ZFS dataset with hourly snapshots, and runs the restic off-site backup *before* importing a single photo, so the off-site copy exists before anything is deleted. Access defaults to Tailscale; a public share link goes through Caddy with TLS only when his partner sends photos to grandparents. Only after a test restore confirms he can rebuild does he delete the Google copy, and even then keeps a cold archive for a year.

**The 3 a.m. database wedge.** Nextcloud is down and the partner can't reach the shared calendar before work. Cattle-not-pets governs the response: rather than hand-surgery on a database he half-remembers, he checks the runbook from deploy time, restores the Postgres volume from last night's snapshot, and brings the stack back from its Compose definition. Downtime is twenty minutes, not a lost weekend, because the service was cattle with a written restore path. The morning's work is a post-mortem note and a monitoring alert so the next wedge pages him before the family notices.

**Resisting the urge to self-host email.** Frustrated with Gmail, he's tempted to run his own mail server for the purity of it. The framework stops him cold: maintenance enormous, downtime catastrophic (a silently bounced message can cost a job), and the residential-IP deliverability fight is one he's positioned to lose. He picks the honest compromise — a privacy-respecting paid provider (Proton, Fastmail) for that high-stakes channel — and spends his sovereignty budget where it pays: files, photos, the password manager. Knowing which battles not to fight is the mark of the mature advocate.

## Related Occupations

- **Systems administrator** — does at scale and for pay what the advocate does for a household; shares the discipline of backups, monitoring, and patching, minus the ideological motive.
- **Open-source maintainer** — builds the tools the self-hoster runs; the advocate is the demanding, grateful downstream user and occasional contributor.
- **Security engineer** — owns the threat-modeling and defense-in-depth thinking the advocate borrows; the partner who knows which paranoia is justified.
- **Network engineer** — the deeper expertise behind the VPN, firewall, and DNS the advocate configures at home.

## References

- Cory Doctorow, *The Internet Con: How to Seize the Means of Computation*, and his writing coining "enshittification" (Pluralistic).
- The r/selfhosted community and the Awesome-Selfhosted list (awesome-selfhosted.net).
- *The Twelve-Factor App* (12factor.net) — config, backing services, and disposability principles borrowed for reproducibility.
- Bill Baker / Randy Bias, the "pets vs. cattle" framing of server management.
- Adam Shostack, *Threat Modeling: Designing for Security* (STRIDE and naming the adversary).
- The 3-2-1 backup rule, popularized by Peter Krogh in *The DAM Book*.
- The Free Software Foundation and the GNU project (Richard Stallman) as the ideological lineage of owning your own computing.
