var app = angular.module('financialSquawk');

app.controller("sign_inCtrl", function($scope, sign_inService) {

	$scope.clickLogin = function() {
		sign_inService.signin($scope.email, $scope.password)

	};
});

