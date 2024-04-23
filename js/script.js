function initMap(){
    map = new google.map.Map(document.getElementById("map"))
    //add your javascrip between these two lines of code
    var boba = {lat: 40.700802, lng:73.987602};
    var googlemap = new google.maps.Map(document.getElementById("map"), {center: boba});
    var loc = new google.maps.Marker({position: boba, map: googlemap})

}
google.maps.event.addDomListener(window,'load', initMap);