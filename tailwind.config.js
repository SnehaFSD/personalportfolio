/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor :{
        'primary': 'rgb(63, 63, 230)',
        'secondary' : '#13079bd5'
      }
    },
    fontFamily : {
      'heroin-font' : 'Sriracha'
    }
    
  },
  plugins: [],
}

