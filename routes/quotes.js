const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { getQuotes, addQuote, deleteQuote } = require('../controllers/quotesController');

// Validación para la ruta de agregar cotización
router.post('/', [
  body('customerName').notEmpty().withMessage('El nombre del cliente es requerido'),
  body('project').notEmpty().withMessage('El proyecto es requerido'),
  body('amount').isFloat({ min: 0.01 }).withMessage('La cantidad debe ser un número mayor que cero'),
], addQuote);

// Ruta para obtener todas las cotizaciones
router.get('/', getQuotes);

// Ruta para eliminar una cotización por ID
router.delete('/:id', deleteQuote);

module.exports = router;
