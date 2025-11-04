<template>
  <section class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold text-heading-color dark:text-dark-heading-color" data-aos="fade-up">{{
          $t('trusted_by') }}</h2>
      </div>
      <div class="flex justify-center items-center flex-wrap gap-x-12 gap-y-8" data-aos="fade-up">
        <div v-for="logo in logos" :key="logo" class="w-36 h-20 flex justify-center items-center">
          <NuxtImg :src="logo" alt="Client logo" class="max-w-full max-h-full object-contain" sizes="150px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  '/images/best customers/bijan/Bijan-Logo-1030x1030-1-110x110.png',
  '/images/best customers/mahan air/Mahan-Air-Logo-1030x1030-1-110x110.png',
  '/images/best customers/mapna/Mapna-Group-Logo-1030x1030-1-110x110.png',
  '/images/best customers/petroshimi/logo-98-1024x808-1-110x110.jpg',
  '/images/best customers/ZYCLUSMED/ZYCLUSMED-LOGO-1.png',
];
</script>