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
    screens: {
      "2xl": "1920px",
      xl: "1500px",
      lg: "1200px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
