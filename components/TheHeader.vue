// --- START OF FILE: components/global/TheHeader.vue ---
<template>
    <header class="sticky top-0 z-40">
        <!-- نوار قیمت ارز و آیکون‌ها -->
        <div class="bg-accent dark:bg-dark-accent text-primary dark:text-text-on-accent text-xs font-bold py-2">
            <div class="container mx-auto px-4 flex justify-between items-center">
                <!-- آیکون‌های تماس (فقط دسکتاپ) -->
                <div class="hidden md:flex items-center gap-4">
                    <a :href="`tel:${$t('phone')}`" :aria-label="$t('phone_aria')"
                        class="hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                            </path>
                        </svg>
                    </a>
                    <a :href="`mailto:${$t('email')}`" :aria-label="$t('email_aria')"
                        class="hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </a>
                    <a href="#" :aria-label="$t('linkedin_aria')" class="hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a href="#" :aria-label="$t('instagram_aria')" class="hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                        </svg>
                    </a>
                </div>
                <!-- قیمت ارز و تاریخ -->
                <div class="text-center">
                    <div class="md:hidden"><span>دلار: ۷۲۴,۵۳۸ تومان</span> | <span>یورو: ۸۴۳,۸۲۲ تومان</span></div>
                    <div class="hidden md:block"><span>{{ currentDateTime }} | </span><span>دلار: ۷۲۴,۵۳۸ تومان</span> |
                        <span>یورو: ۸۴۳,۸۲۲ تومان</span></div>
                </div>
                <div
                    class="md:hidden bg-primary dark:bg-dark-primary text-text-on-primary text-xs py-1 text-center font-mono w-full mt-1">
                    {{ currentDateTime }}</div>
            </div>
        </div>

        <!-- نویگیشن اصلی -->
        <nav class="bg-accent dark:bg-dark-accent shadow-md" style="direction: rtl">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center relative">
                <NuxtLink :to="localePath('index')" class="text-2xl font-bold text-white">
                    {{ $t('company_name') }}
                </NuxtLink>

                <!-- منوی دسکتاپ -->
                <ul class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <li v-for="link in navLinks" :key="link.name">
                        <NuxtLink :to="localePath(link.path)"
                            class="text-white font-medium hover:text-gray-300 dark:hover:text-gray-400 transition-colors whitespace-nowrap"
                            active-class="!text-primary font-bold">
                            {{ $t(link.name) }}
                        </NuxtLink>
                    </li>
                </ul>

                <div class="flex items-center gap-2">
                    <div class="hidden lg:flex items-center gap-2 border-r border-white/30 pr-4">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>
                    <button @click="$emit('openMobileMenu')" aria-label="Open menu"
                        class="lg:hidden p-2 rounded-md text-white hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { useCurrentTime } from '~/composables/useCurrentTime';

const { currentDateTime } = useCurrentTime();
const localePath = useLocalePath();

defineEmits(['openMobileMenu']);

interface NavLink { name: string; path: string; }

const navLinks: NavLink[] = [
    { name: 'home', path: 'index' },
    { name: 'services', path: 'services' },
    { name: 'news', path: 'news' },
    { name: 'about', path: 'about' },
    { name: 'contact', path: 'contact' },
];
</script>