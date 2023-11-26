// Ventas 1.0
document.getElementById('ventaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById('cantidad').value;

    // Agregar la venta a la base de datos
    db.collection("Ventas").add({
        producto: producto,
        cantidad: cantidad,
        fecha: new Date()
    })
    .then((docRef) => {
        alert("Venta realizada correctamente");
        // Limpiar el formulario
        document.getElementById('ventaForm').reset();
    })
    .catch((error) => {
        alert("Error al realizar venta");
    });
});