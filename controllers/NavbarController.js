var app = angular.module("hackatown");
app.controller('NavbarCtrl', [
    "$scope",
    "$rootScope",
    "$cookies",
    "$api",
    function ($scope, $rootScope, $cookies, $api) {
        var alreadyLoaded = false;
        $scope.username = "JeffTremblay";
    }
]);
