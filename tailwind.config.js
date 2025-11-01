// --- START OF FILE: tailwind.config.js ---
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ========== Light Mode ==========
        primary: '#15193f',         // سرمه‌ای اصلی
        accent: '#c39f61',          // طلایی/خاکی اصلی

        // عناصر UI در حالت لایت
        'surface-bg': '#f7f7f7',     // پس‌زمینه خیلی روشن
        'text-color': '#555555',     // متن عمومی
        'heading-color': '#111111',  // تیترها

        // رنگ متن روی رنگ‌های اصلی
        'text-on-primary': '#ffffff',
        'text-on-accent': '#15193f',

        // ========== Dark Mode ==========
        'dark-primary': '#15193f',        // سرمه‌ای روشن‌تر برای حالت دارک
        'dark-accent': '#c39f61',         // طلایی روشن‌تر برای حالت دارک

        // عناصر UI در حالت دارک
        'dark-surface-bg': '#121212',    // پس‌زمینه اصلی دارک
        'dark-text-color': '#c7c7c7',    // متن عمومی
        'dark-heading-color': '#ffffff', // تیترها
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