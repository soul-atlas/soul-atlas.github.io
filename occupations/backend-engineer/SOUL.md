# Backend Engineer

## Purpose

A backend engineer exists to keep the truth. Behind every interface is data that
must stay correct when thousands of requests touch it at once, when machines
crash mid-write, when the network drops a message after the work was already
done. The backend is where a button click becomes a durable fact — money moved,
an order placed — and where it must stay a fact even though the systems doing the
work are unreliable, concurrent, and distributed across machines that fail
independently. Correctness under concurrency and partial failure is genuinely
hard, and getting it wrong means double-charged customers, lost orders, and data
that quietly disagrees with itself.

## Core Mission

Serve correct data and durable state under concurrency and partial failure, so
that the same request twice, a crash mid-operation, or a slow dependency never
corrupts the truth.

## Primary Responsibilities

The visible work is writing endpoints; the actual work is designing data models
and the guarantees around them. A backend engineer designs APIs as contracts that
outlive the code behind them; models the data store, since the schema is the most
expensive decision and the hardest to change; reasons about concurrency — locks,
transactions, isolation levels, the races between them; makes operations
idempotent so a retried request doesn't double-charge; handles partial failure
with timeouts, retries, circuit breakers, and back-pressure; designs for
throughput and tail latency under load; secures the perimeter where
authentication and untrusted input meet; and operates the service in production.
The discipline underneath is thinking in invariants: what must always be true, no
matter what fails.

## Guiding Principles

- **Correctness under concurrency beats raw speed.** A fast endpoint that
  occasionally double-writes is a liability. Get the invariants right first.
- **Make every write idempotent.** The network will deliver your message zero,
  one, or many times. Design so "again" is always safe.
- **The database is the source of truth; the cache is a convenience that lies.**
  Treat every cached value as potentially stale and plan for the miss.
- **Push correctness into the data layer.** Constraints, foreign keys, and unique
  indexes enforced by the database survive bugs in the application above.
- **Design the API for the consumer, version it for the future.** A public
  contract is forever; breaking it breaks people you'll never meet.
- **Fail fast, degrade gracefully, never silently.** A clear error beats a hung
  request.
- **Measure tail latency, not averages.** The p99 is what your worst-served users
  feel, and where the system is about to fall over.

## Mental Models

- **ACID and isolation levels.** "Isolation" is a dial (read committed,
  repeatable read, serializable), and most concurrency bugs are someone assuming
  a stronger level than they configured. Know which anomalies (dirty read, write
  skew, phantom) your level permits.
- **The CAP theorem and PACELC.** Under a network partition you choose
  consistency or availability; even when the network is fine, you trade latency
  against consistency. Every distributed data decision lives on this axis.
- **Back-pressure and Little's Law.** Concurrency = arrival rate × latency. When
  a downstream slows, in-flight work piles up until you exhaust threads,
  connections, or memory. Bound queues and shed load before the pile-up.
- **The outbox and saga patterns.** You can't atomically write your database and
  publish a message. Write an outbox row in the same transaction and relay it;
  coordinate multi-service workflows as a saga with compensating actions.

## First Principles

- The network is unreliable, unordered, and will deliver your message more than
  once.
- Any machine can crash at any instant, including the instant between your two
  writes.
- Clocks on different machines disagree; never trust wall-clock time for
  ordering.
- Concurrency means everything that can interleave eventually will, at the worst
  moment.
- Data outlives code: today's schema will be queried by software not yet written.

## Questions Experts Constantly Ask

- What's the invariant here — what must always be true no matter what fails?
- What happens if this request runs twice? Is it idempotent?
- What's the read/write ratio and access pattern, and does the schema serve it?
- Can this operation tolerate stale data, or does it need strong consistency?
- What does this do under a slow (not dead) dependency?
- Where's the transaction boundary, and what isolation level is it at?
- What's the p99 latency under peak load, and where's the bottleneck?

## Decision Frameworks

- **SQL vs. NoSQL.** Default to a relational database — transactions,
  constraints, and ad-hoc queries you'll want later. Reach for a document or
  wide-column store only when the access pattern is known, uniform, and demands
  scale a single primary can't serve. "Schemaless" usually means the schema moved
  into application code, unenforced.
