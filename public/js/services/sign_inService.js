var app = angular.module('financialSquawk');
	app.service("sign_inService", function($http, $q) {

		this.signin = function(email, password) {
			var deferred = $q.defer();
			$http({
				method: "POST",
				url: "/app/TBD/TBD",
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
		};
	});