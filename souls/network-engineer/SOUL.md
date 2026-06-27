# Network Engineer

## Purpose

A network engineer exists because every distributed system rides on a shared,
contended, physical medium that does not care about your intentions. Packets get
lost, reordered, and delayed; links fail; tables go stale; and somebody is always
sending more traffic than the wire can carry. The engineer's reason for being is
to make that hostile substrate behave like a predictable utility — delivering
bits with bounded latency, acceptable loss, and enough redundancy that a single
fiber cut doesn't take down a hospital, a trading floor, or a country.

## Core Mission

Move data between any two endpoints reliably, securely, and fast enough that the
application above never has to think about how — while links fail, traffic surges,
and the topology changes underneath you.

## Primary Responsibilities

The visible work is configuring routers and switches; the actual work is
designing a system whose behavior emerges from thousands of devices each making
local decisions. A network engineer designs topologies and addressing plans
(subnetting, VLANs, VRFs); chooses and tunes routing protocols (OSPF, IS-IS, BGP)
so traffic finds good paths and reroutes around failure; segments the network for
security and blast-radius control; sizes links and queues so congestion degrades
gracefully instead of collapsing; secures the edges with firewalls, ACLs, and
NAT; and operates all of it — monitoring, capacity planning, and the 2 a.m.
troubleshooting that is mostly working the OSI stack bottom-up. Underneath it is
change control: one fat-fingered prefix can black-hole a region in seconds.

## Guiding Principles

- **The network is a shared, contended resource.** Bandwidth, buffer space, and
  table entries are finite and fought over. Every design decision allocates
  scarcity.
- **Troubleshoot bottom-up.** Link, then layer 2, then IP, then routing, then the
  application. Most "network problems" are duplex mismatches, MTU issues, or DNS
  — not routing.
- **Redundancy that hasn't failed over is theory.** Two paths you've never tested
  are one path.
- **Keep the control plane and data plane separate in your head.** Forwarding is
  fast and dumb; routing is slow and smart. Confusing them is how you misdiagnose.
- **Fail closed for security, fail open for availability — and know which one
  this device is.** A firewall that fails open is a breach; a transit router that
  fails closed is an outage.
- **Document the addressing plan or lose the network.** An undocumented network
  is one resignation away from unmaintainable.
- **Change slowly where the blast radius is large.** A core BGP change is a
  one-way door at line rate.

## Mental Models

- **The OSI / TCP-IP layered model.** Physical, data-link, network, transport,
  application. Naming the layer is half the diagnosis — a lie in detail but an
  indispensable troubleshooting scaffold.
- **The bandwidth-delay product.** Throughput is capped by window size over
  round-trip time. A fat, long pipe is empty unless the window is large enough to
  fill it — why a 10 Gbps transcontinental link can crawl on default TCP.
- **Congestion as the steady state.** TCP probes until it causes loss, then backs
  off. The job is making the edge graceful (AQM, ECN), not a cliff (taildrop,
  bufferbloat).
- **Routing as distributed consensus under failure.** OSPF floods link-state and
  each router runs Dijkstra; BGP is path-vector policy routing trading
  convergence for scale and control. Loops, microloops, and black holes happen
  while the system disagrees.
- **The five-tuple and flow thinking.** Source/dest IP, source/dest port,
  protocol. Firewalls, load balancers, and ECMP hashing all reason in flows.
- **Layer 2 is a flat broadcast domain that must be bounded.** Spanning tree
  exists to prevent the loop that melts a switch fabric in seconds. Keep broadcast
  domains small; route between them.

## First Principles

- The speed of light is a hard floor: ~5 µs/km in fiber. No protocol beats
  physics; London-to-New York will never be under ~28 ms one-way.
- A packet is best-effort: it can be dropped, duplicated, delayed, or reordered,
  and the network is allowed to do all four.
- You cannot fix what you cannot see; the truth lives in counters, flow records,
  and packet captures, not in what the config says.
- Every device is an attack surface and a single point of failure until proven
  otherwise.

## Questions Experts Constantly Ask

- What layer is this actually failing at — and have I proven it, or assumed it?
- What's the MTU end to end, and is anything fragmenting or black-holing big
  packets?
- What's the blast radius if this link, device, or prefix goes away?
- Is this latency, jitter, loss, or throughput? Different causes, different fixes.
- Where does the traffic actually flow — and is that the path I think it takes?
- What converges, how fast, when this fails? Have we tested the failover?

## Decision Frameworks

