var app = angular.module("financialSquawk");
	
app.service("explore_stocksService", function($http, $q) {

	this.getTicker = function(ticker) {
		console.log('homeService: ', ticker);
	 var defer =$q.defer(); //promise function
	 //http function
	 $http.get("/app/ticker?ticker=" + ticker)
	 .success(function(res) { //callback for resolve
	 	console.log(res);
	 	res.map(function(obj) {
	 		obj.year = obj.year.toString();
	 		return obj;
	 	});
	 	defer.resolve(res); //successful promise function //this is where you are cutting the data;refining the data
	 })
	 .error(function(err) {
	 	defer.reject(err);
	 });
	 return defer.promise; //return promise for $q
	};
});