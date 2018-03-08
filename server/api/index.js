const express = require("express");
const router = express.Router();

const ngoController = require("./NGO/ngo.controller");

router.post("/ngo/new", ngoController.signup);

module.exports = router;
