/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        "accent": "hsl(277, 64%, 61%)",
        "heading": "hsl(0, 0%, 100%)",
        "main-text": "hsla(0, 0%, 100%, 0.75)",
        "stat-heading": "hsla(0, 0%, 100%, 0.6)",

      }
    },
  },
  plugins: [],
}
