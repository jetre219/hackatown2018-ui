var app = angular.module("hackatown");

app.factory("$api", [
    "$http",
    "$rootScope",
    function ($http, $rootScope) {
        var FOURSQUARE_URL = "https://api.foursquare.com/v2/venues/search?ll=45.504908799999995,-73.615113&intent=checkin&radius=5000&categoryId=4d4b7105d754a06376d81259&limit=50&client_id=Y5U4EZY1EVID34S4SJ2M44D3ULFZCXP4DCVSZVIJWKTWHEYV&client_secret=225XHPOKEIIZVMVUUKHU0ELPG2WBUENOEZWTXRWT0FKGEZB0&v=20180101"

        function htmlEscape(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        return {
            venues: function venues() {
                return $http({
                    url: FOURSQUARE_URL,
                    method: 'GET'
                });
            }
        };
    }
]);
