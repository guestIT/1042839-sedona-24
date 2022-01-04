const menuButton = document.querySelector ('.main-nav__toggle');
const menuList = document.querySelector ('.main-nav__list');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main-nav--nojs').classList.remove('main-nav--nojs');
});

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('main-nav__toggle--active');
  menuList.classList.toggle('main-nav__list--open');
});
