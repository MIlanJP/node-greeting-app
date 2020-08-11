
// Importing greeting from services 
const greetingservices=require('../services/greeting.services')

/**
 * this is post Request
 * @param {request Object from http } req  incoming readable request object
 * @param {response Object to http} res  Outgoing writable response object
 *  @param {welcomemesage} Adds Welcome to Node JS when  name added
 */
exports.create=(req,res)=>{
    res.setHeader('Content-Type','application/json')
    const welcomeMessage=`Welcome to Node JS ${req.params.name}`
    greetingservices.saveMessage(welcomeMessage);
    res.send({welcomeMessage})
}


/**
 * this is GET request
 * @param {request Object from http } req  incoming readable request object
 * @param {response Object to http} res  Outgoing writable response object
 */

exports.getnames=(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
console.log("Printing from controller");
 const messages=greetingservices.getNames();

 console.log(messages)
  res.send({messages});
}