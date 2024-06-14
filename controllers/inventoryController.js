const { validationResult } = require('express-validator');
const Inventory = require('../models/inventory');

// Obtener todos los ítems de inventario
const getInventoryItems = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Agregar un nuevo ítem de inventario
const addInventoryItem = async (req, res) => {
  // Validación de datos de entrada
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
};

// Eliminar un ítem de inventario
const deleteInventoryItem = async (req, res) => {
  try {
    await Inventory.findByIdAndRemove(req.params.id);
    res.json({ message: 'Ítem eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getInventoryItems,
  addInventoryItem,
  deleteInventoryItem
};
