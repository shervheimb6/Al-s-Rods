// Initialize and add the map
function initMap() {
    // The location of Als Rods
    var ARS = {lat: 46.895, lng:267.75};
    // The map, centered at Als Rods
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: ARS});
    // The marker, positioned at Als Rods
    var marker = new google.maps.Marker({position: ARS, map: map});
  }
    