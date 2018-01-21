'use strict';

activityGrid.directive('activityGrid', ['activityGridConfig', ActivityGridComponent]);

function ActivityGridComponent(activityGridConfig) {
    return {
        restrict: 'E',
        templateUrl: activityGridConfig.path + '/activitygrid.view.html',
        controller: 'activityGridController',
        controllerAs: 'activityGridController'
    }
}
