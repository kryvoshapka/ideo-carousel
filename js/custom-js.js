$(window).ready(function() {
    $('.slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        responsive: [
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });




});