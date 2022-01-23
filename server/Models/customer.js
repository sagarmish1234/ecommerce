const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    member: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('customer', CustomerSchema)
