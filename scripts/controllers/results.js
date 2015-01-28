'use strict';

/**
	Results Page
 */


APP.controller('ResultsCtrl', function ($scope) {
    $scope.degreeItems = APP.degreeSelected;
    $scope.courses = APP.coursesSelected;
  });

