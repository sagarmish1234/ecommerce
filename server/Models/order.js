const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  transactionTime: {
    type: Date,
    required: true,
    default: new Date().toLocaleTimeString(),
  },
  transactionDate: {
    type: String,
    required: true,
    default: new Date().toLocaleDateString(),
  },
  username: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
    default: [],
  },
  cartTotal: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('order', OrderSchema)
