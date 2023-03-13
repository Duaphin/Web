$(".vivant")
    .mouseenter(function () {
        $(this).css("visibility", "hidden");
    })
    .mouseleave(function () {
        $(this).css("visibility", "visible");
    });

    $(".menuburger").hover(function(){
        $(this).css("cursor", "pointer")
    })
    $(".fermer").hover(function(){
        $(this).css("cursor", "pointer")
    })

    $(".menuburger").click(function(){
        $(".menuburger").css("display", "none")
        $(".burgermenu").css("display" , "flex")

    }) 
    $(".fermer").click(function(){
        $(".menuburger").css("display", "flex")
        $(".burgermenu").css("display" , "none")
    })

