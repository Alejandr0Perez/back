const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  customerName: {
    type: String,
    required: true
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);
