// plugins/aos.client.ts
import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      once: true, // انیمیشن فقط یک بار اجرا شود
      duration: 800, // مدت زمان انیمیشن
      easing: "ease-in-out", // نوع انیمیشن
    })
  }
})
