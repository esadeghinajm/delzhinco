// --- START OF FILE: pages/news/index.vue ---
<template>
  <div class="bg-surface-bg dark:bg-dark-surface-bg py-16 md:py-24">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-heading-color dark:text-dark-heading-color mb-12" data-aos="fade-up">
        {{ $t('news_page_title') }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="(post, index) in allPosts" :key="index" class="bg-white dark:bg-gray-800/20 rounded-lg overflow-hidden shadow-sm flex flex-col" data-aos="fade-up" :data-aos-delay="100 * (index % 3)">
          <NuxtImg :src="post.image" :alt="$t(post.title)" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <p class="text-xs text-text-color dark:text-dark-text-color mb-2">{{ post.date }}</p>
            <h3 class="text-lg font-bold text-heading-color dark:text-dark-heading-color mb-4 flex-grow">{{ $t(post.title) }}</h3>
            <p class="text-sm text-text-color dark:text-dark-text-color mb-4">{{ $t(post.desc) }}</p>
            <NuxtLink to="#" class="text-accent dark:text-dark-accent font-semibold hover:underline mt-auto">{{ $t('read_more') }}</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { allPosts } from '~/composables/useNews';
useHead({ title: 'اخبار' });
</script>