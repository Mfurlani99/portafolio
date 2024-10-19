// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar el modal de la foto
    const closeModal = document.getElementById("close-modal");
    if (closeModal) { // Verifica que el elemento exista
        closeModal.addEventListener('click', () => {
            document.getElementById("photo-modal").style.display = "none"; // Cierra la foto
        });
    }

    // Cerrar la página "Sobre Mí"

    window.closeAboutButton = function () {
        window.location.href = "index.html"; // Redirige a la página "index.html"
    };




    // Interacción de las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectInner = card.querySelector('.project-inner'); // Asegúrate de que exista este elemento
            if (projectInner) {
                projectInner.classList.toggle('flipped'); // Alterna la clase para voltear la tarjeta
            }
        });
    });

    // Función para actualizar la hora
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0'); // Formato de 2 dígitos
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Formato de 2 dígitos
        document.getElementById('display-time').innerHTML = `${hours}:${minutes}`; // Muestra la hora
    }

    // Llama a la función de actualización de tiempo y la establece para que se ejecute cada segundo
    updateTime();
    setInterval(updateTime, 1000); // Actualiza la hora cada segundo

});
