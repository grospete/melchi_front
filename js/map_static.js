let mapOptions = {
    center:[49.4766, 8.4334],
    zoom: 14
}

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

  let json = [{
    "meldungNummer": "001254125",
    "bild": "img/Sperrmüll.jpg",
    "kategorie": "Verunreinigung",
    "beschreibung": "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
    "status": "Eingereicht",
    "lat": "49.4779",
    "lng": "8.4490"
},
{
    "meldungNummer": "005464812",
    "bild": "img/EScooter.jpg",
    "kategorie": "Parkverstoß",
    "beschreibung": "EScooter nicht ordnungsgemäß abgestellt",
    "status": "Eingereicht",
    "lat": "49.4718",
    "lng": "8.4218"
},
{
    "meldungNummer": "001469824",
    "bild": "img/Schlagloch.jpg",
    "kategorie": "Defekte und Schäden",
    "beschreibung": "Großes Schlagloch mitten auf dem Radweg. Besonders bei Nacht gefährlich.",
    "status": "Eingereicht",
    "lat": "49.4721",
    "lng": "8.4323",
},
{
    "meldungNummer": "001469821",
    "bild": "img/baustelle.jpg",
    "kategorie": "Defekte und Schäden",
    "beschreibung": "Baustellenfahrzeug blockiert die Straße.",
    "status": "In bearbeitung",
    "lat": "49.4768",
    "lng": "8.412"

}];

  for(let i = 0; i < json.length;i++){
    obj = json[i];
    coordsJson = [obj.lat,obj.lng];
    var pop = L.popup({
        closeOnClick: true
    }).setContent(
      '<div class="meldung_container_style_map" id="meldung'+i+'">'+
          '<div class="meldung_image_map" id="imageMeldung">'+
            '<img src='+obj.bild+' class="meldung_image_style">'+
          '</div>'+
          '<div class="meldung_text_map">'+
            '<text>'+  
              '<text id="kategorie"><b>Kategorie:</b>    '+obj.kategorie+'</text>'+
              '<br>'+
              '<text id="status"><b>Status:</b> '+obj.status+'</text>'+
              '<br>'+
              '<text><b>Meldung Nummer:</b> '+obj.meldungNummer+'</text>'+
            '</text>'+
            '<br>'+
          '</div>'+
      '</div>'
      );


    var marker = L.marker(coordsJson).addTo(map).bindPopup(pop);

    var tooltip = L.tooltip({
        permanent: true
    }).setContent(obj.kategorie);
    marker.bindTooltip(tooltip);  
  }