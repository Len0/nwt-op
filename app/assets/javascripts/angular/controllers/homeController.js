'use strict';

App.controller ('homeController', ['$scope', '$location', function($scope, $location){

    $scope.searchAds = function(search) {
        console.log("Search Ads Clicked at HomeController");

        if (typeof search == "undefined")
            $location.url("/searchAds/undefined/undefined/undefined");
        else
            $location.url("/searchAds/" + search.text + "/" + search.price + "/" + search.type);

        $scope.searchText = "";
    }

    $scope.searchMarketers = function(name) {
        console.log("Search Marketers Clicked at HomeController");
        $location.url("/searchMarketers/" + name);

        $scope.searchMarketerName = "";
    }

}]);