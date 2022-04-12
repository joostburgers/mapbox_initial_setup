// JavaScript for enabling the map on load.

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9vc3RidXJnZXJzIiwiYSI6ImNqZmZjaGtzaDRrMncycXBrazdzNzFzZXUifQ.7MZmVPD9cq_QtgpzkcZPyA';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/joostburgers/cl1w8a046000q14rrrewcwdem', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};
