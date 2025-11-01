// --- START OF FILE: components/home/HomeServices.vue ---
<template>
  <section class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-2" data-aos="fade-up">{{ $t('home_services_title') }}</h2>
        <p class="text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">{{ $t('home_services_subtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="text-center p-8 bg-white dark:bg-gray-800/20 rounded-lg shadow-sm"
          data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 dark:bg-dark-accent/10 mx-auto mb-6">
            <Icon :name="service.icon" class="text-accent dark:text-dark-accent text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-heading-color dark:text-dark-heading-color mb-2">{{ $t(service.title) }}</h3>
          <p class="text-text-color dark:text-dark-text-color">{{ $t(service.desc) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { icon: 'ph:rocket-launch-duotone', title: 'home_services_item1_title', desc: 'home_services_item1_desc' },
  { icon: 'ph:cube-duotone', title: 'home_services_item2_title', desc: 'home_services_item2_desc' },
  { icon: 'ph:chats-circle-duotone', title: 'home_services_item3_title', desc: 'home_services_item3_desc' },
];
</script>