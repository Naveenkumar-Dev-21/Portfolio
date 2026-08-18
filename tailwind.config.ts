import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        surface: 'rgb(var(--surface))',
        'surface-elevated': 'rgb(var(--surface-elevated))',
        border: 'rgb(var(--border))',
        'text-primary': 'rgb(var(--text-primary))',
        'text-secondary': 'rgb(var(--text-secondary))',
        'text-muted': 'rgb(var(--text-muted))',
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          muted: 'rgb(var(--accent-muted))',
        },
      },
      fontFamily: {
        sans: ['var(--font-titillium)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['1.125rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 7rem)',
        'container': 'clamp(1.5rem, 5vw, 3rem)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
      backgroundImage: {
        'radial-accent': 'radial-gradient(circle at top, rgba(var(--accent), 0.08), transparent 35%)',
      },
    },
  },
  plugins: [],
}
export default config