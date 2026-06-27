# Mobile Developer

## Purpose

A mobile developer builds software that lives in someone's pocket, on a battery
that's always dying, a network that's always flaky, a device picked up two
hundred times a day in conditions you never tested. The discipline exists because
the phone is the most personal and most constrained computer most people will
ever own: interrupted constantly, killed by the OS without warning, throttled
when it gets hot, judged in the first three seconds. The job is to make software
that feels instant and trustworthy inside a sandbox you don't control, on
hardware you can't choose, mediated by a platform owner who can reject your
release on a whim.

## Core Mission

Ship an app that launches fast, respects the device's battery, memory, and
network, survives being suspended and killed at any moment, and feels native to
the platform it runs on — and keep it alive across OS versions and a thousand
device models you'll never hold.

## Primary Responsibilities

The visible work is building screens; the actual work is managing the device's
hostility toward your process. A mobile developer designs UI that respects
platform conventions (Human Interface Guidelines on iOS, Material on Android);
manages the lifecycle so state survives backgrounding, process death, rotation,
and low-memory kills; keeps the main thread free so the app never janks or
triggers an ANR; minimizes battery, memory, and network use; builds offline-first
so the app works on a subway; wires up push notifications and deep links;
instruments crash and ANR reporting; navigates store review; and supports the
long tail of OS versions and screen sizes. Underneath it all: the user blames
your app for the platform's behavior, so you own problems you didn't cause.

## Guiding Principles

- **The main thread is sacred.** 16ms per frame at 60fps, ~8ms at 120Hz. Any
  blocking work on the UI thread is jank, and >5s of it on Android is an ANR. Do
  work off-thread or don't do it.
- **Assume the OS will kill you at any moment.** Your process is the first
  sacrificed under memory pressure. Persist state continuously; treat every
  lifecycle callback as possibly your last.
- **Offline is the normal case, not the error case.** The network is absent,
  slow, or lying more often than it works. Design for it first, add the network
  as an optimization.
- **Battery is the user's budget, not yours.** Wakelocks, GPS, unbatched calls,
  and background work drain trust along with the battery; the OS and the user
  both punish abusers.
- **Native feel is a feature.** Back-button semantics, scroll physics, safe
  areas, and gesture conventions are not polish; getting them wrong reads as
  "broken" to users who can't say why.
- **Test on real devices, especially cheap old ones.** The emulator lies about
  performance, thermals, and the camera; your worst user is on a three-year-old
  midrange Android. And the store is a gate you don't own — design release trains
  around its review latency.

## Mental Models

- **The activity/view lifecycle as a state machine.** Created, started,
  resumed, paused, stopped, destroyed — and the transitions that the OS, not
  the user, triggers. Most lifecycle bugs are mishandled transitions
  (configuration change, process death, returning from background).
- **Cold/warm/hot start.** A cold start spins up a new process; warm reuses it;
  hot brings it forward. Know which path the user hit and keep cold work off the
  critical path.
- **The fragmentation cone.** Android device/OS/OEM-skin combinations explode
  combinatorially; the question is never "does it work" but "on which 95% of
  active installs, weighted by who my users are."
- **Offline-first as cache-plus-sync.** The local store is the truth the UI
  reads; the network reconciles it eventually. Conflict resolution and stale data
  are design decisions.

## First Principles

- The device is shared with every other app and the OS; you are a guest who can
  be evicted without notice.
- Latency the user perceives is the only latency that matters; perceived speed
  beats actual speed.
- A frame dropped is gone; a process killed takes your in-memory state with it.
- Every permission you request is a withdrawal from the user's trust account.

## Questions Experts Constantly Ask

- What happens when this screen is rebuilt after process death — is state
  restored or lost?
- Is this work on the main thread? If so, why, and how long on a slow device?
- How does this behave with no network, then with a flaky 3G that half-loads?
- What's my cold start time on a low-end device, and what's on the critical
  path?
