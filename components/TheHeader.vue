<template>
    <header class="sticky top-0 z-40 transition-colors duration-300"
        :class="isScrolled ? 'bg-primary dark:bg-dark-primary shadow-lg' : 'bg-accent dark:bg-dark-accent'">
        <!-- Top Bar -->
        <div class="text-xs font-bold"
            :class="isScrolled ? 'text-accent dark:text-dark-accent' : 'text-primary dark:text-text-on-accent'">
            <div class="mx-auto px-4 py-2 flex justify-between items-center text-center">
                <!-- Social Icons (Desktop) -->
                <div class="hidden md:flex items-center gap-4 text-base"
                    :class="isScrolled ? 'text-white' : 'text-primary'">
                    <a :href="`tel:${t('phone')}`" :aria-label="$t('phone_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'phone']" /></a>
                    <a :href="`mailto:${t('email').replace(/'/g, '')}`" :aria-label="$t('email_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fas', 'envelope']" /></a>
                    <a href="#" :aria-label="$t('linkedin_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fab', 'linkedin']" /></a>
                    <a href="https://www.instagram.com/delzhin_shipping?igsh=dmljeGp1M256Y2lh" target="_blank"
                        :aria-label="$t('instagram_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fab', 'instagram']" /></a>
                </div>
                <!-- Currency & Date (Desktop) -->
                <div class="hidden md:block font-mono">
                    <span>{{ currentDateTime }} | </span><span>دلار (اسکناس/ PMO ): ۷۲۴,۵۳۸ / ۱۰۷,۸۴ تومان</span> |
                    <span>یورو(اسکناس/ PMO ): ۸۴۳,۸۲۲ / ۱۲۵,۳۸۰
                        تومان</span>
                </div>
                <!-- Currency (Mobile) -->
                <div class="md:hidden font-mono text-center w-full">
                    <span>دلار (اسکناس/ PMO ): ۷۲۴,۵۳۸ / تومان</span> | <span>یورو(اسکناس/ PMO ): ۸۴۳,۸۲۲ تومان</span>
                </div>
            </div>
        </div>
        <!-- Date & Icons (Mobile) -->
        <div class="md:hidden text-xs py-2 flex justify-between items-center container mx-auto px-4"
            :class="isScrolled ? 'bg-black/20 text-white' : 'bg-primary text-text-on-primary'">
            <span class="font-mono">{{ currentDateTime }}</span>
            <div class="flex items-center gap-4 text-base">
                <a :href="`tel:${t('phone')}`" :aria-label="$t('phone_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'phone']" /></a>
                <a :href="`mailto:${t('email').replace(/'/g, '')}`" :aria-label="$t('email_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
                <a href="#" :aria-label="$t('linkedin_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                <a href="https://www.instagram.com/delzhin_shipping?igsh=dmljeGp1M256Y2lh" target="_blank"
                    :aria-label="$t('instagram_aria')" class="hover:text-accent transition-colors"><font-awesome-icon
                        :icon="['fab', 'instagram']" /></a>
            </div>
        </div>

        <!-- Main Navigation -->
        <nav style="direction: rtl;">
            <div class="mx-auto px-4 py-3 flex justify-between items-center relative">
                <!-- Logo -->
                <NuxtLink :to="localePath('/')" class="w-20 h-auto">
                    <Transition name="fade" mode="out-in">
                        <NuxtImg v-if="isScrolled" src="/images/logo-whiteText/1000173802-768x768-1-300x300.png"
                            alt="Delzhin Logo White" key="white" />
                        <NuxtImg v-else src="/images/logo-darkBlueText/Final2-01.png" alt="Delzhin Logo Dark"
                            key="dark" />
                    </Transition>
                </NuxtLink>

                <ul class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <li v-for="link in navLinks" :key="link.name"
                        :class="{ 'relative group': link.type === 'dropdown' }">

                        <NuxtLink v-if="link.type === 'link'" :to="localePath(link.path!)" class="nav-link"
                            :active-class="activeLinkClass">
                            {{ $t(link.name) }}
                        </NuxtLink>

                        <a v-if="link.type === 'anchor'" :href="link.path" @click.prevent="scrollToSection(link.path!)"
                            class="nav-link cursor-pointer">
                            {{ $t(link.name) }}
                        </a>

                        <template v-if="link.type === 'dropdown'">
                            <a href="/#services-section" @click.prevent="scrollToSection(link.path!)"
                                class="nav-link flex items-center gap-1 cursor-pointer">
                                {{ $t(link.name) }} ▾
                            </a>
                            <div class="dropdown-menu">
                                <NuxtLink v-for="service in services" :key="service.slug"
                                    :to="localePath(`/services/${service.slug}`)" class="dropdown-item">{{
                                        $t(service.title) }}</NuxtLink>
                            </div>
                        </template>

                        <button v-if="link.type === 'button'" @click="$emit('openContactModal')" class="nav-link">
                            {{ $t(link.name) }}
                        </button>

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
import { computed } from 'vue';
import { useCurrentTime } from '~/composables/useCurrentTime';
import { useScroll } from '~/composables/useScroll';
import { useI18n } from '#imports';

