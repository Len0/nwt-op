App.controller ('clientBoughtController',['$scope','$http','webServiceWrapper',function($scope,$http,webServiceWrapper){
	$scope.myAdsB={};
	$scope.myAds=[];
	$scope.loadAds=function(userID){
		webServiceWrapper.getBoughtAds(userID,function(data){
			$scope.myAdsB=data;
			for(var i=0;i<$scope.myAdsB.length;i++)
			{
				webServiceWrapper.getAd($scope.myAdsB[i].ad_offer_id,function(Addata){
					$scope.myAds.push(Addata);
					$scope.myAds[$scope.myAds.length-1].duration=$scope.myAdsB[$scope.myAds.length-1].duration;
				});
				
			}
			
		});
	};
	
	
	

}]);
