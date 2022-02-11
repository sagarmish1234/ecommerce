const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    username: String,
    cart: {
      type: Array,
      default: [],
      total: Number,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Order', OrderSchema)
