// JavaScript for enabling the map on load.

mapboxgl.accessToken = 'change HERE';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'change HERE', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};