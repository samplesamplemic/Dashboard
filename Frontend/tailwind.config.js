/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f2efe6",
        "secondary-light": "#e4e3df",
        "primary-dark": "#8f8279",
        "secondary-dark": "#f2efe6",
        "headings-clr": "#5d5d5d",
        "gray-new": "#999999",
        white: "#FFF",
        "neutral-400": "#A3A3A3",
        black: "rgba(19, 19, 19, 0.918)",
        "gradient-end": "rgba(235, 231, 211, 0)",
      },
      fontSize: {
        nine: "0.563rem",
        ten: "0.625rem",
      },
    },
    screens: {
      sm: { max: "469px" },
      big: { max: "1000px" },
      // => @media (max-width: 639px) { ... }}
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
