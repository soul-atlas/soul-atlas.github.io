// Central path + constant definitions for the engine.
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT = path.resolve(__dirname, '..', '..');
export const OCCUPATIONS_DIR = path.join(ROOT, 'occupations');
export const SCHEMA_DIR = path.join(ROOT, 'schema');
export const GENERATED_DIR = path.join(ROOT, 'src', 'generated');
export const SOULS_OUT_DIR = path.join(GENERATED_DIR, 'souls');
export const PUBLIC_API_DIR = path.join(ROOT, 'public', 'api');
export const PUBLIC_API_SOULS_DIR = path.join(PUBLIC_API_DIR, 'occupations');

export const GITHUB_REPO = process.env.GITHUB_REPO || 'open-soul/soul-atlas';
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
export const SITE_URL = (process.env.SITE_URL || 'https://open-soul.github.io').replace(/\/$/, '');
export const BASE_PATH = process.env.BASE_PATH || '/soul-atlas';

export const RELATIONSHIP_TYPES = [
  'related',
  'specialization',
  'prerequisite',
  'adjacent',
  'collaboration',
  'progression',
];
