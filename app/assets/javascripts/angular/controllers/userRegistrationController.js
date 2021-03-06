'use strict';

App.controller('userRegistrationController', ['$scope', '$http', '$location', '$upload',
function($scope, $http, $location, $upload) {
	$scope.userTypeOptions = [{
		name : "Klijent",
		id : 2
	}, {
		name : "Oglasivac",
		id : 3
	}];
	$scope.avatar = "";
	$scope.rezultat ={};
	$scope.realAvatar = "";
	$scope.registerUser = function(usertemp) {
		usertemp.avatar = $scope.avatar;
		var confuser = {
			"user" : usertemp
		};
		$http({
			url : '/user/create.json',
			method : "POST",
			data : $.param(confuser),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			$scope.data = data;
			$scope.rezultat = data;
            var message = "Uspješno ste se registrovali! Provjerite vaš email inbox!";
            $location.path("/client").search({success: message});
		}).error(function(data, status, headers, config) {
			$scope.rezultat = data;
			$scope.status = status;
		});
	};
	$scope.Progress = 0;
	$scope.error = -1;
	$scope.onFileSelect = function($files) {
		//$files: an array of files selected, each file has name, size, and type.
		for (var i = 0; i < $files.length; i++) {
			var $file = $files[i];
			$upload.upload({
				url : 'filemedia/create.json',
				file : $file,
				progress : function(e) {
					$scope.$apply(function() {
						$scope.Progress = parseInt(100.0 * e.loaded / e.total);
						console.log('percent: ' + parseInt(100.0 * e.loaded / e.total));

					});

				}
			}).then(function(data, status, headers, config) {
				// file is uploaded successfully
				$scope.avatar = data.data;
				$scope.error = 0;
				$scope.prikaziSliku(data.data);
				console.log(status);
			}, function(data, status, headers, config) {
				$scope.error = 1;
				console.log(status);
			});
		}
	};
    $scope.sendRecovery = function(x){
        $http({
            url : '/user/recovery.json',
            method : "POST",
            data : $.param(x),
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }).success(function(data, status, headers, config) {
                $scope.data = data;
            }).error(function(data, status, headers, config) {
                $scope.status = status;
            });
    };
	$scope.prikaziSliku = function(nekiId){
		$http.get('/filemedia/get.json', {
					params : {
						id : nekiId
					}
				}).success(function(data, status) {
					$scope.realAvatar = data.lokacija.url;
				});
	};
}]);
