const express = require('express')
const router = express.Router()
const tokenAuth = require('../../Middlewares/TokenAuthorize')
const Order = require('../../Models/order')

//Create order
router.post('/checkout', tokenAuth, async (req, res) => {
  try {
      if(req.body.cart===[]){
          return res.status(403).json({success:false,message:"Cart Empty"})
      }
    const order = new Order({
      username: req.body.username,
      cart: req.body.cart,
      cartTotal: req.body.cartTotal,
    })
    const response = await order.save()
    return res.status(200).json({ success: true, message: response })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router
