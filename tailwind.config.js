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
        secondText:'#0000f6',
        thirdText:'#75747475',
       
        primaryBg:'#021526',
        secondBg:'#0000f6',
        thirdBg:'#515151ba',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

