/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fade-in .4s ease-in-out 0s 1",
      },
    },

    fontFamily: {
      jest: '"Jost", sans-serif',
    },
  },
  plugins: [],
};
