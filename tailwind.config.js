/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004D66',
        secondary: '#fdd017',
        accent: '#b20000',
        topbg: '#121212',
      },
    },
  },
  plugins: [],
}
