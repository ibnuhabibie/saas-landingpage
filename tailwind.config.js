const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#060B27",
        accent: "#7214FF",
      },
      fontFamily: {
        satoshi: ["Satoshi", "cursive"],
      },
      container: {
        padding: {
          sm: "2rem",
          lg: "1rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
        center: true,
        screens: {
          xl: "1224px",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1224px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
