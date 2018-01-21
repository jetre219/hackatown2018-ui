'use strict';

activityGrid.controller('activityGridController',
    ['$scope', 'venuesProvider', ActivityGridController]);

function ActivityGridController($scope, venuesProvider) {

	$scope.categories = [
		{
			"name" : "Pub"
		},
		{
			"name" : "Movies"
		}
	];
}
