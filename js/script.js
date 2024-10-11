// ------ Switcher entre les images ------
let imgPortrait = document.getElementById("imgPortrait");
let btnDroit = document.getElementById("btnDroit");
let btnGauche = document.getElementById("btnGauche");

let imgScene = document.getElementById("imgScene");
let btnSceneDroit = document.getElementById("btnSceneDroit");
let btnSceneGauche = document.getElementById("btnSceneGauche");

const portraits = [
    "./assets/projet_portrait/portrait_1_mode.jpg",
    "./assets/projet_portrait/portrait_2_musique.jpg",
    "./assets/projet_portrait/portrait_3_nature.jpg",
    "./assets/projet_portrait/portrait_4_lecture.jpg",
    "./assets/projet_portrait/portrait_5_jeux_video.jpg",
    "./assets/projet_portrait/portrait_6_beaute.jpg",
    "./assets/projet_portrait/signature.jpg",
    "./assets/projet_portrait/moodboard_portrait.jpg",
    "./assets/projet_portrait/moodboard_signature.jpg"
];

const scenes = [
    "./assets/projet_3d/rendu_global.jpg",
    "./assets/projet_3d/rendu_coffre.jpg",
    "./assets/projet_3d/rendu_lit.jpg",
    "./assets/projet_3d/rendu_potion.jpg"
];

let currentIndexPortrait = 0;
let currentIndexScene = 0;

function updateImage() {
    imgPortrait.setAttribute('src', portraits[currentIndexPortrait]);
}

function updateScene() {
    imgScene.setAttribute('src', scenes[currentIndexScene]);
}

function nextImgDroit() {
    currentIndexPortrait = (currentIndexPortrait + 1) % portraits.length; // Va à la prochaine image
    updateImage();
}

function nextImgGauche() {
    currentIndexPortrait = (currentIndexPortrait - 1 + portraits.length) % portraits.length; // Va à l'image précédente
    updateImage();
}

function nextSceneDroit() {
    currentIndexScene = (currentIndexScene + 1) % scenes.length; // Va à la prochaine scène
    updateScene();
}

function nextSceneGauche() {
    currentIndexScene = (currentIndexScene - 1 + scenes.length) % scenes.length; // Va à la scène précédente
    updateScene();
}

btnDroit.addEventListener("click", nextImgDroit);
btnGauche.addEventListener("click", nextImgGauche);
btnSceneDroit.addEventListener("click", nextSceneDroit);
btnSceneGauche.addEventListener("click", nextSceneGauche);

// Initialiser la première image
updateImage();
updateScene();

// ----- Fullscreen -----
let body = document.querySelector("body");

let btnFullscreen = document.getElementById("btnFullscreen");
const fullscreen = document.querySelector(".fullscreen_container");
let btnFermer = document.getElementById("btnFermer");
let imgFullscreen = document.getElementById("imgFullscreen");

let btnFullscreenPortrait = document.getElementById("btnFullscreenPortrait");

function appearFullscreen() {
    imgFullscreen.setAttribute('src', scenes[currentIndexScene]);
    body.classList.add('stop-scrolling');
    fullscreen.style.display = "flex";
}

function appearFullscreenPortrait() {
    imgFullscreen.setAttribute('src', portraits[currentIndexPortrait]);
    body.classList.add('stop-scrolling');
    fullscreen.style.display = "flex";
}


function noFullscreen() {
    body.classList.remove('stop-scrolling');
    fullscreen.style.display = "none";
}

btnFullscreen.addEventListener("click", appearFullscreen)

btnFullscreenPortrait.addEventListener("click", appearFullscreenPortrait)

btnFermer.addEventListener("click", noFullscreen)
