
var app = angular.module("hackatown");
app.controller("HomeCtrl", [
    '$rootScope',
    '$scope',
    function ($rootScope, $scope) {

    	$rootScope.selectedGroup = {};

    	$scope.jobGroup = [
    		{
    			"name" : "Jeff",
    			"lon" : 43,
    			"lat": 45
    		},
    		{
    			"name": "Will",
    			"lon":43,
    			"lat":43
    		}
    	];

    	$scope.universityGroup = [
    		{
    			"name" : "Alex",
    			"lon" : 43,
    			"lat": 45
    		},
    		{
    			"name": "Ted",
    			"lon":43,
    			"lat":43
    		},
    		{
    			"name" : "Phil",
    			"lon" : 43,
    			"lat": 45
    		},
    		{
    			"name": "Sam",
    			"lon":43,
    			"lat":43
    		},
    		{
    			"name" : "Tom",
    			"lon" : 43,
    			"lat": 45
    		},
    		{
    			"name": "Etienne",
    			"lon":43,
    			"lat":43
    		}
    	];

    	$scope.selectGroup = function(group){
    		$rootScope.selectedGroup = group;
    	}

    }
]);
