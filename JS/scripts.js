// =========================================================================
// SCRIPT CENTRALISÉ UNIQUE : js/script.js
// Gère l'interactivité globale de toutes les pages du portfolio
// =========================================================================

window.onload = function() {
    
    // ---------------------------------------------------------------------
    // 1. MESSAGE DE BIENVENUE (Exigence du projet)
    // ---------------------------------------------------------------------
    console.log("Bienvenue sur le portfolio de Khadidiatou Diassé !");


    /**
 * Fonction permettant d'afficher ou de masquer les blocs contenant
 * le titre et le pourcentage de chaque compétence.
 */

// Sélection du bouton
const bouton = document.getElementById("toggleDetailsBtn");

// Sélection de la section contenant les compétences
const competences = document.getElementById("detailsCompetences");

// Vérifie que les éléments existent avant d'ajouter l'événement
if (bouton && competences) {

    bouton.addEventListener("click", function () {

        // Ajoute ou retire la classe details-caches
        competences.classList.toggle("details-caches");

        // Change le texte du bouton
        if (competences.classList.contains("details-caches")) {
            bouton.textContent = "Afficher les détails";
        } else {
            bouton.textContent = "Masquer les détails";
        }

    });

}



    // ---------------------------------------------------------------------
    // 3. VALIDATION DU FORMULAIRE DE CONTACT (Page contact.html)
    // ---------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const resultatText = document.getElementById('resultat');

    if (contactForm && resultatText) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nom = document.getElementById("nom").value.trim();
            const prenom = document.getElementById("prenom").value.trim();
            const email = document.getElementById("email").value.trim();
            const sujet = document.getElementById("sujet").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation de tous les champs obligatoires du sujet
            if (nom === "" || prenom === "" || email === "" || sujet === "" || message === "") {
                resultatText.innerHTML = "Tous les champs sont obligatoires.";
                resultatText.style.color = "red";
                return;
            }

            // Validation stricte du format d'adresse e-mail
            const modeleEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!modeleEmail.test(email)) {
                resultatText.innerHTML = "Adresse e-mail invalide.";
                resultatText.style.color = "red";
                return;
            }

            // Message personnalisé de succès en cas de validation réussie
            resultatText.innerHTML = `Merci ${prenom}, votre message a été envoyé avec succès !`;
            resultatText.style.color = "green";
            contactForm.reset();
        });
    }


    // ---------------------------------------------------------------------
    // 4. BOUTONS INTERACTIFS "VOIR PLUS" (Page projets.html)
    // ---------------------------------------------------------------------
    const boutonsVoirPlus = document.querySelectorAll('.btn-voir-plus');

    if (boutonsVoirPlus.length > 0) {
        boutonsVoirPlus.forEach(function(bouton) {
            bouton.addEventListener('click', function() {
                // Recherche ciblée du conteneur de détails propre à la carte cliquée
                const blocDetails = this.parentNode.querySelector('.details-projet');
                
                if (blocDetails) {
                    blocDetails.classList.toggle('details-caches');

                    // Alterne l'intitulé du bouton actuel indépendamment des autres
                    if (this.textContent === "Voir plus") {
                        this.textContent = "Voir moins";
                    } else {
                        this.textContent = "Voir plus";
                    }
                }
            });
        });
    }
};