// components/global/ThemeSwitcher.vue
<template>
    <button @click="uiStore.toggleTheme" class="p-2 rounded-full transition-colors" :class="buttonClass"
        aria-label="Toggle dark mode">
        <svg v-if="uiStore.theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { useUiStore } from '~/stores/ui';
const uiStore = useUiStore();

const props = defineProps<{
    context?: 'mobile-menu'
}>();

const buttonClass = computed(() => {
    if (props.context === 'mobile-menu') {
        return 'text-text-color dark:text-dark-text-color bg-gray-200 dark:bg-gray-700';
    }
    return 'text-white hover:bg-white/20';
});
</script>