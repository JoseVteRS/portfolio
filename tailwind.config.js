/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["IBM Plex Mono", "sans-serif"],
        text: ["News Cycle", "sans-serif"],
      },
    },
  },
  plugins: [],
};
