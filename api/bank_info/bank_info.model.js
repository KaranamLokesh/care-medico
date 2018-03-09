const mongoose = require("mongoose");

const bank_infoModel = mongoose.Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      ref: "NGO"
    },
    bank_name: {
      type: String,
      trim: true,
      lowercase: true
    },
    branch_name: {
      type: String,
      trim: true,
      lowercase: true
    },
    acc_no: {},
    ifsc_no: {
      type: String,
      trim: true
    },
    pan_no: {
      type: String,
      trim: true
    },
    pan_doc: {},
    address_type: {},
    cancel_cheque: {}
  },
  {
    strict: true,
    runSettersOnQuery: true,
    timestamps: {
      createdAt: "created",
      updatedAt: "updated"
    }
  }
);

module.exports = mongoose.model("bank_infoModel", bank_infoModel);
