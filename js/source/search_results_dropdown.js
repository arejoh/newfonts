(function($, window, document) {
  $('.gsc-orderby').click(function(event){
    //$('.gsc-option-menu-invisible').slideToggle();
    $(".gsc-option-menu-invisible").animate({
      height: 'toggle'
    }, 300);
  })
})(jQuery, window, document);
