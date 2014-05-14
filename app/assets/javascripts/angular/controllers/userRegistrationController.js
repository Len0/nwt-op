'use strict';

App.controller ('userRegistrationController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.register = function(user){

       $http({
        url: '/user/create',
        method: "POST",
        data: $.param($scope.user) ,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
            $scope.data =  data;
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });
    };

}]);
