/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Light mode

        "bg-nav": "#ffff",
        "primary": "#2563eb",
        "text-color-LM": "#6b7280",
        "text-color-black": "#282828",
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

