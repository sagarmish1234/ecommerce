const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
  const bearerHeader = req.headers['auth-token']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    jwt.verify(req.token, 'secret', (err, authData) => {
      if (err) {
        res.sendStatus(403).json({ message: 'Forbidden' })
      } else if (authData) {
        next()
      } else {
        res.sendStatus(403).json({ message: 'Forbidden' })
      }
    })
  } else {
    res.sendStatus(403).json({ message: 'Forbidden' })
  }
}

module.exports = checkToken