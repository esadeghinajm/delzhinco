// components/LanguageSwitcher.vue
<template>
  <NuxtLink :to="switchLocalePath(availableLocales[0].code)" class="lang-switcher">
    {{ availableLocales[0].code.toUpperCase() }}
  </NuxtLink>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<style scoped>
.lang-switcher {
  @apply text-text-on-primary font-bold;
}
</style>