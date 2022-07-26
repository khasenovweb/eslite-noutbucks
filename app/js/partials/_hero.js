$('.hero__slider').owlCarousel({
    items: 1,
    nav: true,
    dotsContainer: '.hero__slider__dots',
    navText: ["<img src='/wp-content/themes/eslite-noutbucks/img/hero-slider-arrow-left.svg'>","<img src='/wp-content/themes/eslite-noutbucks/img/hero-slider-arrow-right.svg' >"],
    responsive: {
        0: {
            nav: false,
        },
        850: {
            nav: true,
        }
    }
});