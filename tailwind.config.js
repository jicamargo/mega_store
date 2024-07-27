/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        'body': ['sans-serif'],
      },
      borderWidth: {
        '14': '14px',
      },
    },
  },
  plugins: [],
}

