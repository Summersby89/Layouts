$(document).ready(function() {
  $('.header__burger-menu').click(function() {
    $('.header__burger-menu, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');

  });  
    $(document).on('click', '.header__list-link', function() {
    $('.header__burger-menu, .header__menu').removeClass('active');
    $('body').removeClass('lock');
    }); 

    $('.third-section__slider').slick({
        arrows: true,
        adaptiveHeihgt: true,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 561,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
              },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }  
        ]
    });
});