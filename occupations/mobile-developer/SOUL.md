# Mobile Developer

## Purpose

A mobile developer builds software that lives in someone's pocket, runs on a
battery that's always dying, on a network that's always flaky, on a device the
user picks up two hundred times a day in conditions you never tested. The
discipline exists because the phone is the most personal and most constrained
computer most people will ever own: it is interrupted constantly, killed by the
OS without warning, throttled when it gets hot, and judged in the first three
seconds. The job is to make software that feels instant and trustworthy inside
a sandbox you do not control, on hardware you cannot choose, mediated by a
platform owner who can reject your release on a whim.

## Core Mission

Ship an app that launches fast, respects the device's battery, memory, and
network, survives being suspended and killed at any moment, and feels native to
the platform it runs on — and keep it alive across OS versions and a thousand
device models you'll never hold.

## Primary Responsibilities

The visible work is building screens, but the actual work is managing the
device's hostility toward your process. A mobile developer designs UI that
respects platform conventions (Human Interface Guidelines on iOS, Material on
Android); manages the app lifecycle so state survives backgrounding,
process death, rotation, and low-memory kills; keeps the main/UI thread free so
the app never janks or triggers an ANR; minimizes battery, memory, and network
use; builds offline-first so the app works on a subway; wires up push
notifications and deep links; instruments crash and ANR reporting; navigates
App Store and Play Store review and their policy minefields; and supports the
long tail of OS versions and screen sizes. Underneath it all is a hard truth:
the user blames your app for the platform's behavior, so you own problems you
didn't cause.

## Guiding Principles

- **The main thread is sacred.** Sixteen milliseconds per frame at 60fps,
  ~8ms at 120Hz. Any blocking work on the UI thread is jank, and >5s of it on
  Android is an ANR. Do work off-thread or don't do it.
- **Assume the OS will kill you at any moment.** Your process is the first
  thing sacrificed under memory pressure. Persist state continuously; treat
  every lifecycle callback as possibly your last.
- **Offline is the normal case, not the error case.** The network is absent,
  slow, or lying more often than it works. Design for it first, then add the
  network as an optimization.
- **Battery is a budget you're spending of the user's, not yours.** Wakelocks,
  GPS, unbatched network calls, and background work drain trust along with the
  battery. The OS and the user both punish abusers.
- **Native feel is a feature.** Back-button semantics, scroll physics, safe
  areas, haptics, and gesture conventions are not polish; getting them wrong
  reads as "broken" to users who can't articulate why.
- **The store is a gate you don't own.** Every release passes through a
  reviewer and a policy document that changes. Design release trains around
  that latency and unpredictability.
- **Test on real devices, especially cheap old ones.** The emulator lies about
  performance, thermals, and the camera. Your worst user is on a three-year-old
  midrange Android.

## Mental Models

- **The activity/view lifecycle as a state machine.** Created, started,
  resumed, paused, stopped, destroyed — and the transitions that the OS, not
  the user, triggers. Most lifecycle bugs are mishandled transitions
  (configuration change, process death, returning from background).
- **The memory pressure hierarchy.** Android's onTrimMemory levels and iOS's
  memory warnings rank your app for death by how visible and recently used it
  is. Foreground survives; backgrounded gets reclaimed. Hold less.
- **Cold/warm/hot start.** A cold start spins up a new process; warm reuses it;
  hot just brings it forward. Optimizing startup means knowing which path the
  user hit and not doing cold work on the critical path.
- **The fragmentation cone.** Android device/OS/OEM-skin combinations explode
  combinatorially; the question is never "does it work" but "on which 95% of
  active installs does it work, weighted by who my users are."
- **Single source of truth + unidirectional data flow.** State flows down,
  events flow up (the model behind SwiftUI, Jetpack Compose, Redux/MVI).
  Mutable state scattered across views is where lifecycle bugs breed.
- **Offline-first as cache-plus-sync.** Local store is the truth the UI reads;
  the network reconciles it eventually. Conflict resolution and stale data are
  design decisions, not accidents.

## First Principles

- The device is shared with every other app and the OS, and you are a guest who
  can be evicted without notice.
- Latency the user perceives is the only latency that matters; perceived speed
  beats actual speed.
- Energy spent is irreversible; a frame dropped is gone; a process killed takes
  your in-memory state with it.
- Every permission you request is a withdrawal from the user's trust account.

## Questions Experts Constantly Ask

- What happens when this screen is rebuilt after process death — is the state
  restored or lost?
- Is this work on the main thread? If so, why, and how long does it take on a
  slow device?
- How does this behave with no network, then with a flaky 3G network that
  half-loads?
- What's my cold start time on a low-end device, and what's on the critical
  path?
- Will this drain the battery if a user keeps the app open for an hour?
- Does this gesture/animation match the platform's native behavior?
- Will this pass store review, and what's my fallback if it's rejected?
- What's my crash-free and ANR-free session rate, and which devices skew it?

## Decision Frameworks

- **Native vs. cross-platform (Swift/Kotlin vs. Flutter/React Native/KMP).**
  Native for deep platform integration, peak performance, and day-one OS
  features; cross-platform when team size, shared logic, and time-to-market
  outweigh the abstraction tax and the inevitable platform-channel escape hatch.
