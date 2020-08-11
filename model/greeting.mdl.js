const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userDetails", userDetailsSchema);
