const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Quote', quoteSchema);
