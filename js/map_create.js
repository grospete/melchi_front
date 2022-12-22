async function performPageBuild(json) {
    let mapOptions = {
        center: [49.4766, 8.4334],
        maxBounds: [[49.4334, 8.3441], [49.5390, 8.4682]],
        minZoom: 13,
        zoom: 14
    }
    let map = new L.map('map', mapOptions);


    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
    let customIcon = {
        iconUrl: "img/Markericon.png",
        iconSize: [40, 40],
    }
    let myIcon = L.icon(customIcon);
    let iconOptions = {
        title: "company name",
        draggable: true,
        icon: myIcon
    }


    for (i = 0; i >= 1; i++) { 4 }
    map.once('click', function (e) {
        console.log(e)
        marker = new L.Marker([e.latlng.lat, e.latlng.lng], iconOptions);
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
                "title": "Ihre Meldung",
            }
        ];
        console.log(location);
    })


    json.forEach(element => {
        new L.Marker([element.lat_coord, element.lng_coord]).addTo(map)
            .on("click", event => {
                event.target.bindPopup('<div class="meldung_container_style_map" ">' +
                    '<div class="meldung_image_map" id="imageMeldung">' +
                    '<img src=' + element.image + ' class="meldung_image_style">' +
                    '</div>' +
                    '<div class="meldung_text_map">' +
                    '<text>' +
                    '<text id="kategorie"><b>Kategorie:</b>    ' + element.kategorie + '</text>' +
                    '<br>' +
                    '<text id="status"><b>Status:</b> ' + element.status + '</text>' +
                    '<br>' +
                    '<text><b>Meldung Nummer:</b> ' + element.meldungNummer + '</text>' +
                    '</text>' +
                    '<br>' +
                    '</div>' +
                    '</div>').openPopup();
            })
    });
}

async function makeAPICall() {
    fetch('https://melchi.onrender.com/notes')

        .then(response => response.json())

        .then(data => performPageBuild(data));
}

makeAPICall();


async function detectButton() {
    defekte = document.getElementById("radio-defekte");
    verunreinigung = document.getElementById("radio-verunreinigungen");
    parken = document.getElementById("radio-parken");
    sonstige = document.getElementById("radio-sonstige");
    if (defekte.checked == true) {
        document.getElementById("div-box").value = defekte.value;
        radio_result = defekte.value;
    } else if (verunreinigung.checked == true) {
        document.getElementById("div-box").value = verunreinigung.value;
        radio_result = verunreinigung.value;
    } else if (parken.checked == true) {
        document.getElementById("div-box").value = parken.value;
        radio_result = parken.value;
    } else if (sonstige.checked == true) {
        document.getElementById("div-box").value = sonstige.value;
        radio_result = sontige.value;
    } else {
        radio_result = "Keine Kategorie ausgewählt";
    }
}

async function sendFormular(){
    let lastnameForm = document.getElementById("div-lastname").value;
    let firstnameForm = document.getElementById("div-firstname").value;
    let emailForm = document.getElementById("div-email").value;
    let imageForm = document.getElementById("fotoCrypted").value;
    let kategorieForm = document.getElementById("div-box").value;
    let beschreibungForm = document.getElementById("div-description").value;
    let lat_coordForm = document.getElementById("div-lat").value;
    let lng_coordForm = document.getElementById("div-lng").value;

    window.localStorage.setItem("lastname", lastnameForm);
    window.localStorage.setItem("firstname", firstnameForm);
    window.localStorage.setItem("email", emailForm);
    window.localStorage.setItem("image", imageForm);
    window.localStorage.setItem("kategorie", kategorieForm);
    window.localStorage.setItem("beschreibung", beschreibungForm);
    window.localStorage.setItem("lat_coord", lat_coordForm);
    window.localStorage.setItem("lng_coord", lng_coordForm);
    console.log(localStorage.getItem("firstname"));
}
