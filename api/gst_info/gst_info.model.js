const mongoose = require("mongoose");

const gst_infoModel = mongoose.Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      ref: "NGO"
    },
    gst_in: {
      type: String,
      trim: true,
      lowercase: true
    },
    gst_regname: {
      type: String,
      trim: true,
      lowercase: true
    },
    gst_address: {
      type: String,
      trim: true
    },
    gst_state: {
      type: String,
      trim: true,
      lowercase: true
    },
    gst_mobile: {
      type: Number,
      trim: true
    }
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

module.exports = mongoose.model("gst_infoModel", gst_infoModel);
