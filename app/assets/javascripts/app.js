window.App = angular.module('App', ['ngRoute','ui.bootstrap','ngResource'])
.config(['$routeProvider',function($routeProvider)
{
  $routeProvider.
    when('/marketer',{
      templateUrl: 'partials/marketer.html'
    }).otherwise({ redirectTo: '/marketer' });
}]);