- **OSI bottom-up triage.** Start at layer 1 and climb. The most common "BGP
  problem" is a flapping interface or a dirty fiber connector.
- **Routing protocol selection.** Inside one domain needing fast convergence, use
  a link-state IGP. Between domains, or where you need policy and scale, use BGP.
  Never leak your IGP to the internet.
- **Segment by trust and failure, not org chart.** Draw VLAN/VRF/zone boundaries
  where a compromise or fault should stop. Flat networks are catastrophic to
  contain.
- **Capacity: design for peak plus loss of one redundant path (N+1).** A link at
  70% on a normal day is at 140% the moment its partner fails.
- **Mitigate, then diagnose.** Reroute, shut the flapping port, withdraw the bad
  prefix — restore service first, find the cause later.

## Workflow

1. **Gather requirements.** Who talks to whom, how much, with what latency and
   availability needs, under what security and compliance constraints.
2. **Design addressing and topology.** Allocate IP space with room to grow,
   choose segmentation, decide the routing design and failure domains.
3. **Model and stage.** Build it in GNS3/Containerlab/EVE-NG; validate
   convergence and failover before touching production.
4. **Implement via change control.** Stage configs, schedule a window, keep a
   rollback and an out-of-band path in case you cut off your own access.
5. **Verify bottom-up.** Link, neighbor adjacencies, route tables, then
   end-to-end reachability and performance.
6. **Instrument.** SNMP/streaming telemetry for counters, NetFlow/IPFIX for flow
   visibility, syslog for events, synthetic probes for path SLAs.
7. **Operate and capacity-plan.** Watch utilization, errors, and drops; provision
   ahead of saturation; test failover deliberately.
8. **Troubleshoot.** Work the stack, capture packets, change one thing at a time.

## Common Tradeoffs

- **Latency vs. throughput.** Big buffers raise throughput and bloat latency;
  small buffers keep latency low but drop under bursts. Voice wants low latency;
  bulk transfer wants throughput.
- **Convergence speed vs. stability.** Aggressive timers reroute faster but
  flap-amplify; damping stabilizes but reacts slowly.
- **Segmentation vs. operational complexity.** More zones contain breaches but
  multiply the rules you maintain and the places traffic is silently denied.
- **Redundancy vs. cost.** Dual everything doubles spend and only pays off the
  day something fails.
- **Centralized control (SDN) vs. distributed resilience.** A controller gives
  global optimization and one brain — and one brain to lose.

## Rules of Thumb

- It's always DNS. When it isn't DNS, it's MTU. When it isn't MTU, it's a duplex
  or speed mismatch.
- Ping proves reachability, not performance; loss and jitter hide behind a
  successful ping.
- If you've never failed to the backup path, you have one path.
- Use a /30 (or /31) for point-to-point links, and document every subnet.
- Asymmetric routing breaks stateful firewalls; make the return path symmetric.
- Out-of-band management is not optional; the day you need it, the in-band path is
  down.

## Failure Modes

- **The accidental black hole.** A summarization or fat-fingered static route
  swallows traffic that pings the next hop but never arrives.
- **MTU mismatch and PMTUD failure.** ICMP gets filtered, path MTU discovery
  breaks, large packets vanish while small ones pass — "the page loads but the
  form won't submit."
- **Broadcast storm / layer-2 loop.** Spanning tree misconfigured or disabled,
  and one loop saturates the fabric instantly.
- **Asymmetric routing through a stateful device.** Return traffic takes a
  different path, the firewall has no session state, connections die mid-flight.
- **Route flap and BGP instability.** A bouncing link churns the region's tables.
- **Ignoring slow degradation.** A fiber with rising CRC errors quietly corrupting
  and retransmitting before it fails.

## Anti-patterns

- **Flat networks** — one giant VLAN where any compromise owns everything.
- **Manual snowflake configs** — each device hand-edited, none reproducible.
- **Permit-any ACLs "temporarily"** — the rule that outlives the engineer who
  wrote it.
- **BGP with default timers and no maximum-prefix limit** — one upstream leak and
  your routers fall over.
- **Monitoring only up/down** — missing errors, drops, and latency creep until
  they become an outage.

## Vocabulary

- **Subnet / CIDR** — a contiguous IP block defined by a prefix length (/24 =
  256 addresses).
- **VLAN / VRF** — a layer-2 broadcast domain / a layer-3 isolated routing table.
- **BGP / OSPF / IS-IS** — inter-domain path-vector / intra-domain link-state
  protocols.
- **MTU / MSS** — maximum transmission unit (frame) / maximum segment size (TCP
  payload).
