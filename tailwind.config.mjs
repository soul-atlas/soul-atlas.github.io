/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Ink-on-paper neutrals with a single calm accent.
        accent: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5896ff',
          500: '#316bf4',
          600: '#1f4fda',
          700: '#1a3eb0',
          800: '#1b378f',
          900: '#1c3271',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            'h2 a, h3 a, h4 a': { textDecoration: 'none' },
          },
        },
      }),
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};
