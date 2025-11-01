<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader @open-mobile-menu="isMobileMenuOpen = true" />
    <main class="flex-grow">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <TheFooter />
    <MobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false" :nav-links="navLinks" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

interface NavLink { name: string; path: string; }

const navLinks: NavLink[] = [
  { name: 'home', path: 'index' },
  { name: 'services', path: 'services' },
  { name: 'news', path: 'news' },
  { name: 'about', path: 'about' },
  { name: 'contact', path: 'contact' },
];
</script>