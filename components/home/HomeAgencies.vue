// --- START OF FILE: components/home/HomeAgencies.vue ---
<template>
    <section id="agencies-section" class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="section-title" data-aos="fade-up">{{ $t('agencies_title') }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" data-aos="fade-up" data-aos-delay="100">
                <div v-for="agency in agencies" :key="agency.title" class="agency-card">
                    <div class="agency-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></div>
                    <h3 class="agency-title">{{ agency.title }}</h3>
                    <p class="agency-subtitle">{{ agency.subtitle }}</p>
                    <a :href="`tel:${agency.phone}`" class="agency-phone">{{ agency.phoneDisplay }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const agencies = [
    { title: "دفتر مرکزی", subtitle: "تهران - خیابان...", phone: "90008040", phoneDisplay: "۹۰۰۰۸۰۴۰" },
    { title: "دفتر چین", subtitle: "دفتر بین‌المللی", phone: "+86123456789", phoneDisplay: "+۸۶ ۱۲۳ ۴۵۶ ۷۸۹" },
    { title: "دفتر بندرعباس", subtitle: "امور گمرکی و دریایی", phone: "+98215564327", phoneDisplay: "۰۲۱-۵۵۶۴۳۲۷" },
    { title: "دفتر ترکیه", subtitle: "حمل و نقل زمینی", phone: "+905344070925", phoneDisplay: "+۹۰ ۵۳۴ ۴۰۷ ۰۹۲۵" },
];
</script>

<style scoped>
/* Scoped styles from your style.css for this component */
.section-title {
    font-size: 2.5rem;
    margin-bottom: 25px;
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

.agency-card {
    text-align: center;
    padding: 30px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
}

.dark .agency-card {
    border-color: #374151;
}

/* dark:border-gray-700 */
.agency-card:hover {
    border-color: var(--accent-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    transform: translateY(-5px);
}

.dark .agency-card:hover {
    border-color: var(--dark-accent-color);
}

.agency-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 20px;
}

.dark .agency-icon {
    color: var(--dark-accent-color);
}

.agency-title {
    font-size: 1.4rem;
    color: var(--heading-color);
    font-weight: 700;
    margin-bottom: 5px;
}

.dark .agency-title {
    color: var(--dark-heading-color);
}

.agency-subtitle {
    font-size: 0.9rem;
    color: var(--text-color);
    margin-bottom: 15px;
    min-height: 20px;
}

.dark .agency-subtitle {
    color: var(--dark-text-color);
}

.agency-phone {
    font-size: 1.1rem;
    color: var(--primary-color);
    font-weight: 700;
    direction: ltr;
    display: inline-block;
}

.dark .agency-phone {
    color: var(--dark-accent-color);
}
</style>