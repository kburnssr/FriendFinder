var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    charset  : 'utf8_general_ci',
    database : "friends"
  });
function findAll(){

}