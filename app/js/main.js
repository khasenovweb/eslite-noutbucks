// ===============================//
// ============= Libs ===========//
// ==============================//
@@include('libs/jquery.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/owl.carousel2.thumbs.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/headhesive.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')
@@include('libs/scroll.js')
@@include('libs/slick.min.js')
// ==============================//
// =========== Libs ===============//
// ==============================//


// ===============================//
// ========== Partials ===========//
// ==============================//
@@include('partials/_hero.js')
@@include('partials/_products.js')
@@include('partials/_modal.js')
@@include('partials/_modalproduct.js')
@@include('partials/_checkbox.js')
// ===============================//
// ====== END Partials ===========//
// ==============================//
 
$('input[name="phone"]').mask('+7 (999) 999-99-99');


$("[data-scroll]").mPageScroll2id({
    scrollSpeed: 900,
    keepHighlightUntilNext: true,
    offset: 80,
    onStart:function(){
        $('body').removeClass('overflowhidden');
        $('.mobilenav').removeClass('active');
        $('.header__hamburger').removeClass('active');
    },
});

$('.header__hamburger').click(function(){
    $(this).toggleClass('active');
    $('.mobilenav').toggleClass('active');
});