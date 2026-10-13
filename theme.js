(() => {
  const allowed = ['system', 'light', 'dark'];
  let preference = 'system';
  try { const saved = localStorage.getItem('unfold-appearance'); if (allowed.includes(saved)) preference = saved; } catch (_) {}
  document.documentElement.dataset.theme = preference;
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = [...document.querySelectorAll('[data-theme-option]')];
    const apply = value => {
      preference = value;
      document.documentElement.dataset.theme = preference;
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeOption === preference)));
      const active = buttons.find(button => button.dataset.themeOption === preference);
      const icon = document.querySelector('[data-theme-icon]');
      if (active && icon) icon.replaceChildren(active.querySelector('svg').cloneNode(true));
    };
    apply(preference);
    buttons.forEach(button => button.addEventListener('click', () => {
      apply(button.dataset.themeOption);
      try { localStorage.setItem('unfold-appearance', preference); } catch (_) {}
      button.closest('details').open = false;
    }));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.site-header details[open]').forEach(menu => { menu.open = false; menu.querySelector('summary').focus(); }); });
    document.addEventListener('click', event => document.querySelectorAll('.site-header details[open]').forEach(menu => { if (!menu.contains(event.target)) menu.open = false; }));
  });
})();
