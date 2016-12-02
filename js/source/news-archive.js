(function($) {
  var current=null;
  $('.page-node-news-archive .content-main-wrapper #block-views-recent-news-block-date-selector ul.views-summary').ready(function(){
    var year=0;
    var open='open';
    $('.page-node-news-archive .content-main-wrapper #block-views-recent-news-block-date-selector ul.views-summary').children().each(function(){
      var text=$(this).text().replace(/\r?\n|\r/g,"");
      var y=text.match(/([^ ]+) ([0-9]{4})(.*)$/);
      var month=y[1];
      var numart=y[3];
      if(y[2] != year){
        year=y[2];
        var li=$('<li></li>').html('<span class="year">' + year + '</span>');
        li.addClass(open);
        open='';
        current=$('<ul></ul>');
        li.append(current);
        $(this).before(li);
      }
      $(this).children('a').first().text(month+' '+numart);
      var ali=$('<li></li>').append($(this).children('a').first());
      current.append(ali);
      $(this).remove();
    });
  });
})(jQuery);
