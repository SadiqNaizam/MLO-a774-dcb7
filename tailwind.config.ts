import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  // darkMode: ["class"], // Removed as PRD does not specify a dark theme.
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: { // Preserved from original as PRD is silent.
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        'accent-green': 'hsl(var(--accent-green))', // Custom color from PRD
        sidebar: { // Updated based on PRD & simplified from original
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))'
          // Removed sidebar.primary, .accent, .border, .ring as not specified in PRD
        }
      },
      borderRadius: { // Aligned with PRD: --radius is 'md' (0.375rem)
        lg: 'var(--radius)', // Becomes 0.375rem (Tailwind's 'md', PRD default)
        md: 'calc(var(--radius) - 0.125rem)', // Becomes 0.25rem (Tailwind's 'sm' or 'rounded', PRD button radius)
        sm: 'calc(var(--radius) - 0.25rem)' // Becomes 0.125rem (Tailwind's 'xs')
      },
      fontFamily: { // Added based on PRD
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: { // Preserved from original as PRD is silent.
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: { // Preserved from original as PRD is silent.
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
      // Spacing: PRD mentions Tailwind's default scale, no extension needed.
      // Shadows: PRD mentions Tailwind classes (shadow-sm, shadow-md), use defaults.
    }
  },
  plugins: [require("tailwindcss-animate")], // Preserved from original.
} satisfies Config;
