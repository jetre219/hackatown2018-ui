var app = angular.module("hackatown");

app.factory("$api", [
    "$http",
    "$rootScope",
    function ($http, $rootScope) {
        var FOURSQUARE_URL = "https://api.foursquare.com/v2/venues/search?ll=45.504908799999995,-73.615113&intent=checkin&radius=5000&categoryId=4d4b7105d754a06376d81259&limit=50&client_id=GF3KFNE2GIUILKGFLUVPUZ2BZTKQ0E0X4KUNR5OV0MX3ZJ2Q&client_secret=XIHVVRAOUPZPNVDH2MWFYT0WSJYROPCUAC340KR04UM5SEXN&v=20180101"

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
