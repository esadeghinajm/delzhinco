import { ref, onMounted, onUnmounted, computed } from 'vue';
import moment from 'moment-jalaali';
import { useI18n } from '#imports';

// این یک تابع "کامپوزبل" است که منطق تاریخ را در خود کپسوله می‌کند
export function useCurrentTime() {
    const { localeProperties } = useI18n();
    const dir = computed(() => localeProperties.value.dir);

    const currentDateTime = ref('');
    const isMobile = ref(false);
    let dateTimeInterval: NodeJS.Timeout;

    const handleResize = () => {
        isMobile.value = window.innerWidth < 1024;
        updateDateTime();
    };

    const updateDateTime = () => {
        const time = moment().format('HH:mm');

        moment.loadPersian({ usePersianDigits: true });
        const jalaaliDate = moment().format('dddd jD jMMMM');
        moment.locale('en');
        const gregorianDate = moment().format('dddd, MMMM DD');

        if (dir.value === 'rtl') {
            currentDateTime.value = isMobile.value
                ? `${jalaaliDate} | ${time}`
                : `${jalaaliDate} | ${gregorianDate} | ${time}`;
        } else {
            currentDateTime.value = `${gregorianDate} | ${time}`;
        }
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        dateTimeInterval = setInterval(updateDateTime, 60000);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        clearInterval(dateTimeInterval);
    });

    // فقط داده‌ای که کامپوننت نیاز دارد را برمی‌گردانیم
    return { currentDateTime };
}