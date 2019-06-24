const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "https://cdn2.iconfinder.com/data/icons/circular-icons-line/82/Circular_Destination_Marker-512.png"
}


const buildMarker = function (type, coords) {
const markerDomEl = document.createElement('img');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.src = iconURLs[type]
return new mapbox.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker