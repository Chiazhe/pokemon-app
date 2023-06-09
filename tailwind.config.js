/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "dark-img-shadow": "0 0 1.4rem rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
