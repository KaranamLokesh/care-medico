const mongoose = require("mongoose");

const fund_categoryModel = mongoose.Schema(
  {
    category_name: {
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

module.exports = mongoose.model("fund_categoryModel", fund_categoryModel);
