async function deleteIncident() {
    fetch('https://melchi.onrender.com/delete/')

        .then(response => response.json())
        .then(location.reload());
}

async function updateIncident() {
    fetch('https://melchi.onrender.com/update/')
        .then(response => response.json());
        location.reload();
}
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

    //delete in the end
    coords = [[49.4779, 8.4490], [49.4718, 8.4218], [49.4721, 8.4323], [49.4768, 8.412]];


    let l = coords.length;
    //delete
    //delete

    meldungenJson = document.getElementById("meldungInserted");
    //Test
    let htmlString = "";

    // loop through the json
    for (let x = 0; x < json.length; x++) {
        obj = json[x];
        //insert the objects in as a card in the html

        var selectString = ""
        if(obj.status == "Eingereicht"){
            selectString = '<option value="Eingereicht" selected>Eingereicht</option>' +
            '<option value="In Bearbeitung">In Bearbeitung</option>' +
            '<option value="Abgeschlossen">Abgeschlossen</option>'
        } else {
            selectString = '<option value="Eingereicht">Eingereicht</option>' +
            '<option value="In Bearbeitung">In Bearbeitung</option>' +
            '<option value="Abgeschlossen" selected>Abgeschlossen</option>'
        }

        htmlString += '<div class="meldung_container_style_bearbeiten" id="meldung' + x + '">' +
            '<h3 class="startseite"> Meldung Nummer: ' + obj._id + '</h3>' +
            '<div class="meldung_container_image_style" id="imageMeldung">' +
            '<img src=' + obj.image + ' class="meldung_image_style">' +
            '</div>' +
            '<div>' +
            '<text class="meldung_text_style">' +
            '<p><b>Nachname:</b> ' + obj.nachname + ' <b>Vorname:</b> ' + obj.vorname + '</p>' +
            '<p id="email"><b>EMail:</b> ' + obj.email + '</p>' +
            '<p id="kategorie"><b>Kategorie:</b>    ' + obj.kategorie + '</p>' +
            '<p id="status"><b>Status:</b> <select id="div-status' + obj.status + '" name="status">' +
            selectString +
            '</select>' +
            '</p>' +
            '<p id="beschreibung" size=255><b>Beschreibung:</b> <text class="beschreibung-style">' + obj.beschreibung + '</text></p>' +
            '<p class="kommentar-style" id="kommentar"><b>Kommentar:</b>  <input placeholder="Maximal 200 Zeichen" maxlength=200 class="kommentar-style-input" id="div-kommentar' + obj.kommentar + '">' + obj.kommentar + '</p>' +
            '</text>' +
            '<button class="div-delete" onclick="updateIncident()"> Änderung Speichern</button><button class="div-delete" onclick="deleteIncident()">Meldung Löschen</button> ' +
            '</div>' +
            '</div>'
            ;
    }
    meldungInserted.innerHTML = htmlString;
    //Test
    async function mapBuilder() {

        for (let i = 0; i < json.length; i++) {
            meldungVar = document.querySelector("#meldung" + [i]);

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