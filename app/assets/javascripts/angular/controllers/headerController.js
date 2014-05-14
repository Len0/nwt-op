App.controller ('headerController', ['$scope','$http','$cookieStore', function($scope,$http, $cookieStore){

        $scope.updateInfo = function(){
        $scope.loggedIn = $cookieStore.get('loggedin');

        if ($scope.loggedIn == "true") {
            $scope.loggedOut = "false";
        }
        else {
            $scope.loggedOut = "true";
        }};

        $scope.updateInfo();

        $scope.loadLok = function(lok){
        	$http.get(lok).success(function(){
        		location.reload(true);
        	});
        };
        $scope.userLogout = function(){
            $http.get('/user/logout').success(function(){
                $cookieStore.put('loggedin', "false");
                $scope.updateInfo();
                location.reload(true);
            }); };

        $scope.currentUser = function(){
            $http.get('/user/current.json').success(function (data, status, headers, config) {
                    $scope.data2 =  data;
                    $scope.userType = data.userType;
                    $scope.userName = data.username;
                }).error(function (data, status, headers, config) {
                    $scope.data2 = status;
                });


            };

            $scope.userLogin = function(user){

                $http({
                    url: '/user/login.json',
                    method: "POST",
                    data: $.param($scope.user) ,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                        $("#loginForm").hide;
                        $("#logoutForm").show(500);
                        $cookieStore.put('loggedin',"true");
                        $scope.currentUser();
                        $scope.updateInfo();
                        $scope.data =  data;
                        $scope.userLog = data.user;



                    }).error(function (data, status, headers, config) {
                         $scope.status = status;
                    });

            };
}]);