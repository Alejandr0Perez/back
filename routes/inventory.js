const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// @route   GET /api/inventory
// @desc    Obtener todos los ítems de inventario
// @access  Público
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/inventory
// @desc    Agregar un nuevo ítem de inventario
// @access  Público
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
// @desc    Eliminar un ítem de inventario
// @access  Público
router.delete('/:id', async (req, res) => {
  try {
    await Inventory.findByIdAndRemove(req.params.id);
    res.json({ message: 'Ítem eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
