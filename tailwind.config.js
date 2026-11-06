/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fbf7f3',
          100: '#f3e9dd',
          200: '#e6d2bb',
          300: '#d4b594',
          400: '#bf9470',
          500: '#a9754f',
          600: '#8f5c3a',
          700: '#74462a',
          800: '#5c3821',
          900: '#45291a',
        },
        sand: {
          50: '#fdfaf5',
          100: '#f8f1e4',
          200: '#efe2c8',
          300: '#e2cda6',
          400: '#d4b07a',
          500: '#c0924d',
        },
      },
    },
  },
  plugins: [],
};
