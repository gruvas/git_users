/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'lg': {'max': '900px'},
      'md': {'max': '830px'},
      'sm': {'max': '720px'},
      'msm': {'max': '545px'},
      'vsm': {'max': '480px'}
    },

    extend: {},

    colors: {
      darkRed: '#B00000',
      black: '#000',
      white: '#fff',
      lt_blue: '#f6f8fa',
      transparent_gray: '#ccc9;',
      blue: '#0969da'
    }
  },
  plugins: [],
}
