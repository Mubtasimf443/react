import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#60a5fa',
          dark: '#3b82f6',
          400: '#7ab6ff',
          500: '#5da0f3',
          600: '#3178cf',
        },
        gray: {
          900: '#0f172a',
          800: '#1f2937',
        },
        muted: {
          DEFAULT: '#334155',
          foreground: '#94a3b8',
        },
        border: '#1e293b',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config