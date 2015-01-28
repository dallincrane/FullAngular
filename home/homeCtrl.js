angular.module("weatherApp").controller("homeCtrl", function($scope, $location) {

	$scope.changeRoute = function() {
		$location.path("/weather/"+$scope.lat+"/"+$scope.long);
	}

});