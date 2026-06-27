# Frontend Engineer

## Purpose

A frontend engineer exists because the gap between a system's capability and a
human's understanding is where products live or die. Servers can be flawless and
the company still fails if the interface confuses, stalls, or excludes the
person in front of it. The frontend is the only part most users touch, and it
runs on a machine you do not own, over a network you cannot predict, in a browser
whose quirks you inherited. The role turns data and intent into an interface
that is fast, legible, accessible, and correct on a 5-year-old Android phone on a
train as readily as on the engineer's own laptop.

## Core Mission

Render the right thing, at the right time, fast enough that the user never
thinks about the machine — on every device, network, and ability the product
serves.

## Primary Responsibilities

The visible work is building screens; the actual work is managing state,
rendering, and the unforgiving constraints of the client. A frontend engineer
translates designs into components that survive real content (the 40-character
name, the missing avatar, right-to-left text); decides where state lives —
server, URL, local, in-memory — since placement causes most UI bugs; meets
performance budgets on the devices users actually own; makes interfaces operable
by keyboard and screen reader; handles the network as a slow, flaky medium with
loading, error, and empty states; and maintains the design system. Underneath it
all is taste: knowing when something *feels* wrong even when it technically
works.

## Guiding Principles

- **The user's device is slower than yours and their network is worse.** Test on
  a throttled mid-tier phone; your laptop lies about how fast the product is.
- **Accessibility is a requirement, not a feature.** If it doesn't work with a
  keyboard and a screen reader, it doesn't work. WCAG is the floor.
- **State is the enemy; derive, don't store.** Every duplicated value is a chance
  for two parts of the screen to disagree. Compute from a single source.
- **Layout shift is a bug.** Content that jumps as it loads is the interface
  lying about being ready. Reserve space before you have the data.
- **Progressive enhancement.** Start from content that works, then layer on the
  experience, so a failed script doesn't blank the page.

## Mental Models

- **The critical rendering path.** HTML → CSSOM → render tree → layout → paint →
  composite. This pipeline tells you why a width change triggers a reflow while a
  `transform` only repaints — and where to spend your milliseconds.
- **The component tree and unidirectional data flow.** State flows down as props,
  events up. When the UI is wrong, the bug is "what state produced this render?"
  — not "what did I mutate?"
- **Core Web Vitals as the user's felt experience.** LCP (is the main content
  here?), INP (does it respond when I tap?), CLS (does it stop moving?) — Google's
  proxies for "does this feel good," and they gate search ranking.
- **The performance budget.** A fixed ceiling — say 170 KB of JavaScript, LCP
  under 2.5 s — that turns "is this fast?" into a number a PR can fail against.
- **Reconciliation.** The framework diffs a virtual tree and commits the minimum
  DOM mutation. Most "React is slow" is really "I re-rendered the world because
  my state was shaped wrong."
- **The cascade and specificity.** CSS is a conflict-resolution algorithm; most
  layout pain is a specificity war you didn't know you'd entered.
- **The waterfall.** Dependent requests serialize and stack their latencies.
  Fetch in parallel; preload what you'll need.

## First Principles

- The browser is a runtime you do not control and cannot fully test.
- Every byte shipped to the client is paid for by every user, every load.
- The main thread is single-threaded; block it and the whole interface freezes.
- Users judge speed by perception — a skeleton shown instantly beats a complete
  page 200 ms later.
- There is no "the user"; there is a distribution of devices, networks,
  languages, and abilities, and you own the long tail.

## Questions Experts Constantly Ask

- Where should this state live, and who is allowed to change it?
- What does this look like with no data, too much data, and an error?
- How does this behave on a slow 3G connection and a low-end phone?
- Can I reach and operate every interactive element with only the keyboard?
- How much JavaScript am I shipping, and can the user do anything before it runs?
- Will this break in right-to-left, in German (long words), or at 200% zoom?

## Decision Frameworks

- **Where does the state belong?** Server state → a query cache like TanStack
  Query, never hand-rolled. URL state (filters, page, tab) → the URL, so it's
  shareable and survives reload. UI state (is this menu open) → local. Server
  state in a global store creates stale, conflicting copies — the classic mistake.
