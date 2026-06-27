#!/usr/bin/env node
// Depth audit. The Reddit critique that prompted this: "the concrete ones are
// genuinely good… the more abstract entries read thinner, more like paraphrase."
// Word count can't tell those apart — every SOUL is padded to the same length.
// This scores *specificity* instead: the density of the things that tend to make
// an entry concrete (named methods, acronyms, numbers, terms of art, proper
// nouns, lexical variety) minus the things that mark paraphrase (banned filler,
// hedging, empty intensifiers). It produces a ranked worklist so review effort
// goes where it's most likely needed.
//
// This is a TRIAGE HEURISTIC, not a verdict on quality. Its biggest blind spot:
// trades whose terms of art are plain English (arboriculture — "branch collar",
// "hinge wood", "three-cut") score lower than fields dense in acronyms and
// numbers (electrician, statistician), even when the writing is excellent. A low
// score means "worth a human look," not "bad." Always read the entry.
//
//   npm run audit                # ranked table, thinnest first
//   npm run audit -- --bottom 40 # show only the 40 thinnest
//   npm run audit -- --json      # machine-readable, full corpus
//   npm run audit -- --slug arborist   # explain one SOUL's score
import { buildCorpus } from './lib/corpus.mjs';

const argv = process.argv.slice(2);
const opt = (name, def = null) => {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return def;
  const v = argv[i + 1];
  return v && !v.startsWith('--') ? v : true;
};
const asJson = argv.includes('--json');
const bottom = Number(opt('bottom', 0)) || 0;
const onlySlug = opt('slug', null);

const ANSI = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  reset: '\x1b[0m',
};
const c = (color, s) => `${ANSI[color]}${s}${ANSI.reset}`;

// Filler that marks paraphrase: the Style Guide's banned phrases + hedging.
const FILLER = [
  /\bdelve\b/gi,
  /\btapestry\b/gi,
  /navigat\w* the complex/gi,
  /it'?s not just .* it'?s/gi,
  /\bin conclusion\b/gi,
  /\bever-(evolving|changing)\b/gi,
  /\btestament to\b/gi,
  /\brealm\b/gi,
  /\bunlock\b/gi,
  /\belevate\b/gi,
  /game-?changer/gi,
  /in today'?s .* world/gi,
  /at the end of the day/gi,
  /\bwhen it comes to\b/gi,
  /plays? an? (crucial|key|vital|important|pivotal) role/gi,
  /\bit is important to (note|remember|understand)\b/gi,
  /\b(very|really|extremely|highly|incredibly|truly)\b/gi,
  /\b(various|numerous|several|a variety of|a range of)\b/gi,
  /\b(effectively|efficiently|successfully|properly|appropriately)\b/gi,
  /\b(leverage|utilize|facilitate|enhance|streamline|optimize)\b/gi,
];

// Signals of real, specific domain knowledge.
const RE_ACRONYM = /\b[A-Z][A-Z0-9]{1,6}\b/g; // CODIT, ANSI, OSHA, PEEP
const RE_NUMBER =
  /\b\d+(?:[.,]\d+)?\s?(?:%|°|mm|cm|m|km|kg|g|lb|psi|hz|khz|mhz|ghz|v|a|w|kw|ml|l|mg|°c|°f|ft|in|hrs?|hours?|days?|years?|x)?\b/gi;
