#!/usr/bin/env bash
# Encodes assets/tour.webm (from scripts/gen-tour.mjs) into the two committed
# assets the README uses:
#   assets/tour.mp4 — full-resolution H.264 (the high-quality reference)
#   assets/tour.gif — a smaller, palette-optimized preview
#
# Both are sped up by the same factor so they tell the identical story. The GIF
# is the size-sensitive one (the knowledge-graph force simulation animates every
# node, which defeats GIF inter-frame compression), so it is rendered at a lower
# fps/width and then squeezed with gifsicle's lossy optimizer.
#
# Requires: ffmpeg, and gifsicle for the lossy pass (npm i -g gifsicle, or it is
# auto-detected at node_modules/gifsicle/vendor/gifsicle).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="${TOUR_SRC:-$ROOT/assets/tour.webm}"
GIF_OUT="$ROOT/assets/tour.gif"
MP4_OUT="$ROOT/assets/tour.mp4"

SPEED="${TOUR_SPEED:-1.5}"   # playback speed-up applied to both outputs
GIF_FPS="${TOUR_GIF_FPS:-8}"
GIF_W="${TOUR_GIF_W:-720}"
GIF_LOSSY="${TOUR_GIF_LOSSY:-120}"

[ -f "$SRC" ] || { echo "✗ $SRC not found — run: node scripts/gen-tour.mjs" >&2; exit 1; }

# Locate gifsicle (PATH or the npm vendor binary).
GIFSICLE="$(command -v gifsicle || true)"
[ -z "$GIFSICLE" ] && [ -x "$ROOT/node_modules/gifsicle/vendor/gifsicle" ] \
  && GIFSICLE="$ROOT/node_modules/gifsicle/vendor/gifsicle"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "→ MP4 (full res, ${SPEED}x)…"
ffmpeg -y -loglevel error -i "$SRC" \
  -vf "setpts=PTS/${SPEED}" -an \
  -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p -movflags +faststart \
  "$MP4_OUT"

echo "→ GIF (${GIF_W}px, ${GIF_FPS}fps, ${SPEED}x)…"
FILT="setpts=PTS/${SPEED},fps=${GIF_FPS},scale=${GIF_W}:-1:flags=lanczos"
# Pass 1: a palette tuned to the frames that actually change.
ffmpeg -y -loglevel error -i "$SRC" \
  -vf "${FILT},palettegen=max_colors=180:stats_mode=diff" "$TMP/palette.png"
# Pass 2: apply it. dither=none keeps the flat dark background clean and small.
ffmpeg -y -loglevel error -i "$SRC" -i "$TMP/palette.png" \
  -lavfi "${FILT}[x];[x][1:v]paletteuse=dither=none:diff_mode=rectangle" "$TMP/raw.gif"

if [ -n "$GIFSICLE" ]; then
  echo "→ gifsicle -O3 --lossy=${GIF_LOSSY}…"
  "$GIFSICLE" -O3 --lossy="$GIF_LOSSY" -o "$GIF_OUT" "$TMP/raw.gif"
else
  echo "  (gifsicle not found — writing unoptimized GIF; install gifsicle to shrink it)" >&2
  cp "$TMP/raw.gif" "$GIF_OUT"
fi

du -h "$MP4_OUT" "$GIF_OUT"
