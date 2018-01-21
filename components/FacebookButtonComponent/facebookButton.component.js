'use strict';

facebookButton.directive('facebookButton', ['facebookButtonConfig', FacebookButtonComponent]);

function FacebookButtonComponent(facebookButtonConfig) {
    return {
        restrict: 'E',
        templateUrl: facebookButtonConfig.path + '/facebookButton.view.html',
        controller: 'facebookButtonController',
        controllerAs: 'facebookButtonController'
    }
}
