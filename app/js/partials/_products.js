

$('.products__category__slider').each(function(i, el){
    var dots_container = $(el).closest('.products__category').find('.products__category__slider__dots');
    $(el).owlCarousel({
        items: 1,
        nav: true,
        dotsContainer: dots_container,
        navText: ["<img src='/img/hero-slider-arrow-left.svg'>","<img src='/img/hero-slider-arrow-right.svg' >"],
        responsive: {
            0: {
                nav: false,
            },
            850: {
                nav: true,
            }
        }
    });
});

$('.products__category__mobile').each(function(i, category){
    var length_products = $(category).find('.product__mobile').length;
    if (length_products <= 4) {
        $(category).find('[data-mobile-products-load-more]').hide();
    }
    $(category).find('.product__mobile').each(function(i, product){
        if (i > 3) {
            $(product).hide();
        }
        console.log(i);
    });
    console.log('----');
});

$('[data-mobile-products-load-more]').click(function(){
    $(this).closest('.products__category__mobile').find('.product__mobile').show();
    $(this).hide();
});