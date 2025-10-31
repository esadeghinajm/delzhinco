export default defineNuxtConfig({
  // فعال‌سازی DevTools برای تجربه توسعه بهتر
  devtools: { enabled: true },

  // تعریف ماژول‌های پروژه
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  // پیکربندی ماژول i18n برای دو زبانگی
  i18n: {
    locales: [
      {
        code: 'fa',
        iso: 'fa-IR',
        name: 'فارسی',
        dir: 'rtl'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        dir: 'ltr'
      }
    ],
    defaultLocale: 'fa', // زبان پیش‌فرض
    vueI18n: './i18n.config.ts' // مسیر فایل تنظیمات vue-i18n
  },

  // تنظیمات عمومی Head برای سئو
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  // css: ['assets/css/main.css'],
})