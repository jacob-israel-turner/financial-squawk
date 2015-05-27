//DEPENDENCIES
//mongoose 
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();
app.use(bodyParser.json());
var port = 8000;

//MIDDLEWARE: CONNECTS SERVER WITH FRONT-END
app.use(express.static(__dirname + "/public"));

//ENDPOINTS
//GET
app.get("/app/ticker", function(req, res) {
	request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-K/ANN/2011,2012,2013,2014,2015/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
    		res.send(body);  //send the callback response to my angular
  		}
	});
});

//GET
app.get("/app/ticker/quarterlydata", function(req, res) { 
	request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-Q/TTM/2015/Q1, Q2/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
    		res.send(body);  //send the callback response to my angular
  		}
	});
});


//SHOUT OUT TO PORT
app.listen(port, function() {
	console.log("listening to port: " + port);
});

//links to do backend
//http://expressjs.com/guide/routing.html //ROUTING
//https://github.com/STRML/mongoose-auth REGISTRATION/MONGOOSE AUTH
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local AUTH