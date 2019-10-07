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
        var q = 'SELECT f.name, f.picture_link AS photo, group_concat(s.score) AS scores FROM friends f LEFT JOIN scores s ON s.friend_id = f.id GROUP BY f.id';
        connection.query(q, function(err, result) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.map(function(o){
                o.scores = o.scores.split(",");
                return o;
            })));
        });
    })
}