const ngoModel = require("./ngo.model");
const path = require("path");

const ngoOperations = {
    signUp: function (ngoObj, res) {
        console.log("Inside db ngo SignUp");
        var ngoObject = new ngoModel({
            fullName: ngoObj.fullName,
            email: ngoObj.email,
            phone: ngoObj.phone,
            password: ngoObj.password
        });
        ngoObject.save(function (err, result) {
            console.log("Inside save function.....")
            if (err) {
                console.log(err);
                res.json({
                    message: "Error during Registration....."
                });
            } else {
                console.log(result);
                res.json({
                    message: "Registered Successfully"
                });
            }

        });

    },
    login: function (ngoObject, res) {
        console.log("Inside db ngo login");
        ngoModel.find({
            fullName: ngoObject.fullName,
            password: ngoObject.password
        }, function (err, docs) {
            if (docs && docs.length > 0) {
                console.log(docs[0].userid);
                var normalPath = path.normalize(__dirname + "/../../..");
                let fullPath = path.join(normalPath, "/client/pages/login.html");
                res.sendFile(fullPath);
            } else {
                res.json({
                    message: "Invalid User"
                });
            }
        })
    }
}

module.exports = ngoOperations;
