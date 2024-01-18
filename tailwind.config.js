/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#21366c',
        secondary: '#35c07c',
      },
      backgroundColor: {
        primary: '#21366c',
        secondary: '#35c07c',
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': '390px',
        'sm': '448px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
      },
    },
  },
  // theme: {
  //   extend: {
  //    
  //     },
  //   },
  //   fontFamily: {
  //     primaryFront: ["Quicksand", "sans-serif"],
  //     secondaryFront: ["Poppins", "sans-serif"],
  //   },
  // },
  plugins: [],
}