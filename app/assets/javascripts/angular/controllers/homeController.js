'use strict';

App.controller ('homeController', ['$scope', '$location', function($scope, $location){

    $scope.searchAds = function(search) {
        console.log("Search Ads Clicked");
        $location.url("/searchAds/" + search.text);

        $scope.searchText = "";
    }

}]);