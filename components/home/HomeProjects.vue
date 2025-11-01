// --- START OF FILE: components/home/HomeProjects.vue ---
<template>
  <section class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-2" data-aos="fade-up">{{ $t('home_projects_title') }}</h2>
        <p class="text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">{{ $t('home_projects_subtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative rounded-lg overflow-hidden shadow-lg"
          data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)"
        >
          <NuxtImg :src="project.image" :alt="project.title" class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white">
            <h3 class="text-xl font-bold mb-4">{{ project.title }}</h3>
            <AppButton to="#" variant="accent" class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {{ $t('view_project') }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { title: 'پروژه پتروشیمی', image: '/images/projects/project-1.jpg' },
  { title: 'تجهیزات پزشکی', image: '/images/projects/project-2.jpg' },
  { title: 'صنایع غذایی', image: '/images/projects/project-3.jpg' },
  { title: 'قطعات خودرو', image: '/images/projects/project-4.jpg' },
];
</script>