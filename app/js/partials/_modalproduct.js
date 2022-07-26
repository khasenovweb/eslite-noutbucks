

    // var sync1 = $(".modalproduct__gallery__main");
    // var sync2 = $(".modalproduct__gallery__thumbnails");
    // var slidesPerPage = 4; //globaly define number of elements per page
    // var syncedSecondary = true;

    // sync1.owlCarousel({
    //     items: 1,
    //     // slideSpeed: 2000,
    //     nav: true,
    //     autoplay: false, 
    //     dots: true,
    //     loop: true,
    //     mouseDrag: false,
    //     touchDrag: false,
    //     pullDrag: false,
    //     freeDrag: false,
    //     responsiveRefreshRate: 200,
    //     navText: ['<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.000221219 8.05217L0 8.05239L1.32595 9.37834L1.32617 9.37812L7.95582 16.0078L9.28177 14.6818L2.65212 8.05217L9.28166 1.42263L7.95571 0.0966797L1.32617 6.72621L1.32606 6.72611L0.000112467 8.05206L0.000221219 8.05217Z" fill="#1986C8"/></svg>', '<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99978 8.05233L10 8.05211L8.67405 6.72615L8.67383 6.72638L2.04418 0.0967276L0.71823 1.42268L7.34788 8.05233L0.718341 14.6819L2.04429 16.0078L8.67383 9.37828L8.67394 9.37839L9.99989 8.05244L9.99978 8.05233Z" fill="#1986C8"/></svg>'],
    // }).on('changed.owl.carousel', syncPosition);

    // sync2
    //     .on('initialized.owl.carousel', function() {
    //         sync2.find(".owl-item").eq(0).addClass("current");
    //     })
    //     .owlCarousel({
    //         items: slidesPerPage,
    //         nav: true,
    //         smartSpeed: 200,
    //         slideSpeed: 500,
    //         slideBy: 1,
    //         loop: false,
    //     }).on('changed.owl.carousel', syncPosition2);

    // function syncPosition(el) {
    //     //if you set loop to false, you have to restore this next line
    //     //var current = el.item.index;

    //     //if you disable loop you have to comment this block
    //     var count = el.item.count - 1;
    //     var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    //     if (current < 0) {
    //         current = count;
    //     }
    //     if (current > count) {
    //         current = 0;
    //     }

    //     //end block

    //     sync2
    //         .find(".owl-item")
    //         .removeClass("current")
    //         .eq(current)
    //         .addClass("current");
    //     var onscreen = sync2.find('.owl-item.active').length - 1;
    //     var start = sync2.find('.owl-item.active').first().index();
    //     var end = sync2.find('.owl-item.active').last().index();

    //     if (current > end) {
    //         sync2.data('owl.carousel').to(current, 100, true);
    //     }
    //     if (current < start) {
    //         sync2.data('owl.carousel').to(current - onscreen, 100, true);
    //     }
    // }

    // function syncPosition2(el) {
    //     if (syncedSecondary) {
    //         var number = el.item.index;
    //         sync1.data('owl.carousel').to(number, 100, true);
    //     }
    // }

    // sync2.on("click", ".owl-item", function(e) {
    //     e.preventDefault();
    //     var number = $(this).index();
    //     sync1.data('owl.carousel').to(number, 300, true);
    // });




 $('.modalproduct__gallery__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.modalproduct__gallery__thumbnails',
    dots: true,
    dotsClass: 'modalproduct__gallery__main__dots'
  });
  $('.modalproduct__gallery__thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.modalproduct__gallery__main',
    centerMode: true,
    // centerPadding: '100px',
    focusOnSelect: true,
    prevArrow:'.slick-prev',
    nextArrow:'.slick-next',
    
  });


$('[data-modal-product-characteristics-show]').click(function(){
  var thisvar = $(this);
  thisvar.closest('[data-modal]').removeClass('active');
    setTimeout(function(){
        $('body').css('padding-right', '0');
        $('.header').css('padding-right', '0');
        $('body').removeClass('body_hidden');

        thisvar.closest('.product__modals__container').find('[data-modal-product-characteristics]').addClass('active');
        $('body').css('padding-right', get_scrollbar_width()+'px');
        $('.header').css('padding-right', get_scrollbar_width()+'px');
        $('body').addClass('body_hidden');
  }, 300);
});


$('[data-modal-product-characteristics-hide]').click(function(){
  var thisvar = $(this);
  thisvar.closest('[data-modal-product-characteristics]').removeClass('active');
  setTimeout(function(){
      $('body').css('padding-right', '0');
      $('.header').css('padding-right', '0');
      $('body').removeClass('body_hidden');

      thisvar.closest('.product__modals__container').find('[data-modal]').addClass('active');
      $('body').css('padding-right', get_scrollbar_width()+'px');
      $('.header').css('padding-right', get_scrollbar_width()+'px');
      $('body').addClass('body_hidden');
  }, 300);
});


$('[data-modal-product-characteristics]').click(function(){
  if ($(event.target).closest(".modal").length) return;
  var thisvar = $(this);
  thisvar.closest('[data-modal-product-characteristics]').removeClass('active');
  setTimeout(function(){
      $('body').css('padding-right', '0');
      $('.header').css('padding-right', '0');
      $('body').removeClass('body_hidden');

      thisvar.closest('.product__modals__container').find('[data-modal]').addClass('active');
      $('body').css('padding-right', get_scrollbar_width()+'px');
      $('.header').css('padding-right', get_scrollbar_width()+'px');
      $('body').addClass('body_hidden');
  }, 300);
});





$('[data-modal-product-lead-show]').click(function(){
  var thisvar = $(this);
  thisvar.closest('[data-modal]').removeClass('active');
    setTimeout(function(){
        $('body').css('padding-right', '0');
        $('.header').css('padding-right', '0');
        $('body').removeClass('body_hidden');

        thisvar.closest('.product__modals__container').find('[data-modal-product-lead]').addClass('active');
        $('body').css('padding-right', get_scrollbar_width()+'px');
        $('.header').css('padding-right', get_scrollbar_width()+'px');
        $('body').addClass('body_hidden');
  }, 300);
});

$('[data-modal-product-lead-hide]').click(function(){
  var thisvar = $(this);
  thisvar.closest('[data-modal-product-lead]').removeClass('active');
  setTimeout(function(){
      $('body').css('padding-right', '0');
      $('.header').css('padding-right', '0');
      $('body').removeClass('body_hidden');

      thisvar.closest('.product__modals__container').find('[data-modal]').addClass('active');
      $('body').css('padding-right', get_scrollbar_width()+'px');
      $('.header').css('padding-right', get_scrollbar_width()+'px');
      $('body').addClass('body_hidden');
  }, 300);
});


$('[data-modal-product-lead]').click(function(){
  if ($(event.target).closest(".modal").length) return;
  var thisvar = $(this);
  thisvar.closest('[data-modal-product-lead]').removeClass('active');
  setTimeout(function(){
      $('body').css('padding-right', '0');
      $('.header').css('padding-right', '0');
      $('body').removeClass('body_hidden');

      thisvar.closest('.product__modals__container').find('[data-modal]').addClass('active');
      $('body').css('padding-right', get_scrollbar_width()+'px');
      $('.header').css('padding-right', get_scrollbar_width()+'px');
      $('body').addClass('body_hidden');
  }, 300);
});