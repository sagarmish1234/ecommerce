const express = require("express")
const router = express.Router()

router.use(require("./auth"))
router.use(require("./Invetory/index"))
module.exports = router