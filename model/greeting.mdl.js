// Importing mongoose library
const mongoose = require("mongoose");

/**
 * @description creating schema for mongo database
 * @param {String} firstname @description firstname of user
 * @param {String} secondname @description secondname of user
 * @param {String} welcomemessage @description welcome message to  user
 * 
 */
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
