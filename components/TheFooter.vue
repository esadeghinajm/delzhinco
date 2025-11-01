// --- START OF FILE: components/global/TheFooter.vue ---
<template>
  <footer class="bg-primary dark:bg-dark-primary text-text-on-primary pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('company_name') }}</h3>
          <p class="text-sm opacity-80 leading-relaxed">{{ $t('company_description') }}</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('quick_access') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="localePath(link.path)" class="text-sm opacity-80 hover:opacity-100 hover:text-accent dark:hover:text-dark-accent transition" active-class="opacity-100 text-accent dark:text-dark-accent font-bold">
                {{ $t(link.name) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('services') }}</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <NuxtLink :to="localePath(service.path)" class="text-sm opacity-80 hover:opacity-100 hover:text-accent dark:hover:text-dark-accent transition" active-class="opacity-100 text-accent dark:text-dark-accent font-bold">
                {{ $t(service.name) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('contact_us_title') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start text-sm"><span class="ml-2 mt-1 opacity-80">📍</span>{{ $t('address') }}</li>
            <li class="flex items-start text-sm"><span class="ml-2 mt-1 opacity-80">📞</span><a :href="`tel:${$t('phone')}`" class="hover:text-accent">{{ $t('phone') }}</a></li>
            <li class="flex items-start text-sm"><span class="ml-2 mt-1 opacity-80">✉️</span><a :href="`mailto:${$t('email')}`" class="hover:text-accent">{{ $t('email') }}</a></li>
          </ul>
          <!-- آیکون‌های اجتماعی در فوتر -->
          <div class="flex items-center gap-4 mt-4">
            <a href="#" :aria-label="$t('linkedin_aria')" class="text-white/80 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" :aria-label="$t('instagram_aria')" class="text-white/80 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center text-xs opacity-70 border-t border-white/20 pt-6 mt-8">
        {{ $t('copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
// ... (بقیه اسکریپت بدون تغییر)
const quickLinks = [
  { name: 'home', path: 'index' },
  { name: 'about', path: 'about' },
  { name: 'services', path: 'services' },
  { name: 'contact', path: 'contact' },
];

const services = [
  { name: 'sea_freight', path: 'services/sea' },
  { name: 'air_freight', path: 'services/air' },
  { name: 'road_freight', path: 'services/road' },
  { name: 'door_to_door', path: 'services/door-to-door' },
];
</script>