/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito':['Nunito', 'sans-serif'],
        'bangers':['Bangers', 'cursive'],
        'josefin':['Josefin Sans', 'sans-serif'],
        'lora':['Lora', 'serif'],
        'Baloo':['Baloo Bhai 2', 'cursive'],
      }
    },
  },
  plugins: [],
}
