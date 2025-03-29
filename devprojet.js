let index = 0;
const photos = document.querySelectorAll('.photo'); // Sélectionne toutes les images du diaporama

// Fonction pour afficher l'image suivante
function showNextPhoto() {
    // Retirer la classe 'active' de l'image actuelle
    photos[index].classList.remove('active');

    // Mettre à jour l'index pour l'image suivante
    index = (index + 1) % photos.length; // Boucle circulaire

    // Ajouter la classe 'active' à la nouvelle image
    photos[index].classList.add('active');
}document.querySelectorAll('.imageslide img').forEach((img) => {
    img.style.transform = 'none';  // Désactive explicitement toute transformation sur l'image

    img.addEventListener('mouseenter', function() {
        this.style.transform = 'none';  // Désactive toute transformation au survol
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = 'none';  // Réinitialise après le survol
    });
});


document.querySelectorAll('.imageslide img').forEach((img) => {
    img.style.transform = 'none';  // Désactive tout effet de zoom
});


// Fonction pour changer d'image à partir des miniatures
function btm_slide(indexClicked) {
    index = indexClicked; // Mettez à jour l'index avec l'index de la miniature cliquée
    showImg(index); // Afficher l'image avec le nouvel index
}

// Fonction pour faire défiler l'image vers la gauche ou la droite
function side_slide(offset) {
    index += offset; // Déplace l'index de l'offset spécifié
    showImg(index); // Afficher l'image avec le nouvel index
}

// Fonction pour afficher l'image avec l'index spécifié
function showImg(newIndex) {
    if (newIndex >= photos.length) { 
        index = 0; 
    }
    if (newIndex < 0) { 
        index = photos.length - 1; 
    }

    // Supprimer la classe 'active' de toutes les photos
    photos.forEach(photo => photo.classList.remove('active'));

    // Ajouter la classe 'active' à la photo correspondant à l'index actuel
    photos[index].classList.add('active');
}

// Afficher la première photo au chargement
photos[index].classList.add('active');

// Changer d'image toutes les 3 secondes
setInterval(showNextPhoto, 3000);



// Ajouter un gestionnaire d'événements pour les miniatures
document.querySelectorAll('.thumbnail-container img').forEach((thumbnail, idx) => {
    thumbnail.addEventListener('click', () => btm_slide(idx)); // Clique sur la miniature
});



// Gestion des événements pour les boutons de défilement (gauche/droite)
document.querySelector('.left-slide').addEventListener('click', () => side_slide(-1)); // Bouton gauche
document.querySelector('.right-slide').addEventListener('click', () => side_slide(1)); // Bouton droit





document.addEventListener('DOMContentLoaded', function() {
    const papierPeintLink = document.querySelector('.lien-papierpeint');
    const papierPeintMap = papierPeintLink.querySelector('img');

    papierPeintLink.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        papierPeintMap.style.display = papierPeintMap.style.display === 'none' ? 'block' : 'none';
    });
});






