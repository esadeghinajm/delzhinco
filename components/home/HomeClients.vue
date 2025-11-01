// --- START OF FILE: components/home/HomeClients.vue ---
<template>
  <section class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold text-heading-color dark:text-dark-heading-color" data-aos="fade-up">{{ $t('home_clients_title') }}</h2>
      </div>
      <div class="relative h-20 overflow-hidden" data-aos="fade-up">
        <div class="absolute top-0 left-0 w-full h-full flex items-center animate-carousel">
          <div v-for="i in 2" :key="i" class="flex-shrink-0 flex justify-around w-full">
            <NuxtImg v-for="logo in logos" :key="logo" :src="logo" alt="Client logo" class="h-10 w-auto object-contain mx-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  '/images/clients/logo-1.png',
  '/images/clients/logo-2.png',
  '/images/clients/logo-3.png',
  '/images/clients/logo-4.png',
  '/images/clients/logo-5.png',
  '/images/clients/logo-6.png',
];
</script>