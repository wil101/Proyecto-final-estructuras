function eliminarItem(id) {
    // Eliminar el item de Firebase
    db.collection("Inventario").doc(id).delete()
    .then(() => {
        alert("Item eliminado correctamente");
        // Actualizar la vista
        obtenerItems();
    })
    .catch((error) => {
        alert("Error al eliminar item");
    });
}

window.eliminarItem = eliminarItem;