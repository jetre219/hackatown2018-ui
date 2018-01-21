'use strict';

activityGrid.controller('activityGridController',
    ['$scope', ActivityGridController]);

function ActivityGridController($scope) {

	$scope.categories = [
		{
			"name" : "Pub"
		},
		{
			"name" : "Movies"
		}
	];
}
