const express = require("express")
const router = express.Router()
const publicController = require("../controllers/public.controller")

router.use("/doc", publicController.getApiDocPage())

module.exports = router
