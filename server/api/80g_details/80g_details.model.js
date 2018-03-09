const mongoose = require("mongoose");

const g_detailsSchema = mongoose.Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      ref: "NGO"
    },
    ngo_name: {
      type: String,
      trim: true,
      lowercase: true
    },
    address: {
      type: String,
      trim: true
    },
    reg_no: {
      type: Date
    },
    reg_date: {
      type: Date
    },
    date_incorp: {
      type: String
    },
    place_incorp: {
      type: String,
      trim: true
    },
    pan_card: {
      type: String
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

module.exports = mongoose.model("eightyG_details", g_detailsSchema);
