const express = require('express')
const router = express.Router()
const tokenAuth = require('../../Middlewares/TokenAuthorize')
const Order = require('../../Models/order')

//Create order
router.post('/checkout', tokenAuth, async (req, res) => {
  try {
    if (req.body.cart === []) {
      return res.status(403).json({ success: false, message: 'Cart Empty' })
    }
    const cart = await Promise.all(
      req.body.cart.map((item) => {
        return Book.findById(item.id).price * item.quantity
      }),
    )
    const cartTotal = cart.reduce((sum, item) => sum + item, 0)
    return res.status(200).json({
      sucess: true,
      cartTotal: cartTotal,
      message: 'CheckOut Successful',
    })
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.post('/createOrder', tokenAuth, async (req, res) => {
  try {
    if (req.body.cart === []) {
      return res.status(403).json({ success: false, message: 'Cart Empty' })
    }
    const order = new Order({
      username: req.body.username,
      cart: req.body.cart,
      cartTotal: req.body.cartTotal,
    })
    const response = await order.save()
    return res
      .status(200)
      .json({
        success: true,
        message: 'Order Placed Successfully',
        order: response,
      })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
