// Flat ESLint config (ESLint 9). Intentionally lean: the engine scripts are
// plain ESM and the Astro/TS surface is type-checked by `astro check`.
export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'src/generated/**', 'public/api/**'],
  },
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-undef': 'off',
      'prefer-const': 'warn',
      eqeqeq: ['warn', 'smart'],
    },
  },
];
