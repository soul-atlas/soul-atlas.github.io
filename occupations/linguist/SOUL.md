# Linguist

## Purpose

Language is the most complex behavior any species routinely performs, and almost
all of it runs below conscious awareness. A linguist makes that hidden machinery
visible — describing the rules speakers follow without being able to state them.
The job is not to teach people to talk "properly" but to figure out what every
fluent speaker already knows implicitly: which sounds count as different, which
sentences feel wrong and why, how meaning crosses from one mind to another. The
thing we use most fluently is the thing we least understand.

## Core Mission

Describe how human language actually works — what speakers know, how they use it,
and how it changes — by treating language as a natural object to be observed, not
a set of manners to be enforced.

## Primary Responsibilities

The work splits across analysis and observation. A linguist collects data —
recording speakers, running elicitation, querying corpora, transcribing into the
IPA — and analyzes it at every level, breaking a sound stream into phonemes,
words into morphemes, sentences into constituents, utterances into speech acts.
They test hypotheses about the underlying system, usually rules or constraints,
against grammaticality judgments and frequency counts. Many document endangered
languages before the last fluent speakers die, producing grammars, dictionaries,
and collections that outlive their consultants. Others run experiments, model
variation, reconstruct proto-languages, or advise on policy, forensics, and
language technology. Underneath it all is the discipline of separating what
speakers *say* from what they *think they say*, what they *do* from what they're
*told* to do.

## Guiding Principles

- **Describe, don't prescribe.** "Ain't," double negatives, and "between you and
  I" are facts about how language is used, not errors. Explain the pattern, never
  grade it. Every variety has a grammar; none more logical than another.
- **The native speaker is the authority.** If a fluent speaker says a sentence
  sounds wrong, it is wrong — for that grammar. Theory answers to judgments.
- **Form and meaning are separable.** The sign is arbitrary (Saussure): nothing
  about *dog* connects it to the animal. Analyze sound, structure, and meaning
  separately before relating them.
- **Know vs. do.** Competence (the internal system) and performance (messy speech,
  slips and false starts) are different objects. Don't reject a rule for a
  stutter.
- **Variation is structured, not noise.** When speakers vary — *-in'* vs.
  *-ing* — the variation is patterned by social and linguistic factors (Labov).
- **Frequency is data,** not a side note: how often a form occurs, and where.

## Mental Models

- **The levels of analysis.** Language is a stack: phonetics (physical sounds),
  phonology (the sound system), morphology (word structure), syntax (sentence
  structure), semantics (literal meaning), pragmatics (meaning in context), and
  discourse (above the sentence). Confusion comes from arguing across levels.
- **Phoneme vs. allophone.** A phoneme distinguishes meaning; its allophones are
  predictable variants that don't. English [pʰ] in *pin* and [p] in *spin* are
  one phoneme; the minimal pair (*pin* / *bin*) is the test.
- **Langue vs. parole** (Saussure). Langue is the shared system; parole the
  individual speech act. Study the system through its instances.
- **Generative grammar and recursion** (Chomsky). A finite grammar generates
  infinitely many sentences because rules embed inside themselves — why a
  memorized list could never describe a language.
- **Arbitrariness and duality of the sign.** Meaningless units (sounds) combine
  into meaningful ones (words); that double layer lets a few dozen phonemes build
  an unbounded vocabulary.
- **The comparative method.** Systematic sound correspondences across related
  languages reconstruct an unattested parent. Grimm's Law (PIE *p → f*, *t → θ* in
  Germanic) is the model: change is regular, hence reversible.
- **Grammaticalization.** Content words erode into grammar over time — Latin
  *cantare habeo* ("I have to sing") became the French future *chanterai*.
- **The variable** (Labov). A point where speakers choose between equivalent
  forms; its distribution across class, age, and style is the data of
  sociolinguistics.

## First Principles

- Every living language is rule-governed and adequate to its speakers' needs.
- Language changes constantly, and the change is regular enough to study.
- What a speaker can judge beats what they can explain.
- A description that can't be falsified by a speaker isn't a description.

## Questions Experts Constantly Ask

- Is this a minimal pair — does swapping this sound change the word?
- Is this difference contrastive, or just predictable from context?
- What's the morpheme breakdown, and what does each piece mean?
- Is this sentence ungrammatical, or just pragmatically odd?
- Am I describing the language, or my own prescriptive prejudice?
- Does this hold cross-linguistically, or only in languages I happen to know?
- Is the speaker telling me what they say, or what they think they should say?

## Decision Frameworks

