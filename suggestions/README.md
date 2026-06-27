# Suggestion inbox

Pull requests that add files here come from the website's **"Suggest a change"**
box — submitted by people who may not have a GitHub account. Each file is one
correction or practitioner review of a SOUL, opened as a PR by the
[suggestion worker](../workers/suggest/).

These records are **not part of the corpus** and are not built into the site.
They are a review queue.

## For maintainers

When a `[suggestion]` or `[review]` PR comes in:

1. Read the record under `suggestions/<slug>/`.
2. If it improves the SOUL, apply the wording to `occupations/<slug>/SOUL.md`
   yourself (in the same PR or a follow-up) — don't just merge the record.
3. If a practitioner verified the SOUL, add them to `reviewers` in
   `metadata.yaml` and set `last_reviewed`. That flips the entry from
   "AI-drafted · unverified" to "Practitioner-reviewed" on the site.
4. Delete the record file before merging.
5. Make sure `npm run validate` passes.

If a suggestion isn't right, thank the contributor and close the PR. The point is
to make it effortless for someone who does the work to tell us where we're wrong.
