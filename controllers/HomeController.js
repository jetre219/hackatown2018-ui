
var app = angular.module("hackatown");
app.controller("HomeCtrl", [
    '$rootScope',
    '$scope',
    '$api',
    function ($rootScope, $scope, $api) {

    	$api.venues().then(function success(response){
	        $rootScope.venues = addPromotion(response.data.response.venues);
	        $rootScope.categories = [
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

    	var jobGroup = [
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

    	var schoolGroup = [
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

    	$rootScope.selectedGroup = jobGroup;

    	$scope.selectSchoolGroup = function(){
    		$rootScope.selectedGroup = schoolGroup;
    		$api.venues().then(function success(response){
	        $rootScope.venues = addPromotion(response.data.response.venues);
	        $rootScope.categories = [
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
    	}

    	$scope.selectJobGroup = function(){
    		$rootScope.selectedGroup = jobGroup;
    		$api.venues().then(function success(response){
	        $rootScope.venues = addPromotion(response.data.response.venues);
	        $rootScope.categories = [
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
    	}

    	function addPromotion(venues){
        venues.forEach(function (venue){
            var randomNumber = Math.floor((Math.random() * 10) + 1);
            var promotion = {};
            promotion.haspromotion = false;
            if(randomNumber < 4 && $rootScope.selectedGroup.length >= 5){
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

    }
]);
