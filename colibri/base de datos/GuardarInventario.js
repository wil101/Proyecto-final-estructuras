function guardarInventario(){
    let cantidad= document.getElementById('cantidadItem').value;
    let NombreArticulo = document.getElementById('nombreItem').value;
    
    db.collection("Inventario").add({
        cantidad: cantidad,
        NombreArticulo: NombreArticulo
    })
    .then((docRef) => {
        alert("Se guardo correctamente"); 
    })
    .catch((error) => {
        alert("Error al guardar");
    });
}

window.guardarInventario = guardarInventario;