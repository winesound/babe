console.log("script.js est bien chargé !");
function playMusic() {
    let musiques = [
        "audio/Lucky.mp3",
        "audio/Im Just Babe [Official Music Video].mp3",
        "audio/Ryan Gosling - Im Just Ken.mp3",
        "audio/Pomme - un million.mp3",
        "audio/Abracadabra.mp3",
        "audio/Mr. Sandman - The Chordettes.mp3",
        "audio/Taylor Swift - Lover.mp3",
        "audio/Silent.mp3",
        "audio/Christophe - Aline.mp3",
        "audio/Stuck - 30 seconds to Mars.mp3",
    ];
    
    let musiqueAleatoire = musiques[Math.floor(Math.random() * musiques.length)];

    let lecteur = document.getElementById("lecteur");
    let source = document.getElementById("source-musique");

    // cacher les autres éléments 
    document.getElementById("output").innerHTML = "";
    lecteur.style.display = "block";  
    source.src = musiqueAleatoire;
    lecteur.load();  
    lecteur.play();
}
function stopMusic() {
    let lecteur = document.getElementById("lecteur");
    lecteur.pause();
    lecteur.currentTime = 0; 
    lecteur.style.display = "block"; 
}

function showPhoto() {
    stopMusic();
    document.querySelector("h1").classList.add("hidden");
    const photos = [
        { src:"images/28jui2019.jpg", date: "28 juillet 2019 à Gap"},
        { src: "images/0722 train.jpg", date : "Premier voyage en train (juillet 2022)"},
        { src: "images/2018 crête.jpg", date : "Babe en Crête, septembre 2018"},
        { src: "images/2018baby.jpg", date : "Bébé à Gap (juillet 2018)"},
        { src: "images/Abracadabra.jpg", date : "ABRACADABRA, MORTA OO-GAGA"},
        { src: "images/acier.jpg", date : "Tournage Acier Dupont, décembre 2024"},
        { src: "images/avril22.jpg", date : "Avril 2022, dans le Luberon"},
        { src: "images/Babe27.jpg", date : "Babe se faisant manger par un dinosaure le jour de ses 27 ans (25/03/2022)"},
        { src: "images/babe29.jpg", date : "Babe a 29 ans ! (25/03/2024)"},
        { src: "images/baton.jpg", date : "Babe et Bâton, mars 2024"},
        { src: "images/bivouac0923.jpg", date : "Premier bivouac des Babes, septembre 2023"},
        { src: "images/Chamonix1122.jpg", date : "Les Babes à Chamonixe (novembre 2022)"},
        { src: "images/corse.jpg", date : "Les Babes en Corse, (août 2023)"},
        { src: "images/corse2.jpg", date : "Les Babes en Corse, (août 2023)"},
        { src: "images/flan.jpg", date : "FLAN"},
        { src: "images/gnocchi.jpg", date : "Babe et sa Gnoc"},
        { src: "images/juillet18.jpg", date : "Juillet 2018"},
        { src: "images/lumiere.jpg", date : "Lumière !"},
        { src: "images/mariage.jpeg", date : "Mon bg au mariage de Péchou et Manu (septembre 2023)"},
        { src: "images/muse19.jpg", date : "Les Babes au concert de Muse au Vélodrame, (juillet 2019)"},
        { src: "images/Orel0723.jpg", date : "Concert d'Orelsan, juillet 2023"},
        { src: "images/paris22.jpg", date : "Les Babes à Paname (juillet 2022)"},
        { src: "images/Paris0723.jpg", date : "Les Babes dans l'ascenceur de Montrouge (août 2023)"},
        { src: "images/PH.jpg", date : "PH.......... <3"},
        { src: "images/porquerolles.jpg", date : "Les Babes à Porquerolles, (mars 2024)"},
        { src: "images/regard.jpeg", date : "Find someone who look at you the way I look at Babe (but not the way Babe look at me)"},
        { src: "images/rome2021.jpg", date : "Roma, roma-ma-a (août 2021)" },
        { src: "images/RU 230623.jpg", date : "Babe se régalant au RU (juillet 2023)"},
        { src: "images/selfie1.jpg", date : "Le tout premier selfie des Babes (avril 2018)"},
        { src: "images/sieste19.jpg", date : "Les siestes légendaires de Babe"},
        { src: "images/test.jpg", date: "Emulation intellectuelle entre Johannah, Bilionel et Babe, mars 2025"}

    ];
    const randomIndex = Math.floor(Math.random() * photos.length);
    const selectedPhoto = photos[randomIndex];
    let lecteur = document.getElementById("lecteur");
    lecteur.style.display = "none"; // Cacher le lecteur
    document.getElementById("output").innerHTML = `
     <div class="sparkle-container">
    <img src="${selectedPhoto.src}" width="500">
    <p>${selectedPhoto.date}</p>
    </div>
`;
}

function generateCompliment()
 {
    stopMusic();
    const compliments = [
        "Tu es la plus belle étoile de mon ciel ✨",
        "Tu es beau",
        "Tu es vraiment très beau",
        "T'es un 10 mon babe",
        "Si la perfection avait un prénom, ce serait le tien ❤️",
        "Tu es le plus gentil être humain de la planète",
        "Tu es ma fleur",
        "Tu as des énormes pecs",
        "Tes énormes pecs sont le meilleur des oreillers",
        "J'aime la vie avec toi",
        "Tu es mon meilleur copain ❤️",
        "J'aime tes yeux",
        "Kevin Mayer ne t'arrive pas à la cheville",
        "Il n'y a personne qui me fasse rire comme toi",
        "Tu es mon refuge",
        "Tu es très drôle",
        "C'est toi qui fait les meilleurs cadeaux (j'essaie de te concurrencer avec ce site)"
    ];
    const randomIndex = Math.floor(Math.random() * compliments.length);
    let lecteur = document.getElementById("lecteur");
    lecteur.style.display = "none"; // Cacher le lecteur

    document.getElementById("output").innerText = compliments[randomIndex];
}

function showCode() {
    stopMusic();
    window.open("https://github.com/winesound/babe", "_blank"); 
}

document.addEventListener("DOMContentLoaded", function () {
    let aujourdHui = new Date();
    let jour = aujourdHui.getDate();
    let mois = aujourdHui.getMonth() + 1;

    let pluie = document.getElementById("pluie-coeurs");

    if (jour === 25 && mois === 3) {
        pluie.style.background = "url('images/6ob.gif') repeat";
    }
});
