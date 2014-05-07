App.controller ('headerController', ['$scope','$http', function($scope,$http){
        $scope.loadLok = function(lok){
        	$http.get(lok).success(function(){
        		location.reload(true);
        	});
        };
}]);