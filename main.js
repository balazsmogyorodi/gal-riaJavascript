window.addEventListener("load", init); 
let hanyadikKep = 0;
const kepek = [
    { kep: "kepek/_DSC7025.jpg" },
    { kep: "kepek/_DSC7371_1.jpg" },
    { kep: "kepek/_DSC7444.jpg" }
]
function init() {
    tartalom = document.querySelectorAll("article");
    
    articleResz(tartalom);
 
    kepKattintas();

}

function articleResz(tartalom) {
    let kiiras = "";
    for (let index = 0; index < kepek.length; index++) {
        kiiras += "<div class='kisKepek'>"
        kiiras += " <img src='";
        kiiras += kepek[index].kep;
        kiiras += "' alt='kép' class='kep'>";
        kiiras += "</div>"
    }
    tartalom[0].innerHTML += kiiras;
}

function kepKattintas() {
   
    galleria = document.getElementsByClassName("nagykep");
    let kiiras = "";
    kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
    galleria[0].innerHTML += kiiras;
    kattintasBal = document.getElementById("bal");
    kattintasJobb = document.getElementById("jobb");
    kattintasJobb.addEventListener("click",kattintasJobbra)
        kattintasBalra(hanyadikKep, kepek);
       

}

function kattintasJobbra() {
    hanyadikKep += 1;
    if (hanyadikKep > kepek.length-1) {
        hanyadikKep = 0;
    }
    galleria = document.getElementsByClassName("nagykep");
    kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
    galleria[0].innerHTML = kiiras;

}

function kattintasBalra(hanyadikKep, kepek) {


    hanyadikKep -= 1;
    if (hanyadikKep < 0) {
        hanyadikKep = 2;
    }


}