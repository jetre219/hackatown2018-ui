'use strict';

activityGrid.controller('activityGridController',
    ['$scope', '$rootScope', ActivityGridController]);

function ActivityGridController($scope, $rootScope) {

	$rootScope.categorySelected = false;

	$rootScope.selectCategory = function (){
		$rootScope.categorySelected = !$rootScope.categorySelected;
		console.log($rootScope.categorySelected);
	}
	
}
