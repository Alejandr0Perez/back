const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Rutas para el inventario
router.get('/', inventoryController.getInventoryItems);
router.post('/', inventoryController.addInventoryItem);
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;
