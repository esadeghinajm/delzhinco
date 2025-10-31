<!-- components/LayoutFooter.vue -->
<template>
  <footer class="bg-primary text-gray-300 pt-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        <!-- Widget 1: About -->
        <div class="footer-widget lg:col-span-2">
          <img src="/images/logo-delzhin3.png" alt="لوگو فوتر دلژین" class="w-36 mb-5" />
          <p class="text-sm leading-7 mb-5">
            مجموعه دلژین با ارائه راهکارهای نوین و یکپارچه در زنجیره تامین،
            همراهی مطمئن برای کسب و کار شما در عرصه تجارت بین‌الملل است.
          </p>
          <div class="flex gap-4 text-2xl">
            <a href="#" aria-label="LinkedIn" class="hover:text-accent"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/delzhin_shipping" target="_blank" aria-label="Instagram" class="hover:text-accent"><i class="fab fa-instagram"></i></a>
            <a href="mailto:Info@delzhinco.com" aria-label="Email" class="hover:text-accent"><i class="fas fa-envelope"></i></a>
          </div>
        </div>

        <!-- Widget 2: Quick Links -->
        <div class="footer-widget">
          <h4 class="text-lg text-white font-bold mb-5">دسترسی سریع</h4>
          <ul class="space-y-3">
            <li><a href="/" class="hover:text-accent">صفحه نخست</a></li>
            <li><a href="/about" class="hover:text-accent">درباره ما</a></li>
            <li><a href="/projects" class="hover:text-accent">پروژه ها</a></li>
            <li><a href="#" class="hover:text-accent">تماس با ما</a></li>
          </ul>
        </div>

        <!-- Widget 3: Services -->
        <div class="footer-widget">
          <h4 class="text-lg text-white font-bold mb-5">سرویس ها</h4>
          <ul class="space-y-3">
            <li><a href="/service-sea" class="hover:text-accent">حمل دریایی</a></li>
            <li><a href="/service-air" class="hover:text-accent">حمل هوایی</a></li>
            <li><a href="/service-land" class="hover:text-accent">حمل زمینی</a></li>
            <li><a href="/service-door-to-door" class="hover:text-accent">خدمات Door-to-Door</a></li>
          </ul>
        </div>

        <!-- Widget 4: Contact -->
        <div class="footer-widget">
          <h4 class="text-lg text-white font-bold mb-5">تماس با ما</h4>
          <ul class="space-y-3">
            <li class="flex items-start"><i class="fas fa-map-marker-alt mt-1 ml-2 text-accent"></i> تهران - خیابان شریعتی - خیابان خواجه عبداله انصاری - پلاک ۱۷۶</li>
            <li class="flex items-center"><i class="fas fa-phone-alt ml-2 text-accent"></i> ۹۰۰۰۸۰۴۰</li>
            <li class="flex items-center"><i class="fas fa-envelope ml-2 text-accent"></i> Info@delzhinco.com</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer Map -->
    <div class="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.91652016677244!2d51.44937294110799!3d35.7451018720553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0300045c0051%3A0xdc236628f0ec6846!2z2KfYqNmG24zZhyDYotmB2LHbjNmGINix24zZiNmG24zYsg!5e0!3m2!1sen!2sus!4v1761407445381!5m2!1sen!2sus"
        class="w-full h-72"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="دفتر مرکزی دلژین"
      ></iframe>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-white/10 text-center py-5 text-sm">
      <p>تمامی حقوق این وب‌سایت متعلق به شرکت دلژین می‌باشد. &copy; ۲۰۲۵</p>
    </div>
  </footer>
</template>

<script setup>
</script>