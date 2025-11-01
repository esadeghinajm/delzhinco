import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 🟢 ایمپورت آیکون با نام صحیح
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// 🟢 افزودن آیکون با نام صحیح به کتابخانه
library.add(faPhone, faEnvelope, faLocationDot, faLinkedin, faInstagram);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});