<!-- components/TheHeader.vue -->
<template>
    <!-- 
    نکته ۴: تغییر داینامیک رنگ پس‌زمینه
    به جای افزودن کلاس .scrolled، ما مستقیماً کلاس رنگ را تغییر می‌دهیم.
    اگر اسکرول نشده باشد bg-accent (طلایی) و اگر اسکرول شده باشد bg-primary (سرمه‌ای) خواهد بود.
  -->
    <header class="w-full fixed top-0 right-0 z-[1000] transition-all duration-300 ease-in-out"
        :class="[isScrolled ? 'bg-primary shadow-lg' : 'bg-accent']">
        <!-- 
      نکته ۱ و ۲: اصلاح ساختار برای RTL و منوی افقی
      ما ترتیب عناصر را در flex container اصلی (تگ nav) تغییر می‌دهیم.
      لوگو در انتها قرار می‌گیرد تا در راستای راست‌چین، اول نمایش داده شود.
    -->
        <nav class="container mx-auto px-4 flex justify-between items-center h-[90px]">
            <!-- بخش چپ (اکشن‌ها) -->
            <div class="flex items-center gap-5 z-[1001]">
                <a href="/en" class="lang-switcher text-text-on-primary font-bold">EN</a>
                <a href="https://www.instagram.com/delzhin_shipping" target="_blank" aria-label="صفحه اینستاگرام دلژین"
                    class="text-text-on-primary text-xl hover:text-primary transition-colors">
                    <i class="fab fa-instagram"></i>
                </a>
                <div class="text-text-on-primary text-sm font-light hidden md:block" dir="ltr">{{ currentDateTime }}
                </div>
                <button class="lg:hidden hamburger z-[1001]" :class="{ 'active': isMenuOpen }" @click="toggleMenu"
                    aria-label="باز و بسته کردن منو">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>

            <!-- بخش وسط (منوی دسکتاپ) -->
            <!-- نکته ۲: این منو اکنون فقط برای دسکتاپ است (hidden lg:flex) -->
            <div class="hidden lg:flex">
                <ul class="flex items-center gap-8">
                    <li><a href="/" class="nav-link">صفحه نخست</a></li>
                    <li><a href="#" class="nav-link">سرویس‌ها</a></li>
                    <li><a href="/news" class="nav-link">اخبار</a></li>
                    <li><a href="/about" class="nav-link">درباره ما</a></li>
                    <li><a href="#" class="nav-link">تماس با ما</a></li>
                </ul>
            </div>

            <!-- بخش راست (لوگو) -->
            <a href="/" aria-label="صفحه اصلی دلژین">
                <img src="/images/logo-darkBlueText/Final2-01.png" alt="لوگو شرکت حمل و نقل دلژین" class="h-32" />
            </a>
        </nav>

        <!-- 
      نکته ۳: انتقال Marquee به زیر نوار ناوبری
      ما این بخش را از بالای nav به پایین آن منتقل کردیم.
    -->
        <div
            class="marquee bg-white text-primary h-[42px] flex justify-center items-center border-b border-t border-gray-200">
            <pre
                class="font-sans font-bold">یورو (اسکناس/ PMO ) : ۸۴۳,۸۲۲ -  ۱۲۵,۳۸۰  تومان        دلار (اسکناس/ PMO ) : ۷۲۴,۵۳۸ -  ۱۰۷,۸۴۰  تومان</pre>
        </div>

        <!-- منوی موبایل (جدا شده برای خوانایی بهتر) -->
        <div class="nav-menu-mobile" :class="{ 'active': isMenuOpen }">
            <ul class="flex flex-col gap-8 text-center">
                <li><a href="/" class="text-2xl text-white">صفحه نخست</a></li>
                <li><a href="#" class="text-2xl text-white">سرویس‌ها</a></li>
                <li><a href="/news" class="text-2xl text-white">اخبار</a></li>
                <li><a href="/about" class="text-2xl text-white">درباره ما</a></li>
                <li><a href="#" class="text-2xl text-white">تماس با ما</a></li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import moment from 'moment-jalaali';

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
};

const currentDateTime = ref('');
let dateTimeInterval;

const updateDateTime = () => {
    moment.updateLocale('fa', { jMonths: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"] });
    moment.locale('fa');
    const jalaaliDate = moment().format('dddd jD jMMMM jYYYY');
    const time = moment().format('HH:mm');
    moment.locale('en');
    const gregorianDate = moment().format('ddd, MMM DD, YY');
    currentDateTime.value = `${jalaaliDate} | ${time} | ${gregorianDate}`;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    updateDateTime();
    dateTimeInterval = setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(dateTimeInterval);
});
</script>

<style scoped>
/* استایل‌های لینک‌های منو برای خوانایی بهتر جدا شده‌اند */
.nav-link {
    @apply text-text-on-primary font-medium pb-1 relative transition-colors;
}

/* رنگ لینک‌ها بر اساس حالت اسکرول */
.scrolled .nav-link {
    @apply hover:text-accent;
}

.scrolled .nav-link.active {
    /* 'active' class needs to be implemented with Nuxt's router-link-active */
    @apply text-accent;
}

header:not(.scrolled) .nav-link {
    @apply hover:text-primary;
}

header:not(.scrolled) .nav-link.active {
    @apply text-primary;
}

/* مخفی کردن نوار قیمت هنگام اسکرول */
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

/* استایل‌های همبرگر و منوی موبایل */
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text-on-primary);
    transition: all 0.3s ease-in-out;
}

.nav-menu-mobile {
    position: fixed;
    right: -100%;
    top: 0;
    background-color: var(--primary-color);
    width: 100%;
    height: 100vh;
    transition: 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-menu-mobile.active {
    right: 0;
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