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
        primary: '#40a0ff', //blue
        secondary: '#fca104', // orange
        thirdGreen: '#78c350', // green
        fourthPink: '#ff5252', // pink
        darkGray: '#939db1', // gray  
        darkOne: '#1d2334',
        darkTwo: '#212a3f',
        darkThree: '#2c3750',
      },
      backgroundColor: {
        primary: '#40a0ff', //blue
        secondary: '#fca104', // orange
        // darkBG: '#181e2c',
        darkBG: '#17171e',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Inter', 'Graphik', 'Merriweather', 'sans-serif', 'serif'],
        inter: ['Inter', 'Montserrat'],
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
        '3xl': '1360px',
        '4xl': '1440px',
        '5xl': '1500px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
}