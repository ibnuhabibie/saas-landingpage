const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#060B27",
        accent: "#7214FF",
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },
      fontFamily: {
        satoshi: ["Satoshi", "cursive"],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
