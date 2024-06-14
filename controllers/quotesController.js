const { validationResult } = require('express-validator');
const Quote = require('../models/Quote');

// Obtener todas las cotizaciones
const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Agregar una nueva cotización
const addQuote = async (req, res) => {
  // Validación de datos de entrada
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newQuote = new Quote({
    customerName: req.body.customerName,
    project: req.body.project,
    amount: req.body.amount,
  });

  try {
    const quote = await newQuote.save();
    res.status(201).json(quote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar una cotización
const deleteQuote = async (req, res) => {
  try {
    await Quote.findByIdAndRemove(req.params.id);
    res.json({ message: 'Cotización eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getQuotes,
  addQuote,
  deleteQuote
};
