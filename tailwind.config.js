/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Aquí personalizaremos tus colores más adelante
      colors: {
        'primary': '#2563EB', // Un azul eléctrico profesional
        'dark-bg': '#0F172A', // Fondo oscuro moderno
      }
    },
  },
  plugins: [],
}