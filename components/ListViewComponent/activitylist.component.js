'use strict';

activityList.directive('activityList', ['activityListConfig', ActivityListComponent]);

function ActivityListComponent(activityListConfig) {
    return {
        restrict: 'E',
        templateUrl: activityListConfig.path + '/activitylist.view.html',
        controller: 'activityListController',
        controllerAs: 'activityListController'
    }
}
