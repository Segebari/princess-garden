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

      screens: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1334px',
        // other theme options omitted for brevity...
      },
    },
  },
  plugins: [],
}
