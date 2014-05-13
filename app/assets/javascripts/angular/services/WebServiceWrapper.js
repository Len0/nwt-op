'use strict';

App.factory('webServiceWrapper', function ($resource, $http) {
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
        }

    };
});