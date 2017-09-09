$(".static_pages.game").ready(function(){
    $("html").on("click", function(e){
        var parentOffset = $(this).offset(); 
        var mouseY = e.clientY - parentOffset.left - (50/2);
        var mouseX = e.clientX - parentOffset.top - (50/2);
        $("#main").append($('<div/>').addClass('click-effect').css({
            left: mouseX,
            top: mouseY
        })); 
        setTimeout(function() {$('.click-effect').addClass("disable-effect")}, 500)
    });
});