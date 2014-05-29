/**
 * Created with JetBrains RubyMine.
 * User: Leno
 * Date: 5/29/14
 * Time: 10:00 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

App.controller ('userReviewController', ['$scope', '$http', function($scope, $http){
    $scope.showTextArea = function(){
        alert("Bjazi");
    };
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