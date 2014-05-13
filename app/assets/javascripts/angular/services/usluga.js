App.factory('UslugaCreate',['$resource',function($resource){
	  return $resource('/usluga/create.json');
}]);
App.factory('UslugaAll',['$resource',function($resource){
	  return $resource('/usluga/all.json');
}]);