'use strict';

App.controller ('homeController', ['$scope', '$location', function($scope, $location){

    $scope.searchAds = function(searchText) {
        console.log("Search Ads Clicked");
        $location.url("/searchAds/" + searchText);

        $scope.searchText = "";
    }

}]);