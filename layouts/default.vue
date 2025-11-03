<!-- layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader @open-mobile-menu="isMobileMenuOpen = true" @open-contact-modal="isContactModalOpen = true" />
    <main class="flex-grow">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <TheFooter />

    <MobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false"
      @open-contact-modal="isContactModalOpen = true; isMobileMenuOpen = false" :nav-links="navLinks" />

    <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const isContactModalOpen = ref(false);

interface NavLink {
  name: string;
  path?: string;
  type?: 'link' | 'button' | 'dropdown';
  action?: () => void;
}

const navLinks: NavLink[] = [
  { name: 'home', path: '/', type: 'link' },
  { name: 'our_services', path: '/#services-section', type: 'dropdown' },
  { name: 'news', path: '/news', type: 'link' },
  { name: 'about', path: '/about', type: 'link' },
  { name: 'contact', type: 'button' },
];
</script>