'use strict';

App.controller ('userRegistrationController', ['$scope', '$http', '$location','$upload', function($scope, $http, $location, $upload){
    $scope.userTypeOptions = [{ name: "Klijent", id: 2 }, { name: "Oglasivac", id: 3 }];

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
	$scope.Progress=0;
	$scope.error=-1;
	$scope.onFileSelect = function($file) {
      $upload.upload({
        url: 'filemedia/create.json',
        file: $file,
        progress: function(e){
        	 $scope.$apply(function () {
        	$scope.Progress = parseInt(100.0 * e.loaded / e.total);
        	console.log('percent: ' + parseInt(100.0 * e.loaded / e.total));
        	
        	});
        	
        	}
      }).then(function(data, status, headers, config) {
        // file is uploaded successfully
        $scope.error=0;
        console.log(status);
      },function(data, status, headers, config){
      	$scope.error=1;
      	console.log(status);
      }); 
    
  };
}]);
