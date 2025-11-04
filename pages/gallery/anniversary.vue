// --- START OF FILE: pages/gallery/anniversary.vue ---
<template>
  <div class="bg-surface-bg dark:bg-dark-surface-bg py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-5xl font-bold text-heading-color dark:text-dark-heading-color mb-4"
          data-aos="fade-up">
          {{ $t('anniversary_slide_title') }}
        </h1>
        <p class="text-lg text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">
          تصاویری از اولین جشن سالگرد تاسیس شرکت دلژین
        </p>
      </div>

      <!-- Image Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in galleryImages" :key="image.src" class="overflow-hidden rounded-lg shadow-lg group"
          data-aos="zoom-in" :data-aos-delay="50 * index" @click="openModal(index)">
          <NuxtImg :src="image.src" :alt="image.alt"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer" />
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        @click="closeModal">
        <button @click.stop="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full">&lt;</button>
        <img :src="galleryImages[currentImageIndex].src" :alt="galleryImages[currentImageIndex].alt"
          class="max-w-full max-h-[90vh] object-contain" @click.stop>
        <button @click.stop="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full">&gt;</button>
        <button @click="closeModal" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'گالری تصاویر جشن سالگرد'
});

const galleryImages = [
  { src: 'images/First-anniversary-celebration/cake-cutting-celebration.jpg', caption: 'توضیحات عکس اول' },
  { src: 'images/First-anniversary-celebration/celebration.jpg', caption: 'مراسم تقدیر' },
  { src: 'images/First-anniversary-celebration/mr-jabraeili.jpg', caption: 'همایش سالانه دلژین' },
  { src: 'images/First-anniversary-celebration/mr-momeni.jpg', caption: 'سخنرانی مدیریت' },
  { src: 'images/First-anniversary-celebration/mr-nikpey.jpg', caption: 'مراسم تقدیر' },
  { src: 'images/First-anniversary-celebration/mr-sadri.jpg', caption: 'همایش سالانه دلژین' },
  { src: 'images/First-anniversary-celebration/ms-chitgar.jpg', caption: 'سخنرانی مدیریت' },
  { src: 'images/First-anniversary-celebration/ms-alizadeh.jpg', caption: 'مراسم تقدیر' },
  { src: 'images/First-anniversary-celebration/mr-semsari.jpg', caption: 'همایش سالانه دلژین' },
];

const isModalOpen = ref(false);
const currentImageIndex = ref(0);

const openModal = (index: number) => {
  currentImageIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.length) % galleryImages.length;
};
</script>