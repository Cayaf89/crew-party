const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.orange,
        danger: colors.red
      },
    }
  },
  plugins: [],
}
