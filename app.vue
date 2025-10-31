<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useUiStore } from '~/stores/ui';

const uiStore = useUiStore();

useHead({
  htmlAttrs: {
    class: () => (uiStore.theme === 'dark' ? 'dark' : ''),
  }
});

onMounted(() => {
});
</script>

<style>

body {
  @apply bg-white dark:bg-gray-900 text-text-color dark:text-gray-300 transition-colors duration-300;
}
</style>