var app = angular.module("financialSquawk", ["ngRoute", "ui.bootstrap"]); //Module Dependecies

//DECLARE ROUTING
app.config(function($routeProvider) {

	$routeProvider
	.when("/home", {
		templateUrl: "views/main_homeTmpl.html",
		controller: "main_homeCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/explorestocks", {
		templateUrl: "views/explore_stocksTmpl.html",
		controller: "explore_stocksCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/signin", {
		templateUrl: "views/sign_inTmpl.html",
		controller: "sign_inCtrl"
		//resolve if necessary
	});

	$routeProvider
	.when("/signup", {
		templateUrl: "views/sign_upTmpl.html",
		controller: "sign_upCtrl"
		//resolve if necessary
	})

	// $routeProvider
	// .when("/glossary", {
	// 	templateUrl: "views/signinTmpl.html",
	// 	controller: "signinCtrl"
	// 	//resolve if necessary
	// })

	.otherwise({
		redirectTo: "/signin"
	});

});

