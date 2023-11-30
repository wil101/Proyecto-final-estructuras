const express = require('express');
const router = express.Router();
const db = require('./base de datos/Configuracion.js');


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

  module.exports = router;