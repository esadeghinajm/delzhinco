// --- START OF FILE: components/home/HomeBlog.vue ---
<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-2" data-aos="fade-up">{{
          $t('home_news_title') }}</h2>
        <p class="text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">{{
          $t('home_news_subtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="(post, index) in latestPosts" :key="index"
          class="bg-white dark:bg-gray-800/20 rounded-lg overflow-hidden shadow-sm flex flex-col" data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)">
          <NuxtImg :src="post.image" :alt="$t(post.title)" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <p class="text-xs text-text-color dark:text-dark-text-color mb-2">{{ post.date }}</p>
            <h3 class="text-lg font-bold text-heading-color dark:text-dark-heading-color mb-4 flex-grow">{{
              $t(post.title) }}</h3>
            <NuxtLink :to="localePath('/news')"
              class="text-accent dark:text-dark-accent font-semibold hover:underline mt-auto">{{ $t('read_more') }}
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { allPosts } from '~/composables/useNews';
const localePath = useLocalePath();
const latestPosts = allPosts.slice(0, 3);
</script>