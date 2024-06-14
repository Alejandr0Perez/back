// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Importar la configuración de la base de datos

// Importar las rutas
const inventoryRoutes = require('./routes/inventory');
const quotesRoutes = require('./routes/quotes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/inventory', inventoryRoutes);
app.use('/api/quotes', quotesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
