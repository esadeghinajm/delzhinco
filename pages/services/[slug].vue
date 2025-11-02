// --- START OF FILE: pages/services/[slug].vue ---
<template>
  <div v-if="service" class="bg-surface-bg dark:bg-dark-surface-bg">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-40 text-white text-center">
      <NuxtImg :src="service.image" :alt="service.title" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-primary/70"></div>
      <div class="container mx-auto px-4 z-10 relative">
        <h1 class="text-4xl md:text-6xl font-bold" data-aos="fade-up">{{ service.title }}</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <p class="text-lg leading-relaxed text-text-color dark:text-dark-text-color mb-8" data-aos="fade-up">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 md:py-24 bg-gray-100 dark:bg-gray-800/20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-4" data-aos="fade-up">آماده شروع هستید؟</h2>
        <p class="text-text-color dark:text-dark-text-color mb-8" data-aos="fade-up" data-aos-delay="100">با کارشناسان ما تماس بگیرید تا بهترین راهکار را برای شما پیدا کنیم.</p>
        <div data-aos="fade-up" data-aos-delay="200">
          <AppButton to="/contact" variant="accent">{{ $t('contact_us_btn') }}</AppButton>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center py-24">
    <p>سرویس مورد نظر یافت نشد.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const servicesData = {
  'road-freight': { title: t('road_freight'), image: '/images/services/road-freight.jpg', description: t('road_freight_desc') },
  'air-freight': { title: t('air_freight'), image: '/images/services/air-freight.jpg', description: t('air_freight_desc') },
  'sea-freight': { title: t('sea_freight'), image: '/images/services/sea-freight.jpg', description: t('sea_freight_desc') },
};

const service = servicesData[route.params.slug as keyof typeof servicesData];

useHead({ title: service?.title || 'سرویس' });
</script>