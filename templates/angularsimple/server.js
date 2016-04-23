var express = require("express");
var app = express();


var port  	 = process.env.PORT || 5000; 				// set the port
//var database = require('./config/database'); 			// load the database config

// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));


app.listen(port);
console.log("Your AngularSimple App Is up And Running on http://localhost:"+port+"");
