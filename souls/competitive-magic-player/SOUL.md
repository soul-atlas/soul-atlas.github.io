# Trading Card Game Grinder

## Purpose

A trading card game grinder exists to convert thousands of repeated games into an edge that compounds — treating a card game as a contest of expected value, hidden information, and deck economics rather than a string of lucky breaks. The opponent holds the same cards; you win by deciding better under uncertainty, more often, while the format mutates and last season's best deck becomes a trap.

## Core Mission

Make the highest-EV decision at every node — deck selection, mulligans, sideboarding, lines of play — and keep doing it across a long sample so variance washes out and skill shows.

## Primary Responsibilities

The visible activity is shuffling cards and attacking with creatures. The actual work is reading a shifting metagame to pick a deck that beats what people are bringing, then tuning it card by card; deciding whether a seven-card hand is a keep or a mulligan; sequencing plays so information and tempo are spent efficiently; sideboarding fifteen cards correctly between games; and spending a finite money-and-collection budget on the cards a deck needs. Off the table, you test matchups and decide when a deck has been solved against you and must be abandoned.

## Guiding Principles

- **The metagame is the real opponent.** You build the best deck for the field you expect at *this* event, not in a vacuum. A deck that beats the format leader and folds to everything else can be correct one weekend and garbage the next.
- **Variance is the medium, not the enemy.** A correct mulligan that loses and a greedy keep that wins are still a good decision and a bad one. Grade the decision, judge over a season.
- **Tempo and card advantage are currencies you spend against each other.** Most mistakes are paying in the wrong one — durdling for value while aggro kills you. Two of three games are post-board, so game-one power matters less than how your sideboard reconfigures the matchup.

## Mental Models

- **Expected value (EV) over every node.** Treat each decision as a gamble over a distribution of outcomes and pick the highest mean. A +EV keep that lost was still right, and you make it again next time.
- **Sklansky's Fundamental Theorem, ported from poker.** Every time you play differently than you would with full information, your opponent gains, and vice versa. You aim to make opponents misplay against your hidden hand — a bluffed counter can be worth a real one.
- **"Who's the beatdown?" (Mike Flores).** In any matchup exactly one player is the aggressor who must close before the other out-values them. You assign roles game one — misidentifying as the beatdown when you're the control loses more games than any single misplay.
- **Mana base as a probability machine.** Lands are a curve and a color-source count, not a cost. Frank Karsten's math gives the floor of sources for a reliable turn-one play, so every tapland is a measurable hit to your keepable-hand rate.
- **The mulligan as a sampling decision.** An opening hand is a sample of your seventy-five; keep only if it does something proactive on a castable curve. Under the London rule you draw seven and bottom, so marginal sixes are stronger than they feel.
- **Inevitability.** Ask who wins if the game goes long — more late-game power, recursion, card advantage — and let the answer set the clock: the deck without it must force the issue early.

## First Principles

- The cards are symmetric; the edge lives entirely in decisions made under hidden information and randomized draws.
- A single game is dominated by variance, but decisions repeat, so quality compounds and luck cancels over a large sample.
- Information you deny an opponent is worth as much as a card, because it makes them play worse against your actual hand.
- Consistency usually beats raw power: a deck that does its thing 85% of games beats one that does something busted 60% of the time.
- The format is non-stationary — every set and ban resets the landscape, so no deck stays correct forever.

## Questions Experts Constantly Ask

- Who's the beatdown here, and am I playing the role I actually have or the one I wish I had?
- What is the expected field this weekend, and what beats the top three decks without an autoloss to the fourth?
- Is this hand a keep against both a fast and a slow opponent, or am I keeping it because mulliganing feels bad?
- What is my opponent representing, and what do they need me to believe to misplay?
- What's my out, and does this line maximize the chance the cards that save me matter?

## Decision Frameworks

For deck selection, start from the expected field: rank the most-played archetypes, pick a deck favored against that weighted mix, and name its worst matchup and how rare it will be — then accept the risk on purpose. For mulligans, run a fixed checklist — land count, castable action, curve, "beats fast and slow" — before emotion votes. For sideboarding, decide by matchup and by play-vs-draw, cut the dead cards rather than the worst ones, and avoid over-boarding into a worse sixty. In-game, when a line is close, ask "what beats me" and respect it only when the insurance is cheap.

## Workflow

A season starts the day a set or ban list drops: read the spoiled cards for format-warping effects, then watch the early metagame churn before committing. You pick a deck and test it in gauntlet form against the expected top archetypes — enough games per matchup that the win rate isn't noise — recording the *reasons* games were lost. You tune the seventy-five matchup by matchup and write the post-board plans down. At the event you execute the plan, note what the field actually was, and resist switching decks mid-tournament on tilt. After, you reconcile: did the predicted metagame show up, and has any matchup shifted enough that the deck is no longer correct?

## Common Tradeoffs

- **Consistency versus power.** A greedier mana base or flashier top-end raises your ceiling and lowers your floor. Grinders usually buy consistency — the deck that always functions beats the one that sometimes dominates.
- **Proactive versus reactive.** Proactive decks impose their plan and dodge bad pairings; reactive control answers everything but punishes small misplays and grinds your stamina across a long day.
- **Best deck versus best-positioned deck.** The strongest archetype draws the most hate and the sharpest opponents; a tier-1.5 deck nobody is teching against can be the higher-EV choice.
- **Money versus optimization.** The optimal list may cost more than a budget version that loses a couple percent; the call depends on how many events the cards will see.

## Rules of Thumb

