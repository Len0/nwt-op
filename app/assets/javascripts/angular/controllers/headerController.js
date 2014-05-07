App.controller ('headerController', ['$scope','$http', function($scope,$http){
        $scope.loadLok = function(lok){
        	$http.get(lok).success(function(){
        		location.reload(true);
        	});
        };
        $scope.userLogout = function(){
            $http.get('/user/logout').success(function(){
                location.reload(true);
            })

        };
            $scope.userLogin = function(user){
                $http({
                    url: '/user/login',
                    method: "POST",
                    data:{username: user.username, password: user.password},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {

                        $scope.data = data;
                    }).error(function (data, status, headers, config) {
                        $scope.status = status;
                    });

            };
}]);