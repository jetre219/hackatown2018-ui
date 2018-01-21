'use strict';

activityGrid.controller('activityGridController',
    ['$scope', 'venuesProvider', ActivityGridController]);

function ActivityGridController($scope, venuesProvider) {

	var venues = $api.venues().then(function success(response){
    	return response.data.response.venues;
  	});

	$scope.categories = [
		{
			"name" : "Pub"
		},
		{
			"name" : "Movies"
		}
	];
}
