<template>
    <!-- استفاده از تگ‌های سکشن برای سئوی بهتر -->
    <main class="container mx-auto px-4 py-32 text-center">
        <!-- انیمیشن با data-aos -->
        <section data-aos="fade-up">
            <h1 class="text-4xl font-bold text-primary dark:text-accent">{{ $t('welcome_title') }}</h1>
            <p class="mt-4 text-lg">{{ $t('welcome_subtitle') }}</p>
        </section>
    </main>
</template>

<script setup>
import { useI18n } from '#imports';
import { useHead } from '#imports';

const { t } = useI18n();

// ✅ پیاده‌سازی کامل سئو با useHead
useHead(() => ({
    // عنوان صفحه داینامیک و ترجمه شده
    title: t('welcome_title'),
    meta: [
        {
            name: 'description',
            content: t('welcome_subtitle') // توضیحات متا ترجمه شده
        },
        // تگ‌های Open Graph برای اشتراک‌گذاری در شبکه‌های اجتماعی
        { property: 'og:title', content: t('welcome_title') },
        { property: 'og:description', content: t('welcome_subtitle') },
        { property: 'og:type', content: 'website' },
        // { property: 'og:image', content: 'https://your-domain.com/social-image.jpg' },
        // { property: 'og:url', content: 'https://your-domain.com/' },
    ],
    // لینک‌های جایگزین برای زبان‌های مختلف (بسیار مهم برای سئوی چندزبانه)
    link: [
        {
            rel: 'alternate',
            hreflang: 'fa',
            href: 'https://your-domain.com',
        },
        {
            rel: 'alternate',
            hreflang: 'en',
            href: 'https://your-domain.com/en',
        },
        {
            rel: 'alternate',
            hreflang: 'x-default', // زبان پیش‌فرض
            href: 'https://your-domain.com',
        },
    ],
    // می‌توانید JSON-LD (داده‌های ساختاریافته) را نیز اینجا اضافه کنید
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Delzhinco',
                url: 'https://your-domain.com',
                // logo: 'https://your-domain.com/images/logo-delzhin3.png'
            })
        }
    ]
}));
</script>