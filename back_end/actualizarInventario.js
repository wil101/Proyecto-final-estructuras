function actualizarItem(id, nombre, cantidad, subCantidad) {
    // Actualizar el item en Firebase
    db.collection("Inventario").doc(id).set({
        nombre: nombre,
        cantidad: cantidad,
        subCantidad: subCantidad
    })
    .then(() => {
        alert("Item actualizado correctamente");
        // Actualizar la vista
        obtenerItems();
    })
    .catch((error) => {
        alert("Error al actualizar item");
    });
}

window.actualizarItem = actualizarItem;