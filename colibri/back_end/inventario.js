// Inventario 1.5
import { useState } from 'react';
function agregarItem(nombreItem, cantidadItem, subCantidadItem) {
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

export default agregarItem;