/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf8ff',
          100: '#f3efff',
          200: '#e9e2fe',
          300: '#d4c5fd',
          400: '#b397fa',
          500: '#8b5cf6',
          600: '#6d28d9',
          700: '#581c87',
          800: '#4c1d95',
          900: '#3b0764',
          950: '#230340',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(109, 40, 217, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'laptop': '0 25px 60px -15px rgba(88, 28, 135, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'paper': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
