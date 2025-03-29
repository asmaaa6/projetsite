document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordSection = document.getElementById('forgotPasswordSection');
    const cancelForgotPassword = document.getElementById('cancelForgotPassword');
    const forgotUsernameEmail = document.getElementById('forgotUsernameEmail');

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        forgotPasswordSection.style.display = 'block';
    });

    cancelForgotPassword.addEventListener('click', function() {
        forgotPasswordSection.style.display = 'none';
    });

    // Gestion du placeholder avec JavaScript (pour les anciens navigateurs)
    if (forgotUsernameEmail) { // Vérifie si l'élément existe
        const placeholderText = forgotUsernameEmail.getAttribute('placeholder');

        forgotUsernameEmail.addEventListener('focus', function() {
            if (this.value === placeholderText) {
                this.value = '';
                this.style.color = '#000'; // Couleur du texte saisi
            }
        });

        forgotUsernameEmail.addEventListener('blur', function() {
            if (this.value === '') {
                this.value = placeholderText;
                this.style.color = '#999'; // Couleur du placeholder
            }
        });

        // Initialisation (si le champ est vide)
        if (forgotUsernameEmail.value === '') {
            forgotUsernameEmail.value = placeholderText;
            forgotUsernameEmail.style.color = '#999';
        }
    }
});