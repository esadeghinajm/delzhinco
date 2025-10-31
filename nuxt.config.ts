export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      darkMode: 'class', // فعال‌سازی حالت کلاس
      theme: {
        extend: {
          colors: {
            primary: '#15193f',
            accent: '#c39f61',
            // ... بقیه رنگ‌ها
          },
        },
      },
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'fa', iso: 'fa-IR', name: 'فارسی', dir: 'rtl', file: 'fa.json' },
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' }
    ],
    defaultLocale: 'fa',
    langDir: 'locales', // به ماژول می‌گوید فایل‌ها در پوشه locales هستند
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})