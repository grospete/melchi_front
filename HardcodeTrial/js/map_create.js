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

let locations = [
    {
        "id": 1,
        "lat": 49.4779,
        "long": 8.4490,
        "title":"Defekte und Schäden",
        "src":"img/Sperrmüll.jpg",
        "url":"einsehen.html"
    },
    {
        "id": 2,
        "lat": 49.4718,
        "long": 8.4218,
        "title":"Parkverstoß",
        "src":"img/EScooter.jpg",
        "url":"einsehen.html"
    },
    {
        "id": 3,
        "lat": 49.4721,
        "long": 8.4323,
        "title":"Verunreinigung",
        "src":"img/Schlagloch.jpg",
        "url":"einsehen.html"
    },
    {
        "id": 4,
        "lat": 49.4768,
        "long": 8.412,
        "title":"Defekte und Schäden",
        "src":"img/baustelle.jpg",
        "url":"einsehen.html"
    }
];
locations.forEach(element => {
   new L.Marker([element.lat, element.long]).addTo(map)
   .on("mouseover", event =>{
    event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt='+element.title+'><h3>'+element.title+'</h3></div>').openPopup();
   })
   .on("mouseout", event =>{
    event.target.closePopup();
   })
   .on("click", () => {
        window.open(element.url);
   })
});

function detectButton(){
    defekte = document.getElementById("radio-defekte");
    verunreinigung = document.getElementById("radio-verunreinigungen");
    parken = document.getElementById("radio-parken");
    if(defekte.checked == true){
        document.getElementById("div-box").value = defekte.value;
        radio_result = defekte.value;
    } else if(verunreinigung.checked == true){
        document.getElementById("div-box").value = verunreinigung.value;
        radio_result = verunreinigung.value;
    } else if(parken.checked == true){
        document.getElementById("div-box").value = parken.value;
        radio_result = parken.value;
    } else{
        radio_result = "Keine Kategorie ausgewählt";
    }
}

