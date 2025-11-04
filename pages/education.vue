<template>
  <div class="bg-surface-bg dark:bg-dark-surface-bg">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 text-center bg-white dark:bg-dark-primary/20 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-heading-color dark:text-dark-heading-color mb-4" data-aos="fade-up">{{ $t('education_page_title') }}</h1>
        <p class="text-lg text-text-color dark:text-dark-text-color max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">{{ $t('education_page_subtitle') }}</p>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12">
          
          <!-- Articles Grid -->
          <div class="w-full lg:w-3/4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article v-for="(article, index) in articles" :key="index" class="bg-white dark:bg-gray-800/20 rounded-lg overflow-hidden shadow-sm flex flex-col group" data-aos="fade-up" :data-aos-delay="100 * (index % 2)">
                <NuxtLink to="#">
                  <NuxtImg :src="article.image" :alt="article.title" class="w-full h-56 object-cover transform group-hover:opacity-80 transition-opacity" />
                </NuxtLink>
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex items-center justify-between text-xs text-text-color dark:text-dark-text-color mb-2">
                    <span>{{ article.date }}</span>
                    <span class="font-semibold text-accent dark:text-dark-accent">{{ $t(article.category) }}</span>
                  </div>
                  <h3 class="text-xl font-bold text-heading-color dark:text-dark-heading-color mb-4 flex-grow">
                    <NuxtLink to="#" class="hover:text-accent dark:hover:text-dark-accent transition-colors">{{ article.title }}</NuxtLink>
                  </h3>
                  <p class="text-sm text-text-color dark:text-dark-text-color mb-4">
                    {{ article.excerpt }}...
                  </p>
                  <NuxtLink to="#" class="text-primary dark:text-accent font-bold text-sm mt-auto self-start">{{ $t('read_more') }}</NuxtLink>
                </div>
              </article>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="w-full lg:w-1/4" data-aos="fade-left">
            <div class="sticky top-32">
              <h4 class="text-lg font-bold text-heading-color dark:text-dark-heading-color mb-4">{{ $t('category') }}</h4>
              <ul class="space-y-2">
                <li><a href="#" class="sidebar-link active">{{ $t('all_categories') }}</a></li>
                <li><a href="#" class="sidebar-link">{{ $t('logistics') }}</a></li>
                <li><a href="#" class="sidebar-link">{{ $t('customs') }}</a></li>
                <li><a href="#" class="sidebar-link">{{ $t('international_law') }}</a></li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'آموزش' });

const articles = [
  { title: 'اینکوترمز ۲۰۲۰ چیست؟', category: 'international_law', date: '۱۴ آبان ۱۴۰۴', image: '/images/education/edu-1.jpg', excerpt: 'راهنمای کامل اصطلاحات بین‌المللی بازرگانی برای تعیین مسئولیت‌های خریدار و فروشنده.' },
  { title: 'مدیریت ریسک در حمل و نقل دریایی', category: 'logistics', date: '۱۰ آبان ۱۴۰۴', image: '/images/education/edu-2.jpg', excerpt: 'چگونه از محموله‌های دریایی خود در برابر خطرات احتمالی محافظت کنیم.' },
  { title: 'اسناد مورد نیاز برای ترخیص کالا', category: 'customs', date: '۵ آبان ۱۴۰۴', image: '/images/education/edu-3.jpg', excerpt: 'چک‌لیست کامل مدارکی که برای یک فرآیند ترخیص سریع و بدون دردسر نیاز دارید.' },
  { title: 'بهینه‌سازی هزینه‌های حمل هوایی', category: 'logistics', date: '۱ آبان ۱۴۰۴', image: '/images/education/edu-4.jpg', excerpt: 'نکات و ترفندهایی برای کاهش هزینه‌های حمل و نقل هوایی بدون افت کیفیت.' },
];
</script>

<style scoped>
.sidebar-link {
  @apply block p-2 rounded-md text-text-color dark:text-dark-text-color hover:bg-gray-200 dark:hover:bg-gray-700;
}
.sidebar-link.active {
  @apply bg-accent/10 text-accent dark:bg-dark-accent/10 dark:text-dark-accent font-bold;
}
</style>