'use strict';

activityGrid.controller('activityGridController',
    ['$scope', '$rootScope', '$api', ActivityGridController]);

function ActivityGridController($scope, $rootScope, $api) {

	$rootScope.categorySelected = false;

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
            var promotion = {};
            promotion.haspromotion = false;
            if(randomNumber < 4){
                promotion.haspromotion = true;
                promotion.necessarypeople = Math.floor((Math.random() * 5) + 2);
                promotion.description = "10% off on 20$ purchase and more!";
                promotion.qrcode = createQrCode();
            }
            venue.promotion = promotion;
        });
        return venues;
    }

    function createQrCode(){
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(makeqrid());
        qr.make();
        return qr;
	}

	function makeqrid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    function amountOfVenuesWithPromotion(){
    	var venuesWithPromotion = 0;
    	for (var i = 0; i < $rootScope.venues.length; i++){
    		if ($rootScope.venues[i].promotion.haspromotion === true){
    			venuesWithPromotion++;
    		}
    	}
    	return venuesWithPromotion;
    }

	$rootScope.selectCategory = function (){
		$rootScope.categorySelected = !$rootScope.categorySelected;
		console.log($rootScope.categorySelected);
	}
	
}
