// composables/useScroll.ts ---
import { ref, onMounted, onUnmounted } from "vue"

export function useScroll(threshold = 10) {
  const isScrolled = ref(false)

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      isScrolled.value = true
    } else {
      isScrolled.value = false
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })

  return { isScrolled }
}
