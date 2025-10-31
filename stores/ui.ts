// stores/ui.ts
export const useUiStore = defineStore('ui', () => {
  const theme = ref('light'); // 'light' or 'dark'

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme;
  }

  return { theme, toggleTheme, setTheme };
});