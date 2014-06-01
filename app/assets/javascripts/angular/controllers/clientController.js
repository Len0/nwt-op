App.controller('clientController',['$scope','AdAll','AdTypes',function($scope,AdAll,AdTypes){
	$scope.ads={};
	$scope.korak=0;
    $scope.brKoraka = 2;
	$scope.ads=AdAll.query();
	$scope.ads.$promise.then(function (result) {
    	$scope.ads = result;
	});
	$scope.tipovi={};
	$scope.tipovi=AdTypes.query(function(data){
		for(var i = 0; i < $scope.ads.length; i++){
			for(var j=0;j<data.length;j++){
				if(data[j].id==$scope.ads[i].ad_type_id)$scope.ads[i].ad_type=data[j].ad_type;
			}
		}
        $scope.tipovi = data;
	});


    // Odabrani podaci
    $scope.odabraniTip;
    // ---------------

	
	$scope.dalje=function(){
		$scope.korak++;
	};
    $scope.nazad=function(){
        $scope.korak--;
    };

    $scope.tipClick = function(tip) {
        $scope.odabraniTip = tip;
    }

}]);