var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoute.js")(app);


app.listen(PORT, function(){
	console.log('listening on PORT', PORT);
});









