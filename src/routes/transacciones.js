/**
 * Declaración de rutas de gestión de transacciones
 */

const { transacciones } = require('../data');
const express = require('express');

const router = express.Router();

// Listar todas las transacciones
router.get('/', function(req, res) {
    res.json({ data: transacciones })
})

// Ver información de una transacción
router.get('/:id', function(req, res) {
    const info = transacciones.find(t => t.id == req.params.id)

    res.json({ data: info })
})

// Solicitar una nueva transacción
router.post('/', function(req, res) {

    // ...
    // Lógica para crear una transacción nueva
    // ...

    res.json({
        success: true,
        data: { /* Datos de la transacción creada */ }
    })
})

module.exports = router