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

    meldungenJson = document.getElementById("meldungInserted");
    //Test
    let htmlString = "";

    // loop through the json
    for (let x = 0; x < json.length; x++) {
        obj = json[x];
        //insert the objects in as a card in the html
        htmlString += '<div class="meldung_container_style" id="meldung' + x + '">' +
            '<h3 class="startseite"> Meldung Nummer: ' + obj._id + '</h3>' +
            '<div class="meldung_container_image_style" id="imageMeldung">' +
            '<img src=' + obj.image + ' class="meldung_image_style">' +
            '</div>' +
            '<div>' +
            '<text class="meldung_text_style">' +
            '<p><b>Nachname:</b> ' + obj.nachname + ' <b>Vorname:</b> ' + obj.vorname + '</p>' +
            '<p id="email"><b>EMail:</b> ' + obj.email + '</p>' +
            '<p id="kategorie"><b>Kategorie:</b>    ' + obj.kategorie + '</p>' +
            '<p id="status"><b>Status:</b> ' + obj.status + '</p>' +
            '<p id="beschreibung" class="beschreibung-style"><b>Beschreibung:</b> ' + obj.beschreibung + '</p>' +
            '<p id="kommentar" class="kommentar-style"><b>Kommentar:</b> ' + obj.kommentar + '</p>' +
            '</text>' +
            '<br>' +
            '</div>' +
            '</div>'
            ;
    }
    meldungInserted.innerHTML = htmlString;
    //Test
    async function mapBuilder() {

        for (let i = 0; i < json.length; i++) {
            meldungVar = document.querySelector("#meldung" + [i]);

            console.log("enter"); 

            var pop = L.popup({
                closeOnClick: true
            });
            var marker = L.marker([json[i].lat_coord, json[i].lng_coord]).addTo(map).bindPopup(pop);

            var tooltip = L.tooltip({
                permanent: true
            }).setContent(json[i].kategorie);
            marker.bindTooltip(tooltip);

            if (meldungVar != null) {
                meldungVar.addEventListener("mouseover", () => {
                    map.flyTo([json[i].lat_coord, json[i].lng_coord], 16);
                })
            }
        }
    }
    mapBuilder();
}

async function makeAPICall() {
    fetch('https://melchi.onrender.com/notes')

        .then(response => response.json())

        .then(data => performPageBuild(data));
}

makeAPICall();