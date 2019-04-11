window.addEventListener("load", sidenVises);

var erBilledetGodt = [true, false, false, true];
var points = 0;
var erSpilletStoppet = false;

function sidenVises() {
    console.log("sideVises");

}

function start() {

    document.querySelector("#hjerte_container").addEventListener("click", clickhjerte);
    document.querySelector("#kryds_container").addEventListener("click", clickKryds);
    document.querySelector("#godbillede_container5").classList.add("rullened");
}

function clickHjerte() {
    console.log("hjerte");
    if (erBilledetGodt[points]) {
        nytLevel();
        points++;
    } else {
        gameOver();
    }
}

function clickKryds() {
    console.log("kryds");
}

function nytLevel() {

}

function gameOver() {
    points = 0;
}
