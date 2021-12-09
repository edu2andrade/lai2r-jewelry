module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1444px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        play: ['Playfair Display', 'serif'],
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        platinum: '#e8e6e2ff',
        darkGray: '#363e3fff', 
        rawUmber: '#7c6643ff',
        camel: '#c18e46ff',
        eerieBlack: '#18191aff',
        rawUmber2: '#89654fff',
        salmon: '#fab084ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
