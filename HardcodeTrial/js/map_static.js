let mapOptions = {
    center:[49.4766, 8.4334],
    zoom: 14
}

let map = new L.map('map', mapOptions);



let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


  coords =[[49.4779,8.4490],[49.4718,8.4218],[49.4721,8.4323],[49.4768,8.412]];
  titles =["Verunreinigung","Parkverstoß","Defekte und Schäden","Parkverstoß"];
  descriptions=["Wilder Sperrmüll wurde am Wegesrand abgestellt","EScooter nicht ordnungsgemäß abgestellt","Großes Schlagloch mitten auf dem Radweg. Besonders bei Nacht gefährlich.","Baustellenfahrzeug blockiert die Straße"];
  pictures =["img/Sperrmüll.jpg","img/EScooter.jpg","img/Schlagloch.jpg","img/baustelle.jpg"];
  

  let l = coords.length;

  for(let i = 0; i < l;i++){
    
    var pop = L.popup({
        closeOnClick: true
    }).setContent('<h4>'+ descriptions[i] + ' <br></h4> <img src=' + pictures[i] + ' style="height: 100px">');
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    var tooltip = L.tooltip({
        permanent: true
    }).setContent(titles[i]);
    marker.bindTooltip(tooltip);  
  }