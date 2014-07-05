'use strict';

App.controller ('searchAdsController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.searchText = $routeParams.text;
    $scope.searchPrice = $routeParams.price;
    $scope.searchType = $routeParams.type;



    webServiceWrapper.searchAds($scope.searchText, $routeParams.price, $routeParams.type, function(data) {
        $scope.ads = data;
        $scope.numberFound = data.length;
        console.log($scope.ads);

        if ($scope.searchText == "undefined")
            $scope.searchText = "";
    });

    $scope.searchAds = function() {
        console.log("Search Ads Clicked:" + $scope.searchText);
        $location.url("/searchAds/" + $scope.searchText + "/undefined/undefined");
        $scope.searchText = "";
    }

}]);