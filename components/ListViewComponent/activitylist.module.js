'use strict';

var activityList = angular.module('activityList', [
      'ngSanitize'
    ]);

activityList.constant('activityListConfig', {
   'path' : '/components/ListViewComponent'
});