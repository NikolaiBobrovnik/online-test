$(document).ready(function () {

    $('.mobile-nav-toggle').on('click', function () {
        console.log('1');
        $(this).toggleClass('is-open');
        /*$(this).find('span:after').toggleClass('is-open');
        $(this).find('span:before').toggleClass('is-open');*/
        $('.mobile-nav').toggleClass('is-visible');
    })

});