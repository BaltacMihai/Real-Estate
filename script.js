var locations = [
    ["Bondi Beach", 44.439563, 26.096376, 4],
    ["Coogee Beach", 44.469561, 26.096576, 5],
    ["Cronulla Beach", 44.339561, 26.086376, 3],
    ["Manly Beach", 44.479562, 26.066276, 2],
    ["Maroubra Beach", 44.339553, 26.106366, 1],
];





var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(44.439663, 26.096306),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
    });
    var ourPlace = document.getElementsByClassName('card');
    console.log(ourPlace);
    google.maps.event.addListener(
        marker,
        "click",
        (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);


            };
        })(marker, i)
    );
}