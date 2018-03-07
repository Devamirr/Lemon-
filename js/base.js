$(window).scroll(function () {
    $(".back-fade").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".fade-out-on-scroll").css("opacity", 1 - $(window).scrollTop() / 150);
    
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

