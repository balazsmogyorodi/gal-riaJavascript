window.addEventListener("load", init);
let hanyadikKep = 0;
const kepek = [
  { kep: "kepek/_DSC7025.jpg" },
  { kep: "kepek/_DSC7371_1.jpg" },
  { kep: "kepek/_DSC7444.jpg" },
];
function init() {
  tartalom = document.querySelectorAll("article");

  articleResz(tartalom);

  kepKattintas();
}

function articleResz(tartalom) {
  let kiiras = "";
  for (let index = 0; index < kepek.length; index++) {
    kiiras += "<div class='kisKepek'>";
    kiiras += " <img src='";
    kiiras += kepek[index].kep;
    kiiras += `' alt='kép' class='kep' id='hanyadik${index}'>`;
    kiiras += "</div>";
  }
  tartalom[0].innerHTML += kiiras;
}

function kepKattintas() {
  galleria = document.getElementsByClassName("nagykep");
  let kiiras = "";
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML += kiiras;
  kattintasBal = document.getElementById("bal");
  kattintasBal.addEventListener("click", kattintasBalra);
  kattintasJobb = document.getElementById("jobb");
  kattintasJobb.addEventListener("click", kattintasJobbra);

  kep1 = document.getElementById("hanyadik0");
  kep1.addEventListener("click", kattintasKep1);
  kep2 = document.getElementById("hanyadik1");
  kep2.addEventListener("click", kattintasKep2);
  kep3 = document.getElementById("hanyadik2");
  kep3.addEventListener("click", kattintasKep3);
}

function kattintasJobbra() {
  hanyadikKep += 1;
  if (hanyadikKep > kepek.length - 1) {
    hanyadikKep = 0;
  }
  galleria = document.getElementsByClassName("nagykep");
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML = kiiras;
}

function kattintasBalra() {
  hanyadikKep -= 1;
  if (hanyadikKep < 0) {
    hanyadikKep = 2;
  }
  galleria = document.getElementsByClassName("nagykep");
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML = kiiras;
}

function kattintasKep1() {
  hanyadikKep = 0;
  galleria = document.getElementsByClassName("nagykep");
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML = kiiras;
}

function kattintasKep2() {
  hanyadikKep = 1;
  galleria = document.getElementsByClassName("nagykep");
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML = kiiras;
}
function kattintasKep3() {
  hanyadikKep = 2;
  galleria = document.getElementsByClassName("nagykep");
  kiiras = `<img src="${kepek[hanyadikKep].kep}" alt='kép' class='foKep'>`;
  galleria[0].innerHTML = kiiras;
}
