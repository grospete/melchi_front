let mapOptions = {
    center:[49.4766, 8.4334],
    zoom: 14
}
let map = new L.map('map', mapOptions);


let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let customIcon = {
    iconUrl: "img/Markericon.png",
    iconSize: [40,40],
}
let myIcon = L.icon(customIcon);
let iconOptions = {
    title:"company name",
    draggable: true,
    icon: myIcon
}

// Experiment
for(i=0; i >= 1; i++){4}
map.once('click', function (e) {
    console.log(e)
    marker  = new L.Marker([e.latlng.lat,e.latlng.lng], iconOptions);
    marker.addTo(map);
    marker.bindPopup("Sie haben einen Ort für die neue Meldung ausgewählt. Wenn Sie den Ort ändern wollen, verschieben Sie den Marker mit der Maus.").openPopup();
    document.getElementById("div-lat").value = e.latlng.lat;
    document.getElementById("div-lng").value = e.latlng.lng;
    console.log(marker);
    L.marker([50.5, 30.5]).addTo(map);

    let location = [
        {
            "id": 6,
            "lat": e.latlng.lat,
            "long": e.latlng.lng,
            "title":"Ihre Meldung",
        }
    ];
    console.log(location);
  })
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


json.forEach(element => {
   new L.Marker([element.lat, element.lng]).addTo(map)
   .on("click", event =>{
    event.target.bindPopup('<div class="meldung_container_style_map" ">'+
    '<div class="meldung_image_map" id="imageMeldung">'+
      '<img src='+element.bild+' class="meldung_image_style">'+
    '</div>'+
    '<div class="meldung_text_map">'+
      '<text>'+  
        '<text id="kategorie"><b>Kategorie:</b>    '+element.kategorie+'</text>'+
        '<br>'+
        '<text id="status"><b>Status:</b> '+element.status+'</text>'+
        '<br>'+
        '<text><b>Meldung Nummer:</b> '+element.meldungNummer+'</text>'+
      '</text>'+
      '<br>'+
    '</div>'+
'</div>').openPopup();
   })});

function detectButton(){
    defekte = document.getElementById("radio-defekte");
    verunreinigung = document.getElementById("radio-verunreinigungen");
    parken = document.getElementById("radio-parken");
    sonstige = document.getElementById("radio-sonstige");
    if(defekte.checked == true){
        document.getElementById("div-box").value = defekte.value;
        radio_result = defekte.value;
    } else if(verunreinigung.checked == true){
        document.getElementById("div-box").value = verunreinigung.value;
        radio_result = verunreinigung.value;
    } else if(parken.checked == true){
        document.getElementById("div-box").value = parken.value;
        radio_result = parken.value;
    } else if(sonstige.checked == true){
        document.getElementById("div-box").value = sonstige.value;
        radio_result = sontige.value;
    } else{
        radio_result = "Keine Kategorie ausgewählt";
    }
}

