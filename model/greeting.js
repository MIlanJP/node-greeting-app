// Imported mongoose to create schema model for database
const mongoose=require('mongoose');

/**
 * Defining a Schema for Welcomegreeting database
 */
const welcomeMessageSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    }
})

// Creating a Model for Schema
const WelcomeGreeting=mongoose.model("WelcomeGreeting",welcomeMessageSchema);

module.exports=WelcomeGreeting;