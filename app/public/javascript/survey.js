$(document).on("ready", function(){
    $("#submit").on("click",function(event){
        event.preventDefault();
        var name = $("#name").val().trim();
        var photo = $("#photo").val().trim();
        var q1 = parseInt($("select#q1").val());
        var q2 = parseInt($("select#q2").val());
        var q3 = parseInt($("select#q3").val());
        var q4 = parseInt($("select#q4").val());
        var q5 = parseInt($("select#q5").val());
        var q6 = parseInt($("select#q6").val());
        var q7 = parseInt($("select#q7").val());
        var q8 = parseInt($("select#q8").val());
        var q9 = parseInt($("select#q9").val());
        var q10 = parseInt($("select#q10").val());
        var friend = {
            name:name,
            photo:photo,
            scores:[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
        };
        console.log(friend);
        $.ajax({
            type: "POST",
            data: friend,
            url: "/api/friends"
        }).then(function(result){
            console.log(result);
        })
    })
})