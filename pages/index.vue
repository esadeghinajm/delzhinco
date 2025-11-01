<template>
    <div>
        <HeroSlider />
        <ClientOnly>
            <HomeServices />
            <HomeWhyUs />
            <HomeServiceCycle /> <!-- 🟢 کامپوننت جدید اضافه شد -->
            <HomeProjects />
            <HomeBlog />
            <HomeClients />
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
// داده‌های ساختاریافته برای سئو
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