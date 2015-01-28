'use strict';

/* IAT Course List Controller */

APP.controller('CourseListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('courses.json').success(function(data) {
		$scope.courses = data;
	}).error(function(e) {
		console.log(e);
	});

	$scope.orderProp = 'age';

	$scope.buttonAction = function() {
		console.log(this);
		APP.coursesSelected.push(this.course);
	}
	console.log($scope);

}]);



//IN ANOTHER CONTROLLER

	//In your final course overview screen

	//show a summary from APP.courses instead of courses.json

	//$scope.coursesSelected = APP.coursesSelected 
	// -- save in results file -- 