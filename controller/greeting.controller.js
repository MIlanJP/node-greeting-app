// Importing greeting from services
const greetingservices = require("../services/greeting.services");

/**
 * this is post Request
 * @param {request Object from http } req  incoming readable request object
 * @param {response Object to http} res  Outgoing writable response object
 *  @param {welcomemesage} Adds Welcome to Node JS when  name added
 */
exports.create = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let welcomeMessage;
  /**
   * @description Assigns firstname and lastname if both are entered
   */
  if (
    typeof req.params.name !== "undefined" &&
    typeof req.params.name !== "undefined"
  ) {
    welcomeMessage = `Welcome to Node JS ${req.params.name} ${req.params.sname}`;
  } 
   if (typeof req.params.name === "undefined") {
  /**
   * This condition gets executed when only firstname is given
   */
    welcomeMessage = `Welcome to Node JS ${req.params.sname}`;
  } 
  if(typeof req.params.sname === "undefined") {
  /**
   * This condition gets executed when only lastname is given
   */
    welcomeMessage = `Welcome to Node JS ${req.params.name}`;
  }
  greetingservices.saveMessage(req.params, welcomeMessage);
  res.send({ welcomeMessage });
};

/**
 * this is GET request
 * @param {request Object from http } req  incoming readable request object
 * @param {response Object to http} res  Outgoing writable response object
 */

exports.getnames = (req, res) => {
   greetingservices.getNames(res);
};

/**
 * This is a get request
 * @param {http request Object} req 
 * @param {http response Object} res
 * @description function use to load the Welcome message based on ID supplied 
 */
exports.getById = (req, res) => {
  greetingservices.getById(req,res);
};

exports.updatemessage = (req, res) => {
    greetingservices.updatemessage(req,res)
};

exports.deleteID= (req, res) => {
    greetingservices.deleteID(req,res)
}