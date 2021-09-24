const iconMenu = document.querySelector('.header__burger-menu');
const menuBody = document.querySelector('.header__menu');

iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    menuBody.classList.toggle('active');
});

