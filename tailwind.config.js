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
        primary: '#455ce9', //blue
        secondary: '#fca104', // orange
        third: '#35c07c ', // green
        grayPrimary: '#e9eef1' // gray  
      },
      backgroundColor: {
        primary: '#455ce9', //blue
        secondary: '#fca104', // orange
        third: '#35c07c ', // green
        grayPrimary: '#e9eef1' // gray  
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
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
        '4xl': '1500px',
      },
    },
  },
  plugins: [],
}