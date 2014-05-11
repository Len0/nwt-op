App.factory('AdOffer',['$resource',function($resource){
	  return $resource('/ad/create.json');
}]);