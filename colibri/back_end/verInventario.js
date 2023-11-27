import { useState } from 'react';

function verItems() {
    const [items, setItems] = useState([]);

    // ver los items del inventario en Firebase
    db.collection("Inventario").get().then((querySnapshot) => {
        const newItems = [];
        querySnapshot.forEach((doc) => {
            // Agregar cada item a la lista
            newItems.push({ nombre: doc.data().nombre, cantidad: doc.data().cantidad });
        });
        setItems(newItems);
    });
    
    return items;
}

export default verItems;