const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['planetkosmos', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
