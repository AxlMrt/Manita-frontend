/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '180': '180px',
      },
       spacing: {
        '88': '22rem',
      }
    },
    fontFamily: {
      kodchasan: ["Kodchasan", "sans-serif"],
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      '1xl': {'max': '1381px'},

      'xl': {'max': '1261px'},
      // => @media (max-width: 1200px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '769px'},
      // => @media (max-width: 769px) { ... }

      'sm': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
      'little': { 'max': '520px' },
      'laptop': '769px',
    }
  },
  plugins: [],
}