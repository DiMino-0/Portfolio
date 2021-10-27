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

      colors:{
        "DiMino-red": "color-black",
      }
    },
    fontFamily:{
      Montserrat:["Montserrat", "sans-serif"]
    },
    container:{
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
        background: "bg-white rounded-xl shadow-xl",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