- **ECMP** — equal-cost multipath; hashing flows across equal paths.
- **NAT / PAT** — translating addresses / overloading hosts onto one IP.
- **Jitter** — variation in packet delay; killer of voice and video.
- **Black hole** — a route that silently discards traffic.
- **Convergence** — time for routers to agree on a new topology.

## Tools

- **CLI and config** — Cisco IOS/NX-OS, Juniper Junos, Arista EOS.
- **Capture and analysis** — Wireshark and tcpdump for ground truth.
- **Reachability and path** — ping, traceroute/mtr, iperf for throughput.
- **Flow and telemetry** — NetFlow/IPFIX/sFlow, SNMP, streaming telemetry (gNMI).
- **Simulation** — GNS3, Containerlab, EVE-NG to test before production.
- **Automation** — Ansible, NETCONF/RESTCONF, Python (Netmiko/NAPALM) so configs
  are reproducible.

## Collaboration

A network engineer sits between everyone and the wire, which makes them the
default suspect for every problem. The relationship with application and SRE
teams is one of proof: they report "the network is slow," and the engineer
demonstrates, with captures and flow data, where the latency or loss actually
lives — often above layer 4. With security engineers they share firewall policy,
segmentation, and incident response; with cloud architects they extend routing
and segmentation into VPCs and overlays; with facilities and carriers they manage
the physical plant and circuit SLAs. The recurring friction is the blame
boundary; engineers who earn trust hand back evidence, not opinions.

## Ethics

Networks carry the traffic people cannot opt out of — emergency calls, medical
telemetry, financial settlement — which makes the engineer a quiet steward of
things that must not stop. The duties: design for the failure that takes lives or
livelihoods, not just the SLA; resist deep packet inspection and interception
beyond what's lawful and disclosed, because the tools that shape traffic can
surveil it; be honest about what redundancy actually buys versus what's vendor
theater; and treat fair queuing as fairness, since deciding whose packets wait
decides whose service degrades. When asked to quietly throttle, block, or
monitor, the obligation is to make the decision and its consequences explicit.

## Scenarios

**The app that "works in the office but not over the VPN."** A user reports a web
app that loads on the LAN but hangs on submit through the VPN. The novice blames
the VPN. The expert works the stack: ping succeeds, small pages load, large POSTs
hang — the signature of an MTU/MSS problem. The tunnel's encapsulation overhead
shrinks the effective MTU; ICMP "fragmentation needed" is filtered, so PMTUD
silently fails and full-size packets are black-holed. The fix is MSS clamping on
the tunnel interface, not a VPN restart. A successful ping proved reachability and
hid the fault one layer up.

**A core BGP change that black-holes a region.** During a planned summarization,
an engineer advertises an aggregate but forgets a discard route for the
unallocated portion, so traffic to unused addresses is accepted then dropped.
Monitoring shows pings to live hosts fine but rising drops elsewhere. The
disciplined response is mitigate first: withdraw the change, let the network
reconverge to known-good, confirm restoration, then reproduce the summarization
in the lab with the correct null route and a prefix filter before re-attempting.
The postmortem fix is a change-review checklist requiring a tested rollback for
every core routing change.

**Designing connectivity for a new data center.** Requirements: low east-west
latency, contained failure domains, room to grow. The engineer chooses a
leaf-spine Clos fabric over three-tier, because it gives predictable equal-cost
hop counts and scales horizontally by adding spines. They run BGP in the underlay
for simple, scalable ECMP, allocate a clean IP plan for double the racks, keep
each rack to one VLAN, and put management on a separate out-of-band network. The
tradeoff: more routing config and BGP sessions in exchange for deterministic
latency and a failure domain that stops at one leaf.

## Related Occupations

The network engineer shares the bottom-up, failure-first instinct of the site
reliability engineer but reasons in packets and paths rather than services and
SLOs. Systems administrators are the closest operational cousin and often the
role network engineering grows out of. Security engineers think adversarially
about the same segmentation and firewalls. Cloud architects extend routing,
addressing, and segmentation into virtual overlays where the same laws apply
without the wire. Electrical engineers own the physical layer beneath layer 1 —
cabling, optics, and signal integrity.

## References

- *TCP/IP Illustrated, Volume 1* — W. Richard Stevens
- *Computer Networks* — Andrew Tanenbaum
- *Internet Routing Architectures* — Sam Halabi
- *Network Warrior* — Gary Donahue
- RFC 791 (IP), RFC 793 (TCP), RFC 4271 (BGP-4)
