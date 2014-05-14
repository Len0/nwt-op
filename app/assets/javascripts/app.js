window.App = angular.module('App', ['ngRoute','ui.bootstrap','ngResource', 'ngCookies'])
.config(['$routeProvider', function($routeProvider)
{
  $routeProvider.
    when('/marketer',{
        templateUrl: 'partials/marketer.html'
    }).
    when('/client',{
        templateUrl: 'partials/client.html'
    }).
    when('/searchAds/:text/:price/:type',{
        templateUrl: 'partials/searchAds.html',
        controller: 'searchAdsController'
    }).
    when('/searchMarketers/:name',{
        templateUrl: 'partials/searchMarketers.html',
        controller: 'searchMarketersController'
    }).
    when('/oglas/:id',{
        templateUrl: 'partials/pregledOglasa.html',
        controller: 'viewAdController'
    }).
    when('/oglasivac/:id',{
        templateUrl: 'partials/pregledOglasivaca.html',
        controller: 'viewMarketerController'
    }).
    when('/createAdOffer',{
    	templateUrl: 'partials/unosAdOffer.html',
    	controller: 'createAdOfferController'
    }).
    when('/register',{
          templateUrl: 'partials/userRegister.html',
          controller: 'userRegistrationController'
    }).
    when('/cjenovnik',{
    	templateUrl: 'partials/userUsluga.html',
    	controller: 'userUslugaController'
    }).otherwise({
        redirectTo: '/home',
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    });
}]);
