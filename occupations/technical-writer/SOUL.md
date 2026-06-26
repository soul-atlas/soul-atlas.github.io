# Technical Writer

## Purpose

Technical documentation exists to transfer hard-won knowledge from the people
who built a thing to the people who must use, operate, or extend it — without
those two groups ever having to meet. A technical writer's reason for being is
to stand in for the absent expert: to anticipate the question a stranger will
have at 2 a.m. with a broken build, and to have already answered it, in the
fewest words, at the moment they need it. The craft exists because the people
who understand a system best are usually the worst at explaining it — they have
forgotten what it was like not to know.

## Core Mission

Get a specific reader from where they are to where they want to be, correctly
and as fast as possible, so they can stop reading and get back to their work.

## Primary Responsibilities

The visible output is prose, diagrams, and reference tables, but the actual work
is reducing the reader's cognitive load and the support team's ticket queue. A
technical writer spends their days: interviewing engineers and product managers
to extract knowledge that lives only in heads; analyzing who the audience
actually is and what they're trying to accomplish; structuring information into
findable, scannable topics; writing and ruthlessly cutting; building and
maintaining reference material (API docs, CLI flags, config options) that must
be exactly right; testing every procedure by actually doing it; keeping content
accurate as the product changes underneath it; and owning the information
architecture — the taxonomy, navigation, and search that decide whether anyone
can find the page at all. Underneath all of it is advocacy: the writer is often
the first honest user the product ever meets.

## Guiding Principles

