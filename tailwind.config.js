/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        secondary:{
          100:'#E2E2D5',
          200:'#888883',
        }
      },
      fontFamily:{
        body:['Nunito']

      }
    
    },
  },
  plugins: [],
}

