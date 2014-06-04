'use strict';

App.controller ('viewMarketerController', ['$scope', '$routeParams', 'webServiceWrapper', '$location', function($scope, $routeParams, webServiceWrapper, $location){
    $scope.marketerID = $routeParams.id;
    $scope.options = [{ name: "1", id: 1 }, { name: "2", id: 2 }, { name: "3", id: 3 }, { name: "4", id: 4 }, { name: "5", id: 5 }];
    $scope.selectedOption = $scope.options[2];

    webServiceWrapper.getUser($scope.marketerID, function(data) {
        $scope.marketer = data;
        console.log($scope.marketer);
    });

    $scope.postReview = function(newReviewItem, rating, marketer, loggedUser){
        var newReview = {"review":{
                        "rating":rating,
                        "user_id": marketer,
                        "poster_id": loggedUser,
                        "content": newReviewItem
                        }};
            webServiceWrapper.sendReview(newReview);
        $scope.refreshReviews();
    };

    $scope.refreshReviews = function(){
        webServiceWrapper.getReviews($scope.marketerID, function(data){
            $scope.userReviews = data;

            console.log($scope.userReviews);
        }) ;
    };

    webServiceWrapper.getReviews($scope.marketerID, function(data){
        $scope.userReviews = data;
        console.log($scope.userReviews);
    }) ;


}]);