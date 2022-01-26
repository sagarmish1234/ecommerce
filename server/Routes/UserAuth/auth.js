const express = require('express')
const router = express.Router()
const Customer = require('../../Models/customer')
const Manager = require('../../Models/manager')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//User login with jwt token authentication
router.post('/customerLogin', async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email })
    const manager = await Manager.findOne({ email: req.body.email })
    if (!customer && !manager) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }
    var isManager = false
    var user = customer
    if (manager) {
      isManager = true
      user = manager
    }
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Credentials' })
    }
    jwt.sign(user.toJSON(), process.env.secret, (err, token) => {
      if (err) {
        return res.status(403).json(err)
      }
      res.status(200).json({ token: token, isManager: isManager,message: 'User signed successfully',success:true})
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

module.exports = router
