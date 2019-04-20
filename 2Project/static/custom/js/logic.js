
d3.csv('/get_data').then(function (data) {

  var mapMarkers = [];
  data.forEach(function (d) {
    mapMarkers.push({
      latLng: [d.lat, d.long],
      name: [d["Track Name"], d.Streams]
    });
  });

  $('#world-map').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: 'blue', //'#1DB954',
        stroke: '#383f47',
        r: 8
      }
    },
    backgroundColor: '#000000', // #383f47
    markers: mapMarkers,
  });

  
});


d3.csv('/get_selected_data').then(function (data) {

  var mapMarkers = [];
  data.forEach(function (d) {
    mapMarkers.push({
      latLng: [d.lat, d.long],
      name: [d.Artist, d["Track Name"], d.Position]
    });
  });

  $('#map').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#1DB954',
        stroke: '#383f47',
        r: 8
      }
    },
    backgroundColor: '#000000', // #383f47
    markers: mapMarkers,
  });

  var tbody = d3.select("tbody");
  console.log(data);
  data.forEach(function(info) {
    console.log(info);
    var row = tbody.append("tr");
    Object.entries(info).forEach(function([index,value]) {
      console.log(value);
      var cell = tbody.append("td");
      cell.text(value);
    });
    
  });

});