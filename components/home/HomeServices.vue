// --- START OF FILE: components/home/HomeServices.vue ---
<template>
  <section id="services-section" class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <h2 class="section-title" data-aos="fade-up">{{ $t('our_services') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="service.slug" class="service-card" data-aos="fade-up"
          :data-aos-delay="100 * index">
          <div class="service-card-icon"><font-awesome-icon :icon="['fas', service.icon]" /></div>
          <h3 class="service-card-title">{{ $t(service.title) }}</h3>
          <p>{{ $t(`${service.slug}_desc`) }}</p>
          <NuxtLink :to="localePath(`/services/${service.slug}`)" class="service-card-link">{{ $t('read_more') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const services = [
  { slug: 'sea-freight', icon: 'ship', title: 'sea_freight' },
  { slug: 'air-freight', icon: 'plane', title: 'air_freight' },
  { slug: 'road-freight', icon: 'truck', title: 'road_freight' },
];
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
  padding-bottom: 15px;
  text-align: center;
  color: var(--heading-color);
}

.dark .section-title {
  color: var(--dark-heading-color);
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: var(--accent-color);
}

.dark .section-title::after {
  background-color: var(--dark-accent-color);
}

.service-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;
}

.dark .service-card {
  background: #1f2937;
  /* Equivalent to dark:bg-slate-800 */
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-card-icon {
  font-size: 3.5rem;
  color: var(--accent-color);
  margin-bottom: 20px;
}

.dark .service-card-icon {
  color: var(--dark-accent-color);
}

.service-card-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  color: var(--heading-color);
}

.dark .service-card-title {
  color: var(--dark-heading-color);
}

.service-card p {
  color: var(--text-color);
  margin-bottom: 20px;
}

.dark .service-card p {
  color: var(--dark-text-color);
}

.service-card-link {
  color: var(--primary-color);
  font-weight: 700;
}

.dark .service-card-link {
  color: var(--dark-accent-color);
}
</style>