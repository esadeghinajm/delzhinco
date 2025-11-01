<template>
    <header class="sticky top-0 z-40 transition-colors duration-300"
        :class="isScrolled ? 'bg-primary dark:bg-dark-primary shadow-lg' : 'bg-accent dark:bg-dark-accent'">
        <!-- نوار بالایی -->
        <div class="text-xs font-bold py-2"
            :class="isScrolled ? 'text-accent dark:text-dark-accent' : 'text-primary dark:text-text-on-accent'">
            <div class="container mx-auto px-4 flex justify-between items-center text-center">
                <!-- آیکون‌ها (فقط دسکتاپ) -->
                <div class="hidden md:flex items-center gap-4 text-base"
                    :class="isScrolled ? 'text-white' : 'text-primary'">
                    <a :href="`tel:${$t('phone')}`" :aria-label="$t('phone_aria')"
                        class="hover:text-accent transition-colors">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                    </a>
                    <a :href="`mailto:${$t('email')}`" :aria-label="$t('email_aria')"
                        class="hover:text-accent transition-colors">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a href="#" :aria-label="$t('linkedin_aria')" class="hover:text-accent transition-colors">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a href="#" :aria-label="$t('instagram_aria')" class="hover:text-accent transition-colors">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                </div>

                <!-- قیمت ارز و تاریخ (دسکتاپ) -->
                <div class="hidden md:block font-mono">
                    <span>{{ currentDateTime }} | </span><span>دلار: ۷۲۴,۵۳۸ تومان</span> | <span>یورو: ۸۴۳,۸۲۲
                        تومان</span>
                </div>

                <!-- قیمت ارز (موبایل) -->
                <div class="md:hidden font-mono w-full">
                    <span>دلار: ۷۲۴,۵۳۸ تومان</span> | <span>یورو: ۸۴۳,۸۲۲ تومان</span>
                </div>
            </div>
        </div>

        <!-- نوار تاریخ و آیکون‌ها (فقط موبایل) -->
        <div class="md:hidden text-xs py-2 flex justify-between items-center container mx-auto px-4"
            :class="isScrolled ? 'bg-black/20 text-white' : 'bg-primary text-text-on-primary'">
            <span class="font-mono">{{ currentDateTime }}</span>
            <div class="flex items-center gap-4 text-base">
                <a :href="`tel:${$t('phone')}`" :aria-label="$t('phone_aria')"
                    class="hover:text-accent transition-colors">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                </a>
                <a :href="`mailto:${$t('email')}`" :aria-label="$t('email_aria')"
                    class="hover:text-accent transition-colors">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                </a>
                <a href="#" :aria-label="$t('linkedin_aria')" class="hover:text-accent transition-colors">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href="#" :aria-label="$t('instagram_aria')" class="hover:text-accent transition-colors">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
            </div>
        </div>

        <!-- نویگیشن اصلی -->
        <nav style="direction: rtl;">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center relative">
                <NuxtLink :to="localePath('index')" class="text-2xl font-bold text-white">
                    {{ $t('company_name') }}
                </NuxtLink>

                <ul class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <li v-for="link in navLinks" :key="link.name">
                        <NuxtLink :to="localePath(link.path)"
                            class="text-white font-medium hover:text-gray-300 transition-colors whitespace-nowrap"
                            :active-class="isScrolled ? '!text-accent dark:!text-dark-accent font-bold' : '!text-primary font-bold'">
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
import { useScroll } from '~/composables/useScroll';

const { currentDateTime } = useCurrentTime();
const { isScrolled } = useScroll(10);
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