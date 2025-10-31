// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#15193f',
        accent: '#c39f61',
        'surface-bg': '#f7f7f7',
        'text-color': '#555555',
        'heading-color': '#111111',
        'text-on-primary': '#ffffff',
        'text-on-accent': '#15193f',
      },
      fontFamily: {
        // به ما اجازه می‌دهد از کلاس font-sans استفاده کنیم
        sans: ['Vazirmatn', 'sans-serif'],
      },
      borderRadius: {
        // اضافه کردن مقدار border-radius سفارشی شما
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
}