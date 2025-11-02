// --- START OF FILE: components/home/HomeOnlineOrder.vue ---
<template>
    <section id="order-form" class="py-16 md:py-24 bg-surface-bg dark:bg-dark-surface-bg/50">
        <div class="container mx-auto px-4">
            <h2 class="section-title" data-aos="fade-up">{{ $t('online_order_title') }}</h2>
            <div class="grid lg:grid-cols-3 gap-12" data-aos="fade-up" data-aos-delay="100">
                <div class="lg:col-span-1">
                    <h3 class="text-xl font-bold mb-4">راهنمای ثبت سفارش</h3>
                    <p class="mb-4">لطفاً فرم مقابل را با دقت تکمیل نمایید. کارشناسان ما پس از بررسی اولیه، در اسرع وقت
                        برای ارائه مشاوره و نهایی کردن سفارش با شما تماس خواهند گرفت.</p>
                    <p class="mb-4">همچنین می‌توانید از طریق راه‌های ارتباطی زیر با ما در تماس باشید:</p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2"><font-awesome-icon icon="phone-alt" class="text-accent" />
                            <span>۹۰۰۰۸۰۴۰</span></li>
                        <li class="flex items-center gap-2"><font-awesome-icon icon="envelope" class="text-accent" />
                            <span>Info@delzhinco.com</span></li>
                    </ul>
                </div>
                <form class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label for="name">نام و نام خانوادگی <span class="text-red-500">*</span></label>
                        <input type="text" id="name" required />
                    </div>
                    <div>
                        <label for="company">نام شرکت (اختیاری)</label>
                        <input type="text" id="company" />
                    </div>
                    <div>
                        <label for="email">ایمیل <span class="text-red-500">*</span></label>
                        <input type="email" id="email" required />
                    </div>
                    <div>
                        <label for="phone">شماره تماس <span class="text-red-500">*</span></label>
                        <input type="tel" id="phone" required />
                    </div>
                    <div>
                        <label for="origin">مبدا <span class="text-red-500">*</span></label>
                        <input type="text" id="origin" required />
                    </div>
                    <div>
                        <label for="destination">مقصد <span class="text-red-500">*</span></label>
                        <input type="text" id="destination" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="cargo-details">مشخصات محموله (نوع کالا، وزن، ابعاد و...)</label>
                        <textarea id="cargo-details" rows="5"></textarea>
                    </div>
                    <div class="sm:col-span-2">
                        <button type="submit" class="btn btn-primary w-full">ارسال درخواست</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Logic for form submission would go here
</script>

<style scoped>
/* Scoped styles from your style.css for the form */
.section-title {
    font-size: 2.5rem;
    margin-bottom: 60px;
    position: relative;
    padding-bottom: 15px;
    text-align: center;
    color: var(--heading-color);
}

.dark .section-title {
    color: var(--dark-heading-color);
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: var(--accent-color);
}

.dark .section-title::after {
    background-color: var(--dark-accent-color);
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 700;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    background-color: white;
}

.dark input,
.dark textarea {
    background-color: #374151;
    border-color: #4b5563;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(195, 159, 97, 0.2);
}

.dark input:focus,
.dark textarea:focus {
    border-color: var(--dark-accent-color);
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    border: 2px solid;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
}

.btn-primary {
    background-color: var(--accent-color);
    color: var(--text-on-accent);
    border-color: var(--accent-color);
}

.btn-primary:hover {
    background-color: transparent;
    color: var(--accent-color);
}
</style>