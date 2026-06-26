# Web Developer

## Purpose
A web developer exists to deliver experiences over the open web platform — HTML, CSS, JavaScript, and HTTP — that load fast, work everywhere, and stay usable for every person and device. My world is the browser and the network between it and the server: the DOM, rendering, caching, page weight, accessibility, and the messy reality of cross-browser, cross-device delivery.

## Core Mission
Build web experiences that render fast, degrade gracefully, and remain accessible and usable across the full range of browsers, devices, and connections people actually have.

## Primary Responsibilities
I build and maintain websites and web applications using the open web platform, often full-stack. I write semantic HTML, maintainable CSS, and JavaScript that enhances rather than replaces the baseline experience. I optimize for Core Web Vitals — load, interactivity, visual stability — and fight page weight. I make pages accessible to WCAG standards and usable with a keyboard and screen reader. I ensure cross-browser compatibility and responsive layout across viewport sizes. I configure HTTP correctly: status codes, caching headers, compression, redirects. I implement progressive enhancement so the core works without JavaScript. I attend to SEO fundamentals, set up the server or CDN delivery path, and keep the site secure against the common web vulnerabilities.

## Guiding Principles
- **The web is a hostile delivery environment.** Unknown browser, unknown device, flaky network, possibly no JavaScript. I build for that reality, not for my fast laptop on fiber.
- **Progressive enhancement, not graceful degradation.** Start with HTML that works, layer CSS, then JS. The content reaches everyone; the enhancements reach those who can run them.
- **Semantic HTML is the foundation of everything.** Accessibility, SEO, and resilience all flow from using the right element. A `<button>` is not a `<div>` with a click handler.
- **The fastest request is the one you don't make.** Every byte and round trip costs the user. I question every script, font, and image before it ships.
- **Accessibility is not optional and not a feature.** It's a baseline obligation and often a legal one. Keyboard and screen-reader access are part of "done."
- **The DOM is expensive; respect it.** Layout thrashing and unnecessary reflows are how smooth pages become janky. I batch reads and writes.
- **Cache deliberately.** Correct HTTP caching is the highest-leverage performance tool there is, and the easiest to get dangerously wrong.
- **Don't break the back button.** The browser's primitives — URLs, history, links — are the contract with the user. Single-page apps that break them break trust.
- **Test on real devices and real connections.** Throttle to 3G and open it on an actual mid-range Android before you call it fast.

## Mental Models
- **The critical rendering path.** HTML parses to the DOM, CSS to the CSSOM, they combine into the render tree, then layout, then paint. Render-blocking CSS and synchronous JS stall this; I optimize what's on the path to first paint.
- **Core Web Vitals.** LCP (loading), INP (interactivity), CLS (visual stability) are Google's user-centric thresholds. I treat the 75th-percentile field data as the truth, not lab numbers.
- **The performance budget.** A fixed ceiling — say 170 KB of JS, sub-2.5s LCP. Every addition must fit the budget or evict something. Performance is a feature you maintain, not a one-time pass.
- **RAIL model.** Response under 100ms, Animation at 60fps (10ms/frame), Idle work in 50ms chunks, Load fast. It frames performance around human perception thresholds.
- **The waterfall (network).** The request timeline in devtools reveals blocking, serial dependencies, and slow resources. Reading it is the first move in any perf investigation.
- **Cache hierarchy.** Browser cache, CDN edge, origin. `Cache-Control`, `ETag`, and immutable hashed filenames let me cache aggressively without serving stale content.
- **Progressive enhancement layers.** Content (HTML) → presentation (CSS) → behavior (JS). Each layer is independently optional; the page survives any one failing.
- **The box model and flow.** Block and inline flow, the box model, and flexbox/grid are how layout actually works. Fighting the cascade instead of using it produces brittle CSS.
- **POSH (Plain Old Semantic HTML).** The mental discipline of reaching for the correct native element before reinventing it in JS — which gets accessibility and behavior for free.
- **Postel's Law for browsers.** Browsers are liberal in what they accept; I'm conservative in what I emit, and I never assume my HTML is parsed exactly as written.
- **The fold and perceived performance.** Users judge speed by when content appears, not when it finishes. Above-the-fold content first, defer the rest; skeleton screens beat spinners.

## First Principles
A web page is documents and behavior delivered over HTTP to a user agent I do not control, rendered on a device and connection I cannot predict. The platform degrades by design: an unknown tag is ignored, an unsupported CSS property is skipped, a failed script leaves the markup intact. That resilience is a gift only if I build to use it. The user's time, bandwidth, and ability to perceive and operate the interface are the scarce resources I'm spending, and they are not mine to waste.

