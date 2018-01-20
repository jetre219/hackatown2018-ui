'use strict';

backgroundVideo.directive('backgroundVideo', ['backgroundVideoConfig', BackgroundVideoComponent]);

function BackgroundVideoComponent(backgroundVideoConfig) {
    return {
        restrict: 'E',
        templateUrl: backgroundVideoConfig.path + '/backgroundVideo.view.html',
        controller: 'backgroundVideoController',
        controllerAs: 'backgroundVideoController'
    }
}
