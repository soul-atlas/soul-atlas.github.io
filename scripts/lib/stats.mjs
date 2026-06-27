// Build-time analytics. Derives the dashboard, statistics, and leaderboards
// from the corpus + git history. Pure functions, no I/O.
import { loadSectionSpec } from './corpus.mjs';

function adjacency(graph) {
  const adj = new Map(graph.nodes.map((n) => [n.id, new Set()]));
  for (const e of graph.edges) {
    adj.get(e.source)?.add(e.target);
    adj.get(e.target)?.add(e.source);
  }
  return adj;
}

/** Betweenness centrality (Brandes) — only run on modest graphs. */
function betweenness(graph, adj) {
  const nodes = graph.nodes.map((n) => n.id);
  const cb = new Map(nodes.map((n) => [n, 0]));
  if (nodes.length > 1200) return cb; // keep generate fast at scale
  for (const s of nodes) {
    const stack = [];
    const pred = new Map(nodes.map((n) => [n, []]));
    const sigma = new Map(nodes.map((n) => [n, 0]));
    const dist = new Map(nodes.map((n) => [n, -1]));
    sigma.set(s, 1);
    dist.set(s, 0);
    const queue = [s];
    while (queue.length) {
      const v = queue.shift();
      stack.push(v);
      for (const w of adj.get(v) || []) {
        if (dist.get(w) < 0) {
          dist.set(w, dist.get(v) + 1);
          queue.push(w);
        }
        if (dist.get(w) === dist.get(v) + 1) {
          sigma.set(w, sigma.get(w) + sigma.get(v));
          pred.get(w).push(v);
        }
      }
    }
    const delta = new Map(nodes.map((n) => [n, 0]));
    while (stack.length) {
      const w = stack.pop();
      for (const v of pred.get(w)) {
        delta.set(v, delta.get(v) + (sigma.get(v) / sigma.get(w)) * (1 + delta.get(w)));
      }
      if (w !== s) cb.set(w, cb.get(w) + delta.get(w));
    }
  }
  // normalise for undirected graph
  for (const [k, v] of cb) cb.set(k, v / 2);
  return cb;
}

/** Breadth-first shortest path between two slugs (unweighted). */
export function shortestPath(graph, from, to) {
  if (from === to) return [from];
  const adj = adjacency(graph);
  const prev = new Map();
  const visited = new Set([from]);
  const queue = [from];
  while (queue.length) {
    const v = queue.shift();
    for (const w of adj.get(v) || []) {
      if (visited.has(w)) continue;
      visited.add(w);
      prev.set(w, v);
      if (w === to) {
        const path = [to];
        let cur = to;
        while (prev.has(cur)) {
          cur = prev.get(cur);
          path.unshift(cur);
        }
        return path;
      }
      queue.push(w);
    }
  }
  return null;
}

