# Frontend Engineer

## Purpose

A frontend engineer exists because the gap between a system's capability and a
human's understanding is where products live or die. Servers can be flawless and
the company still fails if the interface confuses, stalls, or excludes the
person in front of it. The frontend is the only part of the system most users
ever touch, and it runs on a machine you do not own, over a network you cannot
predict, in a browser whose quirks you inherited. The reason for the role is to
turn data and intent into an interface that is fast, legible, accessible, and
correct on a 5-year-old Android phone on a train as readily as on the
engineer's own laptop.

## Core Mission

Render the right thing, at the right time, fast enough that the user never
thinks about the machine — on every device, network, and ability level the
product claims to serve.

## Primary Responsibilities

The visible work is building screens; the actual work is managing state,
rendering, and the unforgiving constraints of the client. A frontend engineer
translates designs into components that survive real content (the 40-character
name, the missing avatar, the right-to-left language); decides what state lives
where — server, URL, local, in-memory — because state placement is the source
of most UI bugs; meets performance budgets on the devices users actually own,
not the flagship in their pocket; makes interfaces operable by keyboard and
screen reader because accessibility is a legal and moral floor, not a polish
pass; handles the network as a hostile, slow, flaky medium with loading, error,
and empty states for everything; and builds and maintains the design system so
the team ships consistent UI without re-deciding the button every sprint.
Underneath it all is taste: knowing when something *feels* wrong even when it
technically works.

## Guiding Principles

- **The user's device is slower than yours and their network is worse.** Test on
  a throttled mid-tier phone, not the machine you build on. Your laptop lies to
  you about how fast the product is.
- **Accessibility is a requirement, not a feature.** If it doesn't work with a
  keyboard and a screen reader, it doesn't work. WCAG is the floor.
- **State is the enemy; derive, don't store.** Every piece of duplicated state is
  a chance for two parts of the screen to disagree. Compute from a single source.
- **The DOM is expensive; the network is more expensive.** Minimize both, and
  know which one you're paying for in any given interaction.
- **Layout shift is a bug.** Content that jumps as it loads is the interface
  lying about being ready. Reserve space before you have the data.
- **Progressive enhancement over graceful degradation.** Start from content that
  works, then layer on the experience, so a failed script doesn't blank the page.
- **Optimize for change.** Designs churn weekly. Build components that absorb new
  requirements without a rewrite.

## Mental Models

- **The critical rendering path.** HTML → CSSOM → render tree → layout → paint →
  composite. Knowing this pipeline tells you why a CSS change triggers a reflow
  while a `transform` only repaints, and where to spend your milliseconds.
- **The component tree and unidirectional data flow.** State flows down as props,
  events flow up. When the UI is wrong, the bug is "what state produced this
  render?" — not "what did I mutate?"
- **Core Web Vitals as the user's felt experience.** LCP (is the main content
  here?), INP (does it respond when I tap?), CLS (does it stop moving?). These
  are Google's proxies for "does this feel good," and they gate search ranking.
- **The performance budget.** A fixed ceiling — say 170 KB of JavaScript, LCP
  under 2.5 s — that turns "is this fast?" from opinion into a number a PR can
  fail against.
- **Reconciliation and the render-commit split.** The framework diffs a virtual
  tree and commits the minimum DOM mutation. Most "React is slow" complaints are
  really "I re-rendered the world because my state was shaped wrong."
- **The cascade and specificity.** CSS isn't styling-by-assignment; it's a
  conflict-resolution algorithm. Most layout pain is a specificity war you didn't
  know you'd entered. Scope styles so the cascade can't surprise you.
- **The waterfall.** Requests that depend on each other serialize and stack their
  latencies. Flatten the waterfall; fetch in parallel; preload what you'll need.

## First Principles

- The browser is a runtime you do not control and cannot fully test.
- Every byte shipped to the client is paid for by every user, every load,
  forever.
- The main thread is single-threaded; block it and the whole interface freezes.
- Users judge speed by perception, not by stopwatch — a skeleton that appears
  instantly beats a complete page that arrives 200 ms later.
- There is no "the user"; there is a distribution of devices, networks,
  languages, and abilities, and you are responsible for the long tail.

## Questions Experts Constantly Ask

- Where should this state live, and who is allowed to change it?
- What does this look like with no data, too much data, and an error?
- How does this behave on a slow 3G connection and a low-end phone?
- Can I reach and operate every interactive element with only the keyboard?
- What's the loading experience — and does anything shift after it arrives?
- How much JavaScript am I shipping, and can the user do anything before it runs?
- Is this re-rendering more than it needs to, and how would I know?
- Will this break in right-to-left, in German (long words), or at 200% zoom?

## Decision Frameworks

- **Where does the state belong?** Server state (data you fetch) → a query cache
  like TanStack Query, never hand-rolled. URL state (filters, page, selected tab)
  → the URL, so it's shareable and survives reload. UI state (is this menu open)
  → local component state. Putting server state in a global store is the classic
  mistake that creates stale, conflicting copies.
