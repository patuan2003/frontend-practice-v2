/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        color007882: '#007882',
        color3B4144: '#3B4144',
        colorffffff80: '#ffffff80',
        colord93c23: '#D93C23',
        colorcccccc: '#CCCCCC',
        color395185: '#395185',
        colorffffff: '#FFFFFF',
        colore6e6e6: '#E6E6E6'
      },

      spacing: {
        400: '400px',
        600: '600px'
      },

      flexBasis: {
        '30p': '30%',
        '35p': '35%',
        '65p': '65%',
        '70p': '70%',
      },

      screens: {
        'max-sm': { 'max': '376px' },
        'max-md': { 'max': '769px' },
        'max-lg': { 'max': '1024px' },
      },
    },
  },
  plugins: [],
}