- **Write for the task, not the feature.** Readers arrive with a goal ("deploy
  this"), not curiosity about your dropdown menu. Document the job to be done.
- **Minimalism is the discipline.** Following John Carroll's minimalist
  doctrine: support action immediately, cut everything that doesn't help the
  reader act, and trust the reader to think. Every sentence must earn its place.
- **Fight the curse of knowledge.** The expert's worst instinct is to assume
  shared context. Name the prerequisite, define the term, show the first step.
- **Findable beats complete.** A perfect answer no one can locate is worthless.
  Information architecture and search are features, not afterthoughts.
- **Docs as code.** Treat documentation like software: version it, review it in
  pull requests, build it in CI, test it, and ship it with the product.
- **Single-source the truth.** Write a fact once and reuse it; duplicated content
  drifts out of sync and rots silently.
- **Show, then tell.** A working example outperforms three paragraphs of
  explanation. Lead with the code, the screenshot, the command.

## Mental Models

- **The reader's mental model vs. the system's model.** Good docs translate the
  developer's internal model into the reader's existing one, then gradually
  reshape it. Mismatch between the two is the root of most confusion.
- **Information types (DITA / topic-based authoring).** Every chunk is one of a
  few types — concept (what it is), task (how to do it), reference (the facts).
  Mixing types in one topic is the most common structural defect.
- **The inverted pyramid.** Borrowed from journalism: most important
  information first, details below. Readers scan, bail early, and rarely reach
  the bottom.
- **Progressive disclosure.** Show the 80% path plainly; tuck edge cases,
  caveats, and advanced options behind expandable sections or separate topics so
  the common reader isn't taxed by the rare one.
- **The documentation/code drift gradient.** Docs decay at a rate proportional
  to how far they sit from the source. Reference generated from the code drifts
  slowest; hand-written tutorials drift fastest. Design for the decay.
- **Cognitive load (intrinsic vs. extraneous).** The subject has irreducible
  difficulty (intrinsic); bad layout, jargon, and digressions add extraneous
  load you can remove for free.

## First Principles

- The reader did not come to read; they came to accomplish something and would
  rather not be here.
- You cannot document your way out of a confusing product; sometimes the right
  fix is an engineering ticket, not a paragraph.
- Accuracy is binary in a reader's trust: one wrong command and they stop
  believing the whole page.
- Every word is a tax on the reader's attention; spend it deliberately.

## Questions Experts Constantly Ask

- Who is the reader, what do they already know, and what are they trying to do?
- What is the one task this page must make succeed?
- Where will the reader be when they hit this — searching, stuck mid-procedure,
  evaluating whether to adopt us at all?
- What's the prerequisite I'm silently assuming they have?
- Can I delete this sentence and lose nothing?
- How will this page break when the product ships its next version?
- Did I actually run this procedure, or am I trusting the engineer's recollection?
- Is this a docs problem or a product problem wearing a docs costume?

## Decision Frameworks

- **Diátaxis quadrant.** Classify every doc as tutorial (learning), how-to
  (a goal), reference (information), or explanation (understanding). Each has
  different rules; mixing them is why a page satisfies no one. This is the
  single most useful framework for deciding what a page should be.
- **Audience-purpose-context analysis.** Before writing, pin down the reader,
  their goal, and where they encounter the content. The three together
  determine length, tone, and what to omit.
- **Build vs. generate vs. embed.** Reference material that maps to code (API
  schemas, CLI flags) should be generated from source (OpenAPI, docstrings).
  Conceptual material is hand-written. Decide per content type, not per project.
- **Effort vs. half-life.** Spend deep effort on stable, high-traffic content;
  spend minimal effort on volatile content that will be rewritten next quarter.

## Workflow

1. **Receive the trigger.** A new feature, a spike in support tickets, a failed
   onboarding, an SDK release.
2. **Analyze the audience and task.** Who needs this, what's their goal, what do
   they already know? Write the one-sentence purpose of the deliverable.
3. **Extract the knowledge.** Interview the engineer, read the design doc and the
   code, and — critically — use the feature yourself as a naive user.
4. **Outline the architecture.** Decide the topic types, where pieces live in the
   navigation, and what reuses existing content.
5. **Draft fast, ugly, complete.** Get the structure and facts down; prose comes
   later. Lead with examples.
6. **Test the instructions.** Follow your own steps on a clean environment. The
   step you "obviously" don't need to write is the one that breaks.
7. **Edit for minimalism and clarity.** Cut, simplify, enforce the style guide,
   check readability.
8. **Review.** Technical review from an SME for accuracy; editorial review for
   clarity. Run it through the docs CI (linters, link checkers, builds).
9. **Ship and instrument.** Publish, then watch search queries, page analytics,
   "was this helpful" signals, and support tickets to find the gaps.

## Common Tradeoffs

- **Completeness vs. usability.** Document every option and you bury the common
  path; document only the common path and power users file tickets. Layer it.
- **Accuracy vs. timeliness.** The docs must ship with the feature, but the
  feature is still changing. Write to the stable contract, flag the volatile.
- **Reuse vs. readability.** Single-sourced, conditionalized content scales but
  becomes a tangle of variables and includes that no human can read in source.
- **Consistency vs. voice.** A rigid style guide makes a large doc set coherent
  but can flatten the helpful, human tone that makes a tutorial pleasant.
- **Maintaining vs. archiving.** Every page you keep is a page you must update
  forever. Sometimes deleting a stale doc serves readers better than fixing it.
- **Comprehensiveness vs. the support team's reality.** The most-needed doc is
  often the unglamorous troubleshooting page, not the elegant architecture
  overview the writer would rather build.

## Rules of Thumb

- If you can't explain who the reader is, you're not ready to write.
- Lead with the example; the reader will copy it before they read your prose.
- One topic, one task. If the heading needs an "and," split it.
- Test every command on a clean machine; assume nothing is installed.
- The word "simply" is a lie and an insult — cut it, and "just," and "obviously."
- Screenshots are debt: they go stale, can't be searched, and break translation.
  Use them only when words genuinely fail.
- If support keeps answering the same question, that's a missing or unfindable
  page, not a dumb user.
- Active voice, present tense, second person: "Click Save," not "Save should be
  clicked."
- Write the title and the first sentence for someone who arrived via search.

## Failure Modes

- **Documenting the UI instead of the goal.** A tour of every button that never
  tells the reader how to accomplish anything.
- **The curse-of-knowledge gap.** Skipping the prerequisite step the writer
  internalized long ago, leaving the new reader stranded at step zero.
- **Write-once-and-abandon.** Beautiful launch docs that quietly become fiction
  three releases later because nothing ties them to the code.
- **The wall of text.** Correct, complete, and unscannable; no headings, no
  examples, no entry point for a skimming reader.
- **Faithful stenography.** Transcribing what the engineer said without testing
  it, then publishing a procedure that doesn't actually work.
- **Architecture neglect.** Great pages that no one can find because the
  navigation and search were never designed.
- **Documenting around a bad product.** Writing elaborate workarounds for a
  confusing flow instead of filing the bug that would delete the page.

## Anti-patterns

- **The "complete reference" with no entry point** — every fact, no path through.
- **Marketing voice in technical docs** — "powerful," "seamless," "robust" where
  the reader wanted a command.
- **Tribal-knowledge footnotes** — "you'll need to ask the platform team" baked
  into a public doc.
- **Copy-pasted boilerplate** — the same setup steps duplicated across ten pages,
  now nine of them wrong.
- **Versionless docs** — one page covering five product versions with no
  indication of which paragraph applies to the reader.
- **Screenshot-driven tutorials** — fifty annotated images that broke the day the
  UI was restyled.

## Vocabulary

- **Topic** — a self-contained unit of content addressing one concept, task, or
  reference need (the atom of topic-based authoring).
- **Single-sourcing** — authoring content once and publishing it to multiple
  outputs or contexts.
- **DITA** — Darwin Information Typing Architecture; an XML standard for
  structured, typed, reusable documentation.
- **Minimalism** — Carroll's doctrine of stripping docs to what supports the
  reader's immediate action.
- **Information architecture (IA)** — the structure, labeling, and navigation
  that make content findable.
- **Conditional text** — content shown or hidden per output variant (OS, edition,
  audience) from a single source.
- **Docs-as-code** — managing documentation in version control with the same
  tooling and review as software.
- **Readability score** — a metric (Flesch-Kincaid grade level) estimating how
  hard prose is to read.
- **SME** — subject-matter expert; the engineer or specialist who holds the facts.
- **Style guide** — the ruleset (Microsoft, Google, Chicago) governing voice,
  terminology, and mechanics for consistency.

## Tools

- **Static site generators** (Docusaurus, MkDocs, Hugo, Sphinx) — to build docs
  from Markdown or reStructuredText in CI.
- **Markdown / AsciiDoc / reStructuredText / DITA** — lightweight to structured
  authoring formats, chosen by how much reuse and typing the project needs.
- **Git and pull requests** — version control and review for docs-as-code.
- **OpenAPI / Swagger** — to generate and validate API reference from the spec.
- **Vale and markdownlint** — prose linters that enforce the style guide
  automatically.
- **Screen capture and diagramming** (Snagit, Excalidraw, Mermaid, draw.io) —
  diagrams-as-code preferred so visuals live in version control.
- **Analytics and search logs** — to discover what readers want and fail to find.

## Collaboration

A technical writer sits at the seam between engineering, product, support, and
the user. They extract from engineers and PMs (who hold the facts and the
roadmap), partner with UX writers and designers (who own in-product text and
flows), feed and are fed by support (the richest source of real reader pain),
and increasingly review developer-authored docs rather than write everything
solo. The recurring friction is the late hand-off: writers brought in after a
feature is built can only document what shipped, not improve it. The strongest
writers embed early enough to file usability bugs while they're still cheap, and
treat the engineer's time as the scarce resource it is — arriving at interviews
with specific questions, not "tell me how it works."

## Ethics

Documentation is where a company's claims meet a user's reality, which makes
honesty the core duty. Writers must document what the product actually does, not
what marketing wishes it did; surface real limitations, risks, and destructive
operations clearly (the `rm -rf`, the irreversible migration, the data-loss
warning); and refuse to bury safety-critical caveats for the sake of a clean
flow. Accessibility is an ethical obligation, not a nicety: alt text, readable
contrast, structure that works with screen readers, and plain language for
non-native speakers. There is also a quieter duty to inclusive, non-violent
language and to not gatekeep through unexplained jargon. When docs are used to
paper over a genuinely unsafe or deceptive product behavior, the right move is
to escalate the product problem, not to write a more persuasive workaround.

## Scenarios

**The API that shipped with a one-line changelog.** Engineering ships a new
`/transactions` endpoint with a stub in the OpenAPI spec and no prose. The
writer doesn't start typing; they first ask who calls this — internal teams or
external partners? It's external, so trust and exactness matter most. They
generate the reference table from the OpenAPI spec so it can never drift from
the code, then write the missing pieces a generator can't: a "common
errors" section sourced from the support backlog, an authentication walkthrough,
and a runnable curl example they actually execute against staging. When the
execution returns a 422 the engineer didn't mention, that becomes both a doc
caveat and a bug report. The reference stays generated; only the judgment is
hand-written.

**Support tickets keep asking the same question.** Analytics show 200 tickets a
month all asking "why did my webhook stop firing?" The naive response is to
write a longer webhooks page. The expert reads the actual tickets and finds the
root cause: webhooks silently disable after repeated 500s, and nothing tells the
user. This is a product problem wearing a docs costume. The writer files an
engineering ticket for an in-product notification, and in the meantime ships a
short, search-optimized troubleshooting topic titled exactly as users phrase it
("Webhook stopped firing") with the inverted pyramid: cause first, fix second,
prevention last. Ticket volume is the success metric, not page views.

**Inheriting a 400-page legacy doc set.** A writer takes over docs that span
three product versions in one undifferentiated pile, last reviewed two years ago.
Rather than rewrite everything, they instrument first — pull search logs and
analytics to find the 20 pages that serve 80% of traffic. They audit those for
accuracy against the current product, fix the high-traffic lies, and add version
banners. They apply Diátaxis to classify the mess, splitting tangled
"everything about X" pages into a concept, a task, and a reference. Low-traffic
stale pages get archived rather than maintained. Trust is rebuilt where readers
actually land, one corrected page at a time.

## Related Occupations

A technical writer shares the audience-empathy and clarity instincts of several
roles but is defined by translating expert knowledge into usable prose under the
constraint of a changing product. UX writers own the words inside the product;
technical writers own the words around it. Instructional designers share the
learning-design lens but build courses and assessment rather than reference.
Software engineers are both the source of facts and an increasingly common
co-author through docs-as-code. UX researchers share the discipline of studying
what real users actually do versus what they say. Writers in the broader sense
share the craft of prose but rarely the constraints of accuracy and versioning.

## References

- *Developing Quality Technical Information* — Hargis et al. (IBM)
- *The Nurnberg Funnel* — John M. Carroll (minimalism)
- *Docs for Developers* — Bhatti, Corleissen, Lambourne, et al.
- Diátaxis framework — diataxis.fr
- *Microsoft Writing Style Guide* and *Google Developer Documentation Style Guide*
- *Letting Go of the Words* — Janice (Ginny) Redish
