const resultList = document.getElementById('form-results');
let image = document.getElementById('encodeImage');
updateObject = new Object();


        new URLSearchParams(window.location.search).forEach((value,name) => {
            if(`${name}` == "fotoCrypted"){
                var imageBase = `${value}`
                image.setAttribute('src', imageBase);
                updateObject.image = imageBase;
                return;
            }
            if(`${name}` == "Foto anzeigen"){
                return image;
            }
            if(`${name}` == "Lat"){
                lat_coord = `${value}`;
                updateObject.lat_coord = lat_coord;
                return;
            }
            if(`${name}` == "Lng"){
                lng_coord = `${value}`;
                updateObject.lng_coord = lng_coord;
                return;
            }
            if(`${name}` == "Beschreibung"){
                desc_output= `${value}`;
                updateObject.beschreibung = desc_output;
                return;
            }
            if(`${name}` == "Kategorie"){
                radio_output = `${value}`;
                updateObject.kategorie = radio_output;
                return;
            }
            if(`${name}`=="Nachname"){
                lastname_output = `${value}`;
                updateObject.nachname = lastname_output;
            }
            if(`${name}`=="Vorname"){
                firstname_output = `${value}`;
                updateObject.vorname = firstname_output;
            }
            if(`${name}`=="EMail"){
                email_output = `${value}`;
                updateObject.email = email_output;
            }
            //resultList.append(document.createElement('br'))
            //resultList.append(`${name}: ${value}`)
            
            
        })

        coordArray = [globalThis.lat_coord,globalThis.lng_coord];
        console.log(updateObject);

        document.getElementById("div-radio-output").innerHTML=globalThis.radio_output;
        document.getElementById("div-description-output").innerHTML=globalThis.desc_output;
        document.getElementById("div-lastname-output").innerHTML=globalThis.lastname_output;
        document.getElementById("div-firstname-output").innerHTML=globalThis.firstname_output;
        document.getElementById("div-email-output").innerHTML=globalThis.email_output;
        
        
        