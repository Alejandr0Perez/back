const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Inventory = require('../models/inventory');
const { addInventoryItem } = require('../controllers/inventoryController');

// Validación para la ruta de agregar ítem de inventario
router.post('/', [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero mayor que cero'),
  body('price').isFloat({ min: 0.01 }).withMessage('El precio debe ser un número mayor que cero'),
], addInventoryItem);

// Ruta para obtener todos los elementos del inventario
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar un elemento del inventario por ID
router.delete('/:id', async (req, res) => {
  try {
    const removedItem = await Inventory.findByIdAndDelete(req.params.id);
    res.json(removedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
