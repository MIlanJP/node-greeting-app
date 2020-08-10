// Imported mongoose to create schema model for database
const mongoose=require('mongoose');

const welcomeMessageSchema=new mongoose.Schema({
    message:String
})

const saveOperation