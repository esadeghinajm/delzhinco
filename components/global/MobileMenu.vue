// --- START OF FILE: components/global/MobileMenu.vue ---
<template>
    <div>
        <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-black/50 z-50 transition-opacity lg:hidden"
            :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"></div>

        <div class="fixed top-0 right-0 h-full w-72 bg-surface-bg dark:bg-dark-surface-bg shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
            :class="isOpen ? 'translate-x-0' : 'translate-x-full'" style="direction: rtl;">
            <div class="p-4 flex flex-col h-full">
                <div class="flex justify-between items-center mb-8">
                    <span class="font-bold text-lg text-primary dark:text-dark-accent">{{ $t('company_name') }}</span>
                    <button @click="$emit('close')" aria-label="Close menu" class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul class="flex flex-col gap-2">
                    <li v-for="link in navLinks" :key="link.name">
                        <NuxtLink :to="localePath(link.path)" @click="$emit('close')"
                            class="block p-3 rounded-md text-base text-heading-color dark:text-dark-heading-color font-medium hover:bg-gray-100 dark:hover-bg-gray-800 transition-colors"
                            active-class="!text-primary dark:!text-dark-accent bg-primary/10 dark:bg-dark-accent/10 font-bold">
                            {{ $t(link.name) }}
                        </NuxtLink>
                    </li>
                </ul>
                <div class="mt-auto pt-6 border-t dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <LanguageSwitcher context="mobile-menu" />
                        <ThemeSwitcher context="mobile-menu" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface NavLink { name: string; path: string; }

const localePath = useLocalePath();

defineProps<{
    isOpen: boolean;
    navLinks: NavLink[];
}>();

defineEmits(['close']);
</script>