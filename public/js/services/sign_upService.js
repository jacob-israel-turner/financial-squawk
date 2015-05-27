var app = angular.module('financialSquawk');

	app.service("sign_upService", function($http, $q) {
		this.signup = function(email, password) {
			var deferred = $q.defer();
			$http({
				method: "POST",
				url: "/app/TBD",
				data: {
					email: email,
					password: password
				}
			}).then(function(res) {
				deferred.resolve(res.data);
			}).catch(function(res) {
				deferred.reject(res.data);
			});
			return deferred.promise;
});
