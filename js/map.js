// Initialize and add the map
let map;

async function initMap() {
  
  var ma = document.getElementById('boba');
  var position = {lat: 41.854415, lng:-87.632637};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  var map = new Map(document.getElementById('boba'), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Tiger Sugar Boba Shop",
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
