
$.fn.burger = function(_nav){
    $(this).on("click",function(){
      $(_nav).slideToggle(700);
    })
  }