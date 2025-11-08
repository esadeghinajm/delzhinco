// nuxtCtx.config.ts
export default defineNuxtConfig({
    nitro: {
    compatibilityDate: '2025-11-04'
  },
  devtools: { enabled: true },

  app: {
    head: {
      title: "دلژین | حمل و نقل بین‌المللی",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ],
      meta: [
        {
          name: "description",
          content:
            "مجموعه دلژین با ارائه راهکارهای نوین و یکپارچه در زنجیره تامین، همراهی مطمئن برای کسب و کار شما در عرصه تجارت بین‌الملل است.",
        },
      ],
    },
  },
   css: [
    '@fortawesome/fontawesome-svg-core/styles.css' // 🟢 بازگرداندن CSS FontAwesome
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    '@nuxtjs/sitemap',
  ],

  // 🟢 راه‌حل نهایی: استفاده از @ts-ignore برای ساکت کردن خطای کاذب ویرایشگر
  // این کد از نظر Nuxt کاملاً صحیح است.
  // @ts-ignore
  site: {
    url: "https://delzhinco.com",
    name:"delzhin logistic"
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  i18n: {
    strategy: "prefix_except_default",
    locales: [
      { code: "fa", iso: "fa-IR", name: "فارسی", dir: "rtl", file: "fa.json" },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        dir: "ltr",
        file: "en.json",
      },
    ],
    defaultLocale: "fa",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
})
