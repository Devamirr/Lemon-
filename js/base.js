setTimeout (function (){ 
document.querySelector("div.loading").classList.add("hidden")

}, 8000)


$(window).scroll(function () {
    $(".back-fade").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".back-fade-filter").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".fade-out-on-scroll").css("opacity", 1 - $(window).scrollTop() / 150);
    $(".cbp-l-loadMore-button").css("opacity", 1 - $(window).scrollTop() / 150);
    
    if ($(this).scrollTop()>0)
     {
        $('.splash-fade').slideUp(900);
     }
});

$('.enter_link').click(function () {
    $(this).parent('#splashscreen').slideUp(500);
});

if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true'
    $(this).parent('#splashscreen').slideUp(500);
}

var aFx = 70,
    trF = 4;  
$('.container').on('mousemove touchmove',function(e){   
  var cH = $('.container').innerHeight(),
      cW = $('.container').innerWidth(),
      eX = (e.originalEvent.type === 'touchmove') ? e.originalEvent.touches[0].pageX  : e.offsetX,
      eY = (e.originalEvent.type === 'touchmove') ? e.originalEvent.touches[0].pageY  : e.offsetY;

  $.each($('.photo'), function(i,el){
 //console.log(((eY - cH / 2) / aFx) - (i*2));
    TweenMax.set( $(el),{
      transformOrigin: ((eX / (cW*trF) / 100 * 10000) + (trF * 10))+'% '+((eY / (cH*trF) / 100 * 10000) + (trF * 10))+'%',
      transformPerspective: 1000 + (i * 500)});
    TweenMax.to( $(el), 0.5, { 
      rotationX: ((eY - cH / 2) / aFx) - i * 2, 
      rotationY: ((eX - cW / 2) / aFx * -1) - i * 2,
      y:(eY - (cH / 2)) / (70 - i * 20),  
      x:(eX - (cW / 2)) / (70 - i * 20)
    });
  });

}).on('mouseout touchend',function(e){
  $.each($('.photo'),function(i,el){
    TweenMax.to( $(el), 1, {
      delay:.2,
      y:0,
      x:0,
      rotationX: 0,
      rotationY: 0,
      transformPerspective:'1500' 
    });
  });
});