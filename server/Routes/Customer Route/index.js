const express = require("express")
const router = express.Router()

router.use(require("./register"))
router.use(require("./cart.js"))

module.exports = router