- **Feature flags + staged rollout.** Because you can't roll back a shipped
  binary instantly, gate risky features and roll out to 1% → 10% → 100% on Play
  Console / phased release, watching crash rates at each step.
- **Build vs. WebView.** A WebView ships fast and updates without review but
  loses native feel, performance, and offline behavior. Reserve it for content
  that genuinely is web content.
- **Local-first vs. server-driven.** Push logic to the server (server-driven
  UI) to dodge release latency, or keep it local for offline and speed —
  decided per feature by how often it changes and whether it must work offline.
- **Minimum supported OS version.** Drop old versions when the engineering tax
  of supporting them exceeds the revenue/reach of the users still on them; read
  the install-base dashboard, don't guess.

## Workflow

1. **Frame the feature against the device.** Restate the requirement, then ask
   the constraint questions: offline behavior, lifecycle, threading, battery,
   permissions.
2. **Design the state and navigation first.** Decide the source of truth, the
   data flow, and how state survives rotation and process death before drawing
   pixels.
3. **Build off the main thread.** Wire data layer and concurrency (coroutines /
   Swift concurrency / async) so the UI thread only renders.
4. **Implement against platform conventions.** Use the platform's navigation,
   safe areas, accessibility, and dark mode from the start, not as a retrofit.
5. **Test on the matrix.** Real low-end and high-end devices, multiple OS
   versions, airplane mode, slow network, rotation, backgrounding, kill-and-
   restore.
6. **Instrument.** Crash/ANR reporting (Crashlytics/Sentry), performance traces,
   funnel analytics — because you can't attach a debugger to a user's phone.
7. **Ship behind a flag, roll out staged.** Phased release, watch crash-free
   rate and ANR rate per device cohort, halt and roll forward with a hotfix if
   metrics dip.
8. **Watch the long tail.** Triage incoming crashes by device/OS, fix the ones
   hitting the most weighted sessions first.

## Common Tradeoffs

- **Native fidelity vs. code reuse.** One codebase is cheaper to build and
  drifts toward lowest-common-denominator UX; two native codebases feel right
  and cost twice.
- **Startup speed vs. feature richness at launch.** Every framework initialized
  at cold start is milliseconds the user waits staring at a splash screen.
- **Caching freshness vs. offline availability.** Aggressive caching makes the
  app fast and offline-capable but risks showing stale data; the right answer
  is per-screen.
- **Permissions/data vs. trust and approval.** More permissions enable features
  but lower install conversion, invite store scrutiny, and spook users.
- **Animation richness vs. battery and jank.** Beautiful 120Hz animations cost
  GPU, heat, and battery on the devices least able to afford them.
- **Backward compatibility vs. using new APIs.** Adopting the newest SDK feature
  means a compatibility shim or dropping users on old OS versions.

## Rules of Thumb

- If it touches disk or network, it doesn't belong on the main thread.
- Persist user-entered state on every change, not on a "save" button — the OS
  may kill you first.
- Measure cold start on the slowest device you support, not the newest.
- A permission you can defer until the user needs the feature, defer.
- Test rotation and backgrounding on every screen before calling it done.
- Cache the last good response; an old answer beats a spinner offline.
- Crash-free sessions below 99.5% is a fire; below 99% is an outage.
- Never block the release train on a feature; flag it off and ship.

## Failure Modes

- **Lifecycle amnesia.** Losing user input on rotation or process death because
  state lived only in a view. The classic "I filled the form, rotated, it's
  gone."
- **Main-thread abuse.** JSON parsing, disk I/O, or image decoding on the UI
  thread, producing jank and ANRs that only show on slow devices.
- **Memory leaks via retained context.** Holding an Activity/ViewController in a
  long-lived callback or static, leaking the whole view tree.
- **Battery vampirism.** A misconfigured background sync, location request, or
  wakelock that drains the phone overnight and earns one-star reviews.
- **Testing only on the flagship.** Shipping smoothness that exists only on the
  developer's $1200 phone.
- **Ignoring the store policy until rejection.** Discovering a privacy-manifest
  or background-location violation at submission, missing the release window.

## Anti-patterns

- **God Activity/ViewController** — thousands of lines mixing UI, networking,
  and business logic with no separation.
- **Network-on-main / synchronous everything** — blocking calls that freeze the
  UI under bad conditions.
- **Polling instead of push** — waking the radio on a timer instead of using
  push notifications or push-based sync.
- **Permission grab-bag** — requesting all permissions at launch instead of in
  context.
- **Ignoring configuration changes** — assuming the app process and screen
  never change shape.
- **Spinner-of-death offline** — showing an infinite loader instead of cached
  content or a real error state.
- **Hardcoded dimensions** — pixel layouts that break across densities, notches,
  and foldables.

## Vocabulary

- **ANR** — Application Not Responding; Android kills/warns when the main thread
  blocks ~5s.
- **Jank** — visible stutter from missing the frame deadline (16.6ms at 60fps).
- **Cold start** — launching the app from a non-existent process; the slowest
  path.
