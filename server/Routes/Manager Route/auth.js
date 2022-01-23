const express = require('express')
const router = express.Router()
const Manager = require('../../Models/manager.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//manager register
router.post('/managerRegister', async (req, res) => {
  try {
    const manager = await Manager.findOne({ email: req.body.email })
    if (manager) {
      return res.status(403).json({ success: false, message: 'Email Taken' })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    const newManager = new Manager({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    })

    const response = await newManager.save()
    return res.status(200).json(response)
  } catch (err) {
    return res.status(500).json(err)
  }
})


//Manager Login  with jwt token authorization
router.post('/managerLogin', async (req, res) => {
  try {
    const manager = await Manager.findOne({ email: req.body.email })
    if (!manager) {
      return res
        .status(404)
        .json({ success: false, message: 'User does not exist' })
    }
    const match = await bcrypt.compare(req.body.password, manager.password)
    if (!match) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Credentials' })
    }
    jwt.sign(
      manager.toJSON(),
      process.env.secret,
      (err, token) => {
        if (err) {
          return res.status(403).json(err)
        }
        res.status(200).json({ token: token })
      },
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})




module.exports = router
