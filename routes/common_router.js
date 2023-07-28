const express = require("express");
const router = express.Router();
const ctrl = require("../controller/common_controller");

router.get("/", ctrl.index)

module.exports = router;