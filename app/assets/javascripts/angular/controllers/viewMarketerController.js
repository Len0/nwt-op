'use strict';

App.controller ('viewMarketerController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.marketerID = $routeParams.id;


    webServiceWrapper.getUser($scope.marketerID, function(data) {
        $scope.marketer = data;
        console.log($scope.marketer);
    });
}]);