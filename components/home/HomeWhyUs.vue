<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- 🟢 جایگزینی تصویر با ویدیو -->
                <div class="lg:w-1/2" data-aos="fade-left">
                    <video class="rounded-lg shadow-lg w-full" src="/videos/Final3.mp4" autoplay loop muted
                        playsinline>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="lg:w-1/2" data-aos="fade-right">
                    <h3 class="text-accent dark:text-dark-accent font-bold mb-2">{{ $t('home_whyus_subtitle') }}</h3>
                    <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-4">{{
                        $t('home_whyus_title') }}</h2>
                    <p class="text-text-color dark:text-dark-text-color mb-6">{{ $t('home_whyus_desc') }}</p>
                    <ul class="space-y-4">
                        <li v-for="(feature, index) in features" :key="index" class="flex items-center">
                            <div
                                class="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 dark:bg-dark-primary/50 text-primary dark:text-dark-accent flex items-center justify-center mr-3">
                                <Icon name="ph:check-bold" />
                            </div>
                            <span class="text-heading-color dark:text-dark-heading-color font-semibold">{{ $t(feature)
                                }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const features = ['home_whyus_feature1', 'home_whyus_feature2', 'home_whyus_feature3', 'home_whyus_feature4'];
</script>