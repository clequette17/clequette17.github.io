(function ($) {
    $('.hamburger').on('click', () => {
        if ($('.links').css('display') == 'block')
            $('.links').css('display', 'none');
        else $('.links').css('display', 'block');
    });

    $(window).resize(function () {
        if ($(window).outerWidth() > 930)
            $('.links').css('display', 'block');
        else $('.links').css('display', 'none');
    });

    $('.links .link, .footer a').on('click', function (e) {
        if ($(window).outerWidth() <= 930) $('.links').css('display', 'none');
        let top = $($(this).attr('href')).offset().top - $('.nav').outerHeight();
        $('html').stop().animate({
            scrollTop: top
        }, 1000);
    });;

    $('.presentation, .section-head, .section-text, .maps, .coords, .portfolio-item, .contact-form').each(function() {
        $(this).css('visibility', 'hidden');
    });

    $(window).scroll(function () {
        $('.presentation, .section-head, .section-text, .maps, .coords, .portfolio-item, .contact-form').each(function () {
            let elTop = $(this).offset().top;
            let elBottom = elTop + $(this).height();
            let scrollTop = $(window).scrollTop();
            let scrollBottom = scrollTop + $(window).height();
            if ((elTop > scrollTop && elTop < scrollBottom) || (elBottom > scrollTop && elBottom < scrollBottom)) {
                if ($(this).hasClass('section-head') || $(this).hasClass('contact-form')) $(this).addClass('anim-fade-right');
                if ($(this).hasClass('section-text') || $(this).hasClass('coords')) $(this).addClass('anim-fade-left');
                if ($(this).hasClass('presentation')|| $(this).hasClass('portfolio-item')) $(this).addClass('anim-opacity');
                if ($(this).hasClass('maps')) $(this).addClass('anim-fadeIn');
                $(this).css('visibility', 'visible');
            }
        });
    });
    $(window).scroll();
})(jQuery);