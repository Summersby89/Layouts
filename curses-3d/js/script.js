// burger menu
const burger = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.header__menu');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger-menu_active');
  burgerMenu.classList.toggle('header__menu_active');
  body.classList.toggle('lock');
});
