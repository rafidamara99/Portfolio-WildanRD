/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter", sans-serif;'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        lg: '55px'
      }
    }
  },
  plugins: [],
}

