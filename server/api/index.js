const express = require("express");
const router = express.Router();

const ngoController = require("./NGO/ngo.controller");

router.post("/ngo/new", ngoController.signup);
router.put("/ngo/edit", ngoController.updateInfo);

module.exports = router;
