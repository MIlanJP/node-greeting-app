const GreetingModel=require('../model/greeting')

exports.saveMessage=(name)=>{
    console.log("Getting called from services"+name)
    async function generateMessage(){
    const greetingmessage=new GreetingModel({
    message:  name
    });
    const savedmessage=await greetingmessage.save();
    console.log(savedmessage)
    }
   
    generateMessage();
}

exports.getNames=()=>{
   async function  getAllNames(){
    
   }
}