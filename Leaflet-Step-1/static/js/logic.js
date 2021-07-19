// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
function createMap() {

  var myMap = L.map("mapid", {
    center: [34.0522, -118.2437],
    zoom: 5
  });

  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

}

var earthQuakeJson = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// var earthQuakeJson = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";




// function creatEarthQuake(earthJson){
//   var features = earthJson.features;

//   onEachFeature(features)

//   // // console.log(features)
//   // for (var i = 0; i <features.length; i++ ){
//   //   console.log(features[i].properties.mag)
//   // }
// }




// function onEachFeature(feature, layer) {
//   // does this feature have a property named popupContent?
//   // if (feature.properties && feature.properties.popupContent) {
//   //     layer.bindPopup(feature.properties.popupContent);
//   // }
// }



function createMarkers(response) {
  var features = response.features
  // console.log(features)
  
  var earrhQuakeLoc = [];
  for (var i = 0; i <features.length; i++){
    features
    var lat = features[i].geometry.coordinates[0]
    var lon = features[i].geometry.coordinates[1]
    var QuakeLoc = L.marker([lat,lon])
    .bindPopup("<h3>" + lat + "<h3><h3>Lon: " + lon + "</h3>");

    earrhQuakeLoc.push(QuakeLoc)
  };
  // console.log(earrhQuakeLoc);
  createMap();
}


d3.json(earthQuakeJson).then(createMarkers)











