/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  darkMode: "class",
  plugins: [nextui(), require("daisyui"), require('flowbite/plugin')],
}
