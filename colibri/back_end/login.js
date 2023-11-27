// Login 1.0.2
import { useState } from 'react';
import { useRouter } from 'next/router';
//import { db } from '@/base de datos/Configuracion.js';

function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const router = useRouter();

  const login = () => {
    // Verificar las credenciales en Firebase
    db.collection("login").where("nombre", "==", nombre)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().contraseña == contraseña) {
                // Las credenciales son correctas, redirigir al usuario a la página de inventario
                router.push('/Inventario');
            } else {
                alert("Contraseña incorrecta");
            }
        });
    })
    .catch((error) => {
        alert("Error al iniciar sesión");
    });
  }

  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="nombre" />
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" />
      <button onClick={Login}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
