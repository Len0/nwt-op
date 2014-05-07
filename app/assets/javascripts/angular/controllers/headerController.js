App.controller ('headerController', ['$scope','$http', function($scope,$http){
        $scope.loadLok = function(lok){
        	$http.get(lok).success(function(){
        		location.reload(true);
        	});
        };
        $scope.userLogout = function(){
            $http.get('user/logout').success(function(){
                location.reload(true);
            })

        };
}]);