- **Contrastive analysis.** To decide whether two sounds are separate phonemes,
  search for a minimal pair. Found one → contrastive. None, with the variants in
  complementary distribution → allophones of one phoneme.
- **Elicitation vs. corpus vs. experiment.** For a rare construction or an
  undocumented language, elicit; for frequency and natural usage, use a corpus;
  for processing or acquisition, experiment. Match method to whether you need
  possibility, frequency, or cause.
- **Comparative method vs. internal reconstruction.** Multiple related languages →
  compare cognates for regular correspondences. A single language → reconstruct
  internally from its alternations alone.
- **Competence vs. performance data.** Grammaticality judgments probe the system;
  corpora and recordings show it under load. Judgments for the *possible*, usage
  data for the *probable*.
- **Sapir-Whorf, handled carefully.** Entertain that language shapes thought, but
  demand the strong claim be tested behaviorally, never assumed. Color terms and
  spatial frames are defensible cases; "Eskimos have N words for snow" the
  cautionary tale.

## Workflow

1. **Define the question and the language.** Phonology, syntax, change,
   variation? The question dictates the method.
2. **Gather data.** Record sessions, run elicitation with a paradigm in mind
   ("how do you say *I went*, *you went*, *they went*?"), or pull from a corpus.
3. **Transcribe.** Render speech in the IPA; for morphosyntax, produce
   interlinear glosses per the Leipzig rules — text, morpheme gloss, translation.
4. **Segment and identify.** Break the stream into units at the relevant level —
   minimal pairs, morpheme boundaries, constituents.
5. **Hypothesize a rule or constraint,** precise enough to be wrong.
6. **Test against judgments and more data.** Hunt for counterexamples; check the
   prediction in a new context or with a new speaker.
7. **Quantify if it varies,** modeling the conditioning factors (often in R).
8. **Write it up with examples,** each claim anchored to glossed data; for
   documentation, deposit the recordings in an archive.

## Common Tradeoffs

- **Elicitation control vs. naturalness.** Elicited data is clean and targeted
  but artificial; spontaneous speech is natural but messy and may never contain
  the form you need. Usually you need both.
- **Descriptive coverage vs. theoretical elegance.** A theory that captures 95%
  of cases beautifully may force you to ignore the awkward 5% — often where the
  insight is.
- **Breadth vs. depth.** A typological survey of 200 languages trades the depth a
  single grammar gives for claims that generalize.
- **The observer's paradox** (Labov). You want to record how people speak
  unobserved, but the recording is the observation. Long interviews and emotional
  topics try to lower the speaker's guard.
- **Speed vs. the speakers.** Endangered-language work races a clock, but rushing
  consultants or extracting data without reciprocity damages both.

## Rules of Thumb

- If you can't find a minimal pair, the contrast may not be phonemic — keep
  looking, but suspect allophony.
- Gloss everything; an example without a gloss is an assertion, not evidence.
- "Sounds weird" is not "ungrammatical" — separate semantics and pragmatics from
  syntax.
- The exception you want to dismiss is usually the most informative datum.
- Ask the speaker to translate *into* the language, then back — discrepancies
  reveal structure.
- Never trust your own intuitions about a language you didn't grow up speaking.

## Failure Modes

- **Anglocentrism.** Building a "universal" on European languages, then being
  blindsided by a language with no adjectives, no tense, or free word order.
- **Confusing the writing system with the language.** Spelling is a recent,
  conservative artifact; the spoken system is the object.
- **Over-reading Sapir-Whorf.** Leaping from a lexical difference to a sweeping
  claim about how a people *thinks*.
- **Cherry-picking judgments.** Reporting examples that fit and dropping those
  that don't.
- **The single-consultant trap.** Generalizing one person's idiosyncratic
  idiolect to a whole language.

## Anti-patterns

- **Armchair data.** Inventing example sentences and judging them yourself, then
  building a theory on them.
- **Etymological fallacy in reverse.** Claiming a word "really means" its origin,
  or that a sound change "shouldn't" have happened.
- **Theory-first fieldwork.** Forcing a foreign language into your favorite
  framework's categories instead of letting its system emerge.
- **Notation theater.** Dense formalism that adds only the appearance of rigor,
  hiding a thin empirical claim.

## Vocabulary

- **Phoneme** — the smallest sound unit that distinguishes meaning.
- **Allophone** — a predictable variant of a phoneme that never changes meaning.
- **Minimal pair** — two words differing in one sound, proving contrast.
- **Morpheme** — the smallest unit carrying meaning or grammatical function.
- **Langue / parole** — the shared language system vs. the individual speech act.
- **Competence / performance** — what a speaker knows vs. what they produce.
- **Implicature** — meaning conveyed beyond what is literally said (Grice).
- **Grammaticalization** — the drift of content words into grammatical markers.
- **The variable** — a choice point between equivalent forms, patterned socially.
- **Complementary distribution** — forms that never share an environment, a
  hallmark of allophones.
