const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    username: String,
    cart: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Order', OrderSchema)
