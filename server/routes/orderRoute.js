const express = require('express')
const router = express.Router()
const Order = require('../models/order') // Import User Model Schema
const checkToken = require('../middleware/auth')

//create order
router.post('/order/:username/add', checkToken, async (req, res) => {
  const order = new Order({
    username: req.params.username,
    cart: req.body.cart,
    timestamps: true,
  })
  try {
    const savedOrder = await order.save()
    res.json(savedOrder)
  } catch (err) {
    res.json({ message: err })
  }
})

//get all orders
router.get('/orders', checkToken, async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
