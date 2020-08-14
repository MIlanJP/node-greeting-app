// Importing DataBase model from model/greeting
const greetingModel = require("../model/greeting.mdl").mongooseModel;
const saveGreetingMessage = require("../model/greeting.mdl").saveMessage;
const getAllMessages = require("../model/greeting.mdl").getAllMessages;
const Gmodel = require("../model/greeting.mdl");
const emit = require("../lib/emailutility");
const emitter = emit.emitter;
/**
 * It saves the greeting message into the database
 * @param {person} name  Its the greeting message followed by name of the person
 */
exports.saveMessage = async (params, welcomeMessage) => {
  let greetingmessage;
  let savedmessage;

  greetingmessage = new greetingModel({
    firstname: params.name,
    lastname: params.sname,
    message: welcomeMessage,
  });
  savedmessage = await saveGreetingMessage(
    params.name,
    params.sname,
    welcomeMessage
  );
  console.log(savedmessage, "Printing from greeting service");
  emitter.emit("sendEmail", JSON.stringify(greetingmessage) + "has been added");
  return savedmessage;
};

/**
 * exporting the function to get all the names present in the data base
 */
exports.getNames = async (res) => {
  try {
    await getAllMessages().then((data) => {
      console.log(data, "Printing from Services");
      res.setHeader("Content-Type", "application/json");
      res.send({ data });
    });
  } catch (err) {
    res.status(500).send("Error Occured while fetching messages");
  }

  emitter.emit("sendEmail", "All welcome messages are retrieved");
};

/**
 *
 * @param {Http Request Object} req
 * @param {Http Response Object} res
 * @description Used to display welcomemessages based on ID supplied
 */

exports.getById = async (req, res) => {
  const message = await Gmodel.getMessageById(req.params.id)
    .then((data) => {
      res.send({ message: data.message });
      console.log(data);
      console.log("Printing from service find by ID");
      emitter.emit(
        "sendEmail",
        `details of ID ( ${req.params.id})  is been retrieved`
      );
    })
    .catch((err) => {
      res.status(500).send("Not able to fetch Messages");
    });
};

exports.updatemessage = async (req, res) => {
  const id = req.params.id;
  const messages = req.params.message;
  greetingModel.findByIdAndUpdate(id, { message: messages }, function (
    err,
    result
  ) {
    if (err) {
      res.status(500).send("Not able to update Message");
    } else {
      res.send(result);
      emitter.emit(
        "sendEmail",
        `Welcome message of ID ( ${id}) is updated to (${messages}) `
      );
    }
  });
};

exports.deleteID = async (req, res) => {
  const id = req.params.id;
  greetingModel.findByIdAndRemove(id, function (err, result) {
    if (err) {
      res.status(500).send("Not able to delete Message");
    } else {
      res.send(result);
      emitter.emit("sendEmail", `ID ( ${id}) is been deleted `);
    }
  });
};
