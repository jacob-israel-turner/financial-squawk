var app = angular.module("financialSquawk");
	
app.service("explore_stocksService", function($http, $q) {

	var ticker = this;

	//same thing as this.getAllCompanies. 
	ticker.getTicker = function(ticker) {
		console.log('homeService: ', ticker);
	 var defer =$q.defer(); //promise function
	 //http function
	 $http.get("/app/ticker?ticker=" + ticker)
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