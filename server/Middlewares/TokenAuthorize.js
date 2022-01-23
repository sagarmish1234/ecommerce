const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json('Protected Route')

  jwt.verify(token, process.env.secret, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json('Protected Route')
    }
    req.user = user
    next()
  })
}
