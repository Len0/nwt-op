'use strict';

App.controller ('userRegistrationController', ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.register = function(user) {
        $scope.data = user;
    }

}]);
