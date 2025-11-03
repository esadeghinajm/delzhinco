<!-- components/TheFooter.vue -->
<template>
  <footer class="bg-primary dark:bg-dark-primary text-text-on-primary pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('company_name') }}</h3>
          <p class="text-sm opacity-80 leading-relaxed">{{ $t('company_description') }}</p>
        </div>

        <!-- Quick Access -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('quick_access') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="localePath(link.path)"
                class="text-sm opacity-80 hover:opacity-100 hover:text-accent dark:hover:text-dark-accent transition"
                active-class="opacity-100 text-accent dark:text-dark-accent font-bold">
                {{ $t(link.name) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('services') }}</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <NuxtLink :to="localePath(service.path)"
                class="text-sm opacity-80 hover:opacity-100 hover:text-accent dark:hover:text-dark-accent transition"
                active-class="opacity-100 text-accent dark:text-dark-accent font-bold">
                {{ $t(service.name) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Us -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $t('contact_us_title') }}</h3>
          <ul class="space-y-3">
             <li class="flex items-start text-sm">
              <!-- 🟢 استفاده از نام صحیح آیکون -->
              <font-awesome-icon :icon="['fas', 'location-dot']" class="w-5 ml-2 mt-1 flex-shrink-0 opacity-80" />
              <span>{{ $t('address') }}</span>
            </li>
            <li class="flex items-start text-sm">
              <font-awesome-icon :icon="['fas', 'phone']" class="w-5 ml-2 mt-1 flex-shrink-0 opacity-80" />
              <a :href="`tel:${$t('phone')}`" class="hover:text-accent">{{ $t('phone') }}</a>
            </li>
            <li class="flex items-start text-sm">
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 ml-2 mt-1 flex-shrink-0 opacity-80" />
              <a :href="`mailto:${$t('email')}`" class="hover:text-accent">{{ $t('email') }}</a>
            </li>
          </ul>
          <!-- آیکون‌های اجتماعی در فوتر -->
          <div class="flex items-center gap-4 mt-6 text-xl">
            <a href="#" :aria-label="$t('linkedin_aria')" class="text-white/80 hover:text-white transition-colors">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-5 h-5" />
            </a>
            <a href="#" :aria-label="$t('instagram_aria')" class="text-white/80 hover:text-white transition-colors">
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-xs opacity-70 border-t border-white/20 pt-6 mt-8">
        {{ $t('copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

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