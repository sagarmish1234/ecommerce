const express = require('express')
const router = express.Router()
const Customer = require('../../Models/customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//customer registration
router.post('/customerRegister', async (req, res) => {
  try {
    const customer = await Customer.find({ email: req.body.email })
    if (customer.length != 0) {
      return res.status(403).json({ success: false, message: 'Email Taken' })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    const newCustomer = new Customer({
      username: req.body.username,
      password: hash,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    })

    const response = await newCustomer.save()
    return res.status(200).json(response)
  } catch (err) {
    return res.status(500).json(err)
  }
})


module.exports = router
