/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-inActive': '#707070',
        primary: '#00008B',
        black: {
          800: '#2c2c2c',
        },
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        caveat: ['Caveat', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '640px',
        md: '850px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
