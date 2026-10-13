(() => {
  const buttons = [...document.querySelectorAll('[data-gallery-src]')];
  const image = document.querySelector('#app-screenshot');
  if (!buttons.length || !image) return;
  const show = button => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    image.src = button.dataset.gallerySrc;
    image.alt = button.dataset.galleryAlt;
    image.width = Number(button.dataset.width);
    image.height = Number(button.dataset.height);
    image.closest('figure').dataset.screen = button.dataset.screen;
    document.querySelector('#gallery-position').textContent = `${buttons.indexOf(button) + 1} / ${buttons.length}`;
    document.querySelectorAll('#full-screenshot, .original-link').forEach(link => { link.href = image.src; });
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
