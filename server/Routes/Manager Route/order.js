const express = require('express')
const router = express.Router()
const Order = require('../../Models/order')

//get all orders
router.get('/orderGetAll', async (req, res) => {
  try {
    const orders = await Order.find({})
    return res.status(404).json({ success: true, message: orders })
  } catch (err) {
    console.error(err)
    return res.status(500).json(err)
  }
})

//get orders according to username
router.get('/:username/orderGetUsername', async (req, res) => {
  try {
    const orders = await Order.find({ username: req.params.username })
    return res.status(200).json({ success: true, message: orders })
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

//get orders according to id
router.get('/:id/orderGetId', async (req, res) => {
  try {
    const orders = await Order.find({ username: req.params.id })
    return res.status(200).json({ success: true, message: orders })
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

module.exports = router
