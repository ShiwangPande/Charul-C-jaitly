/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin.js')
  ],
  // navbar humbergur notworking
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],



}