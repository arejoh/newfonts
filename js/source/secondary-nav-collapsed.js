jQuery( document ).ready(function($) {
  if(!$('.uib-area-expanded-menu').length) {
    if(!$('#main-menu .menu .menu__item').hasClass('jstransition')) {
      $('#main-menu .menu .menu__item').addClass('jstransition');
    }
    $('#main-menu .menu .menu__item.jstransition').hover(
      function(e){
        $(this).children('ul').first().clearQueue();
        $(this).children('ul').first().stop().delay(200).animate(
          {
            height: $(this).children('ul').first().get(0).scrollHeight+80,
            paddingTop: '1.875rem',
            paddingRight: '1.875rem',
            paddingBottom: '1.875rem',
          }, 400 );
    }, function(e){
      $(this).children('ul').first().clearQueue();
      $(this).children('ul').first().stop().animate(
        {
          height: 0,
          minHeight: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
        }, 300 );
    });
  }
});