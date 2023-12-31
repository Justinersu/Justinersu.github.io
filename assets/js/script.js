const chapters = {
    debut: {
        titre: 'En route!',
        description: 'Vous et vos compagnons entrez dans une caverne à la recherche d\'aventures.',
        image: './assets/images/debut.jpg',
        audio: '',
        boutons: [
            {titre: 'Aller de l\'avant', destination: 'troll'}, 
            {titre: 'Rebrousser chemin', destination: 'abandon'}
        ]
    },
    abandon: {
        titre: 'Fin de l\'aventure',
        description: 'Vous abandonnez. Aucun récits ne seronts écrits sur vous.',
        image: './assets/images/abandon.jpg',
        audio: './assets/audio/fail.mp3',
        boutons: ''
    },
    troll: {
        titre: 'Rencontre inatendue',
        description: 'Un troll de 12 pieds, arme à la main, se dresse devant vous.',
        image: './assets/images/troll.jpg',
        audio: './assets/audio/cliquer_bouton.mp3',
        boutons: [
            {titre: 'Continuer', destination: 'attaque'}, 
        ]
    },
    attaque: {
        titre: 'À vos armes!',
        description: 'Le troll s\'apprête à attaquer.',
        video: './assets/videos/magie.mp4',
        image: './assets/images/attaque.jpg',
        audio: './assets/audio/cliquer_bouton.mp3',
        boutons: [
            {titre: 'Rester en retrait alors que vos compagnons prennent les armes', destination: 'mort'}, 
            {titre: 'Préparer son arme', destination: 'sacoche'}
        ]
    },
    mort: {
        titre: 'Fin de l\'aventure',
        description: 'Vous et vos compagnons mourrez au combat.',
        image: './assets/images/mort.jpg',
        audio: './assets/audio/fail.mp3',
        boutons: ''
    },
    sacoche:  {
        titre: 'L\'équipement du sorcier',
        description: 'Vous ouvrez votre sacoche magique.',
        image: './assets/images/sacoche.jpg',
        audio: './assets/audio/cliquer_bouton.mp3',
        boutons: [
            {titre: 'Continuer', destination: 'armes'}, 
        ]
    },
    armes: {
        titre: 'Un choix judicieux',
        description: 'Plusieurs choix d\'armes s\'offrent à vous.',
        image: './assets/images/armes.jpg',
        audio: './assets/audio/cliquer_bouton.mp3',
        boutons: [
            {titre: 'Choisir le manuscrit ancien', destination: 'parchemin'}, 
            {titre: 'Choisir le bâton magique', destination: 'baton'}
        ]
    },
    parchemin:  {
        titre: 'Le manuscrit ancien',
        description: 'Le parchemin est vieux et délabré, mais le sort semble puissant.',
        image: './assets/images/parchemin.jpg',
        audio: './assets/audio/parchemin.mp3',
        boutons: [
            {titre: 'Continuer', destination: 'coup'}, 
        ]
    },
    baton:  {
        titre: 'Le bâton magique',
        description: 'L\'arme classique du sorcier, vous ne manquez jamais un sort lorsqu\'il est entre vos mains.',
        video: './assets/videos/eclairs.mp4',
        image: './assets/images/baton.jpg',
        audio: './assets/audio/baton.mp3',
        boutons: [
            {titre: 'Continuer', destination: 'coup'}, 
        ]
    },
    coup:  {
        titre: 'Attaque surprise',
        description: 'Le troll s\'apprête à vous infliger un coup.',
        image: './assets/images/coup.jpg',
        audio: './assets/audio/cliquer_bouton.mp3',
        boutons: [
            {titre: 'Lancer un sort', destination: 'sort'}, 
            {titre: 'Esquiver', destination: 'seul'}
        ]
    },
    seul: {
        titre: 'Fin de l\'aventure',
        description: 'Le coup s\'abat sur vos compagnons. Vous ne pouvez pas achever le troll seul et mourrez.',
        image: './assets/images/seul.jpg',
        audio: './assets/audio/fail.mp3',
        boutons: ''
    },
    // Choix du baton magique
    sortBaton: {
        titre: 'Félicitations!',
        description: 'Vous achevez le troll avec succès et trouvez une montagne de trésors au fond de la caverne.',
        image: './assets/images/felicitations.jpg',
        audio: './assets/audio/victoire.mp3',
        boutons: ''
    },
    // Choix du manuscrit ancien
    sort: {
        titre: 'Fin de l\'aventure',
        description: 'Le sort du manuscrit n\'arrive pas à contrer l\'arme du troll. Vous mourrez.',
        image: './assets/images/mort.jpg',
        audio: './assets/audio/fail.mp3',
        boutons: ''
    }
}

