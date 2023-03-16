window.addEventListener("load", init);
function init() {
    tartalom = document.querySelectorAll("article");
    const kepek = [
        { kep: "kepek/_DSC7025.jpg" },
        { kep: "kepek/_DSC7371_1.jpg" },
        { kep: "kepek/_DSC7444.jpg" }
    ]
    articleResz(tartalom, kepek);
 
    kepKattintas(kepek);

}

function articleResz(tartalom, kepek) {
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

function kepKattintas(kepek) {
    let hanyadikKep = 0;
    galleria = document.getElementsByClassName("nagykep");
    let kiiras = "";
    kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
    galleria[0].innerHTML += kiiras;
    kattintasBal = document.getElementById("bal");
    kattintasJobb = document.getElementById("jobb");
        kattintasJobbra(hanyadikKep, kepek);
        kattintasBalra(hanyadikKep, kepek);
       
    
   


}

function kattintasJobbra(hanyadikKep, kepek) {


    hanyadikKep += 1;
    if (hanyadikKep > kepek.length) {
        hanyadikKep = 0;
    }


}

function kattintasBalra(hanyadikKep, kepek) {


    hanyadikKep -= 1;
    if (hanyadikKep < 0) {
        hanyadikKep = 2;
    }


}