'use strict';

map.controller('mapController',
    ['$scope', MapController]);

var scope;

function MapController($scope) {
    google.maps.InfoWindow.prototype.opened = false;
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
                buildBouncingMarker(venue, "yellow");
            } else {
                buildMarker(venue, "blue");
            }
        }
        console.log(new Date().toLocaleString());
        buildUserMarker(myGeo);
    }
}

function buildContentString(venue) {
    console.log(venue);
    var urlText = '';
    var promotionText
    if(venue['url'] !== undefined && venue['url'] !== null) urlText = '<a href="'+venue['url']+'" target="_blank">Visit website</a>';
    if(venue['promotion'] !== undefined && venue['promotion'] !== null && venue['promotion']['haspromotion'] === true) {
        promotionText = '<hr/>' +
                '<p><strong>'+venue['promotion']['description']+'</strong></p>'+
                '<p> Group of '+venue['promotion']['necessarypeople']+' person minimum</p>';
    }

    var contentString =
        '<div class="map-info">' +
            '<p><strong>'+venue['name']+'</strong></p>' +
            '<p>'+venue['location']['formattedAddress'][0]+'</p>' +
            '<p>'+venue['location']['formattedAddress'][1]+'</p>' +
            urlText +
            promotionText +
        '</div>';
    return contentString;
}

function buildUserMarker(geo) {
    var marker = new google.maps.Marker({
        map: map,
        position: geo,
        title: "User",
        icon: "http://maps.google.com/mapfiles/ms/icons/red.png"
    });
}

function buildMarker(venue, color) {
    var lat = venue['location']['lat'];
    var lng = venue['location']['lng'];
    var geo = { lat, lng };
    var infowindow = new google.maps.InfoWindow({
        content: buildContentString(venue)
    });
    var marker = new google.maps.Marker({
        map: map,
        position: geo,
        title: venue['title'],
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+".png"
    });
    marker.addListener('click', function() {
        if(infowindow.opened === true) {
            infowindow.close(map, marker);
            infowindow.opened = false;
        } else {
            infowindow.open(map, marker);
            infowindow.opened = true;
        }
    });
    /*marker.addListener('mouseout', function() {
        infowindow.close(map, marker);
    });*/
}

function buildBouncingMarker(venue, color) {
    var lat = venue['location']['lat'];
    var lng = venue['location']['lng'];
    var geo = { lat, lng };
    var infowindow = new google.maps.InfoWindow({
        content: buildContentString(venue)
    });
    var marker = new google.maps.Marker({
        map: map,
        position: geo,
        title: venue['title'],
        animation: google.maps.Animation.BOUNCE,
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+".png"
    });
    /*marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
    });*/
    marker.addListener('click', function() {
        if(infowindow.opened === true) {
            infowindow.close(map, marker);
            infowindow.opened = false;
        } else {
            infowindow.open(map, marker);
            infowindow.opened = true;
        }
    });
}