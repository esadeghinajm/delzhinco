<!-- components/layout/TheHeader.vue -->
<template>
    <header class="bg-accent w-full fixed top-0 right-0 z-[1000] transition-all duration-300 ease-in-out">
        <div class="marquee bg-white text-primary h-[42px] flex justify-center items-center border-b border-gray-200">
            <pre
                class="font-sans font-bold">یورو (اسکناس/ PMO ) : ۸۴۳,۸۲۲ -  ۱۲۵,۳۸۰  تومان        دلار (اسکناس/ PMO ) : ۷۲۴,۵۳۸ -  ۱۰۷,۸۴۰  تومان</pre>
        </div>
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center h-[90px]">
                <a href="/" class="navbar-logo" aria-label="صفحه اصلی دلژین">
                    <img src="/images/logo-darkBlueText/Final2-01.png" alt="لوگو شرکت حمل و نقل دلژین" class="h-32" />
                </a>

                <div class="hidden lg:flex">
                    <ul class="flex items-center gap-8">
                        <li><a href="/"
                                class="text-text-on-primary font-medium pb-1 relative hover:text-primary active:text-primary">صفحه
                                نخست</a></li>
                        <!-- منوی سرویس‌ها را بعدا به یک کامپوننت جدا تبدیل می‌کنیم -->
                        <li><a href="#" class="text-text-on-primary font-medium pb-1">سرویس‌ها</a></li>
                        <li><a href="/news" class="text-text-on-primary font-medium pb-1">اخبار</a></li>
                        <li><a href="/about" class="text-text-on-primary font-medium pb-1">درباره ما</a></li>
                        <li><a href="#" class="text-text-on-primary font-medium pb-1">تماس با ما</a></li>
                    </ul>
                </div>

                <div class="flex items-center gap-5">
                    <a href="/en" class="lang-switcher text-text-on-primary font-bold">EN</a>
                    <a href="https://www.instagram.com/delzhin_shipping" target="_blank"
                        aria-label="صفحه اینستاگرام دلژین" class="text-text-on-primary text-xl">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <!-- نمایش تاریخ و زمان را بعدا با Vue پیاده‌سازی می‌کنیم -->
                    <div id="datetime-display" class="text-text-on-primary text-sm font-light hidden md:block"></div>
                </div>

                <!-- دکمه همبرگر برای موبایل -->
                <button class="lg:hidden hamburger" aria-label="باز و بسته کردن منو">
                    <span class="bar block w-6 h-0.5 my-1 bg-text-on-primary transition-all duration-300"></span>
                    <span class="bar block w-6 h-0.5 my-1 bg-text-on-primary transition-all duration-300"></span>
                    <span class="bar block w-6 h-0.5 my-1 bg-text-on-primary transition-all duration-300"></span>
                </button>
            </nav>
        </div>
    </header>
</template>

<script setup>
// منطق مربوط به هدر (مانند منوی موبایل و sticky شدن) را در مراحل بعدی در اینجا اضافه خواهیم کرد.
</script>

<style scoped>
/* استایل‌های خیلی خاص که با Tailwind سخت هستند را می‌توان اینجا نوشت */
/* برای مثال: استایل خط زیر لینک فعال منو */
.nav-menu a.active::after,
.nav-menu a:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
}
</style>