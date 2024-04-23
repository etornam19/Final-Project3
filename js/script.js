function initMap(){
    map = new google.map.Map(document.getElementById("map"))
    //add your javascrip between these two lines of code
    let boba = {lat: 41.85441589355469, lng:-87.63263702392578};
    let map = new google.map.Map(
        document.getElementById("map"), {zoom:10, center: boba});
    let loc = new google.maps.Marker({position: boba, map: googlemap})

}
google.maps.event.addDomListener(window,'load', initMap);