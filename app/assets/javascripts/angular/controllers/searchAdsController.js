'use strict';

App.controller ('searchAdsController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.searchText = $routeParams.searchText;
    webServiceWrapper.searchAds($routeParams.searchText, null, null, function(data) {
        $scope.ads = data;
        console.log($scope.ads);
    });

    $scope.searchAds = function() {
        console.log("Search Ads Clicked");
        $location.url("/searchAds/" + $scope.searchText);
        $scope.searchText = "";
    }

}]);