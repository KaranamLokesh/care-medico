"use strict";

module.exports = function (app) {
    console.log("Inside route.js");
    app.use("/api", require("../api/index"));
};
