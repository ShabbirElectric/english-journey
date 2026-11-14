/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0B1F3A',    // Deep Dark Navy for sidebar & dark accents
          DEFAULT: '#142D4E', // Navy Blue
          light: '#1E3A5F',   // Medium Navy
          border: '#2A4D77',  // Soft Navy border
        },
        sky: {
          light: '#DCEEFF',   // Very Light Blue
          DEFAULT: '#69B7F7', // Sky Blue brand accent
          hover: '#4FA3E8',   // Slightly deeper sky blue
          soft: '#EAF4FD',    // Ultra soft blue background
        },
        brand: {
          50: '#F0F7FD',
          100: '#DCEEFF',
          200: '#B6DDFF',
          300: '#8BC6FC',
          400: '#69B7F7',     // Sky Blue
          500: '#2A7FCE',
          600: '#142D4E',     // Navy Blue
          700: '#0F233E',
          800: '#0B1F3A',     // Dark Navy Blue
          900: '#071528',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F4F8FC',     // Light grey/blue background canvas
          200: '#E8F1F9',
          300: '#D5E5F3',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(11, 31, 58, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft': '0 8px 24px -4px rgba(11, 31, 58, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 32px -6px rgba(11, 31, 58, 0.14), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
