// Initialize and add the map
function initMap() {
    // The location of MR. Robot
    var location = {lat: 47.152845, lng: 27.613892};
    var iasi = {lat: 47.154198, lng: 27.604007}
    // The map, centered at Iasi
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: iasi});
    // The marker, positioned at Mr Robot
    var marker = new google.maps.Marker({position: location, map: map});
  }

