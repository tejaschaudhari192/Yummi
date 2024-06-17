/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Gilroy Extra Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

