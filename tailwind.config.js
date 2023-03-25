const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.orange,
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": colors.red[500],
          "secondary": colors.orange[500],
          "accent": "#1FB2A5",
          "neutral": "#191D24",
          "base-100": "white",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
