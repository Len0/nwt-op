window.App = angular.module('App', ['ngRoute','ui.bootstrap','ngResource'])
.config(['$routeProvider',function($routeProvider)
{
  $routeProvider.
    when('/marketer',{
    	templateUrl: 'partials/marketer.html'
    }).
    when('/client',{
    	templateUrl: 'partials/client.html'
    }).otherwise({ redirectTo: '/marketer' });
}]);
