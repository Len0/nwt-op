window.App = angular.module('App', ['angularFileUpload','ngRoute','ui.bootstrap','ngResource', 'ngCookies' ,'pascalprecht.translate','rzModule'])
.config(['$routeProvider', function($routeProvider)
{
  $routeProvider.
    when('/marketer',{
        templateUrl: 'partials/marketer.html'
    }).
      when('/client/:success',{
          templateUrl: 'partials/client.html',
          controller: 'clientController'
      }).
    when('/client/',{
        templateUrl: 'partials/client.html',
        controller: 'clientController'
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
    when('/recovery',{
          templateUrl: 'partials/recovery.html',
          controller: 'userRegistrationController'
    }).
    when('/registerUserFormClient',{
          templateUrl: 'partials/registerFormClient.html',
          controller: 'userRegistrationController'
    }).
    when('/registerUserFormMarketer',{
          templateUrl: 'partials/registerFormMarketer.html',
          controller: 'userRegistrationController'
    }).
    when('/cjenovnik',{
    	templateUrl: 'partials/userUsluga.html',
    	controller: 'userUslugaController'
    }).
    when('/upload',{
    	templateUrl: 'partials/fileUpload.html',
    	controller: 'uploadController'
    }).
      when('/search',{
          templateUrl: 'partials/home.html',
          controller: 'homeController'
      }).
    when('/clientBought',{
    	templateUrl: 'partials/clientBought.html',
    	controller: 'clientBoughtController'
    }).otherwise({
        redirectTo: '/client'
        //,
        //templateUrl: 'partials/home.html',
        //controller: 'homeController'
    });
}]);
