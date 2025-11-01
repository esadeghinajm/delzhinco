<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-2" data-aos="fade-up">{{ $t('home_cycle_title') }}</h2>
        <p class="text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">{{ $t('home_cycle_subtitle') }}</p>
      </div>
      
      <div class="relative">
        <!-- خط چین افقی برای دسکتاپ -->
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-300 dark:bg-gray-700 -translate-y-1/2"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative flex flex-col items-center text-center p-4"
            data-aos="fade-up"
            :data-aos-delay="150 * index"
          >
            <!-- دایره اصلی -->
            <div class="w-24 h-24 rounded-full bg-surface-bg dark:bg-gray-800 border-4 border-accent dark:border-dark-accent flex items-center justify-center z-10 mb-4 flex-shrink-0">
              <Icon :name="step.icon" class="text-4xl text-accent dark:text-dark-accent" />
            </div>
            <!-- شماره مرحله -->
            <div class="absolute -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold z-20">
              {{ index + 1 }}
            </div>
            <!-- عنوان مرحله -->
            <h3 class="text-lg font-bold text-heading-color dark:text-dark-heading-color">{{ $t(step.title) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { icon: 'ph:chats-circle-duotone', title: 'home_cycle_step1' },
  { icon: 'ph:package-duotone', title: 'home_cycle_step2' },
  { icon: 'ph:file-text-duotone', title: 'home_cycle_step3' },
  { icon: 'ph:map-pin-line-duotone', title: 'home_cycle_step4' },
];
</script>