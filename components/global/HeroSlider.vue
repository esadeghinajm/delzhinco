<template>
  <div class="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" dir="ltr">
    <!-- Slides Container -->
    <div class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Slide 1: Company Intro (بدون تغییر) -->
      <div class="w-full h-full flex-shrink-0 relative p-8"
        style="background-image: linear-gradient(0deg, #c39f61 0%, #15193f 40%);">
        <div class="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-8 text-white">
          <ClientOnly fallback-tag="div" class="w-full lg:w-1/3 flex justify-center">
            <div data-aos="zoom-in">
              <NuxtImg src="/images/logo-whiteText/logo-delzhin-768x768.png" alt="Delzhin Golden Logo"
                class="max-w-xs lg:max-w-full" />
            </div>
          </ClientOnly>
          <ClientOnly fallback-tag="div" class="w-full lg:w-2/3 text-center lg:text-left">
            <div data-aos="fade-up">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('slide_intro_title') }}</h1>
              <p class="text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">{{ $t('slide_intro_desc')
                }}</p>
              <div class="flex items-center justify-center lg:justify-start gap-4">
                <AppButton :to="localePath('/contact')" variant="outline">
                  <template #icon>
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                  </template>
                  {{ $t('order_now') }}
                </AppButton>
                <AppButton :to="localePath('/contact')" variant="accent">{{ $t('contact_us_btn') }}</AppButton>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>

      <!-- Slide 2: Anniversary Celebration -->
      <NuxtLink :to="localePath('/gallery/anniversary')"
        class="w-full h-full flex-shrink-0 relative cursor-pointer group bg-black">
        <NuxtImg src="/images/First-anniversary-celebration/cake-cutting-celebration.jpg"
          alt="First anniversary celebration" class="w-full h-full object-fill" preload />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        <ClientOnly>
          <div class="absolute top-10 md:top-20 -translate-x-1/2 w-full text-center px-4" data-aos="fade-down">
            <h2
              class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              {{ $t('anniversary_slide_title') }}
            </h2>
          </div>
        </ClientOnly>

        <div class="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
          <div class="container mx-auto">
            <ClientOnly>
              <div class="flex justify-center items-end gap-2 md:gap-6 overflow-x-auto pb-4">
                <div v-for="(profile, index) in anniversaryProfiles" :key="index"
                  class="text-center flex-shrink-0 w-2 md:w-40" data-aos="fade-up" :data-aos-delay="100 * index">
                  <NuxtImg :src="profile.image" :alt="$t(profile.name)"
                    class="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-accent object-cover mx-auto mb-3" />
                  <h3 class="font-bold text-sm md:text-base">{{ $t(profile.name) }}</h3>
                  <p class="text-xs md:text-sm opacity-80">{{ $t(profile.title) }}</p>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Navigation -->
    <button @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors z-10">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <button @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors z-10">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
      <button v-for="index in 2" :key="index" @click="goToSlide(index - 1)" class="w-3 h-3 rounded-full transition-all"
        :class="currentIndex === (index - 1) ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const localePath = useLocalePath();
const anniversaryProfiles = ref([
  { name: 'profile_1_name', title: 'profile_1_title', image: '/images/First-anniversary-celebration/mr-semsari.jpg' },
  { name: 'profile_2_name', title: 'profile_2_title', image: '/images/First-anniversary-celebration/mr-nikpey.jpg' },
  { name: 'profile_3_name', title: 'profile_3_title', image: '/images/First-anniversary-celebration/ms-chitgar.jpg' },
  { name: 'profile_4_name', title: 'profile_4_title', image: '/images/First-anniversary-celebration/mr-momeni.jpg' },
  { name: 'profile_5_name', title: 'profile_5_title', image: '/images/First-anniversary-celebration/ms-alizadeh.jpg' },
  { name: 'profile_6_name', title: 'profile_6_title', image: '/images/First-anniversary-celebration/mr-sadri.jpg' },
  { name: 'profile_7_name', title: 'profile_7_title', image: '/images/First-anniversary-celebration/mr-jabraeili.jpg' },
]);
const currentIndex = ref(0);
let slideInterval: NodeJS.Timeout;
const nextSlide = () => { currentIndex.value = (currentIndex.value + 1) % 2; };
const prevSlide = () => { currentIndex.value = (currentIndex.value - 1 + 2) % 2; };
const goToSlide = (index: number) => { currentIndex.value = index; };
onMounted(() => { slideInterval = setInterval(nextSlide, 7000); });
onUnmounted(() => { clearInterval(slideInterval); });
</script>