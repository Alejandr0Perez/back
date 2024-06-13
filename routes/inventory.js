const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// @route   GET /api/inventory
// @desc    Get all inventory items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/inventory
// @desc    Add a new inventory item
// @access  Public
router.post('/', async (req, res) => {
  const newItem = new Inventory({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price
  });

  try {
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/inventory/:id
// @desc    Delete an inventory item
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    await Inventory.findByIdAndRemove(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
