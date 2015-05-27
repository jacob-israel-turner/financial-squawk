var app = angular.module("financialSquawk");
	
app.service("main_homeService", function($http, $q) {

	this.getTicker = function(ticker) {
		console.log('homeService: ', ticker);
	 var defer =$q.defer(); //promise function
	 //http function
	 $http.get("/app/ticker/quarterlydata?ticker=" + ticker)
	 .success(function(res) { //callback for resolve
	 	console.log(res);
	 	defer.resolve(res); //successful promise function //this is where you are cutting the data;refining the data
	 })
	 .error(function(err) {
	 	defer.reject(err);
	 });
	 return defer.promise; //return promise for $q
	};
});