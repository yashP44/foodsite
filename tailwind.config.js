/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // linearGradients: {
      //   'orange-brown': ['to top', '#ffa75f', '#a82404'],
      // },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', 'Philosopher'],
        philosopher: ['Philosopher', 'sans-serif'],
      },
      textColor: {
        'primary': '#292524', // Example color value, replace with your desired color
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    // other plugins...
  ],
}