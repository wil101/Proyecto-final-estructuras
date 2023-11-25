// Login 1.0
function login() {
    let nombre = document.getElementById('nombre').value;
    let contraseña = document.getElementById('contraseña').value;

    // Verificar las credenciales en Firebase
    db.collection("login").where("nombre", "==", nombre)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().contraseña == contraseña) {
                // Las credenciales son correctas, redirigir al usuario a la página de inventario
                window.location.href = "/front-end/Inventario.html";
            } else {
                alert("Contraseña incorrecta");
            }
        });
    })
    .catch((error) => {
        alert("Error al iniciar sesión");
    });
}

// Hacer la función globalmente accesible
window.login = login;