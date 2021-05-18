const express = require("express")
const router = express.Router()
const novelController = require("../controllers/novel.controller")

router.get("/get_all", novelController.getAll)

module.exports = router
