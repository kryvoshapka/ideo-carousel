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
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
