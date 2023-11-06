function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Hello, World!'
    });
}

// This function is called when the Google Maps API has loaded
function handleMapsApiLoad() {
    // Initialize the map
    initMap();
}