'use strict';

App.controller ('userRegistrationController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.registerUser = function(user){
       $http({
        url: '/user/create.json',
        method: "POST",
        data: $.param($scope.newUser) ,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
               alert("kurac");
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });
    };

}]);
