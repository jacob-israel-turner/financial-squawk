var app = angular.module('financialSquawk');

app.controller("sign_upCtrl", function($scope, sign_upService) {
	$scope.clickSignup = function() {
		if ($scope.password !== $scope.password2) {
			$scope.error ="Please make sure your passwords match. :)";
			return;
		}
		sign_upService.signup($scope.email, $scope.password).then(function(new_user) {
			console.log("success!", new_user);
		}).catch(function(err) {
			$scope.error =err.message;
		});
	};
});