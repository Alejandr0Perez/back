const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');

// Obtener todas las cotizaciones
router.get('/', quotesController.getQuotes);

// Agregar una nueva cotización
router.post('/', quotesController.addQuote);

// Eliminar una cotización
router.delete('/:id', quotesController.deleteQuote);

module.exports = router;
