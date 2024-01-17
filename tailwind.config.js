/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          greenLight: "#35c07c",
          darkBlue: "#21366c",
          darkLightBlue: "#21366c",
          white: "#ffffff",
          blue: "#3279bb",
          red: "#ff0000",
        },
      },
    },
    fontFamily: {
      primaryFront: ["Quicksand", "sans-serif"],
      secondaryFront: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
