const mongoose = require("mongoose");

const ngoModel = mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "NGO name is a required field"]
    },
    org_name: {
      type: String,
      trim: true,
      lowercase: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "email is a required field"]
    },
    phone: {
      type: Number,
      required: [true, "phone number is a required field"]
    },
    website: {
      type: String,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "password is a required field"]
    },
    address: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true,
      lowercase: true
    },
    country: {
      type: String,
      trim: true,
      lowercase: true
    },
    pan_card: {
      type: String,
      trim: true
    },
    fb_link: {
      type: String,
      trim: true,
      lowercase: true
    },
    tw_link: {
      type: String,
      trim: true,
      lowercase: true
    },
    li_link: {
      type: String,
      trim: true,
      lowercase: true
    },
    g_link: {
      type: String,
      trim: true,
      lowercase: true
    },
    bio: {
      type: String,
      trim: true
    },
    logo: {
      type: String
    },
    url: {
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

module.exports = mongoose.model("ngoModel", ngoModel);
