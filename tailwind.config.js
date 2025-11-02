// --- START OF FILE: tailwind.config.js ---
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px', // افزایش عرض کانتینر
      },
    },
    extend: {
      colors: {
        primary: '#15193f',
        accent: '#c39f61',
        'surface-bg': '#f7f7f7',
        'text-color': '#555555',
        'heading-color': '#111111',
        'text-on-primary': '#ffffff',
        'text-on-accent': '#15193f',
        'dark-primary': '#2a305c',
        'dark-accent': '#d4b078',
        'dark-surface-bg': '#121212',
        'dark-text-color': '#c7c7c7',
        'dark-heading-color': '#ffffff',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
}