// --- START OF FILE: composables/useCurrentTime.ts ---
import { ref, onMounted, onUnmounted } from "vue"
import moment from "moment-jalaali"
import { useI18n } from "#imports"

export function useCurrentTime() {
  const { locale } = useI18n()
  const currentDateTime = ref("")
  const isMobile = ref(false)
  let dateTimeInterval: NodeJS.Timeout

  const updateDateTime = () => {
    const time = moment().format("HH:mm")

    if (locale.value === "fa") {
      moment.loadPersian({ usePersianDigits: true })
      const jalaaliDate = moment().format("dddd jD jMMMM")
      moment.locale("en")
      const gregorianDate = moment().format("dddd, MMMM DD")
      currentDateTime.value = isMobile.value
        ? `${jalaaliDate} | ${time}`
        : `${jalaaliDate} | ${gregorianDate} | ${time}`
    } else {
      moment.locale("en")
      const gregorianDate = moment().format("dddd, MMMM DD")
      currentDateTime.value = `${gregorianDate} | ${time}`
    }
  }

  const handleResize = () => {
    if (typeof window !== "undefined") {
      isMobile.value = window.innerWidth < 1024
      updateDateTime()
    }
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
    dateTimeInterval = setInterval(updateDateTime, 60000)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize)
    clearInterval(dateTimeInterval)
  })

  return { currentDateTime }
}
