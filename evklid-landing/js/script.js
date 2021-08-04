// burger menu
const burger = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.header__menu');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger-menu_active');
  burgerMenu.classList.toggle('header__menu_active');
  body.classList.toggle('lock');
});

// slider
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  a11y: {
    slideLabelMessage: '{{1}} / {{не знаю}}',
    lastSlideMessage: 'Следующий слайд',
  },
});

// accordion
$(".faq__list").accordion({
  heightStyle: 'content',
  collapsible: true,
  icons: {
    "header": "ui-icon-plus",
    "activeHeader": "ui-icon-plus"
  },
  animate: {
    duration: 200
  }
});

// tabs
const tabs = document.getElementsByClassName('how-work__tabs-btn');
const sections = document.getElementsByClassName('how-work__content');

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;

  [...tabs].forEach((tab, i) => {
    tab.classList.remove('active');
    sections[i].classList.remove('active');
  })

  tabs[tabId - 1].classList.add('active');
  sections[tabId - 1].classList.add('active');
}
