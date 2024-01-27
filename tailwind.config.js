/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat"]
      },
      colors: {
        "superRed": "#FF2D3D",
        "superGray": "#96999D",
      }
    },
  },
  plugins: [],
}

