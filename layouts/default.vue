<template>
  <div>
    <!-- در آینده می‌توانید هدر را اینجا اضافه کنید -->
    <header class="bg-white shadow">
      <nav class="container mx-auto p-4">
        من هدر هستم و در همه صفحات تکرار می‌شوم.
      </nav>
    </header>

    <main>
      <!-- این کامپوننت محتوای صفحات (مثل index.vue) را نمایش می‌دهد -->
      <slot />
    </main>

    <!-- در آینده می‌توانید فوتر را اینجا اضافه کنید -->
  </div>
</template>