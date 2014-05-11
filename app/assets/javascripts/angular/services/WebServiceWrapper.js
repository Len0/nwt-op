'use strict';

App.factory('webServiceWrapper', function ($resource, $http) {
    return {
        searchAds: function (searchText, price, type, callback) {
            console.log("SearchAds Call to WebService");


            var querry = '/search/ads.json?';
            var prefix = '';
            if (searchText != null) {
                querry += prefix + 'keyword=' + searchText;
                prefix = '&';
            }
            if (price != null) {
                querry += prefix + 'price=' + price;
                prefix = '&';
            }
            if (type != null) {
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
        }

    };
});