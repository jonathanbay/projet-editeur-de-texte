// ************ Clonage du texte ************** 

const zone1 = document.querySelector("#zone1");
const zone2 = document.querySelector("#zone2");
const saisie = document.querySelector("#zone1");

zone1.addEventListener("keyup", () => {
    
    zone2.innerHTML = saisie.value;
    
});

// *************** Afficher/cacher l'icone **************

const icon = document.querySelector("#icon")

zone1.addEventListener("mouseover", () => {

    icon.style.visibility = "visible";
});
zone1.addEventListener("mouseout", () => {

    icon.style.visibility = "hidden";
});

// **************** mettre en gras/italique ****************

boldButton.addEventListener("click", () => {
    const boldButton = document.querySelector("#boldButton");
    zone1.style.fontWeight="bold";
    zone2.style.fontWeight="bold";
});
boldButton.addEventListener("dblclick", () => {
    const boldButton = document.querySelector("#boldButton");
    zone1.style.fontWeight="normal";
    zone2.style.fontWeight="normal";
    
});
italicButton.addEventListener("click", () => {
    const italicButton = document.querySelector("#italicButton");
    zone1.style.fontStyle="italic";
    zone2.style.fontStyle="italic";
});
italicButton.addEventListener("dblclick", () => {
    const italicButton = document.querySelector("#italicButton");
    zone1.style.fontStyle="normal";
    zone2.style.fontStyle="normal";
});

// ******************** decompte de caracteres **********************


document.getElementById('zone1').addEventListener('keyup', function() {
document.getElementById('compteur').innerHTML = 200-zone1.value.length;
});

// *************** progresse bar *****************

document.getElementById('zone1').addEventListener('keyup', () => {
document.getElementById('color').style.width = zone1.value.length/2 + "%" ;
});

// // **************** changement couleur progressbar ************

zone1.addEventListener('keyup', () => {

if(saisie.value.length >= 0 && saisie.value.length <= 50) {
    document.getElementById('color').style.backgroundColor="blue";
}
else  if(saisie.value.length >= 51 && saisie.value.length <= 100){
    document.getElementById('color').style.backgroundColor="purple";
}
else if (saisie.value.length >= 101 && saisie.value.length <= 150){
    document.getElementById('color').style.backgroundColor="orange";
}
else if (saisie.value.length >= 151 && saisie.value.length <= 200){
    document.getElementById('color').style.backgroundColor="red";
}
});

// ******************* darkmode *******************

let content = document.getElementsByTagName("body")[0];
let darkmode = document.getElementById('dark-change');

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
})








 











