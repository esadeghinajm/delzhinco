// --- START OF FILE: pages/contact.vue ---
<template>
    <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold text-center text-heading-color dark:text-dark-heading-color">
            {{ $t('contact') }}
        </h1>
        <p class="text-center mt-4">
            این صفحه تماس با ما است.
        </p>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'تماس با ما'
})
</script>