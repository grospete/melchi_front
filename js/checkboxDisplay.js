let btnShow = document.querySelector('button');
let resultCheckbox = document.getElementById("output-checkbox");

let inputDefekte = document.getElementById("radio-defekte");
let inputVerunreinigungen = document.getElementById("radio-verunreinigungen");
let inputParken = document.getElementById("radio-parken");

let inputText = document.getElementById("div-description");
let resultText = document.getElementById("output-description");
let inputStreet = document.getElementById("div-street");
let resultStreet = document.getElementById("output-street");

let inputZip = document.getElementById("div-zip");
let resultZip = document.getElementById("output-zip");
let inputPlace = document.getElementById("div-place");
let resultPlace = document.getElementById("output-place");


function description(){
    
    if(inputDefekte.checked ==true){
        alert(inputDefekte.value);}
    else if(inputVerunreinigungen.checked ==true){
        alert(inputVerunreinigungen.value);}
    else if(inputParken.checked == true){
        alert(inputParken.value);}
    else{
        alert("No channel is selected");}
    
    resultText.innerHTML = inputText.value;
    resultStreet.innerHTML = inputStreet.value;
    resultZip.innerHTML = inputZip.value;
    resultPlace.innerHTML = inputPlace.value;

    
}
btnShow.addEventListener('click', description);