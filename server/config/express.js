"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