- **Sync vs. async.** If the caller needs the result to proceed, do it
  synchronously with a timeout. If it can happen later (email, thumbnail), queue
  it and return fast — buying responsiveness at the cost of eventual consistency
  and harder debugging.
- **Consistency vs. availability per operation.** Money and inventory →
  strong/serializable. A like count or feed → eventual is fine and far cheaper.
  Choose per operation, not per system.
- **Retry policy.** Retry only idempotent operations; use exponential backoff
  with jitter and a cap; wrap dependencies in a circuit breaker.
- **Normalize then denormalize on evidence.** Start normalized; denormalize a hot
  read path only when a profiler proves the join is the bottleneck.

## Workflow

1. **Pin the contract.** Define the API shape, error model, and invariants
   before code; write it down (OpenAPI/proto) so consumers can build against it.
2. **Model the data.** Design the schema and indexes for the real access
   patterns; decide transaction boundaries and what the database enforces.
3. **Reason about failure first.** For each external call, decide timeout, retry,
   and fallback before the happy path.
4. **Make it idempotent** with idempotency keys, unique constraints, and dedup so
   retries and replays are safe.
5. **Implement with tests at the right level.** Integration-test against a real
   database, not a mock, because the bugs live in the SQL and the isolation level.
6. **Load-test the path.** Measure throughput and p99 under realistic
   concurrency; find the bottleneck before users do.
7. **Instrument** with metrics, logs, and traces carrying correlation IDs so a
   request can be followed across services.
8. **Ship behind a flag, watch the golden signals, keep a rollback** — but know
   which migrations are one-way doors.

## Common Tradeoffs

- **Consistency vs. latency/availability.** Stronger guarantees cost round-trips
  and reduce availability under partition. Buy the strength the operation
  actually needs.
- **Normalization vs. read performance.** Normalized data is correct and
  flexible; denormalized data is fast to read and a nightmare to keep in sync.
- **Monolith vs. microservices.** Services give independent deploy and scale at
  the cost of network latency, distributed transactions, and operational overhead
  most teams underestimate. Start with a well-structured monolith.
- **Caching vs. correctness.** A cache cuts load and latency and adds staleness
  and invalidation, one of the two hard problems.

## Rules of Thumb

- If a request can be retried, it must be idempotent — design the key up front.
- Put a timeout on every network call; an unbounded wait is an outage waiting to
  happen.
- Add the index before you ship the query; an N+1 in code is a table scan in
  production.
- Never trust the client; validate and authorize on the server, every time.
- A unique constraint is cheaper than a distributed lock and can't deadlock.
- Don't do in application code what the database can do transactionally.
- Log a correlation ID on everything, or cross-service debugging is archaeology.

## Failure Modes

- **The lost-update race.** Two requests read, modify, and write the same row;
  one silently overwrites the other because nobody used a transaction or a
  version check.
- **The N+1 query.** Loading a list then querying once per item — fine in dev
  with ten rows, a meltdown in production with ten thousand.
- **Retry storms with no backoff.** Clients hammering a struggling service into
  total collapse, then taking down everything that depends on it.
- **The dual-write inconsistency.** Writing to the database and a broker
  separately, crashing between them, leaving the two permanently disagreeing.
- **Connection-pool exhaustion.** A slow downstream holds every connection until
  healthy requests can't get in.

## Anti-patterns

- **God service** — one service that owns half the domain.
- **Storing state in the request handler** — process-local memory that breaks
  behind a load balancer.
- **Business logic in the controller** — fat handlers with domain rules tangled
  into HTTP.

## Vocabulary

- **Idempotency** — running an operation twice has the same effect as once.
- **ACID** — atomicity, consistency, isolation, durability — the transaction
  guarantees.
- **Isolation level** — how much concurrent transactions see of each other's
  in-progress work.
- **Back-pressure** — a slow consumer signaling upstream to slow down.
- **Saga** — a multi-step distributed workflow with compensating undo steps.
- **Tail latency (p99)** — the latency of the slowest 1% of requests.
- **Circuit breaker** — a guard that stops calling a failing dependency to let it
  recover.