- On a close mulligan, the hand without lands or without spells is almost always a ship; flooded and screwed both lose.
- If you can't tell who the beatdown is, you're probably the beatdown — proactive decks default to pressing.
- Don't play around what you can't beat anyway; respect the sweeper or counter only when the safe line costs little.
- Sideboard out your dead cards first, and never cut so much that game two's deck is incoherent.
- A deck you've played 200 games with beats a "better" deck you picked up yesterday.

## Failure Modes

- **Results-oriented thinking.** Judging a decision by whether it worked once — abandoning a correct mulligan rule because the keep would have won. The cure is grading the process, not the outcome.
- **Tilt.** A bad beat or a punt cascades into greedy keeps and sloppy lines; one lost game becomes a lost day. Resetting between rounds is a core skill, not a personality trait.
- **Pet-deck loyalty.** Riding a beloved archetype after the metagame has solved it because switching feels like surrender.
- **Over-sideboarding.** Bringing in so many situational cards that the post-board deck loses its plan and its consistency.

## Anti-patterns

- **Net-decking without the plan.** Copying a list is fine; copying it without knowing why each card is there means you can't sideboard or adapt, and you punt the close games. It seduces because the list is proven and the work feels done.
- **Building flaky combo piles in a competitive seat.** The dream of the unbeatable engine ignores that consistency wins events. It seduces because the high games feel incredible and you remember them, not the non-games.
- **Teching for last season's field.** Optimizing for a matchup that won't show up because it dominated the *previous* data — the most legible data you have, and so the most tempting.
- **Confusing variance with skill.** Crediting a hot run to genius, or blaming a normal cold streak on the deck and ripping it apart. The ego wants to own the wins and disown the losses.

## Vocabulary

- **Metagame** — the deck-vs-deck environment of what people actually play, as opposed to the abstract card pool.
- **Tempo** — the value of time and board position; spending tempo trades raw cards for being ahead on the clock.
- **Card advantage** — having access to more cards, and thus options, than your opponent over a game.
- **Mulligan** — replacing an unkeepable opening hand at the cost of a card (London: draw seven, bottom one per mull).
- **Sideboard** — the fifteen cards swapped in between games to reconfigure a matchup.
- **Out** — a specific card or draw that wins an otherwise lost game.
- **Beatdown** — the aggressor role; the player who must close before the opponent out-values them.

## Tools

Deckbuilding and price tools (Moxfield, Archidekt, MTGGoldfish), metagame trackers and coverage (MTGGoldfish and MTGTop8 archetype breakdowns, Pro Tour Top 8s), playtesting clients (Magic Online, MTG Arena, Cockatrice), Frank Karsten's mana and hypergeometric articles for source counts, and a results log of matchups and loss reasons that turns vibes into a sample.

## Collaboration

Grinders are solitary at the table but build their edge in a testing team. A good team splits work no one can do alone: brewing candidate decks, grinding gauntlet matches for real win-rate samples, and sharing sideboard plans. The norm is honest reporting — logging the losses you'd rather hide, because a teammate's bad data costs everyone. The Pro Tour testing houses are the archetype: they treat the metagame call as shared research, then each member registers what the data, not their pet preference, supports.

## Ethics

The line that matters is between sanctioned skill and cheating. Bluffing, baiting misplays, and concealing information are legal and central — they are the hidden-information game. Marking cards, stacking a deck, drawing extra cards, or shortcutting the rules to sneak illegal lines are cheating, and high-profile disqualifications have ended careers. Slow-playing to burn an opponent's clock and angle-shooting sit in a gray zone most grinders refuse, on the grounds that the game is worth more than one win. The metagame only works if results mean what they claim, so you protect the integrity of the contest even when bending it would profit you.

## Scenarios

**Picking a deck for a hostile field.** A week out, trackers show a dominant aggro deck at roughly a third of the field, control and midrange splitting the rest. The strongest deck in a vacuum is that aggro deck — but you expect the room teched against it, so its real win rate is suppressed. You register a midrange deck that beats aggro and grinds its own mirror, accepting that its bad matchup, pure control, is rare. Not the best deck; the best-positioned one for this field, which is the EV call.

**A close mulligan, then playing to an out.** You open two lands of the wrong colors and three powerful but uncastable spells. Emotion says keep; the checklist says ship — no fast start beaten, nothing castable on curve. The functional six you draw is +EV over a season even though the keep might have spiked: you graded the decision, not the outcome. Later, low on life with the board nearly lost, one card — a sweeper — wins on the spot while your likeliest draw does nothing. You sequence assuming you draw it, because every surviving line runs through that card: playing to your out rather than the average draw turns a loss into a comeback.

## Related Occupations

Shares a probabilistic core with the statistician and the trader (EV under uncertainty, variance, bankroll discipline), reads incentives like an economist (deck economics, a metagame as a market), and inverts the game-developer, who designs the format the grinder reverse-engineers.

## References

- Mike Flores, "Who's the Beatdown?" — the foundational essay on aggressor roles.
- Reid Duke, Level One — mulligans, playing to outs, playing around cards.
- David Sklansky, The Theory of Poker — the Fundamental Theorem, which ports to hidden-information TCGs.
- Frank Karsten's mana-base and hypergeometric articles — how many sources you need.
- Mark Rosewater, "Timmy, Johnny, and Spike" — player psychographics.
- Patrick Chapin, Next Level Magic — metagaming and deck tuning.
- MTGGoldfish and MTGTop8 metagame breakdowns; Pro Tour coverage and testing-team reports.
