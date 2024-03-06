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
        secondary: '#3aba69', // green
        tertiary: '#f65455', // red
        quaternary: '#fca104', // orange
        quinary: '#17171e',
        darkGray: '#939db1', // gray  
        darkOne: '#1d2334',
        darkTwo: '#212a3f',
        darkThree: '#2c3750',
      },
      backgroundColor: {
        primary: '#40a0ff', //blue
        secondary: '#17171e',
        tertiary: '#21212f',
        quaternary: '#181e2c',
        quinary: '#fca104', // orange
        senary: '#3aba69', // green
        septenary: '#f65455', // red
        whiteBg: '#e6ebee' 
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
        'xl': '900px',
        '2xl': '1024px',
        '3xl': '1280px',
        '4xl': '1360px',
        '5xl': '1440px',
        '6xl': '1500px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
}