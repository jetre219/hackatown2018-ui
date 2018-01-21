'use strict';

activityList.controller('activityListController',
    ['$scope', '$api',  ActivityListController]);

function ActivityListController($scope, $api) {

    $api.venues().then(function success(response){
        $scope.venues = addPromotion(response.data.response.venues);
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
                promotion.qrcode = createQrCode();
            }
            venue.promotion = promotion;
        });
        return venues;
    }

    function makeqrid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    function createQrCode(){
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(makeqrid());
        qr.make();
        return qr;
    }

}
