const tabs = [...document.querySelectorAll('[data-gallery-src]')];
const image = document.querySelector('#app-screenshot');
const full = document.querySelector('#full-screenshot');
const original = document.querySelector('.original-link');
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    for (const other of tabs) other.setAttribute('aria-pressed', String(other === tab));
    image.src = tab.dataset.gallerySrc;
    image.alt = tab.dataset.galleryAlt;
    full.href = image.src;
    original.href = image.src;
  });
}