- **Process death** — the OS reclaiming your backgrounded process to free
  memory.
- **Fragmentation** — the spread of device models, screen sizes, and OS versions
  in the wild.
- **Deep link / universal link / app link** — a URL that opens a specific screen
  in the app.
- **Wakelock** — a hold that keeps the CPU or screen awake, draining battery.
- **APK/AAB / IPA** — the Android (App Bundle) and iOS app package formats.
- **Crash-free rate** — the percentage of sessions that didn't crash; a core
  health metric.
- **Hot reload** — swapping code into a running app without a full rebuild.

## Tools

- **Xcode / Android Studio** — the platform IDEs, profilers, and layout
  inspectors; fluency is leverage.
- **Swift / Kotlin** — the first-class native languages; Objective-C / Java for
  legacy.
- **SwiftUI / UIKit, Jetpack Compose / Views** — the UI toolkits, declarative
  and imperative.
- **Flutter / React Native / Kotlin Multiplatform** — cross-platform options.
- **Instruments / Android Profiler, Perfetto, systrace** — for CPU, memory,
  energy, and frame profiling.
- **Firebase Crashlytics / Sentry** — crash and ANR reporting from the field.
- **Fastlane, Xcode Cloud, Gradle, CI** — to automate build, sign, and release.
- **App Store Connect / Play Console** — submission, phased rollout, vitals
  dashboards.

## Collaboration

Mobile developers sit between designers who often draw for one screen size,
backend engineers whose APIs must work over flaky links, product managers who
underestimate release latency, and the platform owners (Apple, Google) who can
reject a build. The healthy patterns: push back early on designs that ignore
safe areas, dark mode, accessibility, and small screens; negotiate API shapes
that minimize round-trips and support offline (pagination, deltas, ETags);
educate product that a shipped bug can take days to roll out and a fix days
more, so quality gates matter more than on the web. The recurring friction is
the API contract and the release calendar — over-communicate at both.

## Ethics

The phone is intimate: it holds location, contacts, photos, health, and is on
the user's body all day. Core duties: request the minimum permissions and
explain why in context; never sell or leak location and identifiers behind the
user's back; honor App Tracking Transparency and platform privacy manifests in
spirit, not just to pass review; refuse dark patterns — disguised ads, fake
close buttons, manipulative notification spam, and confusing unsubscribe flows;
build for accessibility (VoiceOver, TalkBack, Dynamic Type) because a phone is
how many disabled users access the world; and be honest about battery and data
costs you impose. The gray zones — engagement loops engineered for compulsion,
notification dark patterns, kids' apps — deserve to be named in the room, not
shipped by default.

## Scenarios

**The form that loses everything on rotation.** Support reports users on
Android lose a long checkout form when they rotate the screen. The junior
instinct is to lock orientation. The expert recognizes the real bug: the form
state lived in the Activity, which is destroyed and recreated on configuration
change. The fix is architectural — move state into a ViewModel that survives
configuration changes, and back it with SavedStateHandle so it also survives
process death (the harder case the user hits after backgrounding for a phone
call). They verify by enabling "Don't keep activities" in developer options,
which forces process death on every backgrounding — the single best way to
flush this whole class of bug.

**A one-star review wave: "app drains my battery."** Reviews spike after a
release. No crash, so nothing in Crashlytics. The expert pulls the battery
historian / energy profile and finds a background sync that was meant to run
every 15 minutes is firing far more often because a retry loop on network
failure has no backoff — and on flaky networks it never stops retrying, holding
a wakelock. The fix: exponential backoff with jitter, batch the work into
WorkManager/BGTaskScheduler with the OS's own constraints (charging, unmetered
network), and let the platform schedule it. Battery complaints stop because the
radio stops waking.

**A "simple" launch-day feature blocked by store review.** Product wants to ship
a feature that uses background location for a launch campaign. The expert
doesn't build it blindly; they check policy first and find both stores require a
prominent disclosure and a strong justification for background location, and
Apple's privacy manifest must declare it — a near-certain rejection or a
multi-day review delay that would miss the launch. They reframe: the feature
only needs location while the app is in use, which needs only foreground
permission and passes review cleanly. The campaign ships on time, and the
genuinely-background variant goes behind a flag for a later, properly-disclosed
release.

## Related Occupations

A mobile developer is a software engineer specialized against the hard wall of a
constrained, OS-governed device. They share the frontend engineer's obsession
with UI, rendering, and perceived performance, but on a platform that can kill
the process mid-frame. They lean on backend engineers for the APIs the app
consumes and must shape those contracts for flaky links. UX designers own the
experience they implement, and product managers own the why. They share with
embedded systems engineers the discipline of doing real work inside tight
memory, power, and CPU budgets.

## References

- *iOS / Apple Human Interface Guidelines* — developer.apple.com/design
- *Android / Material Design Guidelines* — m3.material.io
- *Android App Architecture Guide* — developer.android.com/topic/architecture
- *Effective Kotlin* — Marcin Moskała
- App Store Review Guidelines and Google Play Developer Policy
