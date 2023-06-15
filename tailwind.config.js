/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "dark-img-shadow": "0 0 1.4rem rgb(255, 255, 255)",
      },
      fontFamily: {
        description: ["Radiance", "Noto Sans", "sans-serif"],
      },
      backgroundSize: {
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
      },
      colors: {
        rock: "#a28c1f",
        ghost: "#7b62a3",
        electric: "#eed535",
        bug: "#719e3e",
        poison: "#b87ec8",
        normal: "#a3abae",
        fairy: "#fcb8e9",
        fire: "#fc7d23",
        grass: "#9bcb50",
        water: "#4592c3",
        psychic: "#f365b8",
        steel: "#9db7b7",
        dark: "#707070",
        fighting: "#d56722",
        ice: "#51c3e7",
        dragon: "#9468fe",
        ground: "#e9cf8e",
        flying: "#bfabf6",
      },
      minHeight: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
      },
      dropShadow: {
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "4xl-dark": [
          "0 35px 35px rgba(255, 255, 255, 0.25)",
          "0 45px 65px rgba(255, 255, 255, 0.15)",
        ],
      },
      keyframes: {
        up: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "up-down": "up 3s linear infinite",
        left: "slideLeft 500 linear",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(rock|ghost|electric|bug|poison|normal|fairy|fire|grass|water|psychic|steel|dark|fighting|ice|dragon|ground|flying)/,
    },
  ],
};
