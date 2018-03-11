const ngoModel = require("./ngo.model");

module.exports.signup = (req, res) => {
    //business logic here
};


module.exports.updateInfo = (req, res) => {
    ngoModel.findOneAndUpdate({
            "_id": req.body.id
        }, {
            "$set": req.body
        }, {
            new: true
        },
        (err, doc) => {
            if (err) {
                res.send(err);
            } else if (!doc) {

                res.status(404).json({
                    success: false,
                    message: "No such NGO found"
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: "NGO info has been updated successfully",
                    doc: doc
                });
            }
        }
    );
};