- Will this drain the battery if a user keeps the app open for an hour?
- Will this pass store review, and what's my fallback if it's rejected?
- What's my crash-free and ANR-free session rate, and which devices skew it?

## Decision Frameworks

- **Native vs. cross-platform (Swift/Kotlin vs. Flutter/React Native/KMP).**
  Native for deep platform integration, peak performance, and day-one OS
  features; cross-platform when team size, shared logic, and time-to-market
  outweigh the abstraction tax and the inevitable escape hatch.
- **Feature flags + staged rollout.** You can't roll back a shipped binary
  instantly, so gate risky features and roll out 1% → 10% → 100% on phased
  release, watching crash rates at each step.
- **Minimum supported OS version.** Drop old versions when the engineering tax of
  supporting them exceeds the reach of the users still on them; read the
  install-base dashboard, don't guess.

## Workflow

1. **Frame the feature against the device.** Restate the requirement, then ask
   the constraint questions: offline, lifecycle, threading, battery, permissions.
2. **Design state and navigation first.** Decide the source of truth, the data
   flow, and how state survives rotation and process death before drawing pixels.
3. **Build off the main thread, against platform conventions.** Wire concurrency
   (coroutines / Swift concurrency) so the UI thread only renders; use platform
   navigation, safe areas, accessibility, and dark mode from the start.
4. **Test on the matrix.** Real low- and high-end devices, multiple OS versions,
   airplane mode, slow network, rotation, backgrounding, kill-and-restore.
5. **Instrument and ship staged.** Crash/ANR reporting and traces, then a phased
   release behind a flag; watch crash-free and ANR rate per cohort, roll forward
   with a hotfix if metrics dip.
6. **Watch the long tail.** Triage incoming crashes by device/OS, fixing the ones
   hitting the most weighted sessions first.

## Common Tradeoffs

- **Native fidelity vs. code reuse.** One codebase is cheaper to build and
  drifts toward lowest-common-denominator UX; two native codebases feel right
  and cost twice.
- **Startup speed vs. feature richness at launch.** Every framework initialized
  at cold start is milliseconds the user waits staring at a splash screen.
- **Permissions/data vs. trust and approval.** More permissions enable features
  but lower install conversion, invite store scrutiny, and spook users.

## Rules of Thumb

- If it touches disk or network, it doesn't belong on the main thread.
- Persist user-entered state on every change, not on a "save" button — the OS
  may kill you first.
- Measure cold start on the slowest device you support, not the newest.
- A permission you can defer until the user needs the feature, defer.
- Cache the last good response; an old answer beats a spinner offline.
- Crash-free sessions below 99.5% is a fire; below 99% is an outage.

## Failure Modes

- **Lifecycle amnesia.** Losing user input on rotation or process death because
  state lived only in a view — "I filled the form, rotated, it's gone."
- **Main-thread abuse.** JSON parsing, disk I/O, or image decoding on the UI
  thread, producing jank and ANRs that only show on slow devices.
- **Battery vampirism.** A misconfigured background sync, location request, or
  wakelock that drains the phone overnight and earns one-star reviews.
- **Ignoring store policy until rejection.** Discovering a privacy-manifest or
  background-location violation at submission, missing the release window.

## Anti-patterns

- **God Activity/ViewController** — thousands of lines mixing UI, networking,
  and business logic with no separation.
- **Network-on-main / synchronous everything** — blocking calls that freeze the
  UI under bad conditions.
- **Polling instead of push** — waking the radio on a timer instead of using push
  notifications or push-based sync.
- **Permission grab-bag** — requesting all permissions at launch instead of in
  context.
- **Spinner-of-death offline** — an infinite loader instead of cached content or
  a real error state.

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
- **Wakelock** — a hold keeping the CPU or screen awake, draining battery.
- **Crash-free rate** — the percentage of sessions that didn't crash; a core
  health metric.

## Tools

