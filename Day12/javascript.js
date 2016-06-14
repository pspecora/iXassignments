var app = angular.module ("toDoApp", [] );

app.controller("MainCtrl",function($scope) {
	// $scope.newitem="";
	$scope.items = [""];

	$scope.additem = function() {
		console.log("new", $scope.newitem);
		$scope.items.push($scope.newitem);
		console.log($scope.items)
		$scope.newitem="";
	}	
	$scope.deleteitem = function(item) {
		// $scope.items.splice($scope.newitem)
	var index = $scope.items.indexOf(item);
  	$scope.items.splice(index, 1);  
	}
	


});