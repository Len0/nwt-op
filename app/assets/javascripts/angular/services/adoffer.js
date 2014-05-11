App.factory('AdOffer',['$resource',function($resource){
	  return $resource('/ad/create.json');
}]);
App.factory('AdTypes',['$resource',function($resource){
	  return $resource('/ad/all_types.json');
}]);
App.factory('NewAdType',['$resource',function($resource){
	  return $resource('/ad/create_type.json');
}]);