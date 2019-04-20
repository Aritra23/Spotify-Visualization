d3.csv('/get_data').then(function (data) {
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