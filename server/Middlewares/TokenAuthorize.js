const jwt = require('jsonwebtoken')
require("dotenv").config()
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json('You must be logged in')

  jwt.verify(token, process.env.secret, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json('Security breach detected')
    }
    req.user = user
    next()
  })
}
