'use strict';

App.controller ('searchMarketersController', ['$scope', '$routeParams', 'webServiceWrapper', function($scope, $routeParams, webServiceWrapper){
    $scope.searchName = $routeParams.name;



    webServiceWrapper.searchMarketers($scope.searchName, function(data) {
        $scope.marketers = data;
        $scope.numberFound = data.length;
        console.log($scope.marketers);
    });
}]);