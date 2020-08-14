// Importing DataBase model from model/greeting
// const greetingModel = require("../model/greeting.mdl").mongooseModel;
const saveGreetingMessage = require("../model/greeting").saveMessage;
const getAllMessages = require("../model/greeting").getAllMessages;
const GreetingModel = require("../model/greeting");
const emit = require("../lib/emailutility");
const emitter = emit.emitter;
/**
 * It saves the greeting message into the database
 * @param {person} name  Its the greeting message followed by name of the person
 */
exports.saveMessage = async (params, welcomeMessage) => {
  let savedmessage;

  savedmessage = await GreetingModel.saveMessage(
    params.name,
    params.sname,
    welcomeMessage
  );
  console.log(savedmessage, "Printing from greeting service");
  emitter.emit("sendEmail", "User Details\n"+savedmessage + "\nhas been added to the DataBase");
  return savedmessage;
};

/**
 * exporting the function to get all the names present in the data base
 */
exports.getNames = async (res) => {
  try {
    await getAllMessages().then((data) => {
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
  const message = await GreetingModel.getMessageById(req.params.id)
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

 await GreetingModel.updateMessageById(req.params.id,messages).then(data=>{
    res.send({message:data.message})
    emitter.emit("sendEmail", `Welcome message of ID ( ${id}) is been updated to ${messages} `);
  }).catch(err=>{
    res.status(500).send("Error While updating message")
  })


};

exports.deleteID = async (req, res) => {
  const id = req.params.id;
  await GreetingModel.deleteMessageById(req.params.id).then(data=>{
    if(data!==null){
      res.send({data});
      emitter.emit("sendEmail", `ID ( ${id}) is been deleted `);
    }else{
      res.status(500).send("This ID does not exist")
    }

  }).catch(err => res.status(500).send("Error Occured while removing"))
};
