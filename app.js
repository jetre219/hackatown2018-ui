var app = angular.module("hackatown", [
    "ngRoute",
    "ngCookies",
    "activityList",
    "activityGrid",
    "backgroundVideo",
    "couponRedeem",
    "ui.materialize",
    "facebookButton",
    "map"
]);

app.run(["$rootScope",function($rootScope) {
}]);

app.config([
    "$routeProvider",
    "$httpProvider",
    "$locationProvider",
    function ($routeProvider, $httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home', {
                templateUrl: "./views/home.html",
                controller: "HomeCtrl"
            }).when('/login', {
            templateUrl: "./views/login.html",
            controller: "LoginCtrl"
        })
            .otherwise({
                redirectTo: "/home"
            });
    }
]);
