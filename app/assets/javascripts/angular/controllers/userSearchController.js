App.controller ('UserSearchController', ['$scope','User', function($scope,User){
    $scope.users = User.query(
    function($scope){
      $scope.totalItems = $scope.users.length;
      $scope.currentPage = 1;
      $scope.maxSize = 1;
      $scope.bigTotalItems = 1;
      $scope.bigCurrentPage = 1;
  });
}]);