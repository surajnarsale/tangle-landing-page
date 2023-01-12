/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)'],
      // other fonts families goes here
    },
    colors: {
      primary: {
        500: '#FF5A15',
        400: '#FFB697',
        300: '#FFEAD8',
        200: '#F1E8DF',
        100: '#FFF6EE',
      },
      pink: '#FF94DC',
      dark: {
        500: '#10100F',
        400: '#1F1E1D',
        300: '#292725',
        200: '#393634',
      },
      light: '#ffff',
    },

    extend: {},
  },
  plugins: [],
}

// theme: {
//   fontFamily: {
//     sans: ['var(--font-montserrat)'],
//     // other fonts families goes here
//   },
//   fontSize: {
//     xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
//     sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
//     lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
//     x1: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],

//     '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
//     '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
//     '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
//     '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
//   },
//   colors: {
//     white: '#FFFFFF',
//     purple: '#3F3CBB',
//     midnight: '#121063',
//     metal: '#565584',

//     'tahiti-blue': '#3AB7BF',
//     'cool-white': '#ECEBFF',
//     'bubble-gum': '#FF77E9',
//     'copper-rust': '#78DCCA',
//   },
//   screens: {
//     tablet: '960px',
//     desktop: '1248px',
//   },
//   extend: {},
// },
