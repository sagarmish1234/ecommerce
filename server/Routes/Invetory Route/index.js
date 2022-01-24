const express = require("express")
const router = express.Router()

router.use(require("./inventory"))
module.exports = router