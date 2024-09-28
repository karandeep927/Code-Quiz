/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryText:'#021526',
        secondText:'#03346E',
        thirdText:'#6EACDA',
        whiteText:'#fff',
       
        primaryBg:'#021526',
        secondBg:'#03346E',
        thirdBg:'#6EACDA',
        whiteBg:'#fff'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

