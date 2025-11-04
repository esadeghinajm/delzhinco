<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader @open-mobile-menu="isMobileMenuOpen = true" @open-contact-modal="isContactModalOpen = true" />
    <main class="flex-grow">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <ClientOnly>
      <TheFooter />
    </ClientOnly>

    <MobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false"
      @open-contact-modal="handleOpenContactFromMobile" :nav-links="navLinks" />

    <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NavLink } from '~/types'; // 🟢 ایمپورت تایپ سراسری

const isMobileMenuOpen = ref(false);
const isContactModalOpen = ref(false);

const handleOpenContactFromMobile = () => {
  isContactModalOpen.value = true;
  isMobileMenuOpen.value = false; // بستن منوی موبایل هنگام باز شدن مودال
};

// 🟢 تعریف داخلی NavLink حذف شد

const navLinks: NavLink[] = [
  { name: 'home', path: '/', type: 'link' },
  { name: 'our_services', path: '/#services-section', type: 'dropdown' },
  { name: 'news', path: '/news', type: 'link' },
  { name: 'projects', path: '/projects', type: 'link' },
  { name: 'agencies', path: '/#agencies-section', type: 'anchor' },
  { name: 'education', path: '/education', type: 'link' },
  { name: 'about', path: '/about', type: 'link' },
  { name: 'contact', type: 'button' },
];
</script>