$(document).ready(function() {
    $('.post__slider').slick({
        arrows: false,
        dots: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        infinite: false,
        adaptiveHeight: true
    });
    
    $('.home__slider').slick({
        arrows: false,
        dots: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        infinite: true,
        adaptiveHeight: true
    });
    
    $('.home__btn--prev').click(function(event) {
        $('.home__slider').slick('slickPrev');
    });
    
    $('.home__btn--next').click(function(event) {
        $('.home__slider').slick('slickNext');
    });
});