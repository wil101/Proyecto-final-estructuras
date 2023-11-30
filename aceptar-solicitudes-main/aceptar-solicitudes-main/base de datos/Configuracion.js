const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root', 
  password: 'Mysqlhotgodwil17.',
  database: 'colibri',
});
//conexion a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

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

// Operaciones CRUD para la tabla "inventario"
//añadir producto en inventario
app.post('/inventario', (req, res) => {
  const { nombreProducto, stock, costo, subProducto, tipoDeSubProducto } = req.body;
  const query = 'INSERT INTO inventario (nombreProducto, stock, costo, subProducto, tipoDeSubProducto) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombreProducto, stock, costo, subProducto, tipoDeSubProducto], (err, result) => {
    if (err) {
      console.error('Error al insertar en inventario:', err);
      res.status(500).send('Error al insertar en inventario');
    } else {
      res.send('Producto añadido exitosamente');
    }
  });
});
//obtener producto en inventario
app.get('/inventario', (req, res) => {
  db.query('SELECT * FROM inventario', (err, result) => {
    if (err) {
      console.error('Error al obtener inventario:', err);
      res.status(500).send('Error al obtener inventario');
    } else {
      res.json(result);
    }
  });
});
//actualziar producto en inventario
app.put('/inventario/:id', (req, res) => {
  const id = req.params.id;
  const { nombreProducto, stock, costo, subProducto, tipoDeSubProducto } = req.body;
  const query = 'UPDATE inventario SET nombreProducto=?, stock=?, costo=?, subProducto=?, tipoDeSubProducto=? WHERE id=?';
  db.query(query, [nombreProducto, stock, costo, subProducto, tipoDeSubProducto, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar inventario:', err);
      res.status(500).send('Error al actualizar inventario');
    } else {
      res.send('Producto actualizado exitosamente');
    }
  });
});
//elimar producto en invetario
app.delete('/inventario/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM inventario WHERE id=?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al borrar producto del inventario:', err);
      res.status(500).send('Error al borrar producto del inventario');
    } else {
      res.send('Producto borrado exitosamente');
    }
  });
});


// Operaciones CRUD para la tabla "balance"
//añadir servicio en balance
app.post('/balance', (req, res) => {
  const { nombreDeServicio, costoServicio, fechaDePago, periodicidad } = req.body;
  const query = 'INSERT INTO balance (nombreDeServicio, costoServicio, fechaDePago, periodicidad) VALUES (?, ?, ?, ?)';
  db.query(query, [nombreDeServicio, costoServicio, fechaDePago, periodicidad], (err, result) => {
    if (err) {
      console.error('Error al insertar en balance:', err);
      res.status(500).send('Error al insertar en balance');
    } else {
      res.send('Servicio añadido exitosamente');
    }
  });
});
//obtener servicio en balance
app.get('/balance', (req, res) => {
  db.query('SELECT * FROM balance', (err, result) => {
    if (err) {
      console.error('Error al obtener balance:', err);
      res.status(500).send('Error al obtener balance');
    } else {
      res.json(result);
    }
  });
});
//actualizar servicio en balance
app.put('/balance/:id', (req, res) => {
  const id = req.params.id;
  const { nombreDeServicio, costoServicio, fechaDePago, periodicidad } = req.body;
  const query = 'UPDATE balance SET nombreDeServicio=?, costoServicio=?, fechaDePago=?, periodicidad=? WHERE id=?';
  db.query(query, [nombreDeServicio, costoServicio, fechaDePago, periodicidad, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar balance:', err);
      res.status(500).send('Error al actualizar balance');
    } else {
      res.send('Servicio actualizado exitosamente');
    }
  });
});
//eliminar servicio en balance
app.delete('/balance/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM balance WHERE id=?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al borrar servicio del balance:', err);
      res.status(500).send('Error al borrar servicio del balance');
    } else {
      res.send('Servicio borrado exitosamente');
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
