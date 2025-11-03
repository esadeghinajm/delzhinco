// --- START OF FILE: components/TheHeader.vue ---
<template>
    <header class="sticky top-0 z-40 transition-colors duration-300"
        :class="isScrolled ? 'bg-primary dark:bg-dark-primary shadow-lg' : 'bg-accent dark:bg-dark-accent'">
        <!-- Top Bar -->
        <div class="text-xs font-bold"
            :class="isScrolled ? 'text-accent dark:text-dark-accent' : 'text-primary dark:text-text-on-accent'">
            <div class="container mx-auto px-4 py-2 flex justify-between items-center text-center">
                <!-- Social Icons (Desktop) -->
                <div class="hidden md:flex items-center gap-4 text-base"
                    :class="isScrolled ? 'text-white' : 'text-primary'">
                    <a :href="`tel:${$t('phone')}`" :aria-label="$t('phone_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'phone']" /></a>
                    <a :href="`mailto:${$t('email')}`" :aria-label="$t('email_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fas', 'envelope']" /></a>
                    <a href="#" :aria-label="$t('linkedin_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fab', 'linkedin']" /></a>
                    <a href="#" :aria-label="$t('instagram_aria')"
                        class="hover:text-accent transition-colors"><font-awesome-icon
                            :icon="['fab', 'instagram']" /></a>
                </div>
                <!-- Currency & Date (Desktop) -->
                <div class="hidden md:block font-mono">
                    <span>{{ currentDateTime }} | </span><span>دلار: ۷۲۴,۵۳۸ تومان</span> | <span>یورو: ۸۴۳,۸۲۲
                        تومان</span>
                </div>
                <!-- Currency (Mobile) -->
                <div class="md:hidden font-mono text-center w-full">
                    <span>دلار: ۷۲۴,۵۳۸ تومان</span> | <span>یورو: ۸۴۳,۸۲۲ تومان</span>
                </div>
            </div>
        </div>
        <!-- Date & Icons (Mobile) -->
        <div class="md:hidden text-xs py-2 flex justify-between items-center container mx-auto px-4"
            :class="isScrolled ? 'bg-black/20 text-white' : 'bg-primary text-text-on-primary'">
            <span class="font-mono">{{ currentDateTime }}</span>
            <div class="flex items-center gap-4 text-base">
                <a :href="`tel:${$t('phone')}`" :aria-label="$t('phone_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'phone']" /></a>
                <a :href="`mailto:${$t('email')}`" :aria-label="$t('email_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
                <a href="#" :aria-label="$t('linkedin_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                <a href="#" :aria-label="$t('instagram_aria')"
                    class="hover:text-accent transition-colors"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </div>
        </div>

        <!-- Main Navigation -->
        <nav style="direction: rtl;">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center relative">
                <!-- Logo -->
                <NuxtLink :to="localePath('/')" class="w-28 h-auto">
                    <Transition name="fade" mode="out-in">
                        <NuxtImg v-if="isScrolled" src="/images/logo-darkBlueText/Final2-01.png"
                            alt="Delzhin Logo White" key="white" />
                        <NuxtImg v-else src="/images/logo-whiteText/logo-delzhin-110x110.png" alt="Delzhin Logo Dark"
                            key="dark" />
                    </Transition>
                </NuxtLink>

                <!-- Menu (Desktop) -->
                <ul class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <li>
                        <NuxtLink :to="localePath('/')"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap"
                            active-class="!text-primary font-bold">{{ $t('home') }}</NuxtLink>
                    </li>
                    <li class="relative group">
                        <a href="/#services-section" @click.prevent="scrollToServices"
                            class="text-white font-medium hover:text-gray-300 cursor-pointer flex items-center gap-1 whitespace-nowrap">{{
                                $t('our_services') }} ▾</a>
                        <div
                            class="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] bg-white dark:bg-dark-primary shadow-lg rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                            <NuxtLink v-for="service in services" :key="service.slug"
                                :to="localePath(`/services/${service.slug}`)"
                                class="block px-4 py-2 text-sm text-heading-color dark:text-dark-heading-color hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">
                                {{ $t(service.title) }}</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/news')"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap"
                            active-class="!text-primary font-bold">{{ $t('news') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/about')"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap"
                            active-class="!text-primary font-bold">{{ $t('about') }}</NuxtLink>
                    </li>
                    <li><button @click="$emit('openContactModal')"
                            class="text-white font-medium hover:text-gray-300 whitespace-nowrap">{{ $t('contact')
                            }}</button></li>
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
const router = useRouter();

defineEmits(['openMobileMenu', 'openContactModal']);

const services = [
    { title: 'road_freight', slug: 'road-freight' },
    { title: 'air_freight', slug: 'air-freight' },
    { title: 'sea_freight', slug: 'sea-freight' },
];

const scrollToServices = async () => {
    if (router.currentRoute.value.path !== localePath('/')) {
        await router.push(localePath('/'));
    }
    setTimeout(() => {
        const section = document.getElementById('services-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>