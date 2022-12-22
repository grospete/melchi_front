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

  for (let i = 0; i < json.length; i++) {
    obj = json[i];
    coordsJson = [obj.lat_coord, obj.lng_coord];
    var pop = L.popup({
      closeOnClick: true
    }).setContent(
      '<div class="meldung_container_style_map" id="meldung' + i + '">' +
      '<div class="meldung_image_map" id="imageMeldung">' +
      '<img src=' + obj.image + ' class="meldung_image_style">' +
      '</div>' +
      '<div class="meldung_text_map">' +
      '<text>' +
      '<text id="kategorie"><b>Kategorie:</b>    ' + obj.kategorie + '</text>' +
      '<br>' +
      '<text id="status"><b>Status:</b> ' + obj.status + '</text>' +
      '<br>' +
      '<text><b>Meldung Nummer:</b> <textarea class="meldung_id_map" readonly>' + obj._id + '</textarea></text>' +
      '</text>' +
      '<br>' +
      '</div>' +
      '</div>'

    );

    var marker = L.marker(coordsJson).addTo(map).bindPopup(pop);
    var tooltip = L.tooltip({
      permanent: true
    }).setContent(obj.kategorie);
    marker.bindTooltip(tooltip);
  }
}
async function makeAPICall() {
  fetch('https://melchi.onrender.com/notes')
    .then(response => response.json())
    .then(data => performPageBuild(data));
}



makeAPICall();