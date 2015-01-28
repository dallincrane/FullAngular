angular.module("weatherApp").controller("weatherCtrl", function($scope, weather) {

	$scope.weather = weather;
	console.log($scope.weather);

});