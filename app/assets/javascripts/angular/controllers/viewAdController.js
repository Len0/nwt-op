'use strict';

App.controller ('viewAdController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.adID = $routeParams.id;



    webServiceWrapper.getAd($scope.adID, function(data) {
        $scope.ad = data;
        console.log($scope.ad);
    });
}]);