const openButton = document.querySelector('#open-menu-btn');
const closeButton = document.querySelector('#close-menu-btn');
const navbar = document.querySelector('#navbar');
const links = document.querySelectorAll('.nav-link');
const menu = document.querySelector('#menu');
const bgOverlay = document.querySelector('#close-menu-bg');
function isOpen() {
  return navbar.classList.contains('open');
}

// set focus to our open/close buttons after animation
menu.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'left') return;

  isOpen() ? closeButton.focus() : openButton.focus();
});

openButton.addEventListener('click', () => {
  openMenu();
});

closeButton.addEventListener('click', () => {
  closeMenu();
});

bgOverlay.addEventListener('click', () => {
  closeMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close Sidebar by Press Escape(ESC)
window.addEventListener('keyup', function (e) {
  if (e.key == 'Escape' && isOpen()) {
    closeMenu();
  }
});

function openMenu() {
  navbar.classList.add('open');
  document.body.style.overflowY = 'hidden';
  cart.classList.contains('open-cart') &&
    document.querySelector('#cart').classList.remove('open-cart');
}

function closeMenu() {
  navbar.classList.remove('open');
  document.body.style.overflowY = 'unset';
}
