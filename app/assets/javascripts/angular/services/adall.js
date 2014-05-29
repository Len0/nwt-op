App.factory('AdAll',['$resource',function($resource){
	  return $resource('/ads/all.json');
}]);
