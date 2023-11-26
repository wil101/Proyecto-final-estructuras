function verItems() {
    // Limpiar la vista
    document.getElementById('items').innerHTML = '';

    // ver los items del inventario en Firebase
    db.collection("Inventario").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Agregar cada item a la vista
            document.getElementById('items').innerHTML += `<div>${doc.data().nombre}: ${doc.data().cantidad}</div>`;
        });
    });
}

window.verItems = verItems;