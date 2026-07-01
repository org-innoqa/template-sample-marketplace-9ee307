/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: { 50: '#fffcf7', 500: '#d97706', 600: '#b45309' }
      }
    },
  },
  plugins: [],
}