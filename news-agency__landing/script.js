$(document).ready(function(){
    //подключаемся к источнику данных:
    $.get('http://data.fixer.io/api/latest', {'access_key': '402c715fe678630858ff1b57d485116c'},
    
    function(response) {
     //получаем котировки нужных валют:   
    $('.currencies-value-eur').val(response.rates.RUB);
    $('.currencies-value-usd').val(response.rates.USD);
        //объявляем переменные:
        let eur = $('.currencies-value-eur').val();
        let usd = $('.currencies-value-usd').val();
        //переводим тип переменных из строчных в численные:
            let eurel = Number(eur);
            let usdel = Number(usd);
                 //конвертируем нужную валюту относительно базовой и выводим на сайт:
                $('.currencies-value-usd').text((eurel / usdel).toFixed(2));
                $('.currencies-value-eur').text(eurel.toFixed(2));
    });
    //отключаем скролл:
    // $('body').css('overflow','hidden');
    
    $('.burger').click(function() {
        $('.burger, #header, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.black-bar').slideToggle();
           
    });

});

