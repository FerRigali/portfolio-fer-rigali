// Obtén elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const closeButton = document.getElementById('close-button');

// Agrega un evento al menú hamburguesa
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open'); // Abre/cierra el menú
    if (navList.classList.contains('open')) {
        menuToggle.style.display = 'none'; // Oculta el menú hamburguesa
    } else {
        menuToggle.style.display = 'block'; // Muestra el menú hamburguesa
    }
});

// Agrega un evento a la cruz para cerrar el menú
closeButton.addEventListener('click', () => {
    navList.classList.remove('open'); // Cierra el menú
    menuToggle.style.display = 'block'; // Muestra el menú hamburguesa nuevamente
});