const RE_CODESPAN = /`[^`]+`/g;
const RE_PROPER = /\b[A-Z][a-z]+(?:[ -][A-Z][a-z]+)+\b/g; // multi-word proper nouns

function uniq(arr) {
  return Array.from(new Set(arr));
}

function scoreSoul(soul) {
  // Use only the prose body, not headings.
  const body = soul.sections.map((s) => s.markdown).join('\n\n');
  const words = Math.max(1, soul.computed.wordCount);
  const per1k = (n) => Math.round((n / words) * 1000 * 10) / 10;

  const acronyms = uniq((body.match(RE_ACRONYM) || []).filter((a) => a !== 'A' && a !== 'I'));
  const numbers = body.match(RE_NUMBER) || [];
  const codespans = body.match(RE_CODESPAN) || [];
  const propers = uniq(body.match(RE_PROPER) || []);

  // Vocabulary richness within the dedicated terms-of-art sections.
  const vocab = soul.sections.find((s) => s.heading === 'Vocabulary');
  const tools = soul.sections.find((s) => s.heading === 'Tools');
  const vocabTerms = vocab ? (vocab.markdown.match(RE_CODESPAN) || []).length : 0;
  const toolTerms = tools ? (tools.markdown.match(RE_PROPER) || []).length : 0;

  // Lexical diversity: unique words / total words (paraphrase repeats itself).
  const tokens = body.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || [];
  const diversity = tokens.length ? uniq(tokens).length / tokens.length : 0;

  let filler = 0;
  const fillerHits = [];
  for (const re of FILLER) {
    const m = body.match(re);
    if (m) {
      filler += m.length;
      fillerHits.push(...m);
    }
  }

  const signal =
    per1k(acronyms.length) * 3 +
    per1k(numbers.length) * 2 +
    per1k(codespans.length) * 2.5 +
    per1k(propers.length) * 1.5 +
    vocabTerms * 0.4 +
    toolTerms * 0.3 +
    diversity * 40;
  const noise = per1k(filler) * 4;
  const score = Math.round((signal - noise) * 10) / 10;

  return {
    slug: soul.slug,
    title: soul.title,
    category: soul.metadata.category,
    words,
    score,
    signals: {
      acronyms: acronyms.length,
      numbers: numbers.length,
      codespans: codespans.length,
      properNouns: propers.length,
      vocabTerms,
      diversity: Math.round(diversity * 1000) / 1000,
      fillerHits: filler,
    },
    examples: { acronyms: acronyms.slice(0, 8), filler: uniq(fillerHits).slice(0, 8) },
  };
}

const corpus = buildCorpus();
const rows = corpus.souls.map(scoreSoul).sort((a, b) => a.score - b.score);

if (onlySlug && onlySlug !== true) {
  const r = rows.find((x) => x.slug === onlySlug);
  if (!r) {
    console.error(`No SOUL "${onlySlug}"`);
    process.exit(1);
  }
  console.log(JSON.stringify(r, null, 2));
  process.exit(0);
}

if (asJson) {
  console.log(JSON.stringify(rows, null, 2));
  process.exit(0);
}

const scores = rows.map((r) => r.score);
const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
const p = (q) => scores[Math.floor((scores.length - 1) * q)];

const show = bottom ? rows.slice(0, bottom) : rows;
console.log('');
console.log(c('bold', '  Depth audit — specificity score (higher = more concrete)'));
console.log(
  c(
    'dim',
    `  ${rows.length} SOULs · mean ${mean.toFixed(1)} · p25 ${p(0.25).toFixed(1)} · median ${p(0.5).toFixed(1)} · p75 ${p(0.75).toFixed(1)}`,
  ),
);
console.log(
  c('dim', '  Lowest specificity first — a triage signal, not a verdict. Read before judging:'),
);
console.log(
  c('dim', '  plain-language trades (arboriculture) can score low while reading excellently.\n'),
);
console.log(c('dim', '  score   acr  num  code  prop  div    filler  slug'));
for (const r of show) {
  const color = r.score < p(0.25) ? 'red' : r.score < p(0.5) ? 'yellow' : 'green';
  const s = r.signals;
  console.log(
    `  ${c(color, String(r.score).padStart(5))}  ${String(s.acronyms).padStart(4)} ${String(s.numbers).padStart(4)} ${String(s.codespans).padStart(5)} ${String(s.properNouns).padStart(5)} ${String(s.diversity).padStart(5)} ${String(s.fillerHits).padStart(7)}   ${r.slug} ${c('dim', '· ' + r.category)}`,
  );
}
console.log('');
console.log(
  c(
    'dim',
    `  Tip: npm run audit -- --slug <name> to explain one · --json for the full list · --bottom N to trim.`,
  ),
);
console.log('');
