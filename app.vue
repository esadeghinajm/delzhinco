<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUiStore } from '~/stores/ui';
import { useI18n } from '#imports';

useUiStore();

const { locale, localeProperties } = useI18n();
useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => localeProperties.value.dir,
  },
  bodyAttrs: {
    class: 'bg-surface-bg text-text-color dark:bg-dark-surface-bg dark:text-dark-text-color transition-colors duration-300 font-sans'
  },
  link: [
    {
      rel: 'preload',
      href: '/fonts/Vazirmatn-Bold.woff2', // مسیر صحیح از ریشه سایت
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    }
  ]
})
</script>