'use strict';

App.controller ('userRegistrationController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.userTypeOptions = [{ name: "Klijent", id: 2 }, { name: "Oglasivac", id: 3 }];

    $scope.registerUser = function(usertemp){
        var confuser = {"user": usertemp};
       $http({
        url: '/user/create.json',
        method: "POST",
        data: $.param(confuser) ,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
               $scope.data = data;
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });
    };

}]);
