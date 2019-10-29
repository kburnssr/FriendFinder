
    $("#submit").on("click",function(event){
        console.log("click");
        event.preventDefault();
        var name = $("#name").val().trim();
        var photo = $("#photo").val().trim();
        if(name=="" || photo==""){
            return
        }
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
            var currentFriendScore = 0;
            for (j=0; j<friend.scores.length; j++){
                if(isNaN(friend.scores[j])){
                    continue;
                }
                currentFriendScore += friend.scores[j];
            }
            $.ajax({
                type: "GET",
                url: "/api/friends"
            }).then(function(results){
                var mindifference = 100;
                var friendmatch;
                for (i=0; i<results.length; i++){
                    if(results[i].name==friend.name){
                        continue;
                    }
                    var scores = results[i].scores.split(",");
                    var score = 0;
                    for (j=0; j<scores.length; j++){
                        if(scores[j] == "NaN"){
                            continue;
                        }
                        score += parseInt(scores[j]);
                    }
                    var diff = Math.abs(score - currentFriendScore);
                    if( diff < mindifference){
                        mindifference = diff;
                        friendmatch = results[i];
                    }
                }
                if(friendmatch!=null){
                    $("#container").hide();
                    $("#result").html(
                        "<p>"+friendmatch.name+"</p>"+
                        "<p>score: "+mindifference+"</p>"+
                        "<img src='"+friendmatch.picture_link+"'/>"
                    );
                }
            })
        })
    });