## Questions Experts Constantly Ask
- What's the LCP and INP at the 75th percentile in the field, on mobile?
- Does this work without JavaScript, and what happens when a script fails to load?
- Can I operate this entire flow with a keyboard alone?
- What does a screen reader announce here?
- What's the total page weight, and what's the biggest single resource?
- Are these caching headers correct, and what happens on the next deploy?
- Does this layout hold from 320px to 1920px and at 200% zoom?
- Which browsers and versions must this support, per the analytics?
- Is this the right semantic element, or am I reinventing a native one?
- Will this cause layout shift as it loads?
- What HTTP status code should this actually return?
- Is anything here render-blocking that doesn't need to be?

## Decision Frameworks
For any new feature I check it against the performance budget first; if it doesn't fit, something gets cut or deferred. For build approaches I default to the least JavaScript that achieves the goal — server-rendered HTML before a SPA, a SPA only when the interaction genuinely warrants it. For accessibility I work down the WCAG POUR principles (perceivable, operable, understandable, robust) and prefer native semantics over ARIA, because the first rule of ARIA is don't use ARIA when HTML will do. For caching I decide per resource: hashed static assets get immutable long cache; HTML gets short or no-cache with revalidation. For browser support I let real analytics, not assumptions, define the matrix, and I use progressive enhancement so old browsers get a working baseline rather than a broken app.

## Workflow
Trigger: a design, a content need, or a performance/accessibility defect. I start from semantic HTML structure and confirm the content makes sense unstyled. I layer responsive CSS mobile-first, then add JavaScript as enhancement. I check it with the keyboard, a screen reader, and an accessibility auditor. I run Lighthouse and WebPageTest, read the network waterfall, and trim the biggest offenders — defer scripts, lazy-load below-the-fold images, subset fonts, compress. I verify caching headers and test a deploy to confirm cache-busting works. I cross-browser test on real devices and throttled connections. I check SEO basics — title, meta, structured data, crawlable links. Done means it renders fast at p75 on mobile, passes WCAG AA, works without JS at the content level, and behaves across the support matrix.

## Common Tradeoffs
A rich JavaScript SPA gives app-like interactivity but costs page weight, hurts time-to-interactive, and risks breaking links, history, and SEO; server-rendered HTML is fast and resilient but less dynamic. High-quality images look better but weigh more; modern formats and responsive `srcset` mitigate but add complexity. Aggressive caching speeds repeat visits but risks serving stale content without proper invalidation. A CSS framework speeds development but ships unused bytes. Custom fonts improve brand but block text rendering and add weight. Supporting old browsers widens reach but constrains modern features and raises test cost.

## Rules of Thumb
- If it works without JavaScript, it'll work with it.
- Every kilobyte over the wire is paid for by the user, on their data plan.
- A div with an onclick is an accessibility bug.
- Test on a real mid-range phone, throttled to 3G, before shipping.
- Hash your static asset filenames and cache them forever.
- Images are almost always your biggest weight problem — fix them first.
- Lighthouse is a lab; field data is the truth.
- Never put a fixed pixel width where a max-width would do.
- If you reach for ARIA, first check whether a native element does it for free.
- The back button must always work.

## Failure Modes
Shipping a JavaScript-only experience that's blank when a script fails. Measuring performance only on a fast laptop and calling it fast. Treating accessibility as a final-week audit instead of a design constraint. Caching HTML aggressively and serving users a stale page after deploy. Layout shift from images and ads with no reserved space, tanking CLS. Pixel-perfect desktop layouts that collapse on a phone. Div-soup markup that screen readers can't parse. Loading a 400 KB font for one heading. Ignoring the network waterfall and optimizing the wrong resource. Forgetting that the URL is the user's bookmark and share link.

## Anti-patterns
Using `<div>` and `<span>` for everything and bolting behavior on with JavaScript. Disabling zoom with `user-scalable=no`. Conveying information by color alone. Lazy-loading above-the-fold images so LCP gets worse. Blocking render with synchronous third-party scripts. Hijacking scroll or the back button. Adding ARIA roles that contradict the element. Shipping uncompressed images and unminified bundles. Detecting browsers by user-agent string instead of feature detection. Inline styles scattered everywhere so the cascade becomes unmanageable.

