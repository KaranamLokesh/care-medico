const mongoose = require("mongoose");

const campaignModel = mongoose.Schema(
  {
    ngo_id: {
      type: Schema.Types.ObjectId,
      ref: "NGO"
    },
    fund_title: {
      type: String,
      trim: true,
      lowercase: true
    },
    cause: {
      type: String,
      trim: true
    },
    amount: {
      type: Number,
      trim: true
    },
    end_date: {
      type: Date
    },
    cover_img: {
      type: String,
      trim: true,
      lowercase: true
    },
    cover_videoLink: {
      type: String,
      trim: true,
      lowercase: true
    },
    campaign_desc: {
      type: String,
      trim: true
    },
    campaign_url: {
      type: String,
      trim: true,
      lowercase: true
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

module.exports = mongoose.model("campaignModel", campaignModel);
