const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  total: { type: Number, required: true }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
