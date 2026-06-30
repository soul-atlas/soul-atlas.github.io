#!/usr/bin/env python3
"""Generate the data behind the /map embedding playground. This is an *offline*
dev tool — it needs Python with sentence-transformers, scikit-learn, and
umap-learn, plus a one-time model download, none of which belong in CI. Its
output (public/embeddings/*.json) is committed like any other asset and
regenerated when the corpus changes:

    pip install "sentence-transformers" scikit-learn umap-learn
    python scripts/gen-embeddings.py

For each small sentence-transformer model we embed every SOUL, then project the
embeddings to 2D three ways — PCA, UMAP, t-SNE — entirely here, because doing
UMAP/t-SNE in the browser is far too slow. The committed file therefore holds
only the 2D coordinates (+ labels), not the raw vectors, so it stays tiny and
the page is instant. Deterministic (fixed seeds).

TF-IDF similarity (computed in-build, see src/lib/data.ts) remains the default
for the "Similar minds" cards and the graph lens; these projections power /map.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOULS_DIR = os.path.join(ROOT, "public", "api", "souls")
OUT_DIR = os.path.join(ROOT, "public", "embeddings")
SEED = 42

MODELS = [
    {"id": "minilm", "name": "all-MiniLM-L6-v2", "model": "sentence-transformers/all-MiniLM-L6-v2"},
    {"id": "bge-small", "name": "bge-small-en-v1.5", "model": "BAAI/bge-small-en-v1.5"},
]

PRIORITY_SECTIONS = [
    "Purpose",
    "Core Mission",
    "Guiding Principles",
    "Mental Models",
    "First Principles",
    "Decision Frameworks",
    "Questions Experts Constantly Ask",
    "Rules of Thumb",
]


def representative_text(rec):
    m = rec.get("metadata", {})
    parts = [rec.get("title", "")]
    if m.get("summary"):
        parts.append(m["summary"])
    tags = m.get("tags") or []
    if tags:
        parts.append(", ".join(str(t).replace("-", " ") for t in tags))
    by_heading = {s.get("heading", ""): (s.get("markdown") or "") for s in rec.get("sections", [])}
    used = set()
    for h in PRIORITY_SECTIONS:
        if h in by_heading:
            parts.append(by_heading[h])
            used.add(h)
    for h, md in by_heading.items():
        if h not in used:
            parts.append(md)
    text = "\n".join(parts)
    return " ".join(text.replace("#", " ").replace("*", " ").replace("`", " ").split())


def project(emb):
    """Return {pca, umap, tsne} 2D coordinate lists for an (N, D) embedding array."""
    import numpy as np
    from sklearn.decomposition import PCA
    from sklearn.manifold import TSNE
    import umap

    def rounded(a):
        return [[round(float(x), 4), round(float(y), 4)] for x, y in a]

    pca = PCA(n_components=2, random_state=SEED).fit_transform(emb)
    reducer = umap.UMAP(
        n_components=2, n_neighbors=15, min_dist=0.1, metric="cosine", random_state=SEED
    )
    um = reducer.fit_transform(emb)
    ts = TSNE(
        n_components=2,
        perplexity=30,
        init="pca",
        metric="cosine",
        random_state=SEED,
        learning_rate="auto",
    ).fit_transform(emb)
    return {"pca": rounded(pca), "umap": rounded(um), "tsne": rounded(ts)}


def main():
    if not os.path.isdir(SOULS_DIR):
        sys.exit(f"✗ {SOULS_DIR} not found — run `npm run generate` first.")
    files = sorted(f for f in os.listdir(SOULS_DIR) if f.endswith(".json"))
    recs = [json.load(open(os.path.join(SOULS_DIR, f))) for f in files]
    ids = [r["slug"] for r in recs]
    titles = [r["title"] for r in recs]
    cats = [r.get("metadata", {}).get("category", "") for r in recs]
    texts = [representative_text(r) for r in recs]
    print(f"• {len(recs)} SOULs")

    from sentence_transformers import SentenceTransformer

    os.makedirs(OUT_DIR, exist_ok=True)
    index = []
    for spec in MODELS:
        print(f"• encoding with {spec['name']} …")
        model = SentenceTransformer(spec["model"])
        emb = model.encode(texts, normalize_embeddings=True, batch_size=64, show_progress_bar=True)
        print("  projecting (pca, umap, t-sne) …")
        projections = project(emb)
        payload = {
            "id": spec["id"],
            "name": spec["name"],
            "dim": int(emb.shape[1]),
            "count": len(ids),
            "ids": ids,
            "titles": titles,
            "categories": cats,
            "projections": projections,
        }
        out = os.path.join(OUT_DIR, f"{spec['id']}.json")
        with open(out, "w") as fh:
            json.dump(payload, fh)
        kb = os.path.getsize(out) / 1024
        print(f"  → {os.path.relpath(out, ROOT)} — {kb:.0f} KB")
        index.append({"id": spec["id"], "name": spec["name"], "dim": int(emb.shape[1]), "count": len(ids)})

    with open(os.path.join(OUT_DIR, "index.json"), "w") as fh:
        json.dump({"models": index}, fh, indent=2)
    print(f"✓ wrote {len(index)} model(s) + index to {os.path.relpath(OUT_DIR, ROOT)}")


if __name__ == "__main__":
    main()
