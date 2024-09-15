document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Gracias por tu mensaje. ¡Nos pondremos en contacto contigo pronto!');
        contactForm.reset();
    });
});
