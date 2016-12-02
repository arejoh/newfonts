(function ($) {
  function uibDisableCheckboxes(){
    var uib=".view-exchange-agreements #edit-term-node-tid-depth-1-2271";
    if($(uib).is(':checked')){
      $(uib).parents('.bef-checkboxes').find('input:not(' + uib + ')')
        .attr('disabled', 'disabled');
    }
    $(uib).click(function(){
      if($(this).is(':checked')){
        $(this).parents('.bef-checkboxes').find('input:not(' + uib + ')')
          .attr('disabled', 'disabled');
      }
      else{
        $(this).parents('.bef-checkboxes').find('input').removeAttr('disabled');
      }
    });
  }
  uibDisableCheckboxes();
  $(document).ajaxSuccess(function(){
    uibDisableCheckboxes();
  });
})(jQuery);
