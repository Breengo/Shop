const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--roboto-font)", ...fontFamily.sans],
        serif: ["var(--roboto-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
