'use strict';

activityList.controller('activityListController',
    ['$scope', '$api',  ActivityListController]);

function ActivityListController($scope, $api) {
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData('Hi!');
    qr.make();
    console.log("test");
    $scope.imgElement = qr.createImgTag();

}
