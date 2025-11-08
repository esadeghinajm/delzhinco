// --- START OF FILE: components/global/ContactModal.vue ---
<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" @click.self="$emit('close')">
      <div class="bg-white dark:bg-dark-primary rounded-lg shadow-xl w-full max-w-md p-6 md:p-8 relative" data-aos="zoom-in" style="direction: rtl;">
        <button @click="$emit('close')" class="absolute top-4 left-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 text-2xl">&times;</button>
        <h2 class="text-2xl font-bold text-heading-color dark:text-dark-heading-color mb-6">{{ $t('contact_modal_title') }}</h2>
        <ul class="space-y-4">
          <li class="flex items-center gap-4">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-accent text-xl w-6" />
            <a :href="`tel:${$t('phone')}`" class="text-lg text-text-color dark:text-dark-text-color hover:text-accent">{{ $t('phone') }}</a>
          </li>
          <li class="flex items-center gap-4">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-accent text-xl w-6" />
            <div class="flex items-center gap-2">
              <a :href="`mailto:${$t('email')}`" class="text-lg text-text-color dark:text-dark-text-color hover:text-accent">{{ $t('email') }}</a>
              <button @click="copyEmail" class="text-sm p-1 rounded text-text-color dark:text-dark-text-color hover:bg-gray-200 dark:hover:bg-gray-700">
                <span v-if="!copied">{{ $t('copy') }}</span>
                <span v-else class="text-green-500">{{ $t('copied') }}</span>
              </button>
            </div>
          </li>
          <li class="flex items-center gap-4">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-accent text-xl w-6" />
            <a href="https://www.linkedin.com/company/delzhin-melal-kayhan" class="text-lg text-text-color dark:text-dark-text-color hover:text-accent" target="_blank">{{ $t('linkedin') }}</a>
          </li>
          <li class="flex items-center gap-4">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-accent text-xl w-6" />
            <a href="https://www.instagram.com/delzhin_shipping?igsh=dmljeGp1M256Y2lh" class="text-lg text-text-color dark:text-dark-text-color hover:text-accent" target="_blank">{{ $t('instagram') }}</a>
          </li>
          <li class="flex items-start gap-4">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="text-accent text-xl w-6 mt-1" />
            <p class="text-lg text-text-color dark:text-dark-text-color">{{ $t('address') }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const { t } = useI18n();
defineProps<{ isOpen: boolean }>();
defineEmits(['close']);

const copied = ref(false);
const copyEmail = () => {
  navigator.clipboard.writeText(t('email').replace(/'/g, ''));
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
};
</script>

<style>
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>