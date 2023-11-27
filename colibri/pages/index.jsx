import React from 'react';
import { Login } from '@/back_end/login.js';
import './index.css';
import Link from 'next/link';


function Index() {

  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputSantiago" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="emailNombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contraseña" />
          </div>
          <button type="button" className="btn btn-primary" onClick={Login}>Iniciar sesión</button>
          <Link href="Inventario">
          <button className="btn btn-primary">Ir a Inventario</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Index;