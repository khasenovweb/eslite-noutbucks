function modal_show(id) {
    $('[data-modal="'+id+'"]').addClass('active');
    $('body').css('padding-right', get_scrollbar_width()+'px');
    $('.header').css('padding-right', get_scrollbar_width()+'px');
    $('body').addClass('body_hidden');
}

        
function modal_hide(id) {
    $('[data-modal="'+id+'"]').removeClass('active');
    setTimeout(function(){
        $('body').css('padding-right', '0');
        $('.header').css('padding-right', '0');
        $('body').removeClass('body_hidden');
    }, 300);
}

// Получаем ширину скроллбара
function get_scrollbar_width(){
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    
    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    
    div.remove();
    return scrollWidth;
}
// END Получаем ширину скроллбара


$('[data-modal]').click(function(){
    if ($(event.target).closest(".modal").length) return;
    var id = $(this).attr('data-modal');
    modal_hide(id);
});
$('[data-modal-close]').click(function(){
    var id = $(this).attr('data-modal-close');
    modal_hide(id);
});

$('[data-modal-show]').click(function(){
    var id = $(this).attr('data-modal-show');
    modal_show(id);
});