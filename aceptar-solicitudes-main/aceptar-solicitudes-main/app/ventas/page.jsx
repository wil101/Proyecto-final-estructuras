"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import "./pageUser.css";
import {realizarSolicitudPOST} from "@/back_end/facturacion";
//import Drivers from "@/components/Drivers";

export default function Summary() {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const newStars = stars.map((star, i) => i <= index);
    setStars(newStars);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realizar solicitud Fetch al backend para agregar la factura
      await realizarSolicitudPOST("/facturacion", {
        medioDePago: medioPago,
        productos: productos,
        detallePedido: detallePedido,
        valorTotal: valorTotal,
        fechaPago: fechaPago,
        precioUnitario: precioUnitario
      }, manejarRespuestaFacturacion);

      // Puedes realizar acciones adicionales según la respuesta del backend si es necesario
    } catch (error) {
      console.error('Error al agregar la factura:', error);
      alert('Error al agregar la factura');
    }
  };

  // Función para manejar la respuesta de la facturación
  const manejarRespuestaFacturacion = (status, responseData) => {
    if (status === 200) {
      alert('Factura agregada exitosamente');
      // Puedes redirigir a otra página o realizar alguna acción adicional si lo deseas
    } else {
      console.error('Error al agregar la factura:', responseData);
      alert('Error al agregar la factura');
    }
  };


  const resetStars = () => {
    const newStars = stars.map(() => false);
    setStars(newStars);
  };

  const [showInfo, setShowInfo] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);

  return (
    <div>
      <Header></Header>
      <Map></Map>
      <div className="drivers">
        <h4>Menu</h4>
        <hr />
        <p
          onClick={() => {
            setShowInfo(true);
            setShowInfo2(false);
            setShowInfo3(false);
          }}
        >
          Nueva venta
        </p>
        <hr />
        <p
          onClick={() => {
            setShowInfo(false);
            setShowInfo2(true);
            setShowInfo3(false);
          }}
        >
          Inventario
        </p>
        <hr />
        <p
          onClick={() => {
            setShowInfo(false);
            setShowInfo2(false);
            setShowInfo3(true);
          }}
        >
          Balance
        </p>
      </div>

      {showInfo && (
        <div className="summary">
          
            <div>
              <h2>Medio de Pago:</h2>
              <select id="medioPago" name="medioPago">
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
              </select>
            </div>
            <div className="summary-info">
              <div className="summary-info-item">
                <label for="producto">Producto:</label><br /> 
                <input type="text" id="producto" name="producto" /><br />
                <br></br>
                <label for="cantidad">Cantidad:</label><br />
                <input type="number" id="cantidad" name="cantidad" /><br />
                <br></br>
                <label for="cantidad">Fecha pago:</label><br />
                <input type="date" id="fechaPago" name="fecha" /><br />
                <br></br>
                <label for="cantidad">Precio unitario:</label><br />
                <input type="number" id="cantidad" name="cantidad" /><br />
                <br></br>
                <label for="cantidad">Valor total:</label><br />
                <input type="number" id="valorTotal" name="cantidad" /><br />
                <br></br>
                <label for="producto">Detalle pedido:</label><br />
                <input type="text" id="detallePedido" name="detallepedido" /><br />
              </div>
            </div>

          <div className="summary-btns">
            <button className="env-btn" onClick={resetStars}>
              Enviar
            </button>
          </div>
          
        </div>
      )}

      {showInfo2 && (
        <div className="summary">
            <form>
                <div class="summary-info-item">
                  <label for="nombreItem" class="form-label">Nombre del producto</label><br></br>
                  <input type="text" class="form-control" id="nombreItem" /><br />
                  <br></br>
                
                  <label for="cantidadItem" class="form-label">Cantidad</label><br></br>
                  <input type="number" class="form-control" id="cantidadItem" /><br />
                <br></br>
                
                  <label for="cantidadItem" class="form-label">Costo</label><br></br>
                  <input type="number" class="form-control" id="cantidadCosto" /><br />
                <br></br>
                  
                  <label for="cantidadItem" class="form-label">tipo de subProducto</label><br></br>
                  <input type="number" class="form-control" id="cantidadSubproducot" /><br />
                <br></br>
                
                  <label for="cantidadItem" class="form-label">cantidad subProducto</label><br></br>
                  <input type="number" class="form-control" id="subCantidadSubproducto" /><br />
                <br></br>
                </div>
                
            </form>
            <div className="summary-btns">
              <button className="env-btn" onClick={handleFormSubmit}>
                Agregar
              </button>
              <button className="env-btn" onClick={resetStars}>
                Ver items
              </button>
              <button className="env-btn" onClick={resetStars}>
                Eliminar items
              </button>
            </div>
          </div>
      )}
      {showInfo3 && (
        <div className="summary-balance">
          <form action="balanceform">
            <div>
              <label for="producto">Servicio </label><br />
                <br></br>
              <input type="text" id="producto" name="servicio" /><br />
                <br></br>
            </div>
            <div>
              <label for="producto">Valor a pagar </label><br />
                <br></br>
              <input type="number" id="producto" name="precioServicio" /><br />
                <br></br>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
