// --- START OF FILE: components/global/AppButton.vue ---
<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass">
    <slot />
  </NuxtLink>
  <button v-else :class="buttonClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps < {
  to?: string;
  variant?: 'primary' | 'accent';
} > (), {
  variant: 'primary'
});

const buttonClass = computed(() => {
  return props.variant === 'primary' ? 'btn-primary' : 'btn-accent';
});
</script>