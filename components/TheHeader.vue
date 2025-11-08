<template>
    <header class="sticky top-0 z-40 transition-colors duration-300"
        :class="isScrolled ? 'bg-primary dark:bg-dark-primary shadow-lg' : 'bg-accent dark:bg-dark-accent'">
        <!-- Top Bar -->
        <ClientOnly>
            <div class="text-xs font-bold"
                :class="isScrolled ? 'text-accent dark:text-dark-accent' : 'text-primary dark:text-text-on-accent'">
                <div class="mx-auto px-4 py-2 flex justify-between items-center text-center">
                    <!-- Social Icons (Desktop) -->
                    <div class="hidden md:flex items-center gap-4 text-base"
                        :class="isScrolled ? 'text-white' : 'text-primary'">
                        <a :href="`tel:${t('phone')}`" :aria-label="$t('phone_aria')"
                            class="hover:text-accent transition-colors"><font-awesome-icon
                                :icon="['fas', 'phone']" /></a>
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
                    <div class="hidden md:flex justify-between items-center w-full font-mono">
                        <span>{{ currentDateTime }}</span>
                        <span>
                            <span>دلار (اسکناس/ PMO ): ۷۲۶.۶۱۵ / ۱۰۷,۸۴۰ تومان</span> | <span>یورو (اسکناس/ PMO ):
                                ۸۳۴.۴۴۰ / ۱۲۴,۳۹۰ تومان</span>
                        </span>
                    </div>
                    <!-- Currency (Mobile) -->
                    <div class="md:hidden font-mono text-center w-full">
                        <span>دلار (اسکناس/ PMO ): ۷۲۶.۶۱۵ / ۱۰۷,۸۴۰ تومان</span> | <span>یورو (اسکناس/ PMO ): ۸۳۴.۴۴۰ /
                            ۱۲۴,۳۹۰ تومان</span>
                    </div>
                </div>
            </div>
        </ClientOnly>

        <!-- Date & Icons (Mobile) -->
        <ClientOnly>
            <div class="md:hidden text-xs py-2 flex justify-between items-center container mx-auto px-4"
                :class="isScrolled ? 'bg-black/20 text-white' : 'bg-primary text-text-on-primary'">
                <span class="font-mono">{{ currentDateTime }}</span>
                <div class="flex items-center gap-4 text-base">
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
            </div>
        </ClientOnly>

        <!-- Main Navigation -->
        <nav style="direction: rtl;">
            <div class="mx-auto px-4 py-3 flex justify-between items-center relative">
                <!-- Logo -->
                <NuxtLink :to="localePath('/')" class="w-20 h-auto">
                    <ClientOnly>
                        <Transition name="fade" mode="out-in">
                            <NuxtImg v-if="isScrolled" src="/images/logo/logo-white-text-300x300.png"
                                alt="Delzhin Logo White" key="white" />
                            <NuxtImg v-else src="/images/logo/logo-dark-blue-text-300x300.png" alt="Delzhin Logo Dark"
                                key="dark" />
                        </Transition>
                    </ClientOnly>
                </NuxtLink>

                <!-- Menu (Desktop) -->
                <ul class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <li v-for="link in navLinks" :key="link.name"
                        :class="{ 'relative group': link.type === 'dropdown' }">
                        <NuxtLink v-if="link.type === 'link'" :to="localePath(link.path!)"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap"
                            :active-class="activeLinkClass">
                            {{ $t(link.name) }}
                        </NuxtLink>
                        <a v-if="link.type === 'anchor'" :href="link.path" @click.prevent="scrollToSection(link.path!)"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap cursor-pointer">
                            {{ $t(link.name) }}
                        </a>
                        <template v-if="link.type === 'dropdown'">
                            <a href="/#services-section" @click.prevent="scrollToSection(link.path!)"
                                class="text-white font-medium hover:text-gray-300 cursor-pointer flex items-center gap-1 whitespace-nowrap">
                                {{ $t(link.name) }} ▾
                            </a>
                            <div class="dropdown-menu">
                                <NuxtLink v-for="service in services" :key="service.slug"
                                    :to="localePath(`/services/${service.slug}`)" class="dropdown-item">{{
                                        $t(service.title) }}</NuxtLink>
                            </div>
                        </template>
                        <button v-if="link.type === 'button'" @click="$emit('openContactModal')"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap bg-transparent border-none">
                            {{ $t(link.name) }}
                        </button>
                    </li>
                </ul>

                <!-- Right side buttons -->
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.dropdown-menu {
    @apply absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] shadow-lg rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 bg-white border border-gray-200;
}

.dark .dropdown-menu {
    @apply bg-slate-800 border-slate-700;
}

.dropdown-item {
    @apply block px-4 py-2 text-sm whitespace-nowrap text-right text-heading-color hover:bg-gray-100 hover:text-accent;
}

.dark .dropdown-item {
    @apply text-dark-heading-color hover:bg-slate-700 hover:text-dark-accent;
}
</style>