- **Render strategy: CSR vs. SSR vs. SSG vs. streaming.** Static content →
  pre-render it. SEO-critical or slow-first-paint → server-render. Highly
  interactive app behind a login → client-render. When in doubt, server-render
  the shell and hydrate the islands.
- **Build vs. adopt for UI.** Don't build your own date picker, virtualized
  table, or drag-and-drop. These are tar pits of edge cases (timezones,
  accessibility, touch). Adopt a tested library; build only your differentiator.
- **The accessibility-first build order.** Semantic HTML first (a `<button>` is
  not a `<div onClick>`), then ARIA only where semantics fall short. Reaching for
  ARIA early usually means you skipped the right element.

## Workflow

1. **Clarify the design.** Walk the mockups for the states the designer didn't
   draw: empty, loading, error, overflow, the longest plausible string.
2. **Model the data and state.** Decide what's fetched, what's derived, what's
   local, and where each lives, before writing a component.
3. **Build semantic structure first.** Get the HTML right and keyboard-operable
   with no styling, then layer CSS, then interactivity.
4. **Wire the network honestly.** Every fetch gets a loading, error, and empty
   state. Assume it will be slow and sometimes fail.
5. **Measure against the budget.** Run Lighthouse and a real-device check; look
   at bundle size and the Web Vitals, not just "looks done."
6. **Test behavior, not implementation.** Testing Library queries by what the
   user sees and does, so refactors don't break the suite.
7. **Review for the long tail.** Zoom to 200%, tab through it, run a screen
   reader, throttle the CPU, switch to a narrow viewport.
8. **Ship behind a flag and watch real-user metrics** (RUM), because lab numbers
   and field numbers diverge.

## Common Tradeoffs

- **Bundle size vs. features.** Every dependency is weight every user downloads.
  A 50 KB library for one screen is a tax on every other screen unless you split
  it out.
- **Server rendering vs. client interactivity.** SSR improves first paint and SEO
  but costs server complexity and hydration weight; pure CSR is simpler to deploy
  but slow to first content. Few choices have a clean winner.
- **Abstraction in components vs. flexibility.** A component with twenty props is
  a function pretending to be a configuration file. Sometimes two simpler
  components beat one general one.
- **Design fidelity vs. performance.** The custom font, the hero video, the
  parallax — each is a Web Vitals cost. Negotiate with design using numbers.
- **Optimistic UI vs. correctness.** Updating the screen before the server
  confirms feels instant but must reconcile and roll back gracefully when the
  write fails.
- **CSS-in-JS ergonomics vs. runtime cost.** Co-located styles are pleasant to
  write and can add runtime work; zero-runtime or utility approaches trade some
  ergonomics for speed.

## Rules of Thumb

- If it's clickable, it's a `<button>` or `<a>` — never a bare `<div>`.
- Reserve space for images and ads with `width`/`height` or `aspect-ratio` or
  you will ship layout shift.
- Animate only `transform` and `opacity`; everything else triggers layout.
- Debounce input, throttle scroll; never run expensive work on every keystroke.
- Memoize when a profiler says to, not on instinct — premature `useMemo` is
  noise.
- A loading spinner under ~300 ms is worse than no spinner; it just flickers.
- Color contrast must hit 4.5:1 for body text; "looks fine to me" is not the
  standard.
- Ship the smallest JS that lets the user do the first thing; lazy-load the rest.

## Failure Modes

- **The everything-is-global-state app.** All data in one store, every change
  re-rendering half the tree, nobody able to trace why.
- **Death by waterfall.** Component mounts, fetches, renders a child, which
  fetches, which renders a child — three serial round-trips before anything
  appears.
- **Accessibility bolted on at the end.** A div-soup interface that a sighted
  mouse user loves and a screen-reader user can't operate at all.
- **The flagship-device delusion.** Building and testing only on a fast machine,
  then watching field metrics reveal a product that's unusable for half the
  users.
- **Re-render storms.** A new object or function passed as a prop on every render
  defeats memoization and silently melts performance.
- **Unhandled async states.** Happy-path-only code that shows a blank screen on
  error and a frozen one while loading.

## Anti-patterns

- **`div` soup** — semantically meaningless markup that breaks accessibility and
  SEO.
- **Prop drilling ten levels deep** — passing data through components that don't
  use it; reach for context or composition.
- **`useEffect` as a data-flow mechanism** — chaining effects that set state that
  triggers effects, instead of deriving values.
- **Stringly-typed styling** — magic pixel values and z-index arms races with no
  system behind them.
- **Index-as-key in dynamic lists** — keys that change meaning on reorder,
  corrupting component state.
- **Disabling the linter rule instead of fixing the dependency array.**

## Vocabulary

- **Hydration** — attaching client-side interactivity to server-rendered HTML.
- **Reflow / repaint** — recomputing layout vs. redrawing pixels; reflow is the
  expensive one.
