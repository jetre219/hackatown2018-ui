var app = angular.module("readingcircle-app", [
    "ngRoute",
    "ngCookies",
    "ui.materialize"
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
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
]);
