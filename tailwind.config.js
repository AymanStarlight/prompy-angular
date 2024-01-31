/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-red': 'rgba(162,2,63,1)',
        'primary-blue': '#3B4652',
        'secondary-blue': '#c3cfe2'
      }
    },
  },
  plugins: [],
}