- **Tree shaking** — eliminating unused code from the bundle at build time.
- **Code splitting** — breaking the bundle so users download only what a route
  needs.
- **Debounce / throttle** — limiting how often a handler runs by waiting vs.
  rate-capping.
- **FOUC** — flash of unstyled content before CSS applies.
- **CLS / LCP / INP** — Core Web Vitals for stability, load, and responsiveness.
- **Memoization** — caching a computed value to skip recomputation.
- **Shadow DOM** — encapsulated DOM and styling for web components.
- **Virtualization** — rendering only the visible rows of a long list.

## Tools

- **Framework** — React, Vue, Svelte, or Solid; the component model and its
  reactivity rules.
- **Build tooling** — Vite or Turbopack for dev speed; bundlers that tree-shake
  and split.
- **Browser DevTools** — the Performance panel (flame charts, layout-shift
  regions), Network throttling, and the accessibility tree inspector.
- **Lighthouse and WebPageTest** — lab measurement of Web Vitals and the request
  waterfall.
- **Testing Library and Playwright** — behavior-level unit and end-to-end tests.
- **Storybook** — building and reviewing components in isolation, including their
  edge states.
- **axe / screen readers** (VoiceOver, NVDA) — auditing accessibility for real.

## Collaboration

The frontend engineer sits at the busiest seam in product development. With
designers, the work is a negotiation: pushing back when a mockup ignores the
loading state or fails contrast, and translating pixels into a component system
that scales. With backend engineers, the contract is the API shape — and the
recurring fight is over-fetching, chatty endpoints, and who owns pagination and
error formats; a frontend engineer who can read an OpenAPI spec and propose a
better response shape saves both sides weeks. With product managers, they
surface the cost of "small" requests that hide loading states and edge cases.
With UX researchers, they close the loop between what was built and how it
actually performs in usability tests. The healthiest teams treat the design
system as shared infrastructure both design and engineering own.

## Ethics

The frontend is where dark patterns are implemented, which makes the frontend
engineer the last line of defense and a willing accomplice by default. The
duties: refuse the confirm-shaming dialog, the pre-checked consent box, the
cancel flow buried six clicks deep, and the cookie banner engineered to make
"accept all" the only easy path. Accessibility is an ethical obligation, not a
backlog item — building an interface a blind user can't operate excludes them
from services they may have no alternative to. Performance is an equity issue:
a bloated bundle taxes the users on the cheapest phones and the worst networks
hardest, which is often the poorest users. And the data you collect through the
interface — every analytics event, every session replay — should be the minimum
the product needs, disclosed honestly.

## Scenarios

**A page that feels slow but "passes" in the lab.** Lighthouse scores well, yet
support tickets say the dashboard is sluggish. The expert pulls field data (RUM)
and finds INP is terrible at the 75th percentile on Android. The Performance
panel shows a single long task: every keystroke in a filter box re-renders a
10,000-row table. The fix is three moves — debounce the input, virtualize the
table so only visible rows render, and memoize the row component so unchanged
rows skip reconciliation. INP drops from 600 ms to under 100 ms. The lesson:
lab medians hid a tail that real low-end devices live in.

**The "just add a tooltip" request.** Product wants a tooltip on an icon. The
expert doesn't reach for a div with a hover handler. Hover excludes touch and
keyboard users entirely, the content can be cut off by `overflow: hidden`, and a
naive implementation isn't announced to screen readers. They use a tested
primitive (a headless library) that handles focus, escape-to-close, ARIA
`aria-describedby`, and viewport collision. A five-minute ticket reveals a dozen
accessibility edge cases — which is exactly why you don't hand-roll it.

**Choosing where filter state lives.** A search page has filters, a page number,
and a sort order. A junior puts them in a global store; the URL never changes.
The expert moves all of it into the URL query string. Now the result is
shareable, the back button works, a reload restores the exact view, and the
server can render the correct page on first load. The "harder" choice eliminates
a whole class of state-sync bugs because the URL becomes the single source of
truth.

## Related Occupations

A frontend engineer is a software engineer specialized toward the client and the
human in front of it, trading distributed-systems depth for rendering,
accessibility, and perceived performance. The backend engineer owns the other
side of the API contract; the two negotiate response shapes and ownership of
validation and pagination daily. UX designers hand off the intent the frontend
makes real and operable, and UX researchers test whether it worked. Mobile
developers face the same client-side state and performance problems against
native platform constraints rather than the browser. Product managers supply the
why and the priorities the interface expresses.

## References

- *Refactoring UI* — Adam Wathan & Steve Schoger
- *Inclusive Components* — Heydon Pickering
- *High Performance Browser Networking* — Ilya Grigorik
- web.dev (Core Web Vitals guidance) — Google
- WCAG 2.2 — W3C Web Accessibility Initiative
- MDN Web Docs — Mozilla
