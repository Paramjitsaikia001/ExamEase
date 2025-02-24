/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'],
        doto: ['"Doto"', 'sans-serif'],
        liter: ['"Liter"', 'serif'], // Adjust fallback as desired
        playwrite: ['"Playwrite ES Deco Guides"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        sourgummy: ['"Sour Gummy"', 'cursive'], // or other fallback
        stylescript: ['"Style Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
