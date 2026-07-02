#!/usr/bin/env python3
"""Scan a unified diff for common code-review risk signals.

Pure stdlib, no dependencies. The software-engineer SOUL supplies the judgment;
this reads a `git diff` and points attention at the risky hunks so a human
review starts from signal instead of a blank page. Every hit is a *prompt to
look*, not a verdict — false positives are expected.

Examples:
    git diff main... | review.py
    review.py --file changes.diff
"""
import argparse
import re
import sys

# Added-line patterns worth a second look: (compiled pattern, label).
SIGNALS = [
    (re.compile(r"\b(TODO|FIXME|XXX|HACK)\b"), "unresolved marker"),
    (re.compile(r"console\.log|System\.out\.print|fmt\.Print|\bprint\s*\(|\bprintln\s*\("),
     "debug output"),
    (re.compile(r"(?i)(password|secret|api[_-]?key|token)\s*[:=]\s*\S"),
     "possible hardcoded secret"),
    (re.compile(r"AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----"),
     "possible credential"),
    (re.compile(r"\beval\s*\(|\bexec\s*\("), "dynamic eval/exec"),
    (re.compile(r"except\s*:\s*pass|catch\s*\([^)]*\)\s*\{\s*\}"), "swallowed error"),
]

TEST_HINT = re.compile(r"test|spec|__tests__|\.test\.|\.spec\.", re.I)


def main() -> None:
    p = argparse.ArgumentParser(description="Scan a unified diff for review risk signals")
    p.add_argument("--file", help="read the diff from a file (default: stdin)")
    a = p.parse_args()

    text = (
        open(a.file, encoding="utf-8", errors="replace").read()
        if a.file
        else sys.stdin.read()
    )
    if not text.strip():
        print("No diff on input. Pipe `git diff` or pass --file.", file=sys.stderr)
        sys.exit(2)

    cur = None
    added, removed = {}, {}
    findings = []
    touched_test = touched_src = False

    for line in text.splitlines():
        if line.startswith("+++ "):
            cur = line[4:].strip()
            if cur.startswith("b/"):
                cur = cur[2:]
            added.setdefault(cur, 0)
            removed.setdefault(cur, 0)
            if TEST_HINT.search(cur):
                touched_test = True
            elif cur != "/dev/null":
                touched_src = True
        elif line.startswith("+") and not line.startswith("+++"):
            if cur is not None:
                added[cur] += 1
            body = line[1:]
            for pat, label in SIGNALS:
                if pat.search(body):
                    findings.append((cur, label, body.strip()[:80]))
        elif line.startswith("-") and not line.startswith("---"):
            if cur is not None:
                removed[cur] += 1

    files = [f for f in added if f and f != "/dev/null"]
    print(f"# Review scan - {len(files)} file(s), "
          f"+{sum(added.values())}/-{sum(removed.values())} lines\n")

    if findings:
        print("## Risk signals (verify each - false positives happen)")
        for f, label, snip in findings:
            print(f"- [{label}] {f}: {snip}")
        print()
    else:
        print("## Risk signals: none of the scanned patterns matched.\n")

    print("## Attention")
    big = [f for f in files if added[f] >= 200]
    if big:
        print(f"- Large change(s), consider splitting: {', '.join(big)}")
    if touched_src and not touched_test:
        print("- Source changed but no test/spec files touched - is the new behaviour covered?")
    if not big and not (touched_src and not touched_test):
        print("- Nothing structural flagged; review on merits.")
    print()

    print("## Checklist (fill in per hunk)")
    for item in [
        "Correctness: edge cases, null/None, error paths, concurrency, leaks",
        "Boundaries: input validation, authorization, untrusted data",
        "Tests: new behaviour covered; existing tests still meaningful",
        "Clarity: names, dead code, comments that match the code",
        "Blast radius: migrations, API/contract changes, backward compatibility",
    ]:
        print(f"- [ ] {item}")


if __name__ == "__main__":
    main()