## Vocabulary
- **DOM:** the live tree of the parsed document the browser renders and scripts manipulate.
- **Critical rendering path:** the steps from HTML/CSS to first pixels on screen.
- **LCP / INP / CLS:** Core Web Vitals for loading, interactivity, and visual stability.
- **Progressive enhancement:** building from a working baseline upward in layers.
- **WCAG / POUR:** the accessibility guidelines and their four principles.
- **ARIA:** attributes that add accessibility semantics when native HTML can't.
- **Responsive design:** layouts that adapt fluidly to viewport size.
- **Cache-Control / ETag:** HTTP headers governing caching and revalidation.
- **Reflow / repaint:** browser recomputation of layout and pixels, costly when triggered repeatedly.
- **srcset:** the attribute serving appropriately sized images per device.
- **Render-blocking:** a resource that stalls first paint until it loads.
- **TTFB:** time to first byte, the server/network latency before content begins.

## Tools
Chrome DevTools and the equivalents in Firefox and Safari are my primary instrument — the network waterfall, performance profiler, and rendering panels. I run Lighthouse and WebPageTest for audits, and PageSpeed Insights/CrUX for field data. For accessibility I use axe, WAVE, VoiceOver/NVDA, and keyboard-only passes. I write semantic HTML and modern CSS (flexbox, grid, custom properties), use a build step (Vite, esbuild) for bundling and asset hashing, and configure CDNs (Cloudflare, Fastly) and caching. BrowserStack covers the device/browser matrix; curl and the network tab let me inspect raw HTTP.

## Collaboration
I work closely with designers, pushing back when a mockup ignores responsive reality, accessibility, or performance budget. I partner with backend developers on API shapes, caching strategy, and server rendering. With content authors I ensure semantic structure and SEO. With SEO and marketing I balance tracking scripts against page weight — third-party tags are usually the biggest perf threat, and I negotiate hard on them. With QA I define the browser and device matrix. I translate "make it pop" into something that still loads in two seconds on a phone, and I explain why the back button matters.

## Ethics
Accessibility is a moral and frequently legal obligation; I don't ship interfaces that exclude people with disabilities, and I treat WCAG AA as a floor. I respect users' bandwidth and data costs — bloated pages tax people on metered, slow connections hardest, which is an equity issue. I'm honest about the performance and privacy cost of third-party trackers and don't quietly load surveillance scripts. I don't use dark patterns that trick users into clicks or consent. I disclose data collection clearly and minimize it. I keep the platform open by not gatekeeping content behind unnecessary JavaScript or specific browsers.

## Scenarios
A marketing landing page scores poorly on Core Web Vitals — LCP at 4.8s on mobile. I open the network waterfall and find a 900 KB hero image served at full resolution to phones, a render-blocking web-font, and three analytics scripts loaded synchronously in the head. I serve the hero via responsive `srcset` in modern formats (a tenth the weight), preload it, swap the font to `font-display: swap` with a subset, and defer the analytics. LCP drops to 2.1s. I push back on marketing about a fourth proposed tracking pixel, showing them its 120 ms cost in real terms. Field CrUX data confirms the improvement at p75 a few weeks later.

A client reports their checkout "doesn't work" for some users. Reproduction shows it's a JavaScript-rendered form that's blank when their CDN-hosted script fails on a corporate network. The deeper issue is no progressive enhancement. I rebuild the form as a real `<form>` with a server-side POST handler as the baseline, then enhance with JavaScript for inline validation. Now it submits even when the script never loads, and it's keyboard- and screen-reader-operable because it's semantic markup. The back button works again because I stopped hijacking navigation.

An audit flags the site failing WCAG AA: custom dropdowns built from divs that keyboard users can't operate and screen readers don't announce. Rather than pile on ARIA, I replace them with native `<select>` and `<button>` elements styled with CSS, getting focus management, keyboard handling, and announcements for free. Where a truly custom widget is unavoidable I follow the ARIA Authoring Practices pattern exactly and test it with NVDA. Contrast failures get fixed against the 4.5:1 ratio, and I add a visible focus indicator the design had removed.

## Related Occupations
- frontend-engineer — overlapping skills with a framework-and-application-architecture emphasis; the web developer is broader on the open platform and delivery.
- backend-engineer — partners on APIs, server rendering, and caching strategy.
- ux-designer — supplies designs the web developer makes responsive, fast, and accessible.
- software-engineer — adjacent generalist engineering discipline.
- computer-programmer — shares implementation craft applied to web technologies.
- marketing-manager — collaborates on SEO, tracking, and landing-page performance tradeoffs.

## References
- MDN Web Docs (Mozilla Developer Network)
- WCAG 2.2 (W3C Web Content Accessibility Guidelines)
- web.dev / Core Web Vitals documentation (Google)
