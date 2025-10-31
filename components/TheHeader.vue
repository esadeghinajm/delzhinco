<!-- components/TheHeader.vue -->
<template>
    <header class="w-full fixed top-0 z-[1000] transition-all duration-300 ease-in-out"
        :class="[isScrolled ? 'bg-primary shadow-lg' : 'bg-accent']">
        <nav class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]" :dir="dir"
            :class="{ 'flex-row-reverse': dir === 'rtl' }">

            <div class="flex items-center gap-4">
                <button class="md:hidden hamburger z-[1001]" :class="{ 'active': isMenuOpen }" @click="toggleMenu"
                    aria-label="باز و بسته کردن منو">
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                    <span class="bar" :class="[isScrolled ? 'bg-accent' : 'bg-primary']"></span>
                </button>

                <div class="hidden sm:flex items-center gap-4">
                    <a v-if="dir === 'rtl'" href="/en" class="lang-switcher text-text-on-primary font-bold">EN</a>
                    <a v-else href="/" class="lang-switcher text-text-on-primary font-bold">FA</a>
                    <a href="https://www.instagram.com/delzhin_shipping" target="_blank"
                        aria-label="صفحه اینستاگرام دلژین"
                        class="text-text-on-primary text-xl hover:text-primary transition-colors">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="text-text-on-primary text-xs font-light hidden xl:block whitespace-nowrap">{{
                    currentDateTime }}</div>
            </div>

            <div class="hidden md:flex items-center justify-center">
                <ul class="flex items-center gap-x-4 lg:gap-x-8 text-sm lg:text-base">
                    <li><a href="/" class="nav-link">صفحه نخست</a></li>
                    <li><a href="#" class="nav-link">سرویس‌ها</a></li>
                    <li><a href="/news" class="nav-link">اخبار</a></li>
                    <li><a href="/about" class="nav-link">درباره ما</a></li>
                    <li><a href="#" class="nav-link">تماس با ما</a></li>
                </ul>
            </div>

            <a href="/" aria-label="صفحه اصلی دلژین" class="flex-shrink-0">
                <img src="/images/logo-darkBlueText/Final2-01.png" alt="لوگو شرکت حمل و نقل دلژین"
                    class="h-28 md:h-32" />
            </a>

        </nav>

        <div
            class="marquee bg-white text-primary h-[42px] flex items-center justify-center border-b border-t border-gray-200 px-2">
            <div
                class="font-sans font-bold text-xs sm:text-sm flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-8 items-center justify-center h-full">
                <span>دلار (اسکناس/ PMO ) : ۷۲۴,۵۳۸ -  ۱۰۷,۸۴۰  تومان</span>
                <span>یورو (اسکناس/ PMO ) : ۸۴۳,۸۲۲ -  ۱۲۵,۳۸۰  تومان</span>
            </div>
        </div>

        <div class="nav-menu-mobile" :class="{
            'active': isMenuOpen,
            'bg-primary': !isScrolled,
            'bg-accent': isScrolled
        }">
            <ul class="flex flex-col gap-2 text-center">
                <li><a href="/" class="block py-3 text-lg font-bold"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']" @click="toggleMenu">صفحه نخست</a></li>
                <li><a href="#" class="block py-3 text-lg font-bold"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']" @click="toggleMenu">سرویس‌ها</a></li>
                <li><a href="/news" class="block py-3 text-lg font-bold"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']" @click="toggleMenu">اخبار</a></li>
                <li><a href="/about" class="block py-3 text-lg font-bold"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']" @click="toggleMenu">درباره ما</a></li>
                <li><a href="#" class="block py-3 text-lg font-bold"
                        :class="[isScrolled ? 'text-primary' : 'text-accent']" @click="toggleMenu">تماس با ما</a></li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import moment from 'moment-jalaali';

const { localeProperties } = useI18n();
const dir = computed(() => localeProperties.value.dir);

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

const isScrolled = ref(false);
const handleScroll = () => isScrolled.value = window.scrollY > 10;

const currentDateTime = ref('');
let dateTimeInterval;

const updateDateTime = () => {
    if (dir.value === 'rtl') {
        moment.updateLocale('fa', { jMonths: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"] });
        moment.locale('fa');
        const jalaaliDate = moment().format('dddd jD jMMMM');
        const time = moment().format('HH:mm');
        currentDateTime.value = `${jalaaliDate} | ${time}`;
    } else {
        moment.locale('en');
        const gregorianDate = moment().format('dddd, MMMM DD');
        const time = moment().format('HH:mm');
        currentDateTime.value = `${gregorianDate} | ${time}`;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    updateDateTime();
    dateTimeInterval = setInterval(updateDateTime, 60000);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(dateTimeInterval);
});
</script>

<style scoped>
.nav-link {
    @apply text-text-on-primary font-medium pb-1 relative transition-colors;
}

.scrolled .nav-link {
    @apply hover:text-accent;
}

header:not(.scrolled) .nav-link {
    @apply hover:text-primary;
}

.scrolled .marquee {
    transform: translateY(100%);
    height: 0;
    padding: 0;
    border: none;
    overflow: hidden;
}

.marquee {
    transition: all 0.3s ease-in-out;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
}

.nav-menu-mobile {
    position: absolute;
    top: 132px;
    left: 0;
    right: 0;
    padding: 1.5rem 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-20%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s, background-color 0.3s ease-in-out;
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