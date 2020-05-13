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
icone.src = "img/ico" + iconeIndex + ".png";
headerColor.style.color = headerColorArray[iconeIndex - 1];
headerColor.style.textShadow = "0 0 10px " + headerColorArray[iconeIndex - 1] + ", 0 0 15px " + headerColorArray[iconeIndex - 1] + ", 0 0 20px " + headerColorArray[iconeIndex - 1] + ", 0px 0px 3px " + headerColorArray[iconeIndex - 1];