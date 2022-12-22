const resultList = document.getElementById('form-results');
let image = document.getElementById('encodeImage');
updateObject = new Object();



var imageBase = window.localStorage.getItem("image");
image.setAttribute('src', imageBase);
updateObject.image = imageBase;

lat_coord = window.localStorage.getItem("lat_coord");
updateObject.lat_coord = lat_coord;

lng_coord = window.localStorage.getItem("lng_coord");
updateObject.lng_coord = lng_coord;

desc_output = window.localStorage.getItem("beschreibung");
updateObject.beschreibung = desc_output;

radio_output = window.localStorage.getItem("kategorie");
updateObject.kategorie = radio_output;

lastname_output = window.localStorage.getItem("lastname");
updateObject.nachname = lastname_output;

firstname_output = window.localStorage.getItem("firstname");
updateObject.vorname = firstname_output;

email_output = window.localStorage.getItem("email");
updateObject.email = email_output;


coordArray = [globalThis.lat_coord, globalThis.lng_coord];
console.log(updateObject);
document.getElementById("div-radio-output").innerHTML = globalThis.radio_output;
document.getElementById("div-description-output").innerHTML = globalThis.desc_output;
document.getElementById("div-lastname-output").innerHTML = globalThis.lastname_output;
document.getElementById("div-firstname-output").innerHTML = globalThis.firstname_output;
document.getElementById("div-email-output").innerHTML = globalThis.email_output;

async function sendPost() {
    let formData = new FormData();
    formData.append("image", updateObject.image);
    formData.append("kategorie", updateObject.kategorie);
    formData.append("beschreibung", updateObject.beschreibung);
    formData.append("nachname", updateObject.nachname);
    formData.append("vorname", updateObject.vorname);
    formData.append("email", updateObject.email);
    formData.append("lat_coord", updateObject.lat_coord);
    formData.append("lng_coord", updateObject.lng_coord);
    fetch('https://melchi.onrender.com/notes/', {
        method: "POST",
        mode: "cors",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "vorname": window.localStorage.getItem("firstname"),
            "nachname": window.localStorage.getItem("lastname")
        })
    })
    .then ( (response) => {
        console.log(response);
    });
console.log("Test");
}

