let mapOptions = {
    center:[49.4766, 8.4334],
    zoom: 14
}

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
    
meldungenJson = document.getElementById("meldungInserted");
//Test
let htmlString = "";

let json = [{
    "meldungNummer": "001254125",
    "bild": "img/Sperrmüll.jpg",
    "kategorie": "Verunreinigung",
    "beschreibung": "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
    "status": "Eingereicht",
    "nachname": "Meier",
    "vorname": "Hans",
    "email": "Hansmeier@gmail.com",
    "kommentar":"width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;width: 90%;wi",
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
    "kommentar":" ",
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
    "kommentar":" ",
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
    "kommentar":" ",
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
                                '<p id="status"><b>Status:</b> '+obj.status+'</p>'+
                                '<p id="beschreibung" class="beschreibung-style"><b>Beschreibung:</b> '+obj.beschreibung+'</p>'+
                                '<p id="kommentar" class="kommentar-style"><b>Kommentar:</b> '+obj.kommentar+'</p>'+ 
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