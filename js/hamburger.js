(function ($) {
    $('.hamburger').on('click', () => {
        if ($('.links').css('display') == 'block') $('.links').css('display', 'none');
        else $('.links').css('display', 'block');
    });
    $(window).resize(function () {
        if ($(window).outerWidth() > 930) $('.links').css('display', 'block');
        else $('.links').css('display', 'none');
    });
    $('.links .link, .footer a').on('click', function (e) {
        let top = $($(this).attr('href')).offset().top - $('.nav').outerHeight();
        $('html').stop().animate({
            scrollTop: top
        }, 1000);
    });
    $(window).scroll(function () {
        $('.section-head').each(function(){
            console.log($(this).offset());
        });
    });
})(jQuery);