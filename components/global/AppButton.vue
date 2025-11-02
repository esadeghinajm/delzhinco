// --- START OF FILE: components/global/AppButton.vue ---
<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass" class="flex items-center justify-center gap-2">
    <slot name="icon" />
    <slot />
  </NuxtLink>
  <button v-else :class="buttonClass" class="flex items-center justify-center gap-2">
    <slot name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string;
  variant?: 'primary' | 'accent' | 'outline';
}>(), {
  variant: 'primary'
});

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'btn-primary';
    case 'accent':
      return 'btn-accent';
    case 'outline':
      return 'btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary';
    default:
      return 'btn-primary';
  }
});
</script>