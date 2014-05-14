'use strict';

App.controller ('viewAdController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.adID = $routeParams.id;

    // Date picker settings
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy HH:mm', 'shortDate'];
    $scope.format = $scope.formats[2];
    $scope.datePickerOpened = false;
    $scope.dateOptions = {
        formatYear : 'yy',
        startingDay : 1
    };
    $scope.openSD = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.datePickerOpened = !$scope.datePickerOpened;
    };
    $scope.units = 0;


    webServiceWrapper.getAd($scope.adID, function(data) {
        $scope.ad = data;
        console.log($scope.ad);
    });


    $scope.buyAd = function() {
        console.log("Buy Ad Clicked");
        console.log($scope.ad.id, $scope.units, $scope.ad.date_start);
        webServiceWrapper.buyAd($scope.ad.id, $scope.units, $scope.ad.date_start, function (data) {
            console.log(data);
            $scope.flash = data.message;
        });
    }


}]);