// ************ Clonage du texte ************** 

const zone1 = document.querySelector("#zone1")
const zone2 = document.querySelector("#zone2")

zone1.addEventListener("keyup", () => {

    const saisie = document.querySelector("#zone1").value;
    zone2.value = saisie;
    
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

document.getElementById('zone1').addEventListener('keyup', function() {
document.getElementById('color').style.width = zone1.value.length/2 + "%" ;
});

// // **************** changement couleur progressbar ************


// if (zone1.length > 5 ) {

//     console.log("ok");
//     // document.getElementById('color').style.background = "red" ;

// }







 











