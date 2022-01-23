const express = require("express")
const router = express.Router()

router.use(require("./inventory.js"))
module.exports = router