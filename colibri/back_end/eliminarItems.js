import React from "react";


function eliminarItems(id) {
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

const eliminarItems = () => {
    return (
        <div>
            <button onClick={() => eliminarItems(id)}>Eliminar Item</button>
        </div>
    );
}

export default eliminarItems;
