'use strict';

couponRedeem.directive('couponRedeem', ['couponRedeemConfig', CouponRedeemComponent]);

function CouponRedeemComponent(couponRedeemConfig) {
    return {
        restrict: 'E',
        templateUrl: couponRedeemConfig.path + '/couponredeem.view.html',
        controller: 'couponRedeemController',
        controllerAs: 'couponRedeemController'
    }
}
