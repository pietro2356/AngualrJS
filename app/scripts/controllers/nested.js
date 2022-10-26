'use strict'

var angualrJsApp = angular.module('angualrJsApp', []);

angualrJsApp.controller('MainNestedCtrl', ['$scope', function($scope) {
    $scope.today = new Date().getDay();
    $scope.name = "Pietro";
}])

angualrJsApp.controller('ChildNestedCtrl', ['$scope', function($scope) {
    $scope.name = "Edoardo";
}])

angualrJsApp.controller('GrandNestedCtrl', ['$scope', function($scope) {
    $scope.today = new Date().getFullYear();
    $scope.name = "Domenico";
}])