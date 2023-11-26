// Inventario 1.0
function agregarItem() {
    let nombreItem = document.getElementById('nombreItem').value;
    let cantidadItem = document.getElementById('cantidadItem').value;

    // Agregar el item al inventario en Firebase
    db.collection("Inventario").add({
        nombre: nombreItem,
        cantidad: cantidadItem
    })
    .then((docRef) => {
        alert("Item agregado correctamente"); 
    })
    .catch((error) => {
        alert("Error al agregar item");
    });
}

// Hacer la función globalmente accesible
window.agregarItem = agregarItem;

if (!firebase.apps.length) {
    console.log("Firebase no se ha inicializado");
} else {
    console.log("Firebase se ha inicializado correctamente");
}