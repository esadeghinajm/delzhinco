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
    locales: [
      { code: 'fa', name: 'fa-IR', file: 'fa.json', dir: 'rtl' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'fa', // زبان پیش‌فرض
    vueI18n: './i18n.config.ts' // مسیر فایل تنظیمات vue-i18n 
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})