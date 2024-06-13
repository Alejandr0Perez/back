const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// @route   GET /api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/quotes
// @desc    Add a new quote
// @access  Public
router.post('/', async (req, res) => {
  const newQuote = new Quote({
    customerName: req.body.customerName,
    items: req.body.items,
    total: req.body.total
  });

  try {
    const quote = await newQuote.save();
    res.status(201).json(quote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;