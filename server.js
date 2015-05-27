//DEPENDENCIES
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session"); 

// INITIALIZING APP & MIDDLEWARES
var app = express();
var port = 8000;
app.use(passport.initialize());
app.use(passport.session());
// app.use(session({secret: 'fav places are awesome'}));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//MODELS
var User = require("./app/models/User");

//MONGO CONNECT
mongoose.connect("mongodb://localhost/financial-squawk");

//PASSPORT
passport.use(new LocalStrategy({
  usernameField: "email"
}, function(email, password, done) { 
  //define how we match user credentials to db values
  User.findOne({ email: email }, function(err, user){
    if (!user) {
      done(new Error("This user does not exist :)"
        ));
    }
    user.verifyPassword(password).then(function(
      doesMatch) {
      if (doesMatch) {
        done(null, user);
      }
      else {
        done(new Error("Please verify your password and try again: )"));
      }
    });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user_id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//ENDPOINTS
//POST for AUTH
app.post("/app/users", function(req,res) {
  User.findOne({ email: req.body.email }).exec().then
    (function(user) {
      //if we found a user, it's a duplicate
      if (user) {
        return res.status(400).json({message: "User with this email already exists :)"});
      }
      //otherwise, create the user
      var user = new User(req.body);
      user.save(function(err, new_user){
        if(err) {
          console.log("can't create user", err);
        }
        res.json(new_user);
      });
    });
});

//POST for failure to login
app.post("/app/users/auth", passport.authenticate("local", { failureRedirect: "/login" }), function(req, res) {
  return res.json({ message: "you logged in"});
});

//GET for Ticker & financials 10-K
app.get("/app/ticker", function(req, res) {
	request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-K/ANN/2011,2012,2013,2014,2015/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
    		res.send(body);  //send the callback response to my angular
  		}
	});
});

//GET for Quarterly filings 
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