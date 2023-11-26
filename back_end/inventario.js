// Inventario 1.5
function agregarItem() {
    let nombreItem = document.getElementById('nombreItem').value;
    let cantidadItem = document.getElementById('cantidadItem').value;
    let subCantidadItem = document.getElementById('subCantidadItem').value;

    // Agregar el item al inventario en Firebase
    db.collection("Inventario").add({
        nombre: nombreItem,
        cantidad: cantidadItem,
        subCantidadItem: subCantidadItem
    })
    .then((docRef) => {
        alert("Item agregado correctamente"); 
        // Actualizar la vista
        obtenerItems();
    })
    .catch((error) => {
        alert("Error al agregar item");
    });
}







// Hacer las funciones globalmente accesibles
window.agregarItem = agregarItem;


