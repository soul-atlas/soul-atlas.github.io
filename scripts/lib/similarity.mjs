// Content similarity over the corpus, computed at build time with TF-IDF cosine
// (title + tags + summary + section prose, shorter/topical fields weighted up).
// One source of truth for the "Similar minds" cards, the Explore "find similar"
// picker, and the graph's similarity lens. No embedding service needed; the
// neural embeddings (scripts/gen-embeddings.py) power only the /map view.

const STOPWORDS = new Set(
  (
    'the and for are but not you all any can her was one our out has had his she him how its ' +
    'who get why see use two this that with from into over under than then them they their there ' +
    'here when what which while where your yours about above after again against because been ' +
    'before being below between both does doing down during each few more most other some such ' +
    'only own same these those very will would should could within without across among also ' +
    'like just much many often every less able based using used make makes made work works ' +
    'working set sets'
  ).split(/\s+/),
);

function tokenize(text) {
  const out = [];
  const re = /[a-z][a-z'-]{2,}/g;
  let m;
  const t = text.toLowerCase();
  while ((m = re.exec(t))) {
    const w = m[0].replace(/['-]/g, '');
    if (w.length >= 3 && !STOPWORDS.has(w)) out.push(w);
  }
  return out;
}

// Field-weighted bag of words for one SOUL.
function soulText(s) {
  const m = s.metadata ?? {};
  const parts = [];
  const repeat = (str, n) => {
    for (let i = 0; i < n; i++) parts.push(str);
  };
  repeat(s.title, 3);
  for (const tag of m.tags ?? []) repeat(String(tag).replace(/-/g, ' '), 3);
  if (m.summary) repeat(String(m.summary), 2);
  for (const sec of s.sections ?? []) parts.push(sec.markdown ?? '');
  return parts.join(' ');
}

/**
 * Compute content similarity across the corpus.
 * @param {Array<{slug:string, title:string, metadata:any, sections:any[]}>} souls
 * @param {{topN?:number, edgeK?:number}} [opts]
 * @returns {{ map: Record<string, {slug:string,score:number}[]>, edges: {source:string,target:string,score:number}[] }}
 */
export function computeSimilarity(souls, opts = {}) {
  const topN = opts.topN ?? 25; // candidates stored per SOUL (room to exclude linked ones later)
  const edgeK = opts.edgeK ?? 5; // neighbours per node in the graph lens
  const N = souls.length || 1;

  // TF + DF.
  const docs = [];
  const df = new Map();
  for (const s of souls) {
    const tf = new Map();
    for (const tok of tokenize(soulText(s))) tf.set(tok, (tf.get(tok) ?? 0) + 1);
    for (const term of tf.keys()) df.set(term, (df.get(term) ?? 0) + 1);
    docs.push({ slug: s.slug, tf });
  }

  // L2-normalized TF-IDF vectors (sublinear TF; drop near-ubiquitous terms).
  const vecs = new Map();
  for (const { slug, tf } of docs) {
    const v = new Map();
    let norm = 0;
    for (const [term, count] of tf) {
      const d = df.get(term);
      if (d > N * 0.5) continue;
      const w = (1 + Math.log(count)) * Math.log(N / d);
      if (w <= 0) continue;
      v.set(term, w);
      norm += w * w;
    }
    norm = Math.sqrt(norm) || 1;
    for (const [term, w] of v) v.set(term, w / norm);
    vecs.set(slug, v);
  }

  // Inverted index → sparse cosine.
  const inverted = new Map();
  for (const [slug, v] of vecs)
    for (const [term, w] of v) {
      if (!inverted.has(term)) inverted.set(term, []);
      inverted.get(term).push([slug, w]);
    }

  const map = {};
  const edgeSet = new Map(); // "a\tb" (a<b) → score, deduped undirected
  for (const [slug, v] of vecs) {
    const score = new Map();
    for (const [term, w] of v) {
      const postings = inverted.get(term);
      if (postings.length > N * 0.4) continue;
      for (const [other, ow] of postings) {
        if (other === slug) continue;
        score.set(other, (score.get(other) ?? 0) + w * ow);
      }
    }
    const ranked = [...score.entries()]
      .filter(([, s]) => s > 0)
      .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
    map[slug] = ranked
      .slice(0, topN)
      .map(([s, sc]) => ({ slug: s, score: Math.round(sc * 1e4) / 1e4 }));
    for (const [other, sc] of ranked.slice(0, edgeK)) {
      const key = slug < other ? `${slug}\t${other}` : `${other}\t${slug}`;
      if ((edgeSet.get(key) ?? -1) < sc) edgeSet.set(key, sc);
    }
  }

  const edges = [...edgeSet.entries()].map(([key, sc]) => {
    const [source, target] = key.split('\t');
    return { source, target, score: Math.round(sc * 1e4) / 1e4 };
  });

  return { map, edges };
}
