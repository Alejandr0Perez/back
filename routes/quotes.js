const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Quote = require('../models/Quote');
const { addQuote } = require('../controllers/quotesController');

// Validación para la ruta de agregar una nueva cotización
router.post('/', [
  body('customerName').notEmpty().withMessage('El nombre del cliente es requerido'),
  body('items').isArray({ min: 1 }).withMessage('Debe incluir al menos un ítem en la cotización'),
  body('total').isFloat({ min: 0.01 }).withMessage('El total debe ser un número mayor que cero'),
], addQuote);

// Ruta para obtener todas las cotizaciones
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar una cotización por ID
router.delete('/:id', async (req, res) => {
  try {
    const removedQuote = await Quote.findByIdAndDelete(req.params.id);
    res.json(removedQuote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
