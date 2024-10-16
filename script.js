// Muestra el modal de la foto al hacer clic en el botón de Windows
document.getElementById("windows-button").onclick = function() {
    document.getElementById("photo-modal").style.display = "block"; // Muestra la foto
};

// Cierra el modal de la foto
const closeModal = document.getElementById("close-modal");
if (closeModal) { // Verifica que el elemento exista
    closeModal.onclick = function() {
        document.getElementById("photo-modal").style.display = "none"; // Cierra la foto
    };
}


// Función para actualizar la hora
function myFunc() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0'); // Formato de 2 dígitos
    var minutes = String(now.getMinutes()).padStart(2, '0'); // Formato de 2 dígitos
    var time = (`${hours}:${minutes}`);
    document.getElementById('display-time').innerHTML = time;
    console.log(time); // Imprime el tiempo en consola
}

// Llama a la función de actualización de tiempo y la establece para que se ejecute cada segundo
myFunc();
setInterval(myFunc, 1000);

