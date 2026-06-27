// Central path + constant definitions for the engine.
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT = path.resolve(__dirname, '..', '..');
// The authored corpus.
export const SOULS_DIR = path.join(ROOT, 'souls');
// Federated content, mirrored from external collections, one subdir per origin
// (mirrored/<origin>/<slug>/). Kept under a separate root so it never enters
// authored stats/activity and the git heatmap, and is trivially distinguishable
// from work we authored. Each entry is flagged `federated` via its `source`.
export const MIRRORED_DIR = path.join(ROOT, 'mirrored');
export const SCHEMA_DIR = path.join(ROOT, 'schema');
export const GENERATED_DIR = path.join(ROOT, 'src', 'generated');
export const SOULS_OUT_DIR = path.join(GENERATED_DIR, 'souls');
export const PUBLIC_API_DIR = path.join(ROOT, 'public', 'api');
export const PUBLIC_API_SOULS_DIR = path.join(PUBLIC_API_DIR, 'souls');

export const GITHUB_REPO = process.env.GITHUB_REPO || 'soul-atlas/soul-atlas.github.io';
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
export const SITE_URL = (process.env.SITE_URL || 'https://soul-atlas.github.io').replace(/\/$/, '');
export const BASE_PATH = process.env.BASE_PATH || '/';

export const RELATIONSHIP_TYPES = [
  'related',
  'specialization',
  'prerequisite',
  'adjacent',
  'collaboration',
  'progression',
];
