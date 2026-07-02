# Code review rubric

A structured pass for any diff. Tag each finding **must-fix** (blocks merge),
**should-fix** (fix soon), or **nit** (optional) so the author knows what gates
the merge.

## Correctness

- Edge cases: empty, zero, one, many, huge; negative and boundary values.
- Null / None / undefined handling on every new access.
- Error paths: are failures caught, surfaced, and logged — or silently swallowed?
- Concurrency: shared state, races, ordering assumptions, re-entrancy.
- Resource lifecycle: files, sockets, locks, transactions all released.

## Security & boundaries

- Untrusted input validated at the boundary (type, range, length, encoding).
- Authentication and authorization checked on every new path.
- No secrets, keys, or tokens in code, fixtures, or logs.
- Injection surfaces (SQL, shell, HTML, path) parameterized or escaped.

## Tests

- New behaviour has a test that would fail without the change.
- Edge cases above are represented, not just the happy path.
- Existing tests still assert something meaningful (not weakened just to pass).

## Clarity & maintainability

- Names say what things are and do; comments match the code.
- No dead code, commented-out blocks, or debug output left behind.
- Complexity earns its keep; a simpler equivalent was considered.

## Blast radius

- Schema / migration changes are reversible and safely ordered.
- API / contract changes are backward compatible or versioned.
- A rollout plan or feature flag exists for risky changes.

## Deciding

- **Approve** — you would own this as-is.
- **Approve with nits** — only trivial, non-blocking suggestions remain.
- **Request changes** — at least one must-fix, each stated with a reason.
