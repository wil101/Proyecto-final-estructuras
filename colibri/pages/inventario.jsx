import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inventario.css';
//import { agregarItem} from '@/back_end/inventario.js';
//import { verItems} from '@/back_end/verInventario.js';
//import { eliminarItems} from '@/back_end/eliminarInventario.js';

function Inventario() {
  return (
    <div className="container">
        <div className="row">
            <form>
                <div className="mb-3">
                  <label htmlFor="nombreItem" className="form-label">Nombre del artículo</label>
                  <input type="text" className="form-control" id="nombreItem" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cantidadItem" className="form-label">Cantidad</label>
                  <input type="number" className="form-control" id="cantidadItem" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidadItem" className="form-label">Subcantidad</label>
                    <input type="number" className="form-control" id="subCantidadItem" />
                </div>
            </form>
            <div className="botonAgregar">
                <button className="btn btn-primary" >Agregar artículo</button>
            </div>
            <div className="botonVer">
                <button className="btn btn-primary" >Ver items</button>
            </div>
            <div>
                <button className="btn btn-primary" >Eliminar items</button>
            </div>
            <div id="items"></div>
        </div>
    </div>
  );
}

export default Inventario;