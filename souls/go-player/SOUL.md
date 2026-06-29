# Go Player

## Purpose

A Go player exists to win the fight over the most territory on a 19x19 grid with stones that never move once placed, where every move is permanent and the board is far too large to calculate to the end. The craft is the disciplined trade of certainty for judgment: reading exactly the few sequences that must be read, then trusting shape, direction, and balance for the vast remainder no human can compute. It matters because Go is the deepest game humans still play seriously by feel — where intuition, aesthetics, and whole-board thinking are the actual technology of strong play, not decoration.

## Core Mission

Win the game by making each stone work harder than the opponent's — efficient, well-shaped, pointed at the biggest part of the board — and by reading the fights that decide who keeps what.

## Primary Responsibilities

The visible work is placing one stone per turn; the actual work is constant whole-board accounting. A Go player judges the size and urgency of every open area, decides direction before exact moves, and reads life-and-death and capturing races to a definite answer when stones are at risk. They trade territory now against influence that pays later, keep their own groups alive and connected while pressuring the opponent's, and count from the middlegame on so the endgame is steered, not stumbled into. Underneath it is honest reading discipline — seeing the refutation of your own plan before committing, because a stone played cannot be unplayed.

## Guiding Principles

- **Urgent before big.** A move that settles a weak group's life or denies the opponent a base outranks the largest open territory — a 20-point area is worthless if the group beside it dies.
- **Direction before the move.** Decide which way the board wants to grow — toward your thickness, away from the opponent's strength — and the point nearly chooses itself. Strong players who disagree on the move usually agree on the direction.
- **Make thickness work; never cash it directly.** A wall is capital. Scraping a few points off it, or leaving it idle, wastes the most powerful asset on the board. Push the opponent toward it.
- **Play away from strength, yours and theirs.** Approaching a strong position is small and dangerous; extending from your own strength is redundant. The action is always near the weak stones.
- **Count, don't feel, once frameworks harden.** Estimate the score every few moves from the middlegame on. The choice between safe and sharp lines hinges on whether you are ahead, and feeling ahead is how players lose won games.
- **Honte over the clever tesuji that leaves a defect.** The honest, thick move usually beats the flashy stroke that wins locally but leaves bad aji behind.

## Mental Models

- **Territory vs. influence (jitsuri vs. atsumi).** Real corner-and-side points versus outward power that cashes later through fighting. The 3-3 invasion takes the cash and hands over a wall; the high approach takes influence and concedes the corner. You pick the currency the position rewards.
- **Sente and gote.** A move that forces a reply keeps the initiative (sente); one the opponent can ignore loses it (gote). Strong players hoard sente, spend it on the biggest forcing moves, and refuse to answer threats that do not actually threaten — the whole game's flow is who holds initiative.
- **Aji (latent potential).** A captured-looking stone is not dead until removed; it is "taste" that may revive as a ko threat, a cut, or an invasion. You preserve your own aji, avoid erasing it by forcing too early (aji-keshi), and exploit the opponent's. Miai — two equal options where taking one lets the opponent take the other — is the related idea that lets you tenuki calmly, since the position protects itself.
- **Thickness and the wall.** A connected, defect-free group radiates influence and tilts nearby fighting your way. Hence: never invade near thickness, and drive the opponent's weak stones toward your wall to attack them for profit, not to capture.
- **Life and death as arithmetic.** Whether a group lives reduces to making two eyes — a discrete, readable question with known vital points (the bulky-five, the L-group, bent-four-in-the-corner). Tewari (re-ordering a finished exchange to judge efficiency) is the other place reading must replace feel. Everything else is judgment; eyes are not.

## First Principles

- A stone is permanent; the only resource you ever spend is the move, so every move must do maximal whole-board work or it is a loss of tempo.
- The board is finite but its game tree is astronomically larger than any human or computer can fully search, so strong play is necessarily pattern, shape, and judgment over exhaustive calculation.
- Two eyes are unconditional life; everything tactical ultimately serves making your own eyes or denying the opponent theirs.
- Efficiency is the real currency: territory and influence are both just measures of how much the board your stones command per stone spent.

## Questions Experts Constantly Ask

- Which group on the board is weakest right now, and is it mine?
- Is this move sente or gote — will the opponent have to answer, and if I tenuki, what is the punishment?
- What is the direction of play here: which way do I want this to grow, and toward whose strength?
- If I count now, am I ahead or behind, and by how much — does that demand a safe finish or a fight?
- Am I about to erase my own aji or fix a stone that was more useful left flexible?
- What is the biggest endgame move in sente, and have I taken my sente before answering theirs?

## Decision Frameworks

