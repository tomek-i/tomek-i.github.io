/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { corinthia: ['Corinthia', ...defaultTheme.fontFamily.sans] },
      keyframes: {
        // 'fade-in-down': {
        //   '0%': {
        //     opacity: '0',
        //     transform: 'translateY(-10px)',
        //   },
        //   '100%': {
        //     opacity: '1',
        //     transform: 'translateY(0)',
        //   },
        // },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
