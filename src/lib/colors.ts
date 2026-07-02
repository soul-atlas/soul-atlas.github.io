// The category colour palette, kept free of any corpus imports so it is safe to
// use from client-side bundles (Explore filtering, the command palette, the
// sigil generator). `data.ts` re-exports these so existing imports keep working.

export const CATEGORY_FALLBACK = '#94a3b8';

export const CATEGORY_COLORS: Record<string, string> = {
  Technology: '#3b82f6',
  Healthcare: '#ef4444',
  'Skilled Trades': '#f59e0b',
  Engineering: '#8b5cf6',
  Science: '#06b6d4',
  Education: '#10b981',
  Business: '#6366f1',
  Government: '#64748b',
  Military: '#4b5563',
  Law: '#0ea5e9',
  Transportation: '#14b8a6',
  Agriculture: '#84cc16',
  Hospitality: '#ec4899',
  Creative: '#f472b6',
  Sports: '#22c55e',
  Entertainment: '#a855f7',
  Finance: '#eab308',
  'Public Service': '#0891b2',
  Historical: '#a16207',
  Emerging: '#d946ef',
  'Life Roles': '#fb7185',
};

export function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? CATEGORY_FALLBACK;
}
