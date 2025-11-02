// --- START OF FILE: components/home/HomeWhyUs.vue ---
<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2 relative" data-aos="fade-left">
                    <video ref="promoVideo" class="rounded-lg shadow-lg w-full" src="/videos/promo-video.mp4"
                        poster="/images/pooster-video.png" playsinline>
                        Your browser does not support the video tag.
                    </video>
                    <button v-if="!isPlaying" @click="playVideo"
                        class="absolute inset-0 flex items-center justify-center group" aria-label="Play Video">
                        <div
                            class="w-24 h-24 rounded-full bg-accent/70 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="lg:w-1/2" data-aos="fade-right">
                    <h3 class="text-accent dark:text-dark-accent font-bold mb-2">{{ $t('home_whyus_subtitle') }}</h3>
                    <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-4">{{
                        $t('home_whyus_title') }}</h2>
                    <p class="text-text-color dark:text-dark-text-color mb-6">{{ $t('home_whyus_desc') }}</p>
                    <ul class="space-y-4">
                        <li v-for="feature in features" :key="feature" class="flex items-center">
                            <div
                                class="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 dark:bg-dark-primary/50 text-primary dark:text-dark-accent flex items-center justify-center mr-3">
                                <font-awesome-icon :icon="['fas', 'check']" />
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
import { ref } from 'vue';
const features = ['home_whyus_feature1', 'home_whyus_feature2', 'home_whyus_feature3', 'home_whyus_feature4'];
const promoVideo = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
const playVideo = () => {
    if (promoVideo.value) {
        promoVideo.value.play();
        promoVideo.value.controls = true;
        isPlaying.value = true;
    }
};
</script>