const { t } = useI18n();
const { currentDateTime } = useCurrentTime();
const { isScrolled } = useScroll(50);
const localePath = useLocalePath();
const router = useRouter();

defineEmits(['openMobileMenu', 'openContactModal']);

const activeLinkClass = computed(() => isScrolled.value ? '!text-accent' : '!text-primary font-bold');

interface NavLink {
    name: string;
    path?: string;
    type: 'link' | 'button' | 'dropdown' | 'anchor';
}

const navLinks: NavLink[] = [
    { name: 'home', path: '/', type: 'link' },
    { name: 'our_services', path: '#services-section', type: 'dropdown' },
    { name: 'news', path: '/news', type: 'link' },
    { name: 'projects', path: '/projects', type: 'link' },
    { name: 'agencies', path: '#agencies-section', type: 'anchor' },
    { name: 'education', path: '/education', type: 'link' },
    { name: 'about', path: '/about', type: 'link' },
    { name: 'contact', type: 'button' },
];

const services = [
    { title: 'road_freight', slug: 'road-freight' },
    { title: 'air_freight', slug: 'air-freight' },
    { title: 'sea_freight', slug: 'sea-freight' },
];

const scrollToSection = async (path: string) => {
    const [targetPath = '/', sectionId] = path.split('#');

    if (router.currentRoute.value.path !== localePath(targetPath)) {
        await router.push(localePath(targetPath));
    }

    if (sectionId) {
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
};
</script>

<style scoped>
/* Scoped styles to prevent conflicts */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 🟢 --- START: استایل‌های اصلاح شده برای زیرمنو --- 🟢 */

.nav-link {
    @apply text-white font-medium hover:text-gray-300 whitespace-nowrap relative pb-[5px] transition-colors bg-none border-none cursor-pointer;
    font-size: 1rem;
}

.header.scrolled .nav-link:hover,
.header.scrolled .nav-link.active {
    @apply text-accent;
}

.header:not(.scrolled) .nav-link:hover,
.header:not(.scrolled) .nav-link.active {
    @apply text-primary;
}

.dropdown-menu {
    @apply absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] shadow-lg rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20;

    /* استایل پایه برای حالت لایت */
    @apply bg-white border border-gray-200;
}

/* استایل اختصاصی برای حالت دارک */
.dark .dropdown-menu {
    @apply bg-slate-800 border-slate-700;
}

.dropdown-item {
    @apply block px-4 py-2 text-sm whitespace-nowrap text-right;

    /* استایل پایه برای حالت لایت */
    @apply text-heading-color hover:bg-gray-100 hover:text-accent;
}

/* استایل اختصاصی برای حالت دارک */
.dark .dropdown-item {
    @apply text-dark-heading-color hover:bg-slate-700 hover:text-dark-accent;
}
</style>