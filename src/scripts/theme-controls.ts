import { setDropdown } from './dropdown';

type ThemePref = 'light' | 'dark' | 'system';

declare global {
  interface Window {
    __setTheme?: (pref: ThemePref) => void;
  }
}

/** Reflect the current preference on every theme control (header menu, mobile menu, footer). */
function sync() {
  const pref = document.documentElement.dataset.themePref ?? 'system';
  for (const el of document.querySelectorAll<HTMLElement>('[data-theme-option]')) {
    el.setAttribute('aria-checked', String(el.dataset.themeOption === pref));
  }
}

document.addEventListener('click', (event) => {
  const option = (event.target as Element).closest<HTMLElement>('[data-theme-option]');
  if (!option) return;
  window.__setTheme?.(option.dataset.themeOption as ThemePref);
  const menu = option.closest<HTMLElement>('[data-dropdown]');
  if (menu) setDropdown(menu, false);
});

document.addEventListener('themechange', sync);
sync();
