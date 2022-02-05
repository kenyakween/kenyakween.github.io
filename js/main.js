$(document).ready(function(){
    $('.header').height($(window).height());
    $(".navbar-nav a").click(function(){
        debugger
        $("body").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
})


})