'use strict';

backgroundVideo.controller('backgroundVideoController',
    ['$scope', BackgroundVideoController]);
function BackgroundVideoController($scope) {

}
function init(){
    onYouTubePlayerAPIReady();
}
function onYouTubePlayerAPIReady()  {
    var player = new YT.Player('backgroundVideoContainer', {
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'cc_load_policy':3,
            'autohide': 1,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 1,
            'start': 3,
            'end': 21,
            'playlist': 'kwdwwoFI1Ts'
        },
        videoId: 'kwdwwoFI1Ts'
    });
}