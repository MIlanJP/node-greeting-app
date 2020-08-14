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
    firstname: { type: String },
    lastname: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);
const mongooseModel = mongoose.model("userDetails", userDetailsSchema);
exports.mongooseModel = mongooseModel;

exports.saveMessage = (firstname, lastname, message) => {
  let greetingmessage = new mongooseModel({
    firstname: firstname,
    lastname: lastname,
    message: message,
  });
  return new Promise((resolve, reject) => {
    greetingmessage
      .save()
      .then((data) => resolve(data))
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getAllMessages = () => {
  return new Promise((resolve, reject) => {
    mongooseModel
      .find({})
      .select("message")
      .then((data) => {
        // console.log(data,"Printing from Model update section")
        resolve(data);
      })
      .catch((err) => {
        console.log("Hey printing from Error Model");
        reject(err);
      });
  });
};

exports.getMessageById = (id) => {
  return new Promise((resolve, reject) => {
    mongooseModel
      .findById(id)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log("Hey printing from Error Model");
        reject(err);
      });
  });
};

