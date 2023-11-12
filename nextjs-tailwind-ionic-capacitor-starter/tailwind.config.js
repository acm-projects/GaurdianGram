//const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      /*
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        majormono: ['var(--font-majormono)', ...fontFamily.majormono],
      },
      */
    }
  },
  plugins: [
    //require("@tailwindcss/aspect-ratio"),
  ]
};