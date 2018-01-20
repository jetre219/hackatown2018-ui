var app = angular.module("hackatown");
app.controller("HomeCtrl", [
    '$rootScope',
    '$scope',
    function ($rootScope, $scope) {
        $scope.bookWeek = bookWeek;
        $rootScope.$on('$viewContentLoaded', function () {
            $('.parallax').parallax();
        });

    }
]);