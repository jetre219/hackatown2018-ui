'use strict';

activityGrid.controller('activityGridController',
    ['$scope', '$rootScope', '$api', ActivityGridController]);

function ActivityGridController($scope, $rootScope, $api) {

	$api.venues().then(function success(response){
        $rootScope.venues = addPromotion(response.data.response.venues);
        $scope.categories = [
			{
				"name" : "Bar",
				"qtyPromotion" : amountOfVenuesWithPromotion()
			},
			{
				"name" : "Movies",
				"qtyPromotion":0
			},
			{
				"name" : "Night Life",
				"qtyPromotion" : 0
			},
			{
				"name" : "Restaurant",
				"qtyPromotion" : 0
			},
			{
				"name" : "Outdoor Activities",
				"qtyPromotion" : 0
			},
			{
				"name" : "Sport",
				"qtyPromotion" : 0
			},
		];
    });

    function addPromotion(venues){
        venues.forEach(function (venue){
            var randomNumber = Math.floor((Math.random() * 10) + 1);
            var promotion = Object();
            promotion.haspromotion = false;
            if(randomNumber < 4){
                promotion.haspromotion = true;
                promotion.necessarypeople = Math.floor((Math.random() * 5) + 2);
                promotion.description = "10% off on 20$ purchase and more!";
                //promotion.qrcode = createQrCode();
            }
            venue.promotion = promotion;
        });
        return venues;
    }

    function amountOfVenuesWithPromotion(){
    	var venuesWithPromotion = 0;
    	for (var i = 0; i < $rootScope.venues; i++){
    		if ($rootScope.venues.haspromotion === true){
    			venuesWithPromotion++;
    		}
    	}
    	return venuesWithPromotion;
    }

	console.log($rootScope.venues);
	
}
