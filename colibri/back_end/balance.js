// Balance 1.0
function agregarIngreso(monto) {
    // Agregar el ingreso a la base de datos
    db.collection("Balance").add({
        tipo: 'Ingreso',
        monto: monto,
        fecha: new Date()
    })
    .then((docRef) => {
        alert("Ingreso agregado correctamente");
    })
    .catch((error) => {
        alert("Error al agregar ingreso");
    });
}

function agregarGasto(tipoGasto, monto) {
    // Agregar el gasto a la base de datos
    db.collection("Balance").add({
        tipo: tipoGasto,
        monto: monto,
        fecha: new Date()
    })
    .then((docRef) => {
        alert("Gasto agregado correctamente");
    })
    .catch((error) => {
        alert("Error al agregar gasto");
    });
}

function obtenerBalance() {
    let ingresos = 0;
    let gastos = 0;

    // Obtener los ingresos y gastos de la base de datos
    db.collection("Balance").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().tipo === 'Ingreso') {
                ingresos += doc.data().monto;
            } else {
                gastos += doc.data().monto;
            }
        });

        // Calcular el balance
        let balance = ingresos - gastos;
        alert("El balance es: " + balance);
    });
}

// Hacer las funciones globalmente accesibles
window.agregarIngreso = agregarIngreso;
window.agregarGasto = agregarGasto;
window.obtenerBalance = obtenerBalance;