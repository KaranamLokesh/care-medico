const express = require("express");
const path = require("path");

const router = express.Router();

const ngoController = require("./NGO/ngo.controller");

router.post("/ngo/new", (req, res) => {
    console.log("Inside index.js signUp");
    console.log(req.body);

    let ngoSignUpObj = req.body;
    ngoController.signUp(ngoSignUpObj, res);

});

router.post("/ngo/login", (req, res) => {
    console.log("Inside index.js login");
    console.log(req.body);

    let ngoLoginObj = req.body;
    ngoController.login(ngoLoginObj, res);

});
router.get('/', (req, res) => {
    console.log("Inside routes");
    console.log(__dirname);
    var normalPath = path.normalize(__dirname + "/../..");
    console.log(normalPath);
    var fullPath = path.join(normalPath, "/client/pages/index.html");
    res.sendFile(fullPath);
})

module.exports = router;
