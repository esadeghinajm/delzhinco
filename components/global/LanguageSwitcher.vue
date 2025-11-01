// --- START OF FILE: components/global/LanguageSwitcher.vue ---
<template>
  <div class="flex items-center rounded-full p-1" :class="containerClass">
    <template v-for="loc in availableLocales" :key="loc.code">
      <NuxtLink :to="switchLocalePath(loc.code)" class="px-3 py-1 text-sm font-medium rounded-full transition-colors"
        :class="linkClass(loc.code)">
        {{ loc.code.toUpperCase() }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => locales.value);

const props = defineProps<{
  context?: 'mobile-menu'
}>();

const containerClass = computed(() => {
  return props.context === 'mobile-menu'
    ? 'bg-gray-200 dark:bg-gray-700'
    : 'bg-white/20 dark:bg-black/20';
});

const linkClass = (code: string) => {
  if (locale.value === code) {
    return props.context === 'mobile-menu'
      ? 'bg-white dark:bg-gray-500 text-primary dark:text-white'
      : 'bg-white text-primary';
  }
  return props.context === 'mobile-menu'
    ? 'text-text-color dark:text-dark-text-color hover:bg-gray-300 dark:hover:bg-gray-600'
    : 'text-white/80 hover:text-white';
};
</script>