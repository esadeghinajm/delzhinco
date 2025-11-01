// --- START OF FILE: components/home/HomeBlog.vue ---
<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-heading-color dark:text-dark-heading-color mb-2" data-aos="fade-up">{{ $t('home_news_title') }}</h2>
        <p class="text-text-color dark:text-dark-text-color" data-aos="fade-up" data-aos-delay="100">{{ $t('home_news_subtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white dark:bg-gray-800/20 rounded-lg overflow-hidden shadow-sm flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)"
        >
          <NuxtImg :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <p class="text-xs text-text-color dark:text-dark-text-color mb-2">{{ post.date }} - {{ post.author }}</p>
            <h3 class="text-lg font-bold text-heading-color dark:text-dark-heading-color mb-4 flex-grow">{{ post.title }}</h3>
            <NuxtLink to="#" class="text-accent dark:text-dark-accent font-semibold hover:underline">{{ $t('read_more') }}</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  { title: 'چالش‌های حمل و نقل در سال ۲۰۲۵', date: '۱۴ آبان ۱۴۰۴', author: 'تیم دلژین', image: '/images/blog/blog-1.jpg' },
  { title: 'نقش فناوری در بهینه‌سازی زنجیره تامین', date: '۱۰ آبان ۱۴۰۴', author: 'علی محمدی', image: '/images/blog/blog-2.jpg' },
  { title: 'مقررات جدید گمرکی و تاثیر آن بر واردات', date: '۵ آبان ۱۴۰۴', author: 'تیم دلژین', image: '/images/blog/blog-3.jpg' },
];
</script>