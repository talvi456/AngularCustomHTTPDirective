angular.module('sample1',[])
	.service('getSampleData',function($http){
		var serviceURL = "http://date.jsontest.com/"

		return $http.get(serviceURL)

	})
	.controller('firstCtrl', function($scope,getSampleData){
		$scope.firstName = "Talha"

		getSampleData.then(function(res){
			$scope.timeData =  res.data
		})
	})