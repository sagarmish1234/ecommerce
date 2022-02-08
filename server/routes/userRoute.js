const express = require('express')
const router = express.Router()
const Customer = require('../models/customer') // Import User Model Schema
const Manager = require('../models/manager') // Manager is the name of the model
const jwt = require('jsonwebtoken') // Compact, URL-safe means of representing claims to be transferred between two parties.
const checkToken = require('../middleware/auth')
const bcrypt = require('bcrypt')
require('dotenv').config()



//customer register
router.post('/customer/add', async (req, res) => {
  const customer = new Customer({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  })
  try {
    const hash = await bcrypt.hash(customer.password, 10)
    customer.password = hash
    const savedCustomer = await customer.save()
    res.json(savedCustomer)
  } catch (err) {
    res.json({ message: err })
  }
})


//manager register
router.post('/manager/add', async (req, res) => {
  const manager = new Manager({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  try {
    const hash = await bcrypt.hash(manager.password, 10)
    manager.password = hash
    const savedManager = await manager.save()
    res.json(savedManager)
  } catch (err) {
    res.json({ message: err })
  }
})


//user login
router.post('/login', checkToken, async (req, res) => {
  const customer = await Customer.findOne({ username: req.body.username })
  const manager = await Manager.findOne({ username: req.body.username })
  if (!customer && !manager) {
    return res.status(404).json({ message: 'Auth failed' })
  }
  if (customer) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      customer.password,
    )
    if (!validPassword) {
      return res.status(401).json({ message: 'Password is incorrect' })
    }
    const token = jwt.sign({ _id: customer._id }, process.env.secret)
    res.header('auth-token', token).json({ ...customer, isManager: false })
  } else if (manager) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      manager.password,
    )
    if (!validPassword) {
      return res.status(401).json({ message: 'Password is incorrect' })
    }
    const token = jwt.sign({ _id: manager._id }, process.env.secret)
    res.header('auth-token', token).json({ token, isManager: true })
  }
})

module.exports = router
