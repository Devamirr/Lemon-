$(window).scroll(function(){
    $(".back-fade").css("opacity", 1 - $(window).scrollTop() / 250);
  });