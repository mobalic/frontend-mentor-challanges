// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 855px)');
const lightbox = document.querySelector('#lightbox');

function handleCarouselDesktop(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!');
    const productSection = document.querySelector('#products');
    const mainCarousel = document.querySelector('#main-carousel');

    productSection.classList.remove('fullwidth');
    mainCarousel.setAttribute('carousel-pagination', 'gallery');
    mainCarousel.setAttribute('carousel-controls', 'none');

    document
      .querySelector('#main-carousel-scroller')
      .addEventListener('click', () => e.matches && openLightbox());
    document
      .querySelector('#lightbox-overlay-bg')
      .addEventListener('click', () => closeLightbox());
    window.addEventListener('keyup', (e) => closeLightboxWithKey(e));
  } else {
    const productSection = document.querySelector('#products');
    const mainCarousel = document.querySelector('#main-carousel');
    productSection.classList.add('fullwidth');
    mainCarousel.setAttribute('carousel-pagination', 'none');
    mainCarousel.setAttribute('carousel-controls', 'auto');

    document
      .querySelector('#main-carousel-scroller')
      .removeEventListener('click', () => openLightbox());
    document
      .querySelector('#lightbox-overlay-bg')
      .removeEventListener('click', () => closeLightbox());

    window.removeEventListener('keyup', (e) => closeLightboxWithKey(e));
  }
}

mediaQuery.addListener(handleCarouselDesktop);

handleCarouselDesktop(mediaQuery);

function closeLightboxWithKey(e) {
  if (e.key == 'Escape' && isLightBoxOpen()) {
    closeLightbox();
  }
}

function openLightbox() {
  lightbox.classList.add('lightbox-open');
  document.body.style.overflowY = 'hidden';
  document.querySelector('#lightbox-overlay-bg').focus();
}

function closeLightbox() {
  lightbox.classList.remove('lightbox-open');

  document.body.style.overflowY = 'unset';
}

function isLightBoxOpen() {
  return lightbox.classList.contains('lightbox-open');
}
