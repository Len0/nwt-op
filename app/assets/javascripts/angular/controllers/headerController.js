App.controller ('headerController', ['$scope','$http','$cookieStore', function($scope,$http, $cookieStore){
    $scope.currentUser = function(){
        $http.get('/user/current.json').success(function (data, status, headers, config) {
            $scope.data2 =  data;
            $scope.userType = data.userType;
            $scope.userName = data.username;


        }).error(function (data, status, headers, config) {
                $scope.data2 = status;
            });

        return $scope.userName;
    };
        $scope.updateInfo = function(){
        $scope.currentUser();
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


            $scope.userLogin = function(user){

                $http({
                    url: '/user/login.json',
                    method: "POST",
                    data: $.param($scope.user) ,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                        $scope.data =  data;
                        if(data.error == "false"){
                            $("#loginForm").hide;
                            $("#logoutForm").show(500);
                            $cookieStore.put('loggedin',"true")
                            $scope.updateInfo();
                            if(data.type == 1){
                                $scope.adminLog = "true";
                            } else
                            {
                                $scope.adminLog = "false";
                            }

                        } else{
                            $scope.userCredsError = "true";
                        }
                    }).error(function (data, status, headers, config) {
                         $scope.status = status;
                    });

            };
}]);