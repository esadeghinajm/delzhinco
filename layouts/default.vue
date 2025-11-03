<!-- layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader @open-mobile-menu="isMobileMenuOpen = true" @open-contact-modal="isContactModalOpen = true" />
    <main class="flex-grow">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <TheFooter />

    <!-- 🟢 راه‌حل: پاس دادن prop الزامی nav-links -->
    <MobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false"
      @open-contact-modal="isContactModalOpen = true; isMobileMenuOpen = false" :nav-links="navLinks" />

    <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const isContactModalOpen = ref(false);

// این اینترفیس را برای پشتیبانی از دکمه‌ها نیز گسترش می‌دهیم
interface NavLink {
  name: string;
  path?: string; // اختیاری برای لینک‌ها
  action?: () => void; // اختیاری برای دکمه‌ها
}

const navLinks: NavLink[] = [
  { name: 'home', path: '/' },
  { name: 'our_services', path: '/#services-section' }, // لینک به بخش سرویس‌ها در صفحه اصلی
  { name: 'news', path: '/news' },
  { name: 'about', path: '/about' },
  { name: 'contact', action: () => { isContactModalOpen.value = true; } }, // دکمه تماس با ما
];
</script>