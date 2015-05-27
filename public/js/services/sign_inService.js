var app = angular.module('financialSquawk');
	app.service("sign_inService", function($http, $q, $location) {

		// this.signin = function(email, password) {
		// 	var deferred = $q.defer();
		// 	$http({
		// 		method: "POST",
		// 		url: "/app/users/auth",
		// 		data: {
		// 			email: email,
		// 			password: password
		// 		}
		// 	}).then(function(res) {
		// 		console.log("res from service: ", res)
		// 		$location.path('/dashboard');
		// 		deferred.resolve(res.data);
		// 	}).catch(function(res) { //errors or anythign that doesn't get passed in res object
		// 		deferred.reject(res.data);
		// 	});
		// 	return deferred.promise;
		// };

		this.signin = function(email, password){
			return $http({
				method: 'POST',
				url: "/app/users/auth",
				data: {
					email: email,
					password: password
				}
			}).success(function(data, status){
				$location.path('/dashboard');
			}).error(function(err){
				console.log(err);
			})
		}
	});