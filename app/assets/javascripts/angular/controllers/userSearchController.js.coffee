App.controller 'UserSearchController', ['$scope','User', ($scope,User) ->
  $scope.users = User.query( ->
    $scope.totalItems = $scope.users.length;
    $scope.currentPage = 1
    $scope.maxSize = 1
    $scope.bigTotalItems = 1
    $scope.bigCurrentPage = 1
  )
]