<template>
    <header class="w-full fixed top-0 z-[1000] transition-all duration-300 ease-in-out"
        :class="[isScrolled ? 'bg-primary shadow-lg' : 'bg-accent']">
        <nav class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]">
            <div class="flex items-center gap-4">
                <button class="md:hidden hamburger z-[1001]" :class="{ active: isMenuOpen }" @click="toggleMenu"
                    aria-label="Toggle Menu">
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                </button>
                <div class="hidden sm:flex items-center gap-4 text-text-on-primary">
                    <LanguageSwitcher />
                    <a href="https://www.instagram.com/delzhin_shipping" target="_blank" aria-label="Instagram Page"
                        class="text-xl hover:text-primary transition-colors">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="text-text-on-primary text-xs font-light whitespace-nowrap">
                    {{ currentDateTime }}
                </div>
            </div>
            <div class="hidden md:flex items-center justify-center" :dir="dir">
                <ul class="flex items-center gap-x-4 lg:gap-x-8 text-sm lg:text-base">
                    <li>
                        <NuxtLink to="/" class="nav-link">{{ $t('home') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/services" class="nav-link">{{ $t('services') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/news" class="nav-link">{{ $t('news') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="nav-link">{{ $t('about') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="nav-link">{{ $t('contact') }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" aria-label="Homepage" class="flex-shrink-0">
                <NuxtImg :src="isScrolled ? '/images/logo-whiteText/logo-delzhin-110x110.png' : '/images/logo-darkBlueText/Final2-01.png'"
                    alt="Delzhin Company Logo" class="h-28 md:h-32 transition-all duration-300" densities="x1 x2"
                    format="webp" />
            </NuxtLink>
        </nav>
        <div class="marquee" :class="{ 'scrolled-out': isScrolled }">
            <div
                class="font-sans font-bold text-xs sm:text-sm flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-8 items-center justify-center h-full">
                <span>دلار (اسکناس/ PMO ) : ۷۲۴,۵۳۸ - ۱۰۷,۸۴۰ تومان</span>
                <span>یورو (اسکناس/ PMO ) : ۸۴۳,۸۲۲ - ۱۲۵,۳۸۰ تومان</span>
            </div>
        </div>

        <div class="nav-menu-mobile"
            :class="{ active: isMenuOpen, 'bg-primary': !isScrolled, 'bg-accent': isScrolled }">
            <ul class="flex flex-col gap-4 text-center items-center">
                <li class="mb-2">
                    <LanguageSwitcher />
                </li>
                <li>
                    <NuxtLink to="/" class="mobile-nav-link" @click="toggleMenu">{{ $t('home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/services" class="mobile-nav-link" @click="toggleMenu">{{ $t('services') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/news" class="mobile-nav-link" @click="toggleMenu">{{ $t('news') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="mobile-nav-link" @click="toggleMenu">{{ $t('about') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="mobile-nav-link" @click="toggleMenu">{{ $t('contact') }}</NuxtLink>
                </li>
                <li class="mt-2">
                    <a href="https://www.instagram.com/delzhin_shipping" target="_blank" class="text-2xl"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from '#imports';
import { useCurrentTime } from '~/composables/useCurrentTime';

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
};

const { localeProperties } = useI18n();
const dir = computed(() => localeProperties.value.dir);

const { currentDateTime } = useCurrentTime();
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
.nav-link {
    @apply text-text-on-primary font-medium pb-1 relative transition-colors duration-300;
}

header:not(.scrolled) .nav-link:hover {
    @apply text-primary;
}

.scrolled .nav-link:hover {
    @apply text-accent;
}

.mobile-nav-link {
    @apply block py-2 text-lg font-bold transition-colors duration-300;
}

.nav-menu-mobile:not(.bg-accent) .mobile-nav-link {
    @apply text-accent;
}

.nav-menu-mobile.bg-accent .mobile-nav-link {
    @apply text-primary;
}

.nav-link.router-link-exact-active {
    @apply text-primary font-extrabold;
}

.scrolled .nav-link.router-link-exact-active {
    @apply text-primary;
}

.nav-menu-mobile .router-link-exact-active {
    @apply text-primary font-extrabold;
}

.marquee {
    @apply bg-white text-primary h-[42px] flex items-center justify-center border-b border-t border-gray-200 px-2 transition-all duration-300 ease-in-out;
}

.marquee.scrolled-out {
    transform: translateY(100%);
    height: 0;
    padding: 0;
    border: none;
    opacity: 0;
}

.bar {
    @apply block w-[25px] h-[3px] my-[5px] mx-auto rounded-sm transition-all duration-300 ease-in-out;
}

.nav-menu-mobile {
    @apply absolute top-[132px] left-0 right-0 py-6 bg-inherit shadow-lg transition-all duration-300 ease-out;
    transform: translateY(-20%);
    opacity: 0;
    visibility: hidden;
}

.nav-menu-mobile.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
</style>