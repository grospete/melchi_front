let mapOptions = {
    center:[49.4766, 8.4334],
    zoom: 14
}

let map = new L.map('map', mapOptions);



let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//delete in the end
  coords =[[49.4779,8.4490],[49.4718,8.4218],[49.4721,8.4323],[49.4768,8.412]];
  

  let l = coords.length;
  //delete
  //delete
    
  meldungenJson = document.getElementById("meldungInserted");
//Test
let htmlString = "";

let json = [{
    "meldungNummer": "001254125",
    "bild": "img/Sperrmüll.jpg",
    "kategorie": "Verunreinigung",
    "beschreibung": "Wilder Sperrmüll wurde am Wegesrand abgestellt",
    "status": "Eingereicht",
    "nachname": "Meier",
    "vorname": "Hans",
    "email": "Hansmeier@gmail.com",
    "lat": "49.4779",
    "lng": "8.4490"
},
{
    "meldungNummer": "005464812",
    "bild": "img/EScooter.jpg",
    "kategorie": "Parkverstoß",
    "beschreibung": "EScooter nicht ordnungsgemäß abgestellt",
    "status": "Eingereicht",
    "nachname": "Heister",
    "vorname": "Mathilde",
    "email": "m.heister@gmx.com",
    "lat": "49.4718",
    "lng": "8.4218"
},
{
    "meldungNummer": "001469824",
    "bild": "img/Schlagloch.jpg",
    "kategorie": "Defekte und Schäden",
    "beschreibung": "Großes Schlagloch mitten auf dem Radweg. Besonders bei Nacht gefährlich.",
    "status": "Eingereicht",
    "nachname": "Sanchez",
    "vorname": "Ivor",
    "email": "sanchezivor@outlook.de",
    "lat": "49.4721",
    "lng": "8.4323",
},
{
    "meldungNummer": "001469821",
    "bild": "img/baustelle.jpg",
    "kategorie": "Parkverstoß",
    "beschreibung": "Baustellenfahrzeug blockiert die Straße.",
    "status": "In Bearbeitung",
    "nachname": "Müller",
    "vorname": "Tasmilla",
    "email": "tmüller@outlook.de",
    "lat": "49.4768",
    "lng": "8.412"

}];
// loop through the json
for(let x = 0; x < json.length; x++) {
    obj = json[x];
    //insert the objects in as a card in the html
        htmlString +=   '<div class="meldung_container_style" id="meldung'+x+'">'+
                            '<h3 class="startseite"> Meldung Nummer: '+ obj.meldungNummer + '</h3>' + 
                            '<div class="meldung_container_image_style" id="imageMeldung">'+
                                '<img src='+obj.bild+' class="meldung_image_style">'+
                            '</div>'+
                            '<div>'+
                                '<text class="meldung_text_style">'+ 
                                '<p><b>Nachname:</b> '+obj.nachname+' <b>Vorname:</b> '+obj.vorname+'</p>'+
                                '<p id="email"><b>EMail:</b> '+obj.email+'</p>'+
                                '<p id="kategorie"><b>Kategorie:</b>    '+obj.kategorie+'</p>'+
                                '<p id="beschreibung"><b>Beschreibung:</b> '+obj.beschreibung+'</p>'+
                                '<p id="status"><b>Status:</b> '+obj.status+'</p>'+
                                '</text>'+
                                '<br>'+
                            '</div>'+
                        '</div>'
                        ;
}
meldungInserted.innerHTML = htmlString;
//Test
window.onload=function(){

  for(let i = 0; i < json.length;i++){
    meldungVar = document.querySelector("#meldung"+[i]);
    nobj = json[i];
    coordsJson = [nobj.lat,nobj.lng];

    console.log(kategorie);

    var pop = L.popup({
          closeOnClick: true
     });
    var marker = L.marker([json[i].lat,json[i].lng]).addTo(map).bindPopup(pop);

    var tooltip = L.tooltip({
       permanent: true
    }).setContent(json[i].kategorie);
    marker.bindTooltip(tooltip);  

    if(meldungVar != null){
        meldungVar.addEventListener("mouseover", ()=> {
           map.flyTo([json[i].lat,json[i].lng], 16);
        })
    }
  }
}