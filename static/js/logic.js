// Creating map object
var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
var file = "../spotify_data_lat_long_separated.csv";

d3.csv(file, function(response, layer) {

  console.log(response);
  //var markers = L.markerClusterGroup();
  // 
  for (var i = 0; i < response.length; i++) {
    var location = response[i].city_coord;
    console.log(location);
    if (location) {
      layer.bindPopup("<h1>" + response[i].city_coord + "</h1><hr> <h2>"+response[i].Artist+"</h2>");
    }
  }
  // myMap.addLayer(markers);
});
