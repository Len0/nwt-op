App.controller('clientController',['$scope','AdAll','AdTypes', 'webServiceWrapper',function($scope,AdAll,AdTypes, webServiceWrapper){
	$scope.ads={};
    $scope.currentActiveDiscussion=0;
	$scope.korak=0;
    $scope.brKoraka = 3;
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

    $scope.postQuestion = function(user, ad, text){
        var newQuestion = {"discussion":{
            "content":text,
            "user_id": user,
            "ad_offer_id": ad
        }};
        webServiceWrapper.sendQuestion(newQuestion);
        $scope.refreshQuestions(ad, 1);
    };

    $scope.refreshQuestions = function(currentAdID, isAsk){
        if($scope.currentActiveDiscussion == currentAdID && isAsk == 0){
            $scope.currentActiveDiscussion = 0;
        }
        else{
            $scope.currentActiveDiscussion = currentAdID;
        }

        webServiceWrapper.getQuestions(currentAdID, function(data){
            $scope.adQuestions = data;
            console.log($scope.adQuestions);
        }) ;
    };


	$scope.priceSlider = {
            min: 4,
            max: 481,
            ceil: 500,
            floor: 0
        };



    // Odabrani podaci
    $scope.odabraniTip;
    $scope.selectedAds = [];
    // ---------------





    // Funckije za checkbox
    $scope.updateSelection = function($event, ad) {
        var checkbox = $event.target;

        if (checkbox.checked && $scope.selectedAds.indexOf(ad) === -1) {
            $scope.selectedAds.push(ad);
        }
        if (!checkbox.checked && $scope.selectedAds.indexOf(ad) !== -1) {
            $scope.selectedAds.splice($scope.selectedAds.indexOf(ad), 1);
        }
    };

    $scope.isSelected = function(ad) {
        return $scope.selectedAds.indexOf(ad) >= 0;
    };
    // --------------------


	
	$scope.dalje=function(){
		$scope.korak++;

        if ($scope.korak == 2) {
            $scope.ads = null;
            $scope.getAds($scope.odabraniTip.id);
        }
	};


    $scope.getAds = function(adTypeId) {
        webServiceWrapper.searchAds("undefined", "undefined", adTypeId, function(data) {
            $scope.ads = data;

            for (var index = 0; index < $scope.ads.length; index++) {
                $scope.ads[index].buy_duration = 0;
                $scope.ads[index].buy_date_start = $scope.ads[index].date_start;
            }

            console.log(data);
        });
    };


    $scope.nazad=function(){
        $scope.korak--;
    };

    $scope.tipClick = function(tip) {
        $scope.odabraniTip = tip;
    };

    $scope.buyAd = function() {
        console.log("Buy Ad Clicked");
        console.log($scope.ad.id, $scope.units, $scope.ad.date_start);
        webServiceWrapper.buyAd($scope.ad.id, $scope.units, $scope.ad.date_start, function (data) {
            console.log(data);
            $scope.flash = data.message;
        });
    }

    $scope.buyAllSelectedAds = function() {
        for (var index = 0; index < $scope.ads.length; index++) {
            webServiceWrapper.buyAd($scope.ads[index].id, $scope.ads[index].buy_duration, $scope.ads[index].buy_date_start, function (data) {
                console.log(data);
                $scope.flash = data.message;
            });
        }
    }


    // Date picker
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy HH:mm', 'shortDate'];
    $scope.format = $scope.formats[2];
    $scope.datePickerOpened = false;
    $scope.dateOptions = {
        formatYear : 'yy',
        startingDay : 1
    };
    $scope.openSD = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.datePickerOpened = !$scope.datePickerOpened;
    };

}]);