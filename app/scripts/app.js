'use strict';

/**
 * @ngdoc overview
 * @name angualrJsApp
 * @description
 * # angualrJsApp
 *
 * Main module of the application.
 */

angular.module('angualrJsApp', ['ngRoute']).config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'

    })
    .when('/pietro', {
      templateUrl: 'views/pietro.html',
      controller: 'PitCtrl',
      controllerAs: 'pietro'
    })
    .when('/nested', {
      templateUrl: 'views/nested.html',
      controller: 'MainNestedCtrl',
      controllerAs: 'nested'
    })
    .otherwise({
      redirectTo: '/'
    });
});


// angular
//   .module('angualrJsApp', [
//     'ngAnimate',
//     'ngRoute',
//     'ngSanitize'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
