/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '800px'},
      },
      height: {
        'screen-75': '75vh',
        'screen-100': '100vh',
      },
      width: {
        'screen-100': '100vw',
      },
    },
  },
  plugins: [],
}

