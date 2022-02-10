const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    address: String,
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Customer', CustomerSchema)
