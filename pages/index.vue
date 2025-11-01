// --- START OF FILE: pages/index.vue ---
<template>
    <div>
        <HeroSlider />

        <!-- بخش‌های دیگر صفحه اصلی در اینجا اضافه می‌شوند -->
        <ClientOnly>
            <section class="bg-white dark:bg-dark-surface-bg/50 py-16">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-8"
                        data-aos="fade-up">
                        {{ $t('services') }}
                    </h2>
                    <!-- در اینجا می‌توانید از NuxtImg برای نمایش تصاویر خدمات استفاده کنید -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <NuxtImg src="/images/service-1.jpg" alt="Sea Freight"
                                class="rounded-lg mb-4 w-full h-48 object-cover" />
                            <h3 class="text-xl font-bold">{{ $t('sea_freight') }}</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <NuxtImg src="/images/service-2.jpg" alt="Air Freight"
                                class="rounded-lg mb-4 w-full h-48 object-cover" />
                            <h3 class="text-xl font-bold">{{ $t('air_freight') }}</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <NuxtImg src="/images/service-3.jpg" alt="Road Freight"
                                class="rounded-lg mb-4 w-full h-48 object-cover" />
                            <h3 class="text-xl font-bold">{{ $t('road_freight') }}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
// داده‌های ساختاریافته را برای صفحه اصلی نگه می‌داریم
useHead({
    title: 'صفحه اصلی',
    meta: [
        { name: 'description', content: 'خدمات حمل و نقل بین‌المللی دلژین، راهکاری هوشمند و مطمئن برای تجارت شما.' }
    ],
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'شرکت دلژین',
            'url': 'https://delzhinco.com',
            'logo': 'https://delzhinco.com/logo.png',
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+98-90008040',
                'contactType': 'customer service'
            }
        })
    }]
})
</script>