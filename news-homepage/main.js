import './style.css';
const openButton = document.querySelector('#open-menu-btn');
const closeButton = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');
const bgOverlay = document.querySelector('#bg-overlay');
const links = document.querySelectorAll('.nav-link');

// set focus to our open/close buttons after animation
menu.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'right') return;

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

function isOpen() {
  return menu.classList.contains('open');
}

function openMenu() {
  bgOverlay.classList.add('loaded');
  menu.classList.add('open');
}

function closeMenu() {
  bgOverlay.classList.remove('loaded');
  menu.classList.remove('open');
}
