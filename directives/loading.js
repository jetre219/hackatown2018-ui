var app = angular.module('readingcircle-app');

app.directive('loading', [
    function () {
        return {
            templateUrl: './directives/loading.template.html'
        };
    }
]);
