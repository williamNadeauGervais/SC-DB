//Génère une image aléatoire
let iconeIndex = 1 + Math.round(Math.random() * 9),
    icone = document.querySelector("#behinder"),
    headerColor = document.querySelector("#colorStyle"),
    headerColorArray = [
                       "#f2f2eb",
                       "#57b9ff",
                       "#ffee00",
                       "#ab8627",
                       "#ff3333",
                       "#9bab8e",
                       "#eddda4",
                       "#48faaa",
                       "#ff0d6e",
                       "#9f21ff"];

//Source et couleur
icone.src = "../img/ico" + iconeIndex + ".png";
headerColor.style.color = headerColorArray[iconeIndex - 1];
headerColor.style.textShadow = "0 0 10px " + headerColorArray[iconeIndex - 1] + ", 0 0 15px " + headerColorArray[iconeIndex - 1] + ", 0 0 20px " + headerColorArray[iconeIndex - 1] + ", 0px 0px 3px " + headerColorArray[iconeIndex - 1];

//Filtres
var d = document,
    filtresBox = d.querySelectorAll("input[type=checkbox]");

filtresBox[0].addEventListener("click", filtre1);
filtresBox[1].addEventListener("click", filtre2);
filtresBox[2].addEventListener("click", filtre3);

function filtre1() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemBox");
    if (filtresBox[0].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityL")) {
                itemBoxes[i].style.display = "block";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityL")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
}

function filtre2() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemBox");
    if (filtresBox[1].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityG")) {
                itemBoxes[i].style.display = "block";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityG")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
}

function filtre3() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemBox");
    if (filtresBox[2].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityD")) {
                itemBoxes[i].style.display = "block";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("rarityD")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
}
