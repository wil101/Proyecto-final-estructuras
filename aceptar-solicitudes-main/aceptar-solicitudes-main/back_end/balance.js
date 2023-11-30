const express = require('express');
const router = express.Router();
const db = require('./base de datos/Configuracion.js');

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




module.exports = router;