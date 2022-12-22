let mapOptions = {
    center:[49.4766, 8.4334],
    maxBounds: [[49.4334, 8.3441],[49.5390,8.4682]],
    minZoom: 13,
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

var marker = L.marker(coordArray).addTo(map).bindPopup("Ihr ausgewählter Ort").openPopup();
