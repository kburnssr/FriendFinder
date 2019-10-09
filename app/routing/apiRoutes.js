var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    charset  : 'utf8_general_ci',
    database : "friends"
  });
module.exports = function(app){
    app.get("/api/friends", function(req,res){    
        var q = 'SELECT * FROM friends';
        connection.query(q, function(err, result) {
            console.log(result);
            res.json(result);
//            res.writeHead(200, { 'Content-Type': 'application/json' });
//            res.end(JSON.stringify(result.map(function(o){
//                o.scores = o.scores.split(",");
 //               console.log(o);
 //               return o;
 //           })));
        });
    })
    app.post("/api/friends",function(req,res){
        var query = "INSERT INTO friends (name, picture_link, scores) VALUES(?, ?, ?);";
        connection.query(query,[req.body.name, req.body.photo, req.body.scores], function(err, result){
            console.log(result);
            res.json(result);
        });
    })
}