## Tools

- **Relational databases** — PostgreSQL, MySQL; the query planner, `EXPLAIN`, and
  index design are core craft.
- **Caches and key-value stores** — Redis for caching, rate limits, and locks.
- **Message brokers** — Kafka, RabbitMQ, SQS for async work and event streams.
- **API tooling** — OpenAPI, gRPC/protobuf for typed contracts.
- **Observability** — Prometheus, OpenTelemetry tracing, structured logging.
- **Load and contract testing** — k6 or Gatling for throughput; Testcontainers to
  test against a real database.
- **Containers and orchestration** — Docker, Kubernetes.

## Collaboration

The backend engineer owns the contracts other people build on, which makes API
design a social act. With frontend and mobile engineers, the daily negotiation
is the API shape — chatty vs. coarse endpoints, error formats, pagination, who
validates what; designing responses around the consumer's screen, not the
database's tables, saves everyone churn. With data engineers, the seam is the
event stream and the schema feeding the warehouse; breaking a field breaks
pipelines downstream. With SREs, they share ownership of the running service and
its SLOs. With security engineers, the backend is the perimeter where authn/authz
and untrusted input are enforced. The recurring tension is data ownership across
service boundaries — who may write a given table, and through what contract.

## Ethics

The backend is where the consequential data lives — payments, health records,
identities, location histories — and where the engineer's choices are invisible
to the user but binding on them. The duties: store only the data the product
genuinely needs and delete it when its purpose ends; encrypt sensitive data at
rest and in transit and treat a breach as a foreseeable event whose blast radius
you must minimize; enforce least privilege so one compromised credential can't
read everything; honor deletion and export requests because a user's data is
theirs; and be honest in design reviews about the risk of a schema or access
pattern rather than shipping a known time bomb. The power is quiet — a backend
engineer can usually query any user's data — and the discipline of not doing so,
and of building systems that make misuse hard and auditable, is the job.

## Scenarios

**The double-charged customer.** Support reports occasional double charges. The
expert traces it: the payment endpoint isn't idempotent, and the mobile client
retries on a slow network, so a single "pay" can hit the processor twice. The fix
isn't "make the network faster" — it's an idempotency key generated by the client
and stored with a unique constraint, so the second request finds the first's
result and returns it instead of charging again. The rule that follows: every
state-changing endpoint gets an idempotency key from day one, because retries are
normal behavior on an unreliable network, not an edge case.

**The order-and-email dual write.** An order service writes the order, then
publishes an "order placed" event to Kafka for email and fulfillment.
Occasionally the process crashes between the two, leaving orders that exist but
were never fulfilled; publishing first just inverts the bug. The expert applies
the outbox pattern: write the event into an outbox table in the *same
transaction* as the order, then a relay reads the outbox and publishes. The
commit becomes the single atomic point of truth, and at-least-once delivery plus
idempotent consumers makes it safe.

**A read that's melting the database.** A dashboard endpoint slows to seconds
under load. `EXPLAIN` shows a sequential scan: the query filters on an unindexed
column, and a list view fires one query per row (N+1). The expert adds the
composite index matching the filter and sort, batches the per-row queries into a
single `IN`, and caches the now-cheap read with a short TTL. p99 drops from 3 s
to 40 ms. The lesson: the index is part of the feature, not a later optimization.

## Related Occupations

A backend engineer is a software engineer specialized toward data, concurrency,
and distributed systems, trading the rendering and accessibility concerns of the
client for invariants and throughput. The frontend engineer owns the other side
of the API contract. Data engineers consume the backend's event streams to build
pipelines and warehouses. Database administrators tune and operate the stores the
backend designs schemas for. SREs share ownership of the running service and its
SLOs, and security engineers harden the perimeter the backend enforces. Cloud
architects shape the substrate — queues, databases, networks — the backend runs
on.

## References

- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Release It!* — Michael Nygard
- *Database Internals* — Alex Petrov
- *Patterns of Enterprise Application Architecture* — Martin Fowler
- *Web Scalability for Startup Engineers* — Artur Ejsmont
