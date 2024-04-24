let map;
async function initMap(){
    //add your javascrip between these two lines of code
    const boba = {lat: 41.85441589355469, lng:-87.63263702392578};
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    map = new google.map.Map(document.getElementById("map"), {
        zoom:10, 
        center: boba
    });
    marker = new AdvancedMarkerElement({
        position: boba, 
        map: map,
    });
}
google.maps.event.addDomListener(window, 'load', initMap);