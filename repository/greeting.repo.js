// CRUD operations for greeting messages;
const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const dbConfigURL=require('../config/database.config')
const connectionURL=dbConfigURL.url1;
const databaseName=dbConfigURL.database;
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log("Unable to connect to the database");
    }

    console.log("Connection established")
})
