$(document).ready(function(){
    $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); //specifying options
    
    $(".form__callback").each(function () {
        $(this).validate({
            errorPlacement(error, element) {
                return true;
            },
            focusInvalid: false,
            rules: {
                Телефон: {
                    required: true,
                },
                Имя: {
                    required: true,
                    maxlength: 20,
                },
                Почта: {
                    required: true,
                    email: true
                  }
            },
            messages: {
                Телефон: {
                    required: 'Нужно ввести номер телефона'
                },
                Имя: {
                    required: 'Как Вас зовут?',
                    maxlength: 'Можно ввести максимум 20 букв'
                },
                Почта: {
                    required: 'Нам нужен адрес Вашей электронной почты'
                }
            },
            submitHandler(form) {
            let th = $(form);

            $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize(),
            // eslint-disable-next-line func-names
        }).done(() => {
            console.log("успех");
            let vr = $('.popup');
            let br = $('.popup-done');
            // vr.hide();
            vr.removeClass('open');
            br.addClass('active');
            setTimeout(function(){
                $('.active').fadeOut(500)
            },3000);
            body.classList.remove('lock');
            th.trigger('reset');
            setTimeout(function(){
            window.location.reload();
            },3000);
        });
        
        return false;
        }
    });
    });
});