/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
        'y-0': '0deg',
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
      });
    },
  ],
};
