// --- START OF FILE: types/index.ts ---
export interface NavLink {
  name: string;
  path?: string;
  type: 'link' | 'button' | 'dropdown' | 'anchor';
  action?: () => void; // برای دکمه‌ها
}