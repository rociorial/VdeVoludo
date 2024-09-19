// Ocultar resto de menú con JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-target]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Navegador móvil
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el ícono de menú y el menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');

    // Añade un evento de clic al ícono de menú
    menuToggle.addEventListener('click', function() {
        // Alterna la clase 'show' en el menú de navegación
        navbarMenu.classList.toggle('show');
    });
});


