App.controller('createAdOfferController', ['$scope', '$filter', 'AdOffer','AdTypes',
function($scope, $filter, AdOffer,AdTypes) {
	$scope.ad = {};
	$scope.tipovi = AdTypes.query();
	$scope.poruka='';
	$scope.ad_types = ['TV', 'Radio', 'Bilbord', 'Web', 'Novine'];
	$scope.today = function() {
		$scope.ad.date_start = new Date();
		$scope.ad.date_end = new Date();
	};
	$scope.today();

	$scope.clearSD = function() {
		$scope.ad.date_start = null;
	};
	$scope.clearED = function() {
		$scope.ad.date_end = null;
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	$scope.toggleMin();

	$scope.openSD = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened1 = true;
	};
	$scope.openED = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened2 = true;
	};

	$scope.dateOptions = {
		formatYear : 'yy',
		startingDay : 1
	};

	$scope.initDate = new Date();
	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy HH:mm', 'shortDate'];
	$scope.format = $scope.formats[2];
	$scope.posalji = function() {
		data = {
			title : $scope.ad.title,
			subtitle : $scope.ad.subtitle,
			description : $scope.ad.description,
			price : $filter('number')($scope.ad.price, 2),
			unit : $scope.ad.unit,
			date_start : $filter('date')($scope.ad.date_start, 'dd.MM.yyyy HH:mm'),
			date_end : $filter('date')($scope.ad.date_end, 'dd.MM.yyyy HH:mm'),
			visibility : $scope.ad.visibility,
			ad_type_id : $scope.ad.ad_type,
			max_duration : $filter('number')($scope.ad.max_duration||0, 0)

		};
		var odgovor=AdOffer.get(data,function(){
			$scope.poruka=JSON.stringify(odgovor.errors);
		});

	};

}]);
