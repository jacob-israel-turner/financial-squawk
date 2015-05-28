//DEPENDENCIES
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session"); 

// INITIALIZING APP & 
var app = express();
var port = 8000;

//MIDDLEWARES
app.use(passport.initialize());
app.use(passport.session()); //creating a session on the server which is then being serailaized into browser
// app.use(session({secret: 'fav places are awesome'}));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//MODELS
var User = require("./app/models/User");

//MONGO CONNECT
mongoose.connect("mongodb://localhost/financial-squawk");

//PASSPORT
passport.use(new LocalStrategy({ //localstrategy is linked to local authenticate on line 78
  usernameField: "email"
}, function(email, password, done) { 
  //define how we match user credentials to db values
  User.findOne({ email: email }, function(err, user){
    console.log("Checking user", user)
    console.log("Error", err)
    if (!user) {
      done(new Error("This user does not exist :)"
        ));
    }
    user.verifyPassword(password).then(function(
      doesMatch) {
      if (doesMatch) {
        console.log(doesMatch);
        console.log('user match', user)
        done(null, user);
      }
      else {
        done(new Error("Please verify your password and try again: )"));
      }
    });
  });
}));

//reads CURD keys on the browser and server
passport.serializeUser(function(user, done) { 
  done(null, user._id);
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


//POST passport.authenticate
app.post("/app/users/auth", function(req, res, next){
  passport.authenticate('local', function(err, user){
    if(err) { return next(err); }
    if(user){
      res.send(200)
    }
  })(req, res, next);
});

//GET for Quarterly filings home
app.get("/app/ticker/quarterlydata", function(req, res) { 
  request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-K/ANN/2011,2012,2013,2014,2015/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(body);  //send the callback response to my angular
      }
  });
});

//GET for Ticker & financials explore
app.get("/app/ticker", function(req, res) {
	request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-K/ANN/2011,2012,2013,2014,2015/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
    		res.send(body);  //send the callback response to my angular
  		}
	});
});

//CONTROLLER 
//stocks
// app.post("app/stockwatch", StockController.create);


//SHOUT OUT TO PORT
app.listen(port, function() {
	console.log("listening to port: " + port);
});

//links to do backend
//http://expressjs.com/guide/routing.html //ROUTING
//https://github.com/STRML/mongoose-auth REGISTRATION/MONGOOSE AUTH
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local AUTH

// req.user it directs you the page and doesn't log you out