- **Render strategy: CSR vs. SSR vs. SSG.** Static content → pre-render.
  SEO-critical or slow-first-paint → server-render. Interactive app behind a
  login → client-render. When in doubt, server-render the shell and hydrate the
  islands.
- **Build vs. adopt for UI.** Don't build your own date picker, virtualized
  table, or drag-and-drop — tar pits of edge cases (timezones, accessibility,
  touch). Adopt a tested library; build only your differentiator.
- **Accessibility-first build order.** Semantic HTML first (a `<button>` is not a
  `<div onClick>`), ARIA only where semantics fall short.

## Workflow

1. **Clarify the design.** Walk the mockups for the states the designer didn't
   draw: empty, loading, error, overflow, the longest plausible string.
2. **Model the data and state.** Decide what's fetched, derived, and local, and
   where each lives, before writing a component.
3. **Build semantic structure first,** keyboard-operable unstyled, then layer CSS
   and interactivity.
4. **Wire the network honestly.** Every fetch gets a loading, error, and empty
   state; assume it will be slow and sometimes fail.
5. **Measure against the budget.** Run Lighthouse and a real-device check; watch
   bundle size and Web Vitals, not just "looks done."
6. **Test behavior, not implementation,** so refactors don't break the suite.
7. **Review for the long tail.** Zoom to 200%, tab through it, run a screen
   reader, throttle the CPU, narrow the viewport.
8. **Ship behind a flag and watch real-user metrics** (RUM); lab and field
   numbers diverge.

## Common Tradeoffs

- **Bundle size vs. features.** A 50 KB library for one screen is a tax on every
  other screen unless you split it out.
- **Server rendering vs. client interactivity.** SSR improves first paint and SEO
  but costs server complexity and hydration weight; CSR is simpler to deploy but
  slow to first content. Few choices have a clean winner.
- **Design fidelity vs. performance.** The custom font, the hero video, the
  parallax — each is a Web Vitals cost. Negotiate with design using numbers.
- **Optimistic UI vs. correctness.** Updating the screen before the server
  confirms feels instant but must roll back gracefully on a failed write.

## Rules of Thumb

- If it's clickable, it's a `<button>` or `<a>` — never a bare `<div>`.
- Reserve space for images with `width`/`height` or `aspect-ratio`, or you ship
  layout shift.
- Animate only `transform` and `opacity`; everything else triggers layout.
- Debounce input, throttle scroll; never run expensive work on every keystroke.
- Memoize when a profiler says to — premature `useMemo` is just noise.
- A loading spinner under ~300 ms is worse than none; it just flickers.
- Color contrast must hit 4.5:1 for body text.
- Ship the smallest JS that lets the user do the first thing; lazy-load the rest.

## Failure Modes

- **The everything-is-global-state app.** All data in one store, every change
  re-rendering half the tree, nobody able to trace the cause.
- **Accessibility bolted on at the end.** A div-soup interface that a sighted
  mouse user loves and a screen-reader user can't operate at all.
- **The flagship-device delusion.** Testing only on a fast machine, then watching
  field metrics reveal a product unusable for half the users.
- **Re-render storms.** A new object or function passed as a prop on every render
  defeats memoization and melts performance silently.

## Anti-patterns

- **`div` soup** — semantically meaningless markup that breaks accessibility and
  SEO.
- **Prop drilling ten levels deep** — passing data through components that don't
  use it; reach for context or composition.
- **`useEffect` as a data-flow mechanism** — chaining effects that set state that
  triggers effects, instead of deriving values.
- **Index-as-key in dynamic lists** — keys that change on reorder, corrupting
  component state.

## Vocabulary

- **Hydration** — attaching client-side interactivity to server-rendered HTML.
- **Reflow / repaint** — recomputing layout vs. redrawing pixels; reflow costs
  more.
- **Code splitting** — breaking the bundle so a route downloads only what it
  needs.
