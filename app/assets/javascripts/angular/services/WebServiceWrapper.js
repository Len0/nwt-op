'use strict';

App.factory('webServiceWrapper',['$resource','$http','$filter', function ($resource, $http, $filter) {
    return {
        searchAds: function (searchText, price, type, callback) {
            console.log("searchAds Call to WebService");

            var querry = '/search/ads.json';
            var prefix = '?';
            if (searchText != "undefined") {
                querry += prefix + 'keyword=' + searchText;
                prefix = '&';
            }
            if (price != "undefined") {
                querry += prefix + 'price=' + price;
                prefix = '&';
            }
            if (type != "undefined") {
                querry += prefix + 'type=' + type;
            }
            console.log(querry);


            $http({method: 'GET', url: querry}).
                success(function (data, status, headers, config) {
                    callback(data);
                }).
                error (function (data, status, headers, config) {
                    console.log("Error: " + data);
                });
        },

        searchMarketers: function (name, callback) {
            console.log("searchMarketers Call to WebService");
            var querry = '/search/marketers.json';
            if (name != "undefined") {
                querry += '?name=' + name;
            }
            $http({method: 'GET', url: querry}).
                success(function (data, status, headers, config) {
                    callback(data);
                }).
                error (function (data, status, headers, config) {
                console.log("Error: " + data);
            });
        },


        getUser: function (id, callback) {
            console.log("getUser Call to WebService. ID: " + id);
            $http({method: 'GET', url: 'user/get/' + id + '.json'}).
                success(function (data, status, headers, config) {
                    callback(data);
                }).
                error (function (data, status, headers, config) {
                console.log("Error: " + data);
            });
        },

        getAd: function(id, callback) {
            console.log("getAd Call to WebService. ID: " + id);
            $http({method: 'GET', url: 'ad/get/' + id + '.json'}).
                success(function (data, status, headers, config) {
                    callback(data);
                }).
                error (function (data, status, headers, config) {
                console.log("Error: " + data);
            });
        },

        buyAd: function(adID, units, dateStart, callback) {
            console.log("buyAd Call to WebService. ID: " + adID);
            $http({method: 'GET', url: 'ad/buy.json?ad_offer_id=' + adID + '&duration=' + units + '&date_start=' + $filter('date')(dateStart, 'dd.MM.yyyy HH:mm')}).
                success(function (data, status, headers, config) {
                    callback(data);
                }).
                error (function (data, status, headers, config) {
                console.log("Error: " + data);
            });
        },

        registerUser: function(user, callback){
            alert("##Kreiranje korisnika##");

            $http({
                url: '/user/create.json',
                method: "POST",
                data: $.param($scope.user) ,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                    $scope.data =  data;
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });
        }

    };
}]);