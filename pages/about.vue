<template>
    <div class="bg-surface-bg dark:bg-dark-surface-bg">
        <!-- Hero Section -->
        <section class="relative py-24 md:py-40 text-white text-center overflow-hidden">
            <!-- <NuxtImg src="/images/backgrounds/about-us-bg.jpg" alt="About Us Background" -->
            class="absolute inset-0 w-full h-full object-cover transform scale-110" />
            <div class="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
            <div class="container mx-auto px-4 z-10 relative">
                <h1 class="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">{{ $t('about_us_page_title') }}</h1>
                <p class="text-lg md:text-xl opacity-90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">{{
                    $t('about_us_page_subtitle') }}</p>
            </div>
        </section>

        <!-- 🟢 START: بخش عکس گروهی جدید 🟢 -->
        <section class="py-16 md:py-24">
            <div class="container mx-auto px-4">
                <div class="max-w-full mx-auto" data-aos="fade-up">
                    <!-- <NuxtImg src="/images/team/daste jaammi-website delzhin.png" alt="Delzhin Team Group Photo"
                        class="rounded-xl shadow-2xl w-full" /> -->
                </div>
            </div>
        </section>
        <!-- 🟢 END: بخش عکس گروهی جدید 🟢 -->

        <!-- Story and Mission Section -->
        <section class="pb-16 md:pb-24">
            <div class="container mx-auto px-4">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-4">{{
                            $t('our_story') }}</h2>
                        <p class="text-text-color dark:text-dark-text-color leading-loose">{{ $t('story_p1') }}</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="100">
                        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-4">{{
                            $t('our_mission') }}</h2>
                        <p class="text-text-color dark:text-dark-text-color leading-loose">{{ $t('mission_p1') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🟢 START: بخش تیم مدیریت با طراحی جدید 🟢 -->
        <section class="py-16 md:py-24 bg-gray-100 dark:bg-dark-primary/20">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center text-heading-color dark:text-dark-heading-color mb-16"
                    data-aos="fade-up">
                    {{ $t('management_team') }}
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(member, index) in management" :key="member.name" class="group" data-aos="fade-up"
                        :data-aos-delay="100 * index">
                        <!-- کانتینر تصویر با نسبت ابعاد عمودی -->
                        <div class="relative rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
                            <NuxtImg :src="member.image" :alt="member.name"
                                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
                            <div class="absolute bottom-0 left-0 p-6 text-white w-full">
                                <h3 class="text-2xl font-bold">{{ member.name }}</h3>
                                <p
                                    class="text-accent dark:text-dark-accent font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {{ member.title }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 🟢 END: بخش تیم مدیریت با طراحی جدید 🟢 -->

        <!-- Our Experts -->
        <section class="py-16 md:py-24">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center text-heading-color dark:text-dark-heading-color mb-12"
                    data-aos="fade-up">
                    {{ $t('our_experts') }}
                </h2>
                <div class="flex flex-wrap justify-center gap-6 md:gap-8">
                    <!-- <div v-for="(expert, index) in experts" :key="expert.name" class="text-center" data-aos="zoom-in"
                        :data-aos-delay="50 * index">
                        <NuxtImg :src="expert.image" :alt="expert.name"
                            class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 shadow-md hover:shadow-xl transition-shadow duration-300" />
                        <h4 class="font-semibold text-heading-color dark:text-dark-heading-color">{{ expert.name }}</h4>
                        <p class="text-sm text-text-color dark:text-dark-text-color">{{ $t(expert.title) }}</p>
                    </div> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({ title: 'درباره ما' });

const management = [
    { name: 'یونس واثق', title: 'Founder/Chairman of the Board of Directors', image: '/images/team/managers/younes-vasegh.webp' },
    { name: 'امیر صدری', title: 'CEO/Board Member', image: '/images/team/managers/amir-sadri.webp' },
    { name: 'فرشاد خدادادی', title: 'COO/Board Member', image: '/images/team/managers/farshad-khodadadi.webp' },
    { name: 'حمیدرضا میلانی', title: 'CMO/Board Member', image: '/images/team/managers/hamidreza-milani.webp' },
];

// const experts = [
//     { name: 'کارشناس ۱', title: 'logistics_expert', image: '/public/images/team/expert-1.jpg' },
//     { name: 'کارشناس ۲', title: 'customs_specialist', image: '/public/images/team/expert-2.jpg' },
//     { name: 'کارشناس ۳', title: 'logistics_expert', image: '/public/images/team/expert-3.jpg' },
//     { name: 'کارشناس ۴', title: 'customs_specialist', image: '/public/images/team/expert-4.jpg' },
//     { name: 'کارشناس ۵', title: 'logistics_expert', image: '/public/images/team/expert-5.jpg' },
//     { name: 'کارشناس ۶', title: 'customs_specialist', image: '/public/images/team/expert-6.jpg' },
//     { name: 'کارشناس ۷', title: 'logistics_expert', image: '/public/images/team/expert-7.jpg' },
//     { name: 'کارشناس ۸', title: 'customs_specialist', image: '/public/images/team/expert-8.jpg' },
// ];
</script>