module.exports = function (app) {
// Operaciones CRUD para la tabla "facturacion"
//añadir factura en facturacion
app.post('/facturacion', (req, res) => {
    const { medioDePago, valorTotal, fechaPago, productos, detallePedido, precioUnitario } = req.body;
    const query = 'INSERT INTO facturacion (medioDePago, valorTotal, fechaPago, productos, detallePedido, precioUnitario) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [medioDePago, valorTotal, fechaPago, productos, detallePedido, precioUnitario], (err, result) => {
      if (err) {
        console.error('Error al insertar en facturacion:', err);
        res.status(500).send('Error al insertar en facturacion');
      } else {
        res.send('Factura añadida exitosamente');
      }
    });
  });
  //obtener factura en facturacion
  app.get('/facturacion', (req, res) => {
    db.query('SELECT * FROM facturacion', (err, result) => {
      if (err) {
        console.error('Error al obtener facturacion:', err);
        res.status(500).send('Error al obtener facturacion');
      } else {
        res.json(result);
      }
    });
  });
  //actualizar factura en facturacion
  app.put('/facturacion/:id', (req, res) => {
    const id = req.params.id;
    const { medioDePago, valorTotal, fechaPago, idInventario, idBalance } = req.body;
    const query = 'UPDATE facturacion SET medioDePago=?, valorTotal=?, fechaPago=?, idInventario=?, idBalance=? WHERE id=?';
    db.query(query, [medioDePago, valorTotal, fechaPago, idInventario, idBalance, id], (err, result) => {
      if (err) {
        console.error('Error al actualizar facturacion:', err);
        res.status(500).send('Error al actualizar facturacion');
      } else {
        res.send('Factura actualizada exitosamente');
      }
    });
  });
  //eliminar factura en facturacion
  app.delete('/facturacion/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM facturacion WHERE id=?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al borrar factura:', err);
        res.status(500).send('Error al borrar factura');
      } else {
        res.send('Factura borrada exitosamente');
      }
    });
  });
}