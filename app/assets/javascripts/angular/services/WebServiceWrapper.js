'use strict';

App.factory('webServiceWrapper', function ($resource) {
    return {
        searchAds: function (searchText) {
            console.log("SearchAds Call to WebService");
            return $resource("/search/ads.json?keyword=" + searchText + "&type=1&price=20.0");
        }

    };
});