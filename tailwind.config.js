/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070a',
          900: '#080b11',
          850: '#0c1018',
          800: '#111722',
          750: '#172030',
          700: '#1f2b3e',
        },
        cyan: {
          accent: '#00f0ff',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        indigo: {
          accent: '#6366f1',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        purple: {
          accent: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-flow': 'laserFlow 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        laserFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.08) 0%, rgba(99, 102, 241, 0.04) 35%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
