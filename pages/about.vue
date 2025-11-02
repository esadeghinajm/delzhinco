// --- START OF FILE: pages/about.vue ---
<template>
    <div class="bg-surface-bg dark:bg-dark-surface-bg">
        <!-- Hero Section -->
        <section class="relative py-24 md:py-32 bg-primary dark:bg-dark-primary text-white text-center">
            <div class="container mx-auto px-4 z-10 relative">
                <h1 class="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">{{ $t('about_us_page_title') }}</h1>
                <p class="text-lg md:text-xl opacity-80" data-aos="fade-up" data-aos-delay="100">{{
                    $t('about_us_page_subtitle') }}</p>
            </div>
        </section>

        <!-- Management Team -->
        <section class="py-16 md:py-24">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center text-heading-color dark:text-dark-heading-color mb-12"
                    data-aos="fade-up">
                    {{ $t('management_team') }}
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(member, index) in management" :key="member.name" class="text-center" data-aos="fade-up"
                        :data-aos-delay="100 * index">
                        <NuxtImg :src="member.image" :alt="member.name"
                            class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-accent" />
                        <h3 class="text-xl font-bold text-heading-color dark:text-dark-heading-color">{{ member.name }}
                        </h3>
                        <p class="text-text-color dark:text-dark-text-color">{{ $t(member.title) }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Experts -->
        <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-800/20">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center text-heading-color dark:text-dark-heading-color mb-12"
                    data-aos="fade-up">
                    {{ $t('our_experts') }}
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div v-for="(expert, index) in experts" :key="expert.name" class="text-center" data-aos="zoom-in"
                        :data-aos-delay="50 * index">
                        <NuxtImg :src="expert.image" :alt="expert.name"
                            class="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md" />
                        <h4 class="font-semibold text-heading-color dark:text-dark-heading-color">{{ expert.name }}</h4>
                        <p class="text-sm text-text-color dark:text-dark-text-color">{{ $t(expert.title) }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({ title: 'درباره ما' });

const management = [
    { name: 'امیر صدری', title: 'ceo', image: '/images/team/management-1.jpg' },
    { name: 'سارا رضایی', title: 'cfo', image: '/images/team/management-2.jpg' },
    { name: 'رضا احمدی', title: 'coo', image: '/images/team/management-3.jpg' },
    { name: 'مریم حسینی', title: 'cto', image: '/images/team/management-4.jpg' },
];

const experts = [
    { name: 'کارشناس ۱', title: 'logistics_expert', image: '/images/team/expert-1.jpg' },
    { name: 'کارشناس ۲', title: 'customs_specialist', image: '/images/team/expert-2.jpg' },
    { name: 'کارشناس ۳', title: 'logistics_expert', image: '/images/team/expert-3.jpg' },
    { name: 'کارشناس ۴', title: 'customs_specialist', image: '/images/team/expert-4.jpg' },
    { name: 'کارشناس ۵', title: 'logistics_expert', image: '/images/team/expert-5.jpg' },
    { name: 'کارشناس ۶', title: 'customs_specialist', image: '/images/team/expert-6.jpg' },
    { name: 'کارشناس ۷', title: 'logistics_expert', image: '/images/team/expert-7.jpg' },
    { name: 'کارشناس ۸', title: 'customs_specialist', image: '/images/team/expert-8.jpg' },
];
</script>