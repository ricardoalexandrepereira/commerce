/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:"Josefin Sans",
        titleFont:"Nunito Sans",
      },
    },
  },
  plugins: [],
}
