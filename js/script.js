/* ------ Switcher entre les images ------
let imgPortrait = document.getElementById("imgPortrait");
let btnDroit = document.getElementById("btnDroit");
let btnGauche = document.getElementById("btnGauche");

function nextImgDroit() {
    if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_1_mode.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_2_musique.jpg");
    }
    else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_2_musique.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_3_nature.jpg")
    }
    else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_3_nature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_4_lecture.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_4_lecture.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_5_jeux_video.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_5_jeux_video.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_6_beaute.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_6_beaute.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/signature.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/signature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/moodboard_portrait.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/moodboard_portrait.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/moodboard_signature.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/moodboard_signature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_1_mode.jpg")
    }
}

function nextImgGauche() {
    if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_1_mode.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/moodboard_signature.jpg");
    }
    else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/moodboard_signature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/moodboard_portrait.jpg")
    }
    else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/moodboard_portrait.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/signature.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/signature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_6_beaute.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_6_beaute.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_5_jeux_video.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_5_jeux_video.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_4_lecture.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_4_lecture.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_3_nature.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_3_nature.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_2_musique.jpg")
    } else if (imgPortrait.getAttribute('src') === "./assets/projet_portrait/portrait_2_musique.jpg") {
        imgPortrait.setAttribute('src', "./assets/projet_portrait/portrait_1_mode.jpg")
    }
}

btnDroit.addEventListener("click", nextImgDroit);

btnGauche.addEventListener("click", nextImgGauche); */

// ------ Switcher entre les images ------
let imgPortrait = document.getElementById("imgPortrait");
let btnDroit = document.getElementById("btnDroit");
let btnGauche = document.getElementById("btnGauche");

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

let currentIndex = 0;

function updateImage() {
    imgPortrait.setAttribute('src', portraits[currentIndex]);
}

function nextImgDroit() {
    currentIndex = (currentIndex + 1) % portraits.length; // Va à la prochaine image
    updateImage();
}

function nextImgGauche() {
    currentIndex = (currentIndex - 1 + portraits.length) % portraits.length; // Va à l'image précédente
    updateImage();
}

btnDroit.addEventListener("click", nextImgDroit);
btnGauche.addEventListener("click", nextImgGauche);

// Initialize the first image
updateImage();
