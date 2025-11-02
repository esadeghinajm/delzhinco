// --- START OF FILE: components/home/HomeClients.vue ---
<template>
  <section class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold text-heading-color dark:text-dark-heading-color" data-aos="fade-up">{{
          $t('trusted_by') }}</h2>
      </div>
      <div class="flex justify-center items-center flex-wrap gap-x-12 gap-y-8" data-aos="fade-up">
        <NuxtImg v-for="logo in logos" :key="logo" :src="logo" alt="Client logo" class="h-10 w-auto object-contain" />
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