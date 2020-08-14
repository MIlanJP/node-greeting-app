// Importing mongoose library
const mongoose = require("mongoose");
const logger=require("../logger")
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

/**
 * 
 * @param {String} firstname @description First Name of the User
 * @param {String} lastname @description Last Name of the User
 * @param {String} message @description WelcomeGreeting for the User
 */
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
        logger.error(err)
        reject(err);
      });
  });
};


/**
 * @description Used to fetch all the records from the database
 */
exports.getAllMessages = () => {
  return new Promise((resolve, reject) => {
    mongooseModel
      .find({})
      .select("message")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        logger.error(err)
        reject(err);
      });
  });
};

/**
 * 
 * @param {ObjectID} id @description Used to get Welcome message using the ID
 */
exports.getMessageById = (id) => {
  return new Promise((resolve, reject) => {
    mongooseModel
      .findById(id)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        logger.error(err)
        reject(err);
      });
  });
};

/**
 * 
 * @param {ObjectID} id  @description Id used to fetch the particular record
 * @param {String} message @description Used to update the welcome message
 */
exports.updateMessageById = (id, message) => {
  return new Promise((resolve, reject) => {
    mongooseModel.findByIdAndUpdate(id, { message: message }, function (
      err,
      result
    ) {
      if (err) {
        logger.error(err)
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

/**
 * 
 * @param {ObjectID} id  @description Used to delete the record having this ObjectID
 */
exports.deleteMessageById = (id) => {
  return new Promise((resolve, reject) => {
    mongooseModel.findByIdAndRemove(id, function (err, result) {
      if (err) {
        logger.error(err)
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
