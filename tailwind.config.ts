
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Comic Neue', 'cursive', 'sans-serif'],
        mono: ['Monaco', 'Consolas', 'Menlo', 'monospace'],
      },
      colors: {
        // Map tokens to CSS vars for full design control
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground, var(--background)) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground, var(--background)) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground, var(--background)) / <alpha-value>)'
        },
        highlight: {
          DEFAULT: 'hsl(var(--highlight) / <alpha-value>)',
          foreground: 'hsl(var(--gray-900) / <alpha-value>)'
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        info: 'var(--info)',
        // named palette for use as needed
        'sky-blue': {
          50: '#EFF9FF',
          100: '#DEF3FF',
          200: '#B8E8FF',
          300: '#8DDAFF',
          400: '#6ECFFF',
          500: '#4BA3FF',
          600: '#3B8AE5',
          700: '#2C72CC',
          800: '#1D5BA3',
          900: '#0E447A',
        },
        coral: {
          50: '#FFF5F2',
          100: '#FFEBE5',
          200: '#FFD6CC',
          300: '#FFBDA7',
          400: '#FF9E80',
          500: '#FF7D57',
          600: '#E56E4E',
          700: '#CC5E45',
          800: '#A34B38',
          900: '#7A392B',
        },
        green: {
          50: '#F2FBF0',
          100: '#E5F7E0',
          200: '#CCF0C2',
          300: '#A5F284',
          400: '#7ED957',
          500: '#5BB039',
          600: '#4C9330',
          700: '#3D7627',
          800: '#2E591E',
          900: '#1F3D15',
        },
        yellow: {
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFF295',
          400: '#FFDE59',
          500: '#FFCE29',
          600: '#E5B825',
          700: '#CC9F21',
          800: '#A3781C',
          900: '#7A5A16',
        },
        gray: {
          50: '#F9FDFF',
          100: '#E4F0F7',
          200: '#D1E2EC',
          300: '#A4B8C4',
          400: '#8AA6B5',
          500: '#6B8A99',
          600: '#5A7580',
          700: '#4B5D67',
          800: '#36444C',
          900: '#222B30',
        },
      },
      borderRadius: {
        lg: '20px',  // for cards etc
        md: '12px',
        sm: '6px'
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