- **Debounce / throttle** — limiting how often a handler runs.
- **CLS / LCP / INP** — Core Web Vitals for stability, load, and responsiveness.
- **Shadow DOM** — encapsulated DOM and styling for web components.
- **Virtualization** — rendering only the visible rows of a list.

## Tools

- **Framework** — React, Vue, Svelte, or Solid; its component model and
  reactivity rules.
- **Build tooling** — Vite or Turbopack; bundlers that tree-shake and code-split.
- **Browser DevTools** — Performance panel, Network throttling, accessibility
  tree inspector.
- **Lighthouse and WebPageTest** — lab measurement of Web Vitals and the
  waterfall.
- **Testing Library and Playwright** — behavior-level unit and end-to-end tests.
- **Storybook** — building and reviewing components in isolation, edge states
  included.
- **axe / screen readers** (VoiceOver, NVDA) — auditing accessibility.

## Collaboration

The frontend engineer sits at the busiest seam in product development. With
designers, the work is a negotiation: pushing back when a mockup ignores the
loading state or fails contrast, and translating pixels into a component system
that scales. With backend engineers, the contract is the API shape, and the
recurring fight is over-fetching, chatty endpoints, and who owns pagination and
error formats; a frontend engineer who reads an OpenAPI spec and proposes a
better response shape saves both sides weeks. With product managers, they surface
the cost of "small" requests that hide loading states and edge cases. UX
researchers close the loop on how the built interface actually performs. Healthy
teams treat the design system as shared infrastructure.

## Ethics

The frontend is where dark patterns get implemented, which makes the frontend
engineer the last line of defense and a willing accomplice by default. The
duties: refuse the confirm-shaming dialog, the pre-checked consent box, the
cancel flow buried six clicks deep, and the cookie banner engineered so "accept
all" is the only easy path. Accessibility is an ethical obligation — an interface
a blind user can't operate excludes them from services they may have no
alternative to. Performance is an equity issue: a bloated bundle taxes the
cheapest phones and worst networks hardest, often the poorest users. And the
data collected through the interface should be the minimum the product needs,
disclosed honestly.

## Scenarios

**A page that feels slow but "passes" in the lab.** Lighthouse scores well, yet
tickets say the dashboard is sluggish. Field data (RUM) shows INP is terrible at
the 75th percentile on Android. The Performance panel reveals one long task:
every keystroke in a filter box re-renders a 10,000-row table. Three moves fix
it — debounce the input, virtualize the table, and memoize the row so unchanged
rows skip reconciliation. INP drops from 600 ms to under 100 ms. Lab medians hid
a tail that real low-end devices live in.

**The "just add a tooltip" request.** Product wants a tooltip on an icon. The
expert doesn't reach for a div with a hover handler: hover excludes touch and
keyboard users, the content can be clipped by `overflow: hidden`, and a naive
build isn't announced to screen readers. They use a headless primitive handling
focus, escape-to-close, `aria-describedby`, and viewport collision — the dozen
accessibility edge cases hiding behind a five-minute ticket.

**Choosing where filter state lives.** A search page has filters, a page number,
and a sort order. A junior puts them in a global store; the URL never changes.
The expert moves all of it into the URL query string. Now the result is
shareable, the back button works, a reload restores the exact view, and the
server renders the right page on first load — one source of truth instead of a
class of state-sync bugs.

## Related Occupations

A frontend engineer is a software engineer specialized toward the client and the
human in front of it, trading distributed-systems depth for rendering,
accessibility, and perceived performance. The backend engineer owns the other
side of the API contract. UX designers hand off the intent the frontend makes
real, and UX researchers test whether it worked. Mobile developers face the same
client-side state and performance problems against native constraints rather
than the browser. Product managers supply the why the interface expresses.

## References

- *Refactoring UI* — Adam Wathan & Steve Schoger
- *Inclusive Components* — Heydon Pickering
- *High Performance Browser Networking* — Ilya Grigorik
- web.dev (Core Web Vitals guidance) — Google
- WCAG 2.2 — W3C Web Accessibility Initiative
- MDN Web Docs — Mozilla
