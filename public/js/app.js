var app = angular.module("financialSquawk", ["ngRoute", "ui.bootstrap"]); //Module Dependecies

//DECLARE ROUTING
app.config(function($routeProvider) {

	$routeProvider
	.when("/home", {
		templateUrl: "templates/main_homeTmpl.html",
		controller: "main_homeCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/explorestocks", {
		templateUrl: "templates/explore_stocksTmpl.html",
		controller: "explore_stocksCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/signin", {
		templateUrl: "templates/sign_inTmpl.html",
		controller: "sign_inCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/signup", {
		templateUrl: "templates/sign_upTmpl.html",
		controller: "sign_upCtrl"
		//resolve if necessary
	})

	// $routeProvider
	// .when("/glossary", {
	// 	templateUrl: "templates/signinTmpl.html",
	// 	controller: "signinCtrl"
	// 	//resolve if necessary
	// })

	.otherwise({
		redirectTo: "/signin"
	});

});

