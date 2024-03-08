/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts,svg}",
  ],
  theme: {
    extend: {
      colors: {
        "main-seporator": "rgb(38, 38, 38)",
      },
      screens: {
        "lg+": "1263px"
      }

    },
  },
  plugins: [],
}
