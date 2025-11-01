// --- START OF FILE: stores/ui.ts ---
import { defineStore } from "pinia"
import { ref, onMounted } from "vue"

type Theme = "light" | "dark"

export const useUiStore = defineStore("ui", () => {
  const theme = ref<Theme>("light")

  const updateHtmlClass = (newTheme: Theme) => {
    if (typeof window !== "undefined") {
      const htmlEl = document.documentElement
      newTheme === "dark"
        ? htmlEl.classList.add("dark")
        : htmlEl.classList.remove("dark")
    }
  }

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem("theme", newTheme)
    updateHtmlClass(newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme.value === "light" ? "dark" : "light")
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(prefersDark ? "dark" : "light")
    }
  })

  return { theme, toggleTheme }
})
