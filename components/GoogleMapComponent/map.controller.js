'use strict';

map.controller('mapController',
    ['$scope', MapController]);

var scope;

function MapController($scope) {
    scope = $scope;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function initMap(position) {
    console.log(new Date().toLocaleString());
    if(position !== undefined) {
        var myGeo = {lat: position.coords.latitude, lng: position.coords.longitude};

        var venues = scope.venues;
        console.log(venues);

        map = new google.maps.Map(document.getElementById('map'), {
            center: myGeo,
            zoom: 12
        });
        for(var i in venues) {
            var venue = venues[i];
            var lat = venue['location']['lat'];
            var lng = venue['location']['lng'];
            var geo = { lat, lng };
            if(venue.promotion.haspromotion) {
                buildBouncingMarker(geo, venue['title'], "yellow");
            } else {
                buildMarker(geo, venue['title'], "blue");
            }
        }
        console.log(new Date().toLocaleString());
        buildMarker(myGeo, "Hello world !", "red");
    }
}

function buildMarker(geo, title, color) {
    var marker = new google.maps.Marker({
        map: map,
        position: geo,
        title: title,
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+".png"
    });
}

function buildBouncingMarker(geo, title, color) {
    var marker = new google.maps.Marker({
        map: map,
        position: geo,
        title: title,
        animation: google.maps.Animation.BOUNCE,
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+".png"
    });
}