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

var d = document,
    filtresBox = d.querySelectorAll("input[type=checkbox]"),
    queryValue = d.querySelectorAll("table tr").length-1,
    queryText = d.querySelector("h4");

queryText.innerHTML = queryValue+" item(s) matching filters";

filtresBox[0].addEventListener("click", filtre1);
filtresBox[1].addEventListener("click", filtre2);
filtresBox[2].addEventListener("click", filtre3);
filtresBox[3].addEventListener("click", filtre4);
filtresBox[4].addEventListener("click", filtre5);
filtresBox[5].addEventListener("click", filtre6);
filtresBox[6].addEventListener("click", filtre7);
filtresBox[7].addEventListener("click", filtre8);
filtresBox[8].addEventListener("click", filtre9);
filtresBox[9].addEventListener("click", filtre10);
filtresBox[10].addEventListener("click", filtre11);
filtresBox[11].addEventListener("click", filtre12);
filtresBox[12].addEventListener("click", filtre13);
filtresBox[13].addEventListener("click", filtre14);
filtresBox[14].addEventListener("click", filtre15);
filtresBox[15].addEventListener("click", filtre16);
filtresBox[16].addEventListener("click", filtre17);
filtresBox[17].addEventListener("click", filtre18);
filtresBox[18].addEventListener("click", filtre19);
filtresBox[19].addEventListener("click", filtre20);
filtresBox[20].addEventListener("click", filtre21);
filtresBox[21].addEventListener("click", filtre22);

function filtre1() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[0].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemMI")) {
                itemBoxes[i].style.display = "";
                itemFilter(itemBoxes[i]);
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemMI")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre2() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[1].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemEpic")) {
                itemBoxes[i].style.display = "";
                itemFilter(itemBoxes[i]);
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemEpic")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre3() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[2].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemLeg")) {
                itemBoxes[i].style.display = "";
                itemFilter(itemBoxes[i]);
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemLeg")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre4() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[3].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemMU")) {
                itemBoxes[i].style.display = "";
                itemFilter(itemBoxes[i]);
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableItemMU")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre5() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[4].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeHelm")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeHelm")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre6() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[5].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeTorso")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeTorso")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre7() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[6].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeArm")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeArm")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre8() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[7].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeLeg")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeLeg")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre9() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[8].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeRing")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeRing")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre10() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[9].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeAmulet")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeAmulet")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre11() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[10].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeSword")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeSword")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre12() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[11].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeAxe")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeAxe")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre13() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[12].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeClub")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeClub")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre14() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[13].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeSpear")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeSpear")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre15() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[14].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeBow")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeBow")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre16() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[15].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeStaff")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeStaff")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre17() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[16].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeThrown")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeThrown")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre18() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[17].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeShield")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeShield")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre19() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[18].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeOffhand")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeOffhand")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre20() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[19].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeCharm")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeCharm")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre21() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[20].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeRelic")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeRelic")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function filtre22() {
    let section = d.querySelectorAll("section"),
        itemBoxes = d.querySelectorAll(".itemEntry");
    if (filtresBox[21].checked == true) {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeArt")) {
                itemBoxes[i].style.display = "";
            }
            if (itemRarity(itemBoxes[i]) == true) {
                itemBoxes[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < itemBoxes.length; i++) {
            if (itemBoxes[i].classList.contains("tableTypeArt")) {
                itemBoxes[i].style.display = "none";
            }
        }
    }
    queryValueMake();
}

function itemRarity(laBox) {
    if (laBox.classList.contains("tableItemMI")) {
        if (filtresBox[0].checked == false) {
            return true;
        }
    }
    if (laBox.classList.contains("tableItemEpic")) {
        if (filtresBox[1].checked == false) {
            return true;
        }
    }
    if (laBox.classList.contains("tableItemLeg")) {
        if (filtresBox[2].checked == false) {
            return true;
        }
    }
    if (laBox.classList.contains("tableItemMU")) {
        if (filtresBox[3].checked == false) {
            return true;
        }
    }
    return false;
}

function itemFilter(laBox) {
    if (filtresBox[4].checked == true) {
        if (laBox.classList.contains("tableTypeHelm")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeHelm")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[5].checked == true) {
        if (laBox.classList.contains("tableTypeTorso")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeTorso")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[6].checked == true) {
        if (laBox.classList.contains("tableTypeArm")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeArm")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[7].checked == true) {
        if (laBox.classList.contains("tableTypeLeg")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeLeg")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[8].checked == true) {
        if (laBox.classList.contains("tableTypeRing")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeRing")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[9].checked == true) {
        if (laBox.classList.contains("tableTypeAmulet")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeAmulet")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[10].checked == true) {
        if (laBox.classList.contains("tableTypeSword")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeSword")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[11].checked == true) {
        if (laBox.classList.contains("tableTypeAxe")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeAxe")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[12].checked == true) {
        if (laBox.classList.contains("tableTypeClub")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeClub")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[13].checked == true) {
        if (laBox.classList.contains("tableTypeSpear")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeSpear")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[14].checked == true) {
        if (laBox.classList.contains("tableTypeBow")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeBow")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[15].checked == true) {
        if (laBox.classList.contains("tableTypeStaff")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeStaff")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[16].checked == true) {
        if (laBox.classList.contains("tableTypeThrown")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeThrown")) {
            laBox.style.display = "none";
        }
    }
    if (filtresBox[17].checked == true) {
        if (laBox.classList.contains("tableTypeShield")) {
            laBox.style.display = "";
        }
    } else {
        if (laBox.classList.contains("tableTypeShield")) {
            laBox.style.display = "none";
        }
    }
    queryValueMake();
}

function queryValueMake() {
    queryItems = d.querySelectorAll("table tr");
    querySelectiveValue = 0;
    
    for (let y=0; y<=queryItems.length-1; y++){
        if (queryItems[y].style.display == ""){
            querySelectiveValue++;
        }
    }
    
    queryText = d.querySelector("h4");
    queryText.innerHTML = querySelectiveValue-1+" item(s) matching filters";
}
