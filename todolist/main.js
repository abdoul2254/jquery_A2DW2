$("#sendData").click(function(e){
    e.preventDefault();
    let task = $("#addTask").serializeArray();
    $("ul").append("<li class='"+ task[2].value +"'><input type='checkbox'><label>"+ task[0].value +" | "+ task[3].value +" | <p>"+ task[1].value +"</p></label></li>")
    // $("input:text, [type=date]").val("");
    // $("input:not(:radio)").val("");
})

$("#deleteAll").click(function(e){
    e.preventDefault();
    $("ul").html("");
})

$("#deleteSome").click(function(e){
    e.preventDefault();
    $("#tasks :checked").parent().remove();
})