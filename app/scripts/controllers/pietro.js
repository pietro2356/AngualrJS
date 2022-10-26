'use strict';

angular.module('angualrJsApp')
    .controller('PitCtrl', function ($scope){
        $scope.data = [{text: 'dato1'}, {text: 'dato2'}, {text: 'dato3'}];
        
        $scope.datetime = function(){
            return new Date().toString();
        };

        $scope.ora = "Sono le: " + $scope.datetime();
        
        console.log($scope.datetime());

    });