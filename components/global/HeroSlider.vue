// --- START OF FILE: components/global/HeroSlider.vue ---
<template>
  <div class="relative w-full h-[60vh] md:h-[85vh] overflow-hidden" dir="ltr">
    <!-- Slides Container -->
    <div
      class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="w-full h-full flex-shrink-0 relative">
        <!-- Background Image -->
        <NuxtImg
          :src="slide.image"
          :alt="slide.alt"
          class="w-full h-full object-cover"
          format="webp"
          quality="80"
          preload
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
        <!-- Content -->
        <div class="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <div data-aos="fade-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ slide.title }}</h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto">{{ slide.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </button>

    <!-- Dots Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    image: '/images/slider/slide-1.jpg',
    alt: 'International trade logistics',
    title: 'تجارت بین‌الملل، ساده و هوشمند',
    subtitle: 'راهکارهای جامع حمل و نقل برای کسب و کار شما'
  },
  {
    image: '/images/slider/slide-2.jpg',
    alt: 'Cargo ship on the ocean',
    title: 'حمل دریایی مطمئن و سریع',
    subtitle: 'از هر مبدأ به هر مقصدی در سراسر جهان'
  },
  {
    image: '/images/slider/slide-3.jpg',
    alt: 'Cargo plane in the sky',
    title: 'سرعت در حمل هوایی',
    subtitle: 'محموله‌های شما در کوتاه‌ترین زمان به مقصد می‌رسند'
  }
]);

const currentIndex = ref(0);
let slideInterval: NodeJS.Timeout;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>