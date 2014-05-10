window.App = angular.module('App', ['ngRoute','ui.bootstrap','ngResource'])
.config(['$routeProvider', function($routeProvider)
{
  $routeProvider.
    when('/marketer',{
        templateUrl: 'partials/marketer.html'
    }).
    when('/client',{
        templateUrl: 'partials/client.html'
    }).
    when('/searchAds/:searchText',{
        templateUrl: 'partials/searchAds.html',
        controller: 'searchAdsController'
    }).otherwise({
        redirectTo: '/home',
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    });
}]);
