/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'body': 'Poppins, sans-serif'
      },
      colors: {
        primary: '#383961',
        martinique: '#383961',
        azure: '#1e7ee2',
        cobalt: '#004AAD'
      }
    },
  },
  plugins: [],
}