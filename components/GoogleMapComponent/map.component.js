'use strict';

map.directive('map', ['mapConfig', GoogleMapComponent]);

function GoogleMapComponent(mapConfig) {
    return {
        restrict: 'E',
        templateUrl: mapConfig.path + '/map.view.html',
        controller: 'mapController',
        controllerAs: 'mapController'
    }
}
