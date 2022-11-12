/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },

    extend: {
      colors: {
        primary: {
          purple: '#857AAC',
          dustPink: '#EEA5A3',
        },
        gray: {
          500: '#EFEFEF',
          600: '#CBCBCB',
          700: '#757575',
          800: '#5A5A5A',
          900: '#222222',
        },
      },
    },
  },
  plugins: [],
};
