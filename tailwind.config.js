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
        center: true,
        screens: {
          xl: "1224px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
