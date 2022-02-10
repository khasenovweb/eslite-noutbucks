$('[data-form-politics-checkbox]').on('change', function(){
    if( $(this).prop('checked') === true ) {
        $(this).closest('form').find('.btn').prop('disabled', false);
    }else {
        $(this).closest('form').find('.btn').prop('disabled', true);
    }
});