(() => {
  const buttons = [...document.querySelectorAll('[data-gallery-src]')];
  const image = document.querySelector('#app-screenshot');
  const status = document.querySelector('.gallery-status');
  if (!buttons.length || !image) return;
  const frame = image.closest('figure');
  let generation = 0;
  const show = button => {
    const current = ++generation;
    const next = new Image();
    frame.setAttribute('aria-busy', 'true');
    status.textContent = status.dataset.loading;
    const commit = () => {
      if (current !== generation) return;
      image.src = button.dataset.gallerySrc;
      image.alt = button.dataset.galleryAlt;
      image.width = Number(button.dataset.width);
      image.height = Number(button.dataset.height);
      frame.dataset.screen = button.dataset.screen;
      frame.setAttribute('aria-busy', 'false');
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelector('#gallery-position').textContent = `${buttons.indexOf(button) + 1} / ${buttons.length}`;
      document.querySelectorAll('#full-screenshot, .original-link').forEach(link => { link.href = button.dataset.gallerySrc; });
      status.textContent = '';
    };
    next.onload = commit;
    next.onerror = () => {
      if (current !== generation) return;
      frame.setAttribute('aria-busy', 'false');
      status.textContent = status.dataset.error;
    };
    next.src = button.dataset.gallerySrc;
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => show(button));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      show(buttons[next]);
    });
  });
})();
