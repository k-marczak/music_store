$('.slider-one')
    .not(".slick-initialized")
    .slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});


$('.slider')
    .not(".slick-initialized")
    .slick({
    prevArrow: ".site-slider2 .prev",
    nextArrow: ".site-slider2 .next",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000
});