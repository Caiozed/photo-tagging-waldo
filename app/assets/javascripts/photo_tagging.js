$(".static_pages.game").ready(function(){
    $("html").on("click", function(e){
        var parentOffset = $(this).offset(); 
        var mouseY = e.pageY  - parentOffset.left - (50/2);
        var mouseX = e.pageX  - parentOffset.top - (50/2);
        $("#main").append($('<div/>').addClass('click-effect').css({
            left: mouseX,
            top: mouseY
        })); 
        setTimeout(function() {$('.click-effect').addClass("disable-effect")}, 500)
        setTimeout(function() {$('.click-effect').first().remove()}, 900)
        $("#waldo").on("click", function(e){
            if(!$("*").hasClass("floating-message")){
                 $("#main").append($('<div><p>You Won!<p><div/>').addClass("floating-message").css({
                    left: e.pageX,
                    top: e.pageY
                }));
            }
        });
    });
});