// Version: 1.0
// Guardar.js
function guardar(){
    let contraseña = document.getElementById('contraseña').value;
    let nombre = document.getElementById('nombre').value;
    
    db.collection("login").add({
        contraseña: contraseña,
        nombre: nombre
    })
    .then((docRef) => {
        alert("Se guardo correctamente"); 
    })
    .catch((error) => {
        alert("Error al guardar");
    });
}

// Hacer la función globalmente accesible
window.guardar = guardar;