const express = require("express")
const router = express.Router()

router.use(require("./auth"))
router.use(require("./cart.js"))

module.exports = router