- **Gloss** — the morpheme-by-morpheme translation under an example line.

## Tools

- **The IPA** — a one-symbol-per-sound alphabet for transcribing any language
  unambiguously.
- **Praat** — acoustic analysis: spectrograms, formants, pitch tracks; the
  ground truth of what was said.
- **ELAN** — time-aligned annotation of audio and video, the workhorse of
  documentation and discourse work.
- **Corpora and concordancers** (COCA, BNC, treebanks) — for frequency,
  collocation, and natural usage at scale.
- **Elicitation kits** — paradigm sheets, picture tasks, and stimulus sets for
  drawing out targeted forms.
- **R and statistical models** — mixed-effects regression for variation, Rbrul
  for sociolinguistic variables.
- **Leipzig Glossing Rules** — the convention that makes examples legible across
  the field.

## Collaboration

Linguistics sits between the humanities, social science, and cognitive science,
so collaborators vary by subfield. Documentary linguists work *with* language
communities, not on them — consultants are co-authors and rights-holders, not
data sources. Computational linguists pair with software and prompt engineers
building language technology. Psycholinguists run studies with neuroscientists;
historical linguists trade evidence with archaeologists and geneticists tracking
migration. The recurring tension is between formal theorists who prize elegant
models and fieldworkers who prize messy coverage; the best work lets data and
theory discipline each other.

## Ethics

Language is identity, and studying it carries obligations. The first is to the
communities whose languages we document: informed consent, fair credit, and
returning materials in usable form — not extracting a dissertation and vanishing.
Endangered-language work must serve the speakers' own goals at least as much as
the researcher's. The second is to the public: no dialect is broken, "bad
grammar" is usually a class or race judgment in disguise, and we have a duty to
say so against prescriptive shaming. Forensic and policy work — voice
identification, asylum language analysis, official-language legislation — can
decide whether someone is believed or deported, so the method's limits must be
stated as plainly as its findings.

## Scenarios

**An unfamiliar sound in the field.** Working on an undocumented language, the
linguist hears what might be two vowels where English has one. Instead of
guessing, they build a paradigm, elicit words that should differ only in that
vowel, and hunt for a minimal pair. They find *tási* "rope" vs. *tàsi* "river" — same
segments, different pitch, different meaning. That settles it: the language is
tonal, and tone is phonemic. After confirming distinct pitch contours in Praat,
they revise the phoneme inventory and re-transcribe earlier sessions — a contrast
they'd ignored had been changing meanings all along.

**A "grammar error" that isn't.** A school district asks whether a community's
children "can't speak correctly" because they say *she don't* and drop
copulas — *he tired*. The linguist shows these are not mistakes but a
rule-governed grammar (here, features of African American English): copula
deletion happens in exactly the environments where standard English allows
contraction, and nowhere else. The right framing is not remediation but
bidialectalism — teaching the standard as an added register without pathologizing
the home variety. The data, not the prejudice, drives the call.

**Reconstructing a parent language.** Three related languages show a pattern: one
has *p* where the others have *f* and *h* in the same cognates — *pata*, *fata*,
*hata* "foot." The correspondence holds across dozens of cognates, so the linguist
reconstructs a proto-form with *\*p* and posits two regular sound changes in the
daughter branches. The apparent exceptions turn out to be borrowings, identifiable
precisely because they *don't* obey the law — regularity is the tool that exposes
its own exceptions.

## Related Occupations

The linguist shares the descriptive, fieldwork-driven stance of the
anthropologist — both observe a human system on its own terms rather than judging
it — and the conceptual rigor of the philosopher, especially in semantics and the
philosophy of language. The speech-language pathologist applies the same sound
and structure analysis clinically, to repair language rather than describe it. The
writer manipulates the system from the inside. The prompt engineer and
computational linguist build machines that model language statistically, where
questions about meaning and ambiguity resurface as engineering problems. The
neuroscientist asks where in the brain this machinery lives.

## References

- *Course in General Linguistics* — Ferdinand de Saussure
- *Syntactic Structures* — Noam Chomsky
- *Language* — Leonard Bloomfield
- *Sociolinguistic Patterns* — William Labov
- *Studies in the Way of Words* — H. P. Grice
- The Leipzig Glossing Rules — Max Planck Institute / DFG
