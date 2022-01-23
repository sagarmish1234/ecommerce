const express = require('express')
const router = express.Router()
const Customer = require('../../Models/customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tokenAuth = require('../../Middlewares/TokenAuthorize')
require('dotenv').config()

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

router.post('/customerLogin', async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email })
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: 'User does not exist' })
    }
    const match = await bcrypt.compare(req.body.password, customer.password)
    if (!match) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Credentials' })
    }
    jwt.sign(
      customer.toJSON(),
      process.env.secret,
      (err, token) => {
        if (err) {
          return res.status(403).json(err)
        }
        res.status(200).json({ token: token })
      },
    )
  } catch (err) {
      console.log(err);
    return res.status(500).json(err)
  }
})

router.post("/getCustomerData",tokenAuth,(req,res)=>{
    res.status(200).json("Successfully entered the protected route")
})



module.exports = router