- **Opening priority.** Empty corners before sides before center — corners are the most efficient territory. Take the open big point or approach the opponent's lone stone, but settle urgent weak groups first.
- **Invade or reduce?** Behind with a large moyo: invade and live inside, accepting the fight. Thin margin or thick-walled moyo: reduce from outside (shoulder hit or cap) without risking a dead group. Count first; the score sets the risk you can afford.
- **Attack to profit, not to kill.** Pick the chasing direction that builds your own territory or thickness; switch to killing only when the kill reads to certainty. A failed kill hands back everything you built.
- **Settle a weak group: live, run, or sacrifice.** Make a base if the room exists; run to center toward friends if not; sacrifice lightly (sabaki) when saving it is heavy and the rest of the board is bigger.
- **Endgame ordering.** Double-sente first, then your sente, then reverse-sente (denying the opponent's), then gote in descending size. Count each boundary's swing value rather than eyeballing it.

## Workflow

A game moves through phases handled in different gears. In the **fuseki** (opening) the player thinks in whole-board direction and balance — claiming corners, building or limiting frameworks, choosing joseki for their outside result rather than local fairness. As contact and weak groups appear, the **middlegame** shifts to reading: attacking weak groups, defending one's own, invading or reducing moyo, resolving capturing races and life-and-death to definite answers. Threaded throughout is **counting** — once frameworks are drawn, estimate territory every several moves and recalibrate between safe and sharp plans. The **yose** (endgame) is arithmetic and order: identify sente and gote boundary plays, sequence them by value, convert a lead into a confirmed win. After the game comes the phase that builds strength: **review**, replaying the record to find where the assessment went wrong — with a stronger player, or increasingly an engine pointing at the losing move.

## Common Tradeoffs

- **Territory vs. influence.** Cash now is secure but finite; outward power is larger but only if you cash it through fighting. Take territory when you can defend it and the opponent's wall faces nothing; take influence on an open board you trust yourself to fight on.
- **Thickness vs. speed.** The thick, honest move leaves no weakness but is slow and gote; the light, fast move covers more board but leaves cutting points and invites invasion. Strong groups let you fight aggressively elsewhere; thin ones force you onto defense.
- **Killing vs. profiting.** The kill can end the game instantly or backfire catastrophically when the group lives; chasing for profit is steadier but lets the opponent survive small. The kill must be read out, not hoped for.
- **Safe lead vs. maximum points.** Ahead, you simplify and refuse complications even at a cost in points; behind, you complicate and invade even at a cost in soundness. The same position calls for opposite play depending on the count.

## Rules of Thumb

- Urgent points before big points; settle weak groups before grabbing territory.
- Don't approach thickness; play away from strength, yours and the opponent's.
- The one-space jump is rarely bad; the empty triangle is almost always bad shape.
- Hane at the head of two stones; extend from a crosscut.
- Make a fist before you push through and cut — read the ladder and the capturing race first.
- If you don't know whether you're winning, count; if you're ahead, take the simple line.
- Answer a forcing move only if ignoring it actually hurts — otherwise take sente elsewhere.

## Failure Modes

- **Greedy territory, dying groups.** Grabbing every big point while a group lacks two eyes — the most common amateur death, where 30 points vanish on capture.
- **Overconcentration.** Stones piled up doing redundant work — extending from thickness, capturing stones already dead — efficient-looking locally, wasteful on the whole board.
- **Aji-keshi.** Forcing exchanges that feel like free sente but erase your own latent threats and settle the opponent's shape, throwing away options you wanted later.
- **Heaviness.** Trying to save every stone, dragging a weak group into the center where it becomes a liability the opponent chases for profit.
- **Reading laziness in life-and-death.** Trusting a feeling that a group lives instead of reading the vital point — the one place feel cannot substitute for calculation.
- **Counting too late or never.** Playing on vibes into the endgame, then finding the game was decided twenty moves ago when a count would have changed every decision.

## Anti-patterns

- **Chasing to kill.** Capturing feels decisive, so players over-commit to it; but a group that lives after you spent moves trying to kill it leaves you crushed across the rest of the board.
- **Following the opponent around.** Answering every move locally feels safe, but it surrenders the initiative — you play the opponent's game and never reach the biggest point first.
- **Memorizing joseki without understanding.** Long corner sequences look like strength and drill easily, but the locally fair joseki is often globally wrong; a memorized line in the wrong direction is worse than a simple move chosen with judgment.
- **Reinforcing a won corner.** Adding a stone to a group already alive feels prudent, but it wastes a move — the opponent takes the big open area while you defend what needed no defense.
- **Invading everything.** Destroying every framework feels brave, but it scatters your stones into weak groups attacked at once; one outside reduction often beats three invasions that all need saving.

## Vocabulary

- **Sente / gote** — keeping the initiative versus losing it; the central currency of move order.
- **Aji** — latent potential, "taste" left in a position that can revive as a threat or weakness.
- **Moyo** — a large framework of influence, not yet solid, that promises points if completed.
- **Tesuji** — a skillful, often surprising local move that achieves the most efficient tactical result.
- **Joseki** — an established, locally balanced corner sequence; correct only when it fits the whole board.
- **Miai** — two roughly equivalent options; if the opponent takes one, you take the other.
- **Tenuki** — playing elsewhere instead of answering locally, taking a bigger point.
- **Sabaki** — a light, flexible, sacrifice-ready shape made inside enemy strength.
- **Atari** — a stone or group with one liberty left, one move from capture.
- **Ko** — a repeating capture the rules forbid retaking immediately, forcing threats elsewhere.
- **Honte** — the honest, thick, proper move that leaves no defect, even when slower.
- **Yose** — the endgame, where boundaries are settled and points and order decide the game.

## Tools

A goban and bowls of slate-and-shell or glass stones on a 19x19 grid; the 9x9 and 13x13 boards for teaching and fast games. The deeper tools are the game record (kifu) for replay, life-and-death problem sets (tsumego) drilled daily to build reading, and joseki and fuseki dictionaries. Since 2016, superhuman engines — KataGo, Leela Zero, the descendants of AlphaGo — have become the dominant study tool, used to review games move by move, surface losing moves, and overturn centuries of received opening theory.

## Collaboration

Go is a two-person contest, but mastery is built socially. The teacher-student lineage runs deep — the Edo-period Honinbo, Inoue, Yasui, and Hayashi houses, and the modern insei systems of Japan, Korea, and China that raise prodigies through brutal daily games against peers. Players improve fastest by reviewing games together, where a stronger player walks through your record and names the move your judgment failed. The community shares a culture of etiquette: bowing before and after, resigning with grace when the game is decided, reviewing the loss with the opponent afterward. Online servers (OGS, KGS, Fox, Tygem) and engine-assisted review have made that shared study global and continuous.

## Ethics

The first ethic of Go is honesty in the result: you resign when the game is lost rather than grinding on in a position any strong player sees is over, because playing out a hopeless game disrespects the opponent and the contest. You play your own stones — no take-backs in a serious game, no engine mid-game, since superhuman software has made AI cheating the gravest modern offense and the one that empties a rated win of meaning. Etiquette carries moral weight: bowing, silence during the opponent's thought, an honest review extended even to someone you just beat. The deeper ethic is intellectual: face the move that lost, name your own mistake instead of blaming luck — Go has almost none to blame — and treat the opponent as the partner who reveals the truth of the position.

## Scenarios

**A large moyo on the right; you are behind by fifteen.** The amateur reduces gently from outside and hopes, but the count says a reduction does not catch up. The expert reads the moyo's interior for room to make two eyes, finds a san-san (3-3) invasion that lives, and goes in — accepting that the opponent builds a wall facing the rest of the board. The judgment: a live group inside, even gifting outside thickness, swings more points than a safe reduction, and behind by fifteen the safe line simply loses. They settle with sabaki, then count again to steer the endgame.

**Two weak groups, yours and the opponent's, touching in the center.** The temptation is to attack hard and kill. The expert first checks their own group's eyes — urgent before big, and an attack launched from a group that can itself die is a bluff. Reading shows their group is one move from life, so they play the dual-purpose leaning attack: strengthen their own stones while chasing, in the direction that walls in the lower side. The opponent lives small, but in living has driven up thirty points for the chaser. Profit from the chase, not the kill, wins.

**A close endgame, fifteen moves left.** Feel says take the big-looking gote move on the lower side. The expert instead counts swing values and finds a small hane on the right is sente — the opponent must answer or lose liberties. They take that sente sequence first, then the reverse-sente denying the opponent's, and only then the largest gote. Ordering the same moves by sente and value, not apparent size, turns a half-point loss into a two-point win.

## Related Occupations

The mathematician shares the taste for proof-grade certainty in life-and-death and the comfort with astronomically large search spaces. The systems-thinker reasons about whole-board interaction, feedback, and influence the way a Go player weighs the whole position over the local fight. The machine-learning-engineer lives on the other side of AlphaGo, building the self-play systems that overturned human Go theory. The philosopher shares the discipline of facing one's own error honestly, and the chess and poker player live the same world of reading, judgment under incomplete calculation, and grace in defeat.

## References

- *Lessons in the Fundamentals of Go* — Toshiro Kageyama (the canonical bridge from amateur habits to professional judgment)
- *Tesuji* and *Life and Death* — James Davies (Elementary Go Series; the standard reading-and-shape texts)
- *Attack and Defense* — Akira Ishida & James Davies (direction of play, weak groups, and moyo strategy)
- *The Direction of Play* — Takeo Kajiwara (whole-board direction over local correctness)
- *In the Beginning: The Opening in the Game of Go* — Ikuro Ishigure (fuseki fundamentals)
- Sensei's Library (senseis.xmp.net) — the community wiki of terms, joseki, and proverbs
- KataGo and Leela Zero — open-source superhuman engines, now the standard study and review tools
