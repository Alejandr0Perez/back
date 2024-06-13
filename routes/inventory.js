// routes/inventory.js
const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Manejar la solicitud para obtener todos los artículos del inventario
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Manejar la solicitud para agregar un nuevo artículo al inventario
router.post('/', async (req, res) => {
  const inventory = new Inventory({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price
  });
  try {
    const newInventory = await inventory.save();
    res.status(201).json(newInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
