// ------ Swiper compétences ------
const swiper = new Swiper('.swiper', {
  loop: false,
  autoplay: true,
  spaceBetweenSlides: 0,
  slidesPerView: 7,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    700: {
      slidesPerView: 7,
    },
    400: {
      slidesPerView: 4,
    },
    200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true
  },
});

// ------ Variables, arrays ------
const imgPortrait = document.getElementById("imgPortrait");
const btnDroit = document.getElementById("btnDroit");
const btnGauche = document.getElementById("btnGauche");
const imgScene = document.getElementById("imgScene");
const btnSceneDroit = document.querySelector(".btnSceneDroit");
const btnSceneGauche = document.querySelector(".btnSceneGauche");
const sceneFsDroit = document.querySelector(".sceneFsDroit");
const sceneFsGauche = document.querySelector(".sceneFsGauche");
const portraitFsDroit = document.querySelector(".portraitFsDroit");
const portraitFsGauche = document.querySelector(".portraitFsGauche");
const body = document.querySelector("body");
const btnFullscreen = document.getElementById("btnFullscreen");
const fullscreen = document.querySelector(".fullscreen_container");
const btnFermer = document.getElementById("btnFermer");
const imgFullscreen = document.getElementById("imgFullscreen");
const btnFullscreenPortrait = document.getElementById("btnFullscreenPortrait");
const flechesPortrait = document.querySelector(".flechesPortrait");
const flechesScene = document.querySelector(".flechesScene");

const portraits = [
  "./assets/images/projet_portrait/portrait_1_mode.jpg",
  "./assets/images/projet_portrait/portrait_2_musique.jpg",
  "./assets/images/projet_portrait/portrait_3_nature.jpg",
  "./assets/images/projet_portrait/portrait_4_lecture.jpg",
  "./assets/images/projet_portrait/portrait_5_jeux_video.jpg",
  "./assets/images/projet_portrait/portrait_6_beaute.jpg",
  "./assets/images/projet_portrait/signature.jpg",
  "./assets/images/projet_portrait/moodboard_portrait.jpg",
  "./assets/images/projet_portrait/moodboard_signature.jpg",
];

const scenes = [
  "./assets/images/projet_3d/rendu_global.jpg",
  "./assets/images/projet_3d/rendu_coffre.jpg",
  "./assets/images/projet_3d/rendu_lit.jpg",
  "./assets/images/projet_3d/rendu_potion.jpg",
];

let currentIndexPortrait = 0;
let currentIndexScene = 0;

// ------ Switcher entre les images ------
function updateImage(imgElement, srcArray, index) {
  imgElement.setAttribute("src", srcArray[index]);
}

function nextImage(array, index, increment) {
  return (index + increment + array.length) % array.length;
}

function update() {
  updateImage(imgPortrait, portraits, currentIndexPortrait);
  updateImage(imgScene, scenes, currentIndexScene);
}

function handlePortraitChange(increment) {
  currentIndexPortrait = nextImage(portraits, currentIndexPortrait, increment);
  updateImage(imgFullscreen, portraits, currentIndexPortrait);
  update();
}

function handleSceneChange(increment) {
  currentIndexScene = nextImage(scenes, currentIndexScene, increment);
  updateImage(imgFullscreen, scenes, currentIndexScene);
  update();
}

btnDroit.addEventListener("click", () => handlePortraitChange(1));
btnGauche.addEventListener("click", () => handlePortraitChange(-1));
btnSceneDroit.addEventListener("click", () => handleSceneChange(1));
btnSceneGauche.addEventListener("click", () => handleSceneChange(-1));
sceneFsDroit.addEventListener("click", () => handleSceneChange(1));
sceneFsGauche.addEventListener("click", () => handleSceneChange(-1));
portraitFsDroit.addEventListener("click", () => handlePortraitChange(1));
portraitFsGauche.addEventListener("click", () => handlePortraitChange(-1));

// Initialiser la première image
update();

// ------ Fullscreen ------
function appearFullscreen(isPortrait) {
  updateImage(
    imgFullscreen,
    isPortrait ? portraits : scenes,
    isPortrait ? currentIndexPortrait : currentIndexScene
  );
  body.classList.add("stop-scrolling");
  fullscreen.style.display = "flex";
  (isPortrait ? flechesPortrait : flechesScene).style.display = "flex";
}

function noFullscreen() {
  body.classList.remove("stop-scrolling");
  fullscreen.style.display = "none";
  flechesScene.style.display = "none";
  flechesPortrait.style.display = "none";
}

btnFullscreen.addEventListener("click", () => appearFullscreen(false));
btnFullscreenPortrait.addEventListener("click", () => appearFullscreen(true));
btnFermer.addEventListener("click", noFullscreen);

// ------ Menu burger ------
const iconeBurger = document.querySelector(".icone-menu-burger");
const iconeFermerBurger = document.querySelector(".icone-menu-burger-x");
const menuBurger = document.querySelector(".menu-burger");
const liensBurger = document.querySelectorAll("div.menu-burger > a");

function openBurger() {
    menuBurger.style.display = "flex";
}

function fermerBurger() {
    menuBurger.style.display = "none";
}

iconeBurger.addEventListener("click", openBurger);
iconeFermerBurger.addEventListener("click", fermerBurger);
liensBurger.addEventListener("click", fermerBurger);

