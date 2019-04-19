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
  
var link = "spotify_data_lat_long_separated.json";

var apiLink = "https://developer.spotify.com/console/get-artist-top-tracks/?id=0TnOYISbd1XYRBk9myaseg&country=US";
var geoJson;
d3.json(apiLink, function(data) {
  // Creating a geoJSON layer with the retrieved data
  // geoJson = L.geoJson(data, {
  //   // Style for each feature (in this case a neighborhood)
    
  //   // Called on each feature
     //onEachFeature: function(feature, layer) {
  //     // Setting various mouse events to change style when different events occur
  //     layer.on({
  //       // On mouse over, make the feature (neighborhood) more visible
  //       mouseover: function(event) {
  //         layer = event.target;
  //         layer.setStyle({
  //           fillOpacity: 0.9
  //         });
  //       },
  //       // Set the features style back to the way it was
  //       mouseout: function(event) {
  //         geoJson.resetStyle(event.target);
  //       },
  //       // When a feature (neighborhood) is clicked, fit that feature to the screen
  //       click: function(event) {
  //         map.fitBounds(event.target.getBounds());
  //       }
  //     });
  //     // Giving each feature a pop-up with information about that specific feature
  //     layer.bindPopup("<h1>" + feature.Artist + "</h1> <hr> <h2>" + feature.region + "</h2>");
  //   }
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < data.length; i++) {

    // Set the data location property to a variable
    var location = data[i].location;

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);





     });
    
  
