App.controller('userUslugaController',['$scope','UslugaCreate','UslugaAll',function($scope,UslugaCreate,UslugaAll){
	$scope.usluga={};
	$scope.uslugas=UslugaAll.query();

	$scope.posalji=function(){
		var odgovor=UslugaCreate.save($scope.usluga, function() {
        $scope.uslugas=UslugaAll.query();
      });
	};
}]);
