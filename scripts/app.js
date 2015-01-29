'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
var APP = angular.module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/iat', {
        templateUrl: 'views/course-list.html',
        controller: 'CourseListCtrl'
      })
      .when('/degree', {
        templateUrl: 'views/degree.html',
        controller: 'DegreeCtrl'
      })
      .when('/breadth', {
        templateUrl: 'views/breadth.html',
        controller: 'BreadthCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

  //APP logic

  APP.results = [];

  APP.coursesSelected = [];

  APP.degreeSelected = [];

  APP.userDone = false;
