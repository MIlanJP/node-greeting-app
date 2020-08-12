// Importing DataBase model from model/greeting
const GreetingModel = require("../model/greeting.mdl");

/**
 * It saves the greeting message into the database
 * @param {person} name  Its the greeting message followed by name of the person
 */
exports.saveMessage = (params,welcomeMessage) => {
  console.log("Getting called from services" + params);
  // Took name as closure inside the generateMessage function and saving into the database
  async function generateMessage() {
    /**
     * Creating Object of the greeting Message
     */
    const greetingmessage = new GreetingModel({
      firstname:params.name,
      lastname: params.sname,
      message: welcomeMessage,
    });
    /**
     * Saving the created Object into the database by using save function
     */
    const savedmessage = await greetingmessage.save();
    console.log(savedmessage);
  }

  // Calling the synchronous function above
  generateMessage();
};

/**
 * exporting the function to get all the names present in the data base
 */
exports.getNames =async (res) => {
  /**
   * Calling function which contains feature to get all the greeting
   * messages from the data base.
   */

    await GreetingModel.find({}).select('message')
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
       res.status(500).send("Error Occured while retrieving messages")
        debugger
      });


};

exports.getById=async (req,res)=>{
  const message=await GreetingModel.findById(req.params.id).then(data=>{
    // message=data.message

    res.send({message:data.message});
    console.log(data)
    console.log("Printing from service find by ID")
  }
  ).catch(err=>{
    res.status(500).send("Not able to fetch Messages")
  });
}