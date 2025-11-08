<template>
  <footer class="bg-primary dark:bg-dark-primary text-text-on-primary" data-aos="fade-up">
    <div class="mx-20 py-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-8">

        <!-- About Section (ستون اول) -->
        <div class="lg:col-span-1">
          <NuxtImg src="/images/logo-delzhin3.png" alt="Delzhin Footer Logo" class="w-40 mb-4" />
          <p class="text-sm opacity-80 leading-relaxed">{{ $t('company_description') }}</p>
        </div>

        <!-- Quick Access (ستون دوم) -->
        <div>
          <h4 class="footer-title">{{ $t('quick_access') }}</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="localePath(link.path)">{{ $t(link.name) }}</NuxtLink>
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
        <!-- Useful Links (ستون چهارم) -->
        <div>
          <h4 class="footer-title">{{ $t('links') }}</h4>
          <ul class="footer-links">
            <li v-for="link in usefulLinks" :key="link.name">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ $t(link.name) }}</a>
            </li>
          </ul>
        </div>
        <!-- Contact Us (ستون پنجم) -->
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
            <li class="flex items-start text-sm">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-5 ml-2 mt-1 flex-shrink-0 opacity-80" />
              <a href="https://www.linkedin.com/company/delzhin-melal-kayhan" class="hover:text-accent">{{
                $t('linkedin_aria') }}</a>
            </li>
            <li class="flex items-start text-sm">
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 ml-2 mt-1 flex-shrink-0 opacity-80" />
              <a href="https://www.instagram.com/delzhin_shipping?igsh=dmljeGp1M256Y2lh" class="hover:text-accent">{{
                $t('instagram_aria') }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Map Section -->
    <div class="w-full h-64 md:h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.91652016677244!2d51.44937294110799!3d35.7451018720553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0300045c0051%3A0xdc236628f0ec6846!2z2KfYqNmG24zZhyDYotmB2LHbjNmGINix24zZiNmG24zYsg!5e0!3m2!1sen!2sus!4v1761407445381!5m2!1sen!2sus"
        width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" title="دفتر مرکزی دلژین"></iframe>
    </div>

    <!-- Copyright -->
    <div class="bg-black/20 text-center text-xs opacity-70 py-4">
      {{ $t('copyright') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
// const { t } = useI8n();

const quickLinks = [
  { name: 'home', path: 'index' },
  { name: 'services', path: 'services' },
  { name: 'news', path: 'news' },
  { name: 'projects', path: 'projects' },
  { name: 'agencies', path: 'agencies' },
  { name: 'education', path: 'education' },
  { name: 'about', path: 'about' },
  { name: 'contact', path: 'contact' },
];

const services = [
  { name: 'sea_freight', path: '/services/sea-freight' },
  { name: 'air_freight', path: '/services/air-freight' },
  { name: 'road_freight', path: '/services/road-freight' },
  { name: 'door_to_door', path: '/services/door-to-door' }, // فرض می‌کنیم این صفحه وجود دارد
];

const usefulLinks = [
  { name: 'pmo_link', url: 'https://pmo.ir/' },
  { name: 'irica_link', url: 'https://irica.ir/' },
  { name: 'iccima_link', url: 'https://iccima.ir/' },
  { name: 'itcai_link', url: 'http://www.itcai.ir/' },
];
</script>

<style scoped>
.footer-title {
  @apply text-xl font-bold mb-4 text-white;
}

.footer-links li,
.footer-contact li {
  @apply mb-3;
}

.footer-links a {
  @apply text-sm text-white/80 hover:text-accent transition-colors;
}

.footer-contact li {
  @apply flex items-start text-sm text-white/80;
}

.footer-contact a {
  @apply hover:text-accent transition-colors;
}

.footer-contact .fa-icon {
  @apply ml-3 mt-1 w-5 flex-shrink-0;
}
</style>