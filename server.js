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

//PASSPORT
passport.use(new LocalStrategy({ //localstrategy is linked to local authenticate on line 78
  usernameField: "email"
}, function(email, password, done) { 
  //define how we match user credentials to db values
  User.findOne({ email: email }, function(err, user){
    // console.log("Checking user", user)
    // console.log("Error", err)
    if (!user) {
      return done(new Error("This user does not exist :)"), null);
    }
    user.verifyPassword(password).then(function(
      doesMatch) {
      if (doesMatch) {
        return done(null, user);
      }
      else {
        return done(new Error("Please verify your password and try again: )"), null);
      }
    });
  });
}));


passport.serializeUser(function(user, done) { 
  console.log('serializing', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing', user);
  done(null, user);
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});



//MIDDLEWARES
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(session({ 
  secret: "ghrisdfaasdfsaf",
  resave: true,
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session()); //creating a session on the server which is then being serailaized into browser
// app.use(session({secret: 'fav places are awesome'}));





//MODELS
var User = require("./app/models/User");

//MONGO CONNECT
mongoose.connect("mongodb://localhost/financial-squawk");


//reads CURD keys on the browser and server


app.use(function(req, res, next){
  console.log('User', req.user);
  next();
})


//gateway with authoriaztion
var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    console.log("req not authenticated", req.user)
    return res.status(401).end();
  }
  next();
};

//logout
app.get('/api/auth/logout', function(req, res) {
  req.logout();
  return res.redirect('/#login');
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
/*
app.post("/app/users/auth", function(req, res, next){
  passport.authenticate('local', function(err, user, info){
    if(err) { return next(err); }
    if(user){
      console.log(user);
      res.send(user);
    }
  })(req, res, next);
});
*/

/*
app.post('/app/users/auth', passport.authenticate('local', { failureRedirect: '/' }), function(req, res){
  console.log(req.user);
  res.redirect('/');
});
*/

app.post('/app/users/auth', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.redirect('/login')
    }
    req.logIn(user, function(err) { // req.logIn was missing!
      if (err) { return next(err); }
      return res.redirect('/');
    });
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
app.get("/app/ticker", requireAuth, function(req, res) {
	request("https://sec.kimonolabs.com/companies/" + req.query.ticker + "/forms/10-K/ANN/2011,2012,2013,2014,2015/?apikey=nVtOIzPxxLneP3jmei68ADza0GvaV2gv", function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
    		res.send(body);  //send the callback response to my angular
  		}
	});
});


// //stock
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
