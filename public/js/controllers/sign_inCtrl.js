var app = angular.module('financialSquawk');

app.controller("sign_inCtrl", function($scope, $location, sign_inService) {

	$scope.clickLogin = function() {
		sign_inService.signin($scope.email, $scope.password).then(function() {
			$location.path("/TBD");
		}).catch(function(err) {
			$scope.error = err;
		});
	};
});