- **Xcode / Android Studio** — the platform IDEs, profilers, and layout
  inspectors; fluency is leverage.
- **Swift / Kotlin** — the first-class native languages; Objective-C / Java for
  legacy.
- **SwiftUI / UIKit, Jetpack Compose / Views** — the UI toolkits, declarative
  and imperative.
- **Flutter / React Native / Kotlin Multiplatform** — cross-platform options.
- **Instruments / Android Profiler, Perfetto** — for CPU, memory, energy, and
  frame profiling.
- **Firebase Crashlytics / Sentry** — crash and ANR reporting from the field.
- **Fastlane, Gradle, App Store Connect / Play Console** — to build, sign,
  release, and watch vitals.

## Collaboration

Mobile developers sit between designers who often draw for one screen size,
backend engineers whose APIs must work over flaky links, product managers who
underestimate release latency, and platform owners (Apple, Google) who can reject
a build. The healthy patterns: push back early on designs that ignore safe areas,
dark mode, accessibility, and small screens; negotiate API shapes that minimize
round-trips and support offline (pagination, deltas, ETags); and remind product
that a shipped bug can take days to roll out and a fix days more. The recurring
friction is the API contract and the release calendar — over-communicate at both.

## Ethics

The phone is intimate: it holds location, contacts, photos, health, and is on
the user's body all day. Core duties: request the minimum permissions and explain
why in context; never sell or leak location and identifiers behind the user's
back; honor App Tracking Transparency and platform privacy manifests in spirit,
not just to pass review; refuse dark patterns — disguised ads, fake close
buttons, notification spam; build for accessibility (VoiceOver, TalkBack, Dynamic
Type), because a phone is how many disabled users access the world; and be honest
about the battery and data costs you impose. The gray zones — engagement loops
engineered for compulsion, kids' apps — deserve to be named in the room, not
shipped by default.

## Scenarios

**The form that loses everything on rotation.** Android users lose a long
checkout form when they rotate. The junior instinct is to lock orientation. The
expert sees the real bug: the form state lived in the Activity, destroyed and
recreated on configuration change. The fix is architectural — move state into a
ViewModel backed by SavedStateHandle, so it survives both rotation and process
death (the harder case, hit after backgrounding). They verify with "Don't keep
activities," which forces process death on every backgrounding.

**A one-star review wave: "app drains my battery."** Reviews spike after a
release, but there's no crash in Crashlytics. The energy profile shows a
background sync meant to run every 15 minutes firing far more often: a retry loop
on network failure has no backoff, so on flaky networks it never stops retrying,
holding a wakelock. The fix: exponential backoff with jitter, and batch the work
into WorkManager/BGTaskScheduler with OS constraints. The radio stops waking;
complaints stop.

**A "simple" launch-day feature blocked by store review.** Product wants a
feature using background location for a launch campaign. The expert checks policy
first and finds both stores require a prominent disclosure and strong
justification, and Apple's privacy manifest must declare it — a near-certain
rejection or multi-day delay that misses the launch. They reframe: the feature
only needs location while the app is in use, which takes only foreground
permission and passes review cleanly. The campaign ships on time; the background
variant goes behind a flag for a later, properly-disclosed release.

## Related Occupations

A mobile developer is a software engineer specialized against the hard wall of a
constrained, OS-governed device. They share the frontend engineer's obsession
with UI, rendering, and perceived performance, but on a platform that can kill
the process mid-frame. They lean on backend engineers for APIs and must shape
those contracts for flaky links. UX designers own the experience they implement,
and product managers own the why. They share with embedded systems engineers the
discipline of doing real work inside tight memory, power, and CPU budgets.

## References

- *iOS / Apple Human Interface Guidelines* — developer.apple.com/design
- *Android / Material Design Guidelines* — m3.material.io
- *Android App Architecture Guide* — developer.android.com/topic/architecture
- *Effective Kotlin* — Marcin Moskała
- App Store Review Guidelines and Google Play Developer Policy
