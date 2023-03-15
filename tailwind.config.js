/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Dancing-script": ["Dancing Script", "cursive"],
        "jost": ["Jost", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "monserrat": ["Montserrat", "sans-serif"],
        "tilt-wrap" : ["Tilt Warp", "cursive"]
      }
    },
  },
  plugins: [],
}
