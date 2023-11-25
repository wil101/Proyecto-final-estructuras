

function guardar(){
    db.collection("login").add({
        contraseña: document.getElementById("contraseña").value,
        nombre: document.getElementById("nombre").value,
    })
    .then((docRef) => {
        alert("Se guardo correctamente"); 
    })
    .catch((error) => {
        alert("Error al guardar");
    });
}