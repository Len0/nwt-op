'use strict';

App.controller ('searchAdsController', ['$scope', '$routeParams', 'webServiceWrapper', function($scope, $routeParams, webServiceWrapper){
    $scope.searchText = $routeParams.searchText;
    $scope.ads = webServiceWrapper.searchAds($routeParams.searchText);
    console.log($scope.ads);
}]);