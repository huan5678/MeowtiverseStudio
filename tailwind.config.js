/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        black: '#020E2E',
        primary: {
          DEFAULT: '#01113c',
          50: '#f2f3f5',
          100: '#e6e7ec',
          200: '#c0c4ce',
          300: '#99a0b1',
          400: '#4d5877',
          500: '#01113c',
          600: '#010f36',
          700: '#010d2d',
          800: '#010a24',
          900: '#00081d',
        },
        secondary: {
          DEFAULT: '#f0bc5e',
          50: '#fefcf7',
          100: '#fef8ef',
          200: '#fbeed7',
          300: '#f9e4bf',
          400: '#f5d08e',
          500: '#f0bc5e',
          600: '#d8a955',
          700: '#b48d47',
          800: '#907138',
          900: '#765c2e',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Verdana', 'FakePearl-Regular', ...fontFamily.sans],
      },
      keyframes: {
        updown: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-0.25rem)'},
        },
      },
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      });
    },
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'meowtiverse': {
          primary: '#01113c',
          secondary: '#f0bc5e',
          neutral: '#020E2E',
          'base-100': '#f2f3f5',
        },
      },
    ],
  },
};
