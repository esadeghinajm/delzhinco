<template>
  <div class="bg-surface-bg dark:bg-dark-surface-bg">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32 text-white text-center">
      <!-- <NuxtImg src="/images/backgrounds/projects-bg.jpg" alt="Projects Background" class="absolute inset-0 w-full h-full object-cover" /> -->
      <div class="absolute inset-0 bg-primary/60"></div>
      <div class="container mx-auto px-4 z-10 relative">
        <h1 class="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">{{ $t('projects_page_title') }}</h1>
        <p class="text-lg md:text-xl opacity-80" data-aos="fade-up" data-aos-delay="100">{{ $t('projects_page_subtitle') }}</p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="group relative rounded-lg overflow-hidden shadow-lg h-96"
            data-aos="fade-up"
            :data-aos-delay="100 * index"
          >
            <NuxtImg :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white w-full">
              <span class="text-xs font-semibold uppercase tracking-wider text-accent dark:text-dark-accent">{{ project.category }}</span>
              <h3 class="text-2xl font-bold mt-1">{{ project.title }}</h3>
              <p class="mt-2 text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">
                {{ project.description }}
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'پروژه‌ها' });

// const projects = [
//   { title: 'حمل تجهیزات پتروشیمی', category: 'حمل سنگین', description: 'انتقال موفقیت‌آمیز راکتورهای فوق سنگین به عسلویه.', image: '/images/projects/project-1.jpg' },
//   { title: 'واردات دارو', category: 'حمل هوایی', description: 'واردات سریع و ایمن محموله‌های دارویی حساس به دما.', image: '/images/projects/project-2.jpg' },
//   { title: 'صادرات مواد غذایی', category: 'حمل دریایی', description: 'ارسال محصولات کشاورزی به بازارهای اروپایی.', image: '/images/projects/project-3.jpg' },
//   { title: 'ترانزیت قطعات خودرو', category: 'حمل زمینی', description: 'مدیریت زنجیره تامین قطعات برای خطوط تولید.', image: '/images/projects/project-4.jpg' },
//   { title: 'تجهیزات نمایشگاهی', category: 'خدمات Door-to-Door', description: 'حمل و ترخیص تجهیزات برای نمایشگاه‌های بین‌المللی.', image: '/images/projects/project-5.jpg' },
//   { title: 'پروژه انرژی‌های تجدیدپذیر', category: 'حمل سنگین', description: 'حمل توربین‌های بادی به مزارع بادی منجیل.', image: '/images/projects/project-6.jpg' },
// ];
</script>