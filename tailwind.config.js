/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        'primary': '#4F46E5', // Indigo profesional y moderno
        'dark-bg': '#0F172A',
      }
    },
  },
  plugins: [],
}