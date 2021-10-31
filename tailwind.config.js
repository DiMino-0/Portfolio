module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: { 
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      spacing:{
        '16': '4rem',
      },
      colors:{
        "DiMino-red": "color-black",
      }
    },
    fontFamily:{
      Montserrat:["Montserrat", "sans-serif"]
    },
    container:{
      center:true,
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
