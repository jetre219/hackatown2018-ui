'use strict';

activityList.controller('activityListController',
    ['$scope', '$api',  ActivityListController]);

function ActivityListController($scope, $api) {

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