//Variables pour les éléments volume du html
const checkbox = document.querySelector('#checkbox');
const imgVolume = document.querySelector('#volume');

function goToChapter(chapter) {
    //Sauvegarder clé du chapitre
    localStorage.setItem('chapter', chapter);
    
    //Volume off si localStorage muted
    if (localStorage.getItem('audio') === 'muted') {
        checkbox.checked = true;
        document.querySelector('audio').muted = true;
        imgVolume.setAttribute("style", `background-image: url('./assets/images/volume_off.png');`);
    } 

    //Enlève les boutons du div .boutons
    const boutons = document.querySelector('.boutons');
    while (boutons.firstChild) {
        boutons.removeChild(boutons.firstChild);
    }

    //Change le contenu des textes fictifs avec le contenu des objets
    if (chapters[chapter]) {
        document.querySelector('audio').src = chapters[chapter].audio;
        document.querySelector('.titre').innerText = chapters[chapter].titre;
        document.querySelector('.description').innerText = chapters[chapter].description;
        for (let i = 0; i < chapters[chapter].boutons.length; i++) {
            const nouveauBtn = document.createElement('button'); 
            nouveauBtn.setAttribute('class', 'choix');
            nouveauBtn.textContent = chapters[chapter].boutons[i].titre;
            nouveauBtn.addEventListener('click', () => { 
                goToChapter(chapters[chapter].boutons[i].destination); 
            }); 
            boutons.appendChild(nouveauBtn); 
        }
    } else {
        console.log('Mauvaise clé de chapitre');    
    }

    //Vérifier si vidéo 
    if (chapters[chapter].video) {
        const video = document.createElement('video');
        video.src = chapters[chapter].video;
        document.querySelector('.media').innerHTML = '';
        document.querySelector('.media').appendChild(video);
        video.setAttributeNode(document.createAttribute('loop'));
        video.play();
    } else {
        const image = document.createElement('img');
        image.src = chapters[chapter].image;
        document.querySelector('.media').innerHTML = '';
        document.querySelector('.media').appendChild(image);
    }

    //Twist et Localstorage
    if (chapter == 'baton') {
        localStorage.setItem('final', chapter);
    }
    if (chapter == 'debut') {
        localStorage.setItem('final', chapter);
    }
    if (localStorage.getItem('final') === 'debut') {
        chapters['coup'].boutons[0].destination = 'sort';
    } 
    if (localStorage.getItem('final') === 'baton') {
        chapters['coup'].boutons[0].destination = 'sortBaton';
    }
}

//Bouton réinitialiser
const reinitialiser = document.querySelector('.recommencer');
reinitialiser.addEventListener('click', function() {
    localStorage.clear();
    goToChapter('debut');
});

//Bouton mute volume
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.querySelector('audio').muted = true;
        imgVolume.setAttribute("style", `background-image: url('./assets/images/volume_off.png');`);
        localStorage.setItem('audio', 'muted');
    }
    else{
        document.querySelector('audio').muted = false;
        imgVolume.setAttribute("style", `background-image: url('./assets/images/volume_on.png');`);
        localStorage.setItem('audio', 'on')
    }
});

//Charger la dernière page visitée si localstorage du chapitre existe
if (localStorage.getItem('chapter') === null) {
    goToChapter('debut');
} else {
    goToChapter(localStorage.getItem('chapter'));
}