$("li").hover(
    function(){
        $(this).addClass("hover")
    },
    function(){
        $(this).removeClass("hover")
    }
)
$("li").click(
    function(){
        $(this).toggleClass("selected");
        $("#total").text($("li.selected").length);
        $("#total").addClass("nbselect")
    }
)