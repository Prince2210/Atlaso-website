/**
 * Minimal accessible dropdowns.
 *
 * Markup contract:
 *   <div data-dropdown class="group">
 *     <button data-dropdown-trigger aria-expanded="false">…</button>
 *     <div data-dropdown-panel>…</div>
 *   </div>
 *
 * Visibility is handled in CSS via `group-data-open:*` classes.
 */

const roots = () => Array.from(document.querySelectorAll<HTMLElement>('[data-dropdown]'));

export function setDropdown(root: HTMLElement, open: boolean) {
  root.toggleAttribute('data-open', open);
  root.querySelector('[data-dropdown-trigger]')?.setAttribute('aria-expanded', String(open));
}

for (const root of roots()) {
  const trigger = root.querySelector<HTMLElement>('[data-dropdown-trigger]');
  if (!trigger) continue;

  trigger.addEventListener('click', () => {
    const open = !root.hasAttribute('data-open');
    for (const other of roots()) if (other !== root) setDropdown(other, false);
    setDropdown(root, open);
  });

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && root.hasAttribute('data-open')) {
      setDropdown(root, false);
      trigger.focus();
    }
  });

  root.addEventListener('focusout', (event) => {
    const next = event.relatedTarget as Node | null;
    if (!next || !root.contains(next)) setDropdown(root, false);
  });
}

document.addEventListener('click', (event) => {
  const target = event.target as Node;
  for (const root of roots()) if (!root.contains(target)) setDropdown(root, false);
});
