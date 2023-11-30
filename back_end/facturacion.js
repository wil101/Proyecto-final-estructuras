document.addEventListener("DOMContentLoaded", function () {
  const ventaForm = document.getElementById("ventaForm");

  ventaForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const medioPago = document.getElementById("medioPago").value;
      const producto = document.getElementById("producto").value;
      const cantidad = document.getElementById("cantidad").value;
      const valorUnitario = document.getElementById("valorUnitario").value;
      const valorTotal = document.getElementById("valorTotal").value;
      const detallePedido = document.getElementById("detallePedido").value;

      // Realizar solicitud Fetch al backend para agregar la factura
      realizarSolicitudPOST("/facturacion/:id", {
          medioDePago: medioPago,
          producto: producto,
          cantidad: cantidad,
          valorUnitario: valorUnitario,
          valorTotal: valorTotal,
          detallePedido: detallePedido
      }, manejarRespuestaFacturacion);
  });

  // Función para realizar solicitudes POST usando fetch
  function realizarSolicitudPOST(url, data, callback) {
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          callback(200, data);
      })
      .catch(error => {
          console.error('Error al agregar la factura:', error);
          alert('Error al agregar la factura');
      });
  }

  // Función para manejar la respuesta de la facturación
  function manejarRespuestaFacturacion(status, responseData) {
      if (status === 200) {
          alert('Factura agregada exitosamente');
          // Puedes redirigir a otra página o realizar alguna acción adicional si lo deseas
      } else {
          console.error('Error al agregar la factura:', responseData);
          alert('Error al agregar la factura');
      }
  }
});
