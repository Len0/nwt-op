'use strict';

App.controller ('viewMarketerController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.marketerID = $routeParams.id;


    webServiceWrapper.getUser($scope.marketerID, function(data) {
        $scope.marketer = data;
        console.log($scope.marketer);
    });

    $scope.postReview = function(newReviewItem, marketer, loggedUser){
        var newReview = {"review":{
                        "rating":5,
                        "user_id": marketer,
                        "poster_id": loggedUser,
                        "content": newReviewItem
                        }};
            webServiceWrapper.sendReview(newReview);
    };



}]);