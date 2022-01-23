const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Float64Array,
      required: true,
    },
    reorderThreshold: {
      type: String,
    },
    stopOrder: {
      type: Boolean,
      required: true,
      default: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("book",BookSchema)
