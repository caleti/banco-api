/**
 * Declaración de rutas de la API
 */
const router = require('express').Router();

router.use('/transacciones', require('./transacciones'));
// router.use( '/foo', require('./foo'));
// ...

module.exports = router