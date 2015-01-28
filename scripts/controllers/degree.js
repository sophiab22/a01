'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
APP.controller('DegreeCtrl', function ($scope) {
    $scope.degreeItems = [
      {message:'BA Arts'},
      {message:'BA Science'}
    ];

    $scope.buttonAction = function() {

     console.log(this); //is the button that was clicked

     //this.item is the object in the ng-repeat loop we were currently on when making the button
     APP.degreeSelected.push(this.degree);
    

     // console.log(APP.results);
    }
  });
