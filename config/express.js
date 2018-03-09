"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = function (app) {
    console.log("Inside express.js");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};
