# Suggestion inbox

Pull requests that add files here come from the website's **"Suggest a change"**
box — submitted by people who may not have a GitHub account. Each file is one
correction or practitioner review of a SOUL, opened as a PR by the
[suggestion worker](../workers/suggest/).

These records are **not part of the corpus** and are not built into the site.
They are a review queue.

## What happens automatically

1. **Automated review** ([`suggestion-review.yml`](../.github/workflows/suggestion-review.yml))
   runs on every suggestion PR. It checks the record deterministically — target
   section is canonical, the SOUL and section exist, there's concrete wording, no
   script/HTML, no Style Guide banned phrases — posts a verdict comment, and labels
   the PR `suggestion-review-passed` or `suggestion-review-failed`.
2. **Maintainer approval.** A maintainer comments **`/lgtm`** (or `lgtm`). If the
   PR passed review, [`suggestion-apply.yml`](../.github/workflows/suggestion-apply.yml)
   then applies the wording to `souls/<slug>/SOUL.md`, deletes the record,
   runs `npm run validate`, squash-merges, and triggers a deploy — automatically.

So in the happy path you only read the suggestion and type `/lgtm`.

## The auto-apply rule (read before /lgtm)

Auto-apply **replaces the entire target `## Section`** with the suggested wording —
it can't do nuanced merges. The review comment shows exactly what will be replaced.
If you want to keep some existing lines or merge by hand, edit the file yourself
instead of using `/lgtm`.

## Provenance

Auto-apply does **not** set `reviewers` or `last_reviewed` — an applied suggestion
is still a draft. Only mark a SOUL practitioner-reviewed when a person who does the
work has actually vouched for it (add them to `reviewers`, set `last_reviewed`); that
flips the badge from "AI-drafted · unverified" to "Practitioner-reviewed."

## Doing it by hand

If review failed, the suggestion needs nuance, or you'd rather not auto-merge:

1. Read the record under `suggestions/<slug>/`.
2. Apply the wording to `souls/<slug>/SOUL.md` yourself.
3. Delete the record file.
4. Make sure `npm run validate` passes, then merge.

If a suggestion isn't right, thank the contributor and close the PR. The point is to
make it effortless for someone who does the work to tell us where we're wrong.
