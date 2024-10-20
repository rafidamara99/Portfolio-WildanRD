/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Light mode

        "gray-theme": "#E1E4EC",
        "primary": "#3457D5",
        "white-theme": "#FAFAFA",
        
        // Dark mode
        
        "nav": "#1D1D1D",
        "dark-primary": "#1E2126",
        "dark-primary-dark": "#282828",
        "dark-secondary": "#ff7d3b",
        "dark-gray": "#333",
        "dark-white": "#fff",
        "dark-blob": "#A427DF",
      },

      fontFamily: {
        Poppins: ['"Poppins", sans-serif;'],
        Montserrat: ['"Montserrat", sans-serif;'],
        Sacramento: ['"Sacramento", serif;'],
        Protest: ['"Protest Guerrilla", sans-serif;'],
        Roboto: ['"Roboto", sans-serif;'],
        WorkSans: ['"Work Sans", serif;'],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '50px'
      }
    }
  },
  plugins: [],
}