export function computeStats(corpus, gitBySlug = {}) {
  const { souls, graph } = corpus;
  const spec = loadSectionSpec();
  const requiredCount = spec.filter((s) => s.required).length;
  const adj = adjacency(graph);
  const bc = betweenness(graph, adj);

  const total = souls.length;
  // Authored = everything we wrote here. Federated (externally-mirrored) SOULs
  // are attributed and browsable but excluded from authored-quality headline
  // shares so they can't flatter or distort the corpus's verified/stable signal.
  const authored = souls.filter((s) => !s.computed.federated);
  const authoredTotal = authored.length;
  const federatedTotal = total - authoredTotal;
  const byCategory = {};
  const byKind = {};
  const byStatus = {};
  const byProvenance = {};
  const byDifficulty = {};
  const tagCounts = {};
  const contributorCounts = {};
  let verifiedCount = 0;

  let totalWords = 0;
  const incomplete = [];
  const missingMetadata = [];
  const stalePages = [];
  const orphanPages = [];

  const now = Date.parse('2026-06-26'); // build reference date; stable across CI

  for (const s of souls) {
    const m = s.metadata;
    byCategory[m.category] = (byCategory[m.category] || 0) + 1;
    byKind[m.kind || 'occupation'] = (byKind[m.kind || 'occupation'] || 0) + 1;
    byStatus[m.status] = (byStatus[m.status] || 0) + 1;
    byProvenance[m.provenance || 'unknown'] = (byProvenance[m.provenance || 'unknown'] || 0) + 1;
    if (s.computed.verified) verifiedCount += 1;
    if (m.difficulty) byDifficulty[m.difficulty] = (byDifficulty[m.difficulty] || 0) + 1;
    for (const t of m.tags) tagCounts[t] = (tagCounts[t] || 0) + 1;
    const git = gitBySlug[s.slug];
    const contributors = new Set([
      ...(m.contributors || []),
      ...((git && git.authors) || []).map((a) => a.name),
    ]);
    for (const c of contributors) contributorCounts[c] = (contributorCounts[c] || 0) + 1;

    totalWords += s.computed.wordCount;
    // Quality signals describe the authored corpus. Federated mirrors aren't ours
    // to "complete" or "review", and they're not in the graph, so skip them here —
    // otherwise every mirror would show up as incomplete debt and a graph orphan.
    if (!s.computed.federated) {
      if (s.computed.completeness < 1) {
        incomplete.push({ slug: s.slug, title: s.title, completeness: s.computed.completeness });
      }
      if (!m.summary || !m.difficulty || (m.tags || []).length === 0) {
        missingMetadata.push({
          slug: s.slug,
          title: s.title,
          missing: [
            !m.summary && 'summary',
            !m.difficulty && 'difficulty',
            (m.tags || []).length === 0 && 'tags',
          ].filter(Boolean),
        });
      }
      const reviewed = m.last_reviewed || m.updated;
      if (reviewed && now - Date.parse(reviewed) > 1000 * 60 * 60 * 24 * 365) {
        stalePages.push({ slug: s.slug, title: s.title, last: reviewed });
      }
      if ((adj.get(s.slug) || new Set()).size === 0) {
        orphanPages.push({ slug: s.slug, title: s.title });
      }
    }
  }

  const interdisciplinary = graph.nodes
    .map((n) => {
      const cats = new Set();
      for (const nb of adj.get(n.id) || []) {
        const t = corpus.bySlug.get(nb);
        if (t) cats.add(t.metadata.category);
      }
      return { slug: n.id, title: n.title, categories: cats.size, degree: n.degree };
    })
    .filter((x) => x.degree > 0)
    .sort((a, b) => b.categories - a.categories || b.degree - a.degree)
    .slice(0, 25);

  const centrality = graph.nodes
    .map((n) => ({
      slug: n.id,
      title: n.title,
      degree: n.degree,
      betweenness: Math.round((bc.get(n.id) || 0) * 1000) / 1000,
    }))
    .sort((a, b) => b.degree - a.degree || b.betweenness - a.betweenness);

  const dated = (key) =>
    souls
      .map((s) => ({
        slug: s.slug,
        title: s.title,
        date: gitBySlug[s.slug]?.[key] || s.metadata[key],
      }))
      .filter((x) => x.date)
      .sort((a, b) => b.date.localeCompare(a.date));

  const bySize = souls
    .map((s) => ({ slug: s.slug, title: s.title, words: s.computed.wordCount }))
    .sort((a, b) => b.words - a.words);

  const possibleEdges = (total * (total - 1)) / 2;
  const density = possibleEdges > 0 ? graph.edges.length / possibleEdges : 0;

  return {
    generatedFor: '2026-06-26',
    totals: {
      souls: total,
      federated: federatedTotal,
      kinds: Object.keys(byKind).length,
      edges: graph.edges.length,
      words: totalWords,
      categories: Object.keys(byCategory).length,
      tags: Object.keys(tagCounts).length,
      contributors: Object.keys(contributorCounts).length,
      avgWords: total ? Math.round(totalWords / total) : 0,
      avgReadingTime: total
        ? Math.round((souls.reduce((n, s) => n + s.computed.readingTimeMinutes, 0) / total) * 10) /
          10
        : 0,
      graphDensity: Math.round(density * 100000) / 100000,
      // Shares describe authored quality, so federated mirrors don't distort them.
      stableShare: authoredTotal
        ? Math.round(
            (authored.filter((s) => s.metadata.status === 'stable').length / authoredTotal) * 1000,
          ) / 1000
        : 0,
      verified: verifiedCount,
      verifiedShare: authoredTotal ? Math.round((verifiedCount / authoredTotal) * 1000) / 1000 : 0,
    },
    byCategory: sortRecord(byCategory),
    byKind: sortRecord(byKind),
    byStatus,
    byProvenance,
    byDifficulty,
    tags: Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count),
    contributors: Object.entries(contributorCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),
    centrality: centrality.slice(0, 25),
    interdisciplinary,
    newest: dated('created').slice(0, 12),
    recentlyUpdated: dated('updated').slice(0, 12),
    largest: bySize.slice(0, 12),
    smallest: [...bySize].reverse().slice(0, 12),
    quality: {
      requiredSections: requiredCount,
      unverified: souls.filter((s) => !s.computed.verified).length,
      incomplete: incomplete.sort((a, b) => a.completeness - b.completeness).slice(0, 50),
      missingMetadata: missingMetadata.slice(0, 50),
      stalePages: stalePages.slice(0, 50),
      orphanPages,
      danglingReferences: corpus.danglers,
    },
  };
}

function sortRecord(rec) {
  return Object.fromEntries(Object.entries(rec).sort((a, b) => b[1] - a[1]));
}
