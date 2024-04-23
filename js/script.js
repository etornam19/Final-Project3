function initMap(){
    //add your javascrip between these two lines of code
    let boba = {lat: 41.85441589355469, lng:-87.63263702392578};
    let map = new google.map.Map(
      document.getElementById("map"), {zoom:10, center: boba});
    let loc = new google.maps.Marker({position: boba, map: googlemap})
}

function displayMap(){
  const mapOptions = {
    center: {lat: 41.85441589355469, lng:-87.63263702392578},
    zoom: 10
  };
    
  const mapDiv  = document.getElementById("map");
  const map = new google.map.Map( mapDiv, mapOptions);
  return map;

}
google.maps.event.addDomListener(window,'load', initMap);
google.maps.event.addDomListener(window,'load', displayMap);