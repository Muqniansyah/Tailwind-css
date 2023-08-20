/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  // fitur dark mode
  darkMode: "class",
  theme: {
    extend: {
      // custom font
      fontFamily: {
        inter: ["Inter"],
      },
      // custom warna
      colors: {
        muqni: "#bada55",
      },
    },
  },
  plugins: [],
};
