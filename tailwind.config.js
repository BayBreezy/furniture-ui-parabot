const { violet } = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        desktop: "200px",
        mobile: "30px",
      },
      colors: {
        primary: violet,
        "dark-bg": "#0b011a",
        "dark-bg-lighten": "#1a0c30",
      },
      fontFamily: {
        sans: ["IBM Plex Serif", "serif"],
      },
    },
  },
  plugins: [],
};
