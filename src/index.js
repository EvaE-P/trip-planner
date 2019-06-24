console.log('Hello from JavaScript');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')
mapboxgl.accessToken =
  'pk.eyJ1IjoieXpoYW5nNzI5IiwiYSI6ImNqeGFqcGZkbTAxdTczbm1hcmN3anAyeG0ifQ.bb0Kd3616v23cjtIx5SA_Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement('img');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.src = 'https://cdn2.iconfinder.com/data/icons/circular-icons-line/82/Circular_Destination_Marker-512.png';
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

buildMarker('activities',[-74.009, 40.705]).addTo(map);