/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: 'rgba(250, 130, 50, 1)',
        primaryBlue: 'rgba(27, 99, 146, 1)',
        customGray: '#5F6C72'
      }
    },
  },
  plugins: [require("daisyui")],
}
