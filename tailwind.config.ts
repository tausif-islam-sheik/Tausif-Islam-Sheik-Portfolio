import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#030612',
          900: '#04060F',
          800: '#070C1E',
          700: '#0C1329',
          600: '#0D152E',
          500: '#111B36',
        },
        pill: {
          DEFAULT: '#0D152E',
          border: 'rgba(148, 163, 184, 0.14)',
        },
        muted: '#8B9BB8',
        ice: '#F1F5F9',
        accent: {
          DEFAULT: '#5AA1FF',
          soft: '#3B82F6',
          dim: 'rgba(90, 161, 255, 0.12)',
        },
      },
      boxShadow: {
        pill: '0 0 0 1px rgba(148,163,184,0.10), 0 8px 30px rgba(2,6,20,0.6)',
        premium: '0 20px 60px rgba(2, 6, 20, 0.7)',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marquee-reverse 42s linear infinite',
        'marquee-slow': 'marquee 55s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
