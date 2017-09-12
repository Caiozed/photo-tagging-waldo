$(".static_pages.game").ready(function(){
    var start = new Date();
    $(".floating-form").hide();
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
                var end = new Date();
               var result = (end-start)/1000;
               $(".floating-form").fadeIn("slow");
               console.log(result);
               $("#player_score").val(result);
            }
        });
    });
});
