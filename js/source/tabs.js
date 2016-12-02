jQuery( document ).ready( function($){
  // Loading jquery ui.tabs
  $(".uib-tabs-container,#block-uib-study-study-content>.content").tabs(
    {
      select: function(event, ui){
        if(history.pushState) {
          history.pushState(null, null, ui.tab.hash);
        }
        else {
          window.location.hash = ui.tab.hash;
        }
      }
  });
  hash = location.hash;
  location.hash='';
  $(".uib-tabs-container,#block-uib-study-study-content>.content").tabs('select', hash);
  if(history.pushState && hash) {
    setTimeout(function(){
      history.pushState(null, null, hash);
    }, 1);
  }
  else if(hash) {
    window.location.hash = hash;
  }
  window.scrollTo(